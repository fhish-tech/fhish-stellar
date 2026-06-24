/**
 * Full end-to-end demo on Stellar TestNet: confidential token with REAL FHE.
 *   admin mints 1000 to alice → alice encrypts 250 → confidential transfer to bob → decrypt.
 * Real Soroban txns + real Zama tfhe + signature/ACL-gated decryption. Run: npm run demo
 */
import * as StellarSdk from '@stellar/stellar-sdk'
import { FhishStellarClient } from './stellar-client'
import { loadConfig, configureHttp } from './config'

const { Keypair } = StellarSdk
const u8 = (v: any): Uint8Array => (v instanceof Uint8Array ? v : Uint8Array.from(Buffer.from(v)))

async function main() {
  configureHttp()
  const cfg = loadConfig()
  const client = new FhishStellarClient(cfg)
  const TOK = cfg.tokenId

  console.log('① Gateway: generating real FHE keys (~40s)…')
  client.initFhe()

  const admin = client.keypair(cfg.deployerSecret)
  const alice = Keypair.random()
  const bob = Keypair.random()

  console.log('② Funding alice via Friendbot…')
  await fetch(`https://friendbot.stellar.org?addr=${encodeURIComponent(alice.publicKey())}`)
  await new Promise((r) => setTimeout(r, 3000))

  console.log('③ admin mints 1000 to alice…')
  const m = await client.invoke(TOK, 'mint', [client.addrArg(alice.publicKey()), client.u32Arg(1000)], admin)
  console.log('   ', m.url)

  console.log('④ alice encrypts 250 and confidentially transfers to bob…')
  const amt = client.encrypt(250)
  const t = await client.invoke(
    TOK,
    'transfer',
    [client.addrArg(alice.publicKey()), client.addrArg(bob.publicKey()), client.bytesArg(amt), client.bytesArg(new Uint8Array())],
    alice,
  )
  console.log('   ', t.url)

  const aliceH = u8(await client.read(TOK, 'balance_handle_of', [client.addrArg(alice.publicKey())]))
  const bobH = u8(await client.read(TOK, 'balance_handle_of', [client.addrArg(bob.publicKey())]))
  const aliceBal = await client.decrypt(TOK, 'can_decrypt', aliceH, alice)
  const bobBal = await client.decrypt(TOK, 'can_decrypt', bobH, bob)

  console.log('\n════════ DECRYPTED BALANCES (real FHE on Stellar) ════════')
  console.log(`   alice = ${aliceBal}   (expected 750)`)
  console.log(`   bob   = ${bobBal}   (expected 250)`)
  console.log('══════════════════════════════════════════════════════════')
  if (aliceBal !== 750 || bobBal !== 250) process.exit(1)
  console.log('✅ END-TO-END CONFIDENTIAL TOKEN ON STELLAR (REAL FHE): PASSED')
}

main().catch((e) => {
  console.error('DEMO FAILED:', e)
  process.exit(1)
})
