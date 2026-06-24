/**
 * 10 confidential-dApp examples for fhish on Stellar/Soroban. Each deploys its own contract to
 * TestNet, runs real on-chain calls, and decrypts the result off-chain (real Zama tfhe — no mocks).
 * Add more by appending to EXAMPLES.
 */
import { Harness, contractUrl, type TxnProof, type ContractName } from './harness'

const EUINT32 = 3
const EMPTY = new Uint8Array(0)
const u8 = (v: any): Uint8Array => (v instanceof Uint8Array ? v : Uint8Array.from(Buffer.from(v)))

export interface ExampleResult {
  contractId: string
  contractUrl: string
  txns: TxnProof[]
  outputs: Record<string, string | number>
}
export interface Example {
  id: string
  title: string
  description: string
  contract: ContractName
  run: (h: Harness) => Promise<ExampleResult>
}

export const EXAMPLES: Example[] = [
  {
    id: '01-homomorphic-add',
    title: 'Homomorphic addition (5 + 7)',
    description: 'Encrypt two constants, add the ciphertexts on-chain (symbolic handle) + off-chain (tfhe), decrypt 12.',
    contract: 'FheCoprocessor',
    async run(h) {
      const { contractId: c, proof: dp } = await h.deploy('FheCoprocessor')
      const a = await h.cop(c, 'trivial_encrypt', [h.u32(5), h.u32(EUINT32)], 'trivial_encrypt(5)')
      const b = await h.cop(c, 'trivial_encrypt', [h.u32(7), h.u32(EUINT32)], 'trivial_encrypt(7)')
      const sum = await h.cop(c, 'fhe_add', [h.bytes(u8(a.value)), h.bytes(u8(b.value))], 'fhe_add')
      const out = await h.decrypt(c, 'is_allowed', u8(sum.value), h.deployer)
      return { contractId: c, contractUrl: contractUrl(c), txns: [dp, a.proof, b.proof, sum.proof], outputs: { 'decrypt(5 + 7)': out } }
    },
  },
  {
    id: '02-homomorphic-multiply',
    title: 'Homomorphic multiply (6 × 7) — e.g. price × qty',
    description: 'Multiply two encrypted values; decrypt 42.',
    contract: 'FheCoprocessor',
    async run(h) {
      const { contractId: c, proof: dp } = await h.deploy('FheCoprocessor')
      const a = await h.cop(c, 'trivial_encrypt', [h.u32(6), h.u32(EUINT32)], 'trivial_encrypt(6)')
      const b = await h.cop(c, 'trivial_encrypt', [h.u32(7), h.u32(EUINT32)], 'trivial_encrypt(7)')
      const prod = await h.cop(c, 'fhe_mul', [h.bytes(u8(a.value)), h.bytes(u8(b.value))], 'fhe_mul')
      const out = await h.decrypt(c, 'is_allowed', u8(prod.value), h.deployer)
      return { contractId: c, contractUrl: contractUrl(c), txns: [dp, a.proof, b.proof, prod.proof], outputs: { 'decrypt(6 × 7)': out } }
    },
  },
  {
    id: '03-encrypted-user-input',
    title: 'Real encrypted user input (client-side public-key encryption)',
    description: 'Client encrypts 30 under the gateway public key, uploads it, contract verifies the input handle, then fhe_add(30, 12) = 42.',
    contract: 'FheCoprocessor',
    async run(h) {
      const { contractId: c, proof: dp } = await h.deploy('FheCoprocessor')
      const inputHandle = h.encrypt(30) // real client-side encryption + upload
      const v = await h.cop(c, 'verify_input', [h.bytes(inputHandle), h.bytes(EMPTY), h.u32(EUINT32)], 'verify_input(enc 30)')
      const twelve = await h.cop(c, 'trivial_encrypt', [h.u32(12), h.u32(EUINT32)], 'trivial_encrypt(12)')
      const sum = await h.cop(c, 'fhe_add', [h.bytes(u8(v.value)), h.bytes(u8(twelve.value))], 'fhe_add')
      const out = await h.decrypt(c, 'is_allowed', u8(sum.value), h.deployer)
      return { contractId: c, contractUrl: contractUrl(c), txns: [dp, v.proof, twelve.proof, sum.proof], outputs: { 'decrypt(enc(30) + 12)': out } }
    },
  },
  {
    id: '04-private-aggregator',
    title: 'Confidential aggregation (sum of encrypted inputs)',
    description: 'Sum [10, 20, 30, 40] homomorphically; decrypt 100. Pattern for private analytics / payroll totals.',
    contract: 'FheCoprocessor',
    async run(h) {
      const { contractId: c, proof: dp } = await h.deploy('FheCoprocessor')
      const txns: TxnProof[] = [dp]
      let acc = u8((await pushed(txns, h.cop(c, 'trivial_encrypt', [h.u32(10), h.u32(EUINT32)], 'trivial_encrypt(10)'))).value)
      for (const n of [20, 30, 40]) {
        const e = await pushed(txns, h.cop(c, 'trivial_encrypt', [h.u32(n), h.u32(EUINT32)], `trivial_encrypt(${n})`))
        acc = u8((await pushed(txns, h.cop(c, 'fhe_add', [h.bytes(acc), h.bytes(u8(e.value))], `fhe_add(+${n})`))).value)
      }
      const out = await h.decrypt(c, 'is_allowed', acc, h.deployer)
      return { contractId: c, contractUrl: contractUrl(c), txns, outputs: { 'decrypt(10+20+30+40)': out } }
    },
  },
  {
    id: '05-sealed-bid-highest',
    title: 'Sealed-bid auction — highest encrypted bid wins',
    description: 'Encrypted bids [45, 80, 30]; fhe_max reveals only the winning amount 80.',
    contract: 'FheCoprocessor',
    async run(h) {
      const { contractId: c, proof: dp } = await h.deploy('FheCoprocessor')
      const txns: TxnProof[] = [dp]
      let best = u8((await pushed(txns, h.cop(c, 'trivial_encrypt', [h.u32(45), h.u32(EUINT32)], 'bid(45)'))).value)
      for (const n of [80, 30]) {
        const e = await pushed(txns, h.cop(c, 'trivial_encrypt', [h.u32(n), h.u32(EUINT32)], `bid(${n})`))
        best = u8((await pushed(txns, h.cop(c, 'fhe_max', [h.bytes(best), h.bytes(u8(e.value))], 'fhe_max'))).value)
      }
      const out = await h.decrypt(c, 'is_allowed', best, h.deployer)
      return { contractId: c, contractUrl: contractUrl(c), txns, outputs: { 'winning bid': out } }
    },
  },
  {
    id: '06-lowest-offer',
    title: 'Lowest sealed offer (floor price)',
    description: 'Encrypted offers [45, 80, 30]; fhe_min reveals only 30.',
    contract: 'FheCoprocessor',
    async run(h) {
      const { contractId: c, proof: dp } = await h.deploy('FheCoprocessor')
      const txns: TxnProof[] = [dp]
      let lo = u8((await pushed(txns, h.cop(c, 'trivial_encrypt', [h.u32(45), h.u32(EUINT32)], 'offer(45)'))).value)
      for (const n of [80, 30]) {
        const e = await pushed(txns, h.cop(c, 'trivial_encrypt', [h.u32(n), h.u32(EUINT32)], `offer(${n})`))
        lo = u8((await pushed(txns, h.cop(c, 'fhe_min', [h.bytes(lo), h.bytes(u8(e.value))], 'fhe_min'))).value)
      }
      const out = await h.decrypt(c, 'is_allowed', lo, h.deployer)
      return { contractId: c, contractUrl: contractUrl(c), txns, outputs: { 'lowest offer': out } }
    },
  },
  {
    id: '07-confidential-threshold',
    title: 'Confidential threshold check (100 ≥ 50 ?)',
    description: 'Homomorphic comparison returns an encrypted boolean; decrypt 1 (true). Pattern for "balance ≥ limit?" without revealing the balance.',
    contract: 'FheCoprocessor',
    async run(h) {
      const { contractId: c, proof: dp } = await h.deploy('FheCoprocessor')
      const a = await h.cop(c, 'trivial_encrypt', [h.u32(100), h.u32(EUINT32)], 'trivial_encrypt(100)')
      const b = await h.cop(c, 'trivial_encrypt', [h.u32(50), h.u32(EUINT32)], 'trivial_encrypt(50)')
      const ge = await h.cop(c, 'fhe_ge', [h.bytes(u8(a.value)), h.bytes(u8(b.value))], 'fhe_ge')
      const out = await h.decrypt(c, 'is_allowed', u8(ge.value), h.deployer) // ebool -> 0/1
      return { contractId: c, contractUrl: contractUrl(c), txns: [dp, a.proof, b.proof, ge.proof], outputs: { 'decrypt(100 ≥ 50)': out } }
    },
  },
  {
    id: '08-confidential-token-mint',
    title: 'Confidential token — encrypted mint',
    description: 'Issue 1000 encrypted units; only the holder can decrypt the balance (1000).',
    contract: 'ConfidentialToken',
    async run(h) {
      const ctor = [h.addr(h.deployer.publicKey()), h.str('Demo USD'), h.str('dUSD'), h.u32(6)]
      const { contractId: c, proof: dp } = await h.deploy('ConfidentialToken', ctor)
      const m = await h.call(c, 'mint', [h.addr(h.deployer.publicKey()), h.u32(1000)], 'mint(1000)')
      const balH = u8(await h.read(c, 'balance_handle_of', [h.addr(h.deployer.publicKey())]))
      const bal = await h.decrypt(c, 'can_decrypt', balH, h.deployer)
      return { contractId: c, contractUrl: contractUrl(c), txns: [dp, m.proof], outputs: { 'holder balance': bal } }
    },
  },
  {
    id: '09-confidential-transfer',
    title: 'Confidential token — private transfer',
    description: 'Mint 1000 to alice, transfer an encrypted 250 to bob; decrypt alice 750, bob 250. Amounts never appear on-chain.',
    contract: 'ConfidentialToken',
    async run(h) {
      const alice = h.deployer // the admin holds the minted units
      const bob = h.randomAccount()
      const ctor = [h.addr(alice.publicKey()), h.str('Demo USD'), h.str('dUSD'), h.u32(6)]
      const { contractId: c, proof: dp } = await h.deploy('ConfidentialToken', ctor)
      const m = await h.call(c, 'mint', [h.addr(alice.publicKey()), h.u32(1000)], 'mint(1000 to alice)')
      const amt = h.encrypt(250)
      const t = await h.call(c, 'transfer', [h.addr(alice.publicKey()), h.addr(bob.publicKey()), h.bytes(amt), h.bytes(EMPTY)], 'transfer(enc 250 -> bob)', alice)
      const aliceBal = await h.decrypt(c, 'can_decrypt', u8(await h.read(c, 'balance_handle_of', [h.addr(alice.publicKey())])), alice)
      const bobBal = await h.decrypt(c, 'can_decrypt', u8(await h.read(c, 'balance_handle_of', [h.addr(bob.publicKey())])), bob)
      return { contractId: c, contractUrl: contractUrl(c), txns: [dp, m.proof, t.proof], outputs: { 'alice balance': aliceBal, 'bob balance': bobBal } }
    },
  },
  {
    id: '10-decryption-acl',
    title: 'Per-account decryption ACL',
    description: 'After minting 500 to the holder, the holder decrypts (500) but an unrelated account is denied on-chain.',
    contract: 'ConfidentialToken',
    async run(h) {
      const ctor = [h.addr(h.deployer.publicKey()), h.str('Demo USD'), h.str('dUSD'), h.u32(6)]
      const { contractId: c, proof: dp } = await h.deploy('ConfidentialToken', ctor)
      const m = await h.call(c, 'mint', [h.addr(h.deployer.publicKey()), h.u32(500)], 'mint(500)')
      const balH = u8(await h.read(c, 'balance_handle_of', [h.addr(h.deployer.publicKey())]))
      const owner = await h.decrypt(c, 'can_decrypt', balH, h.deployer)
      let strangerDenied = false
      try {
        await h.decrypt(c, 'can_decrypt', balH, h.randomAccount())
      } catch {
        strangerDenied = true
      }
      return { contractId: c, contractUrl: contractUrl(c), txns: [dp, m.proof], outputs: { 'owner decrypts': owner, 'stranger denied': strangerDenied ? 'yes' : 'NO' } }
    },
  },
]

// helper: await a call, push its proof into `txns`, return the call result
async function pushed(txns: TxnProof[], p: Promise<{ value: any; proof: TxnProof }>): Promise<{ value: any; proof: TxnProof }> {
  const r = await p
  txns.push(r.proof)
  return r
}
