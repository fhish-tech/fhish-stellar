/**
 * Run the fhish examples against Stellar TestNet and capture txn proofs.
 *
 *   npm run examples              # run all 10
 *   RUN=01,02 npm run examples    # run a subset (by id prefix)
 *
 * Writes proofs.json incrementally (resumable). Each example deploys its own contract, so a re-run
 * appends fresh deployments. Hits public TestNet via Soroban RPC — real Zama tfhe off-chain.
 */
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { Harness, acctUrl } from './harness'
import { EXAMPLES } from './examples'

const PROOFS = resolve(process.cwd(), 'proofs.json')

async function main() {
  const filter = process.env.RUN?.split(',').map((s) => s.trim())
  const selected = filter ? EXAMPLES.filter((e) => filter!.some((f) => e.id.startsWith(f) || e.id.includes(f))) : EXAMPLES

  const h = new Harness()
  console.log('TestNet deployer:', h.deployer.publicKey())
  console.log('               :', acctUrl(h.deployer.publicKey()))
  console.log('Loading/generating FHE keys…')
  const t0 = Date.now()
  const { generated } = h.initFhe()
  console.log(`Keys ${generated ? 'generated' : 'loaded'} in ${((Date.now() - t0) / 1000).toFixed(0)}s\n`)

  const all: any = existsSync(PROOFS)
    ? JSON.parse(readFileSync(PROOFS, 'utf8'))
    : { network: 'stellar-testnet', explorer: 'https://stellar.expert/explorer/testnet', examples: {} }
  all.deployer = h.deployer.publicKey()

  for (const ex of selected) {
    process.stdout.write(`▶ ${ex.id} — ${ex.title}\n`)
    const start = Date.now()
    try {
      const res = await ex.run(h)
      all.examples[ex.id] = { title: ex.title, description: ex.description, contract: ex.contract, ...res, status: 'ok' }
      console.log(`  ✓ ${res.contractId.slice(0, 8)}… · ${res.txns.length} txns · ${((Date.now() - start) / 1000).toFixed(0)}s · ${JSON.stringify(res.outputs)}\n`)
    } catch (e) {
      all.examples[ex.id] = { title: ex.title, contract: ex.contract, status: 'error', error: (e as Error).message }
      console.error(`  ✗ ${ex.id} FAILED: ${(e as Error).message}\n`)
    }
    writeFileSync(PROOFS, JSON.stringify(all, null, 2)) // save after each (resumable)
  }

  const ok = Object.values(all.examples).filter((e: any) => e.status === 'ok').length
  console.log(`\nDone: ${ok}/${Object.keys(all.examples).length} examples ok. Proofs -> ${PROOFS}`)
}

main().catch((e) => {
  console.error('runner failed:', e)
  process.exit(1)
})
