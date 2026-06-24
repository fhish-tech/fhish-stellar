/**
 * Integration self-test for the standalone coprocessor (HTTP gateway + relayer daemon).
 *
 * Proves the DECOUPLED architecture works: the on-chain client and the coprocessor are separate —
 * the client only sends transactions; the relayer (inside the coprocessor) independently watches
 * RPC events and materializes the ciphertexts; decryption happens over HTTP, gated by an Ed25519
 * signature + the on-chain ACL. Nothing is shared in-process between the two sides except the chain.
 *
 *   1. start the coprocessor (own keyset, relayer watching the FheCoprocessor contract)
 *   2. client sends trivial_encrypt(5), trivial_encrypt(7), fhe_add on-chain
 *   3. poll the gateway until its relayer has materialized the sum handle
 *   4. POST /decrypt (deployer signs the handle) -> expect 12
 *
 * Run: npm run gateway-selftest
 */
import 'dotenv/config'
import * as StellarSdk from '@stellar/stellar-sdk'
import { configureHttp, loadConfig } from './config'
import { startCoprocessor } from './server'
import { FhishStellarClient } from './stellar-client'

const { Keypair } = StellarSdk
const EUINT32 = 3
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const hx = (u: Uint8Array): string => '0x' + Buffer.from(u).toString('hex')

async function main() {
  configureHttp()
  const cfg = loadConfig()
  const deployer = Keypair.fromSecret(cfg.deployerSecret)
  const COP = cfg.coprocessorId
  const base = (p: string) => `http://127.0.0.1:${cop.port}${p}`

  console.log('① starting coprocessor (gateway + relayer)…')
  // Reuse the persisted client keyset so we skip the ~40s keygen; watch only the FheCoprocessor.
  const cop = await startCoprocessor({ cfg, keyFile: '.fhe-keys/stellar-client.key', port: 8795, contractIds: [COP], log: (m) => console.log('   ', m) })

  try {
    const health = await (await fetch(base('/health'))).json()
    console.log('② /health:', JSON.stringify(health))

    // The client materializes in its OWN gateway, but we will decrypt via the coprocessor's relayer.
    console.log('③ client sends trivial_encrypt(5), trivial_encrypt(7), fhe_add on-chain…')
    const client = new FhishStellarClient(cfg)
    client.gateway.init('.fhe-keys/stellar-client.key') // the client's gateway is a SEPARATE instance/store from the coprocessor's
    const a = await client.invoke(COP, 'trivial_encrypt', [client.addrArg(deployer.publicKey()), client.u32Arg(5), client.u32Arg(EUINT32)], deployer)
    const b = await client.invoke(COP, 'trivial_encrypt', [client.addrArg(deployer.publicKey()), client.u32Arg(7), client.u32Arg(EUINT32)], deployer)
    const sum = await client.invoke(COP, 'fhe_add', [client.addrArg(deployer.publicKey()), client.bytesArg(a.returnValue), client.bytesArg(b.returnValue)], deployer)
    const sumHandle: Uint8Array = sum.returnValue
    console.log('   sum handle:', hx(sumHandle).slice(0, 18), '…', '| tx', sum.url)

    console.log('④ waiting for the coprocessor relayer to materialize it (independently of the client)…')
    let ready = false
    for (let i = 0; i < 30 && !ready; i++) {
      await sleep(2000)
      ready = (await fetch(base(`/ciphertext/${hx(sumHandle)}`))).status === 200
    }
    if (!ready) throw new Error('relayer did not materialize the sum handle in time')
    console.log('   ✓ relayer materialized the ciphertext')

    console.log('⑤ POST /decrypt (deployer signs the handle; gateway checks sig + on-chain ACL)…')
    const signature = deployer.sign(Buffer.from(sumHandle))
    const r = await fetch(base('/decrypt'), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ handle: hx(sumHandle), requester: deployer.publicKey(), signature: hx(signature), contractId: COP, aclMethod: 'is_allowed' }),
    })
    const out = await r.json()
    console.log('   /decrypt ->', JSON.stringify(out))

    // Also prove the ACL gate rejects an unauthorized requester.
    const stranger = Keypair.random()
    const strangerSig = stranger.sign(Buffer.from(sumHandle))
    const denied = await fetch(base('/decrypt'), {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ handle: hx(sumHandle), requester: stranger.publicKey(), signature: hx(strangerSig), contractId: COP, aclMethod: 'is_allowed' }),
    })
    console.log(`⑥ stranger /decrypt -> HTTP ${denied.status} (expect 403)`)

    if (out.plaintext !== 12) throw new Error(`expected 12, got ${out.plaintext}`)
    if (denied.status !== 403) throw new Error(`expected stranger to be denied (403), got ${denied.status}`)
    console.log('\n✅ COPROCESSOR DAEMON + HTTP GATEWAY: PASSED (relayer materialized real FHE; decrypt=12; stranger denied)')
  } finally {
    await cop.close()
  }
}

main().catch((e) => {
  console.error('SELFTEST FAILED:', e)
  process.exit(1)
})
