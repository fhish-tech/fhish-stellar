/** Inject the TestNet proofs from proofs.json into README.md (between the PROOFS markers). */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const proofs = JSON.parse(readFileSync(resolve(process.cwd(), 'proofs.json'), 'utf8'))
const L: string[] = []
L.push(
  `All deployed on **Stellar TestNet** by \`${proofs.deployer}\` ` +
    `([account](https://stellar.expert/explorer/testnet/account/${proofs.deployer})). Click any id to open Stellar Expert.\n`,
)

for (const [id, ex] of Object.entries<any>(proofs.examples).sort(([a], [b]) => a.localeCompare(b))) {
  L.push(`### ${id} — ${ex.title}`)
  if (ex.status !== 'ok') {
    L.push(`\n> ⚠️ ${ex.error}\n`)
    continue
  }
  L.push(`\n${ex.description}\n`)
  L.push(`- **Contract:** [\`${ex.contractId.slice(0, 10)}…\`](${ex.contractUrl}) · **type:** ${ex.contract}`)
  const outs = Object.entries(ex.outputs)
    .map(([k, v]) => `\`${k} = ${v}\``)
    .join(' · ')
  L.push(`- **Decrypted result:** ${outs}`)
  L.push(`- **Transactions:**`)
  for (const t of ex.txns) L.push(`  - ${t.label} — [\`${t.txId.slice(0, 10)}…\`](${t.url})`)
  L.push('')
}

const readme = resolve(process.cwd(), 'README.md')
const txt = readFileSync(readme, 'utf8').replace(/<!-- PROOFS -->[\s\S]*<!-- \/PROOFS -->/, `<!-- PROOFS -->\n${L.join('\n')}\n<!-- /PROOFS -->`)
writeFileSync(readme, txt)
const ok = Object.values<any>(proofs.examples).filter((e) => e.status === 'ok').length
console.log(`Injected ${ok}/${Object.keys(proofs.examples).length} examples into README.md`)
