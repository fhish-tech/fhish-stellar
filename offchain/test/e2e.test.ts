/**
 * Anti-mock tests for the fhish Stellar SDK.
 *
 *  1) The FHE engine is REAL: ~257 KB randomized TFHE ciphertexts, real homomorphic add/min/sub.
 *  2) Full Stellar TestNet end-to-end against the LIVE deployed contracts: mint -> confidential
 *     transfer -> decrypt yields the true homomorphic result (alice 750, bob 250) and the on-chain
 *     ACL really denies a stranger. A mock could not produce these — the values come from real
 *     tfhe over handles produced by real on-chain transactions.
 */
import { describe, it, expect, beforeAll } from 'vitest'
import * as StellarSdk from '@stellar/stellar-sdk'
import { FhishStellarClient } from '../src/stellar-client'
import { loadConfig, configureHttp } from '../src/config'
import { getPublicKeyBytes, encryptValueWithPublicKeyBytes, encryptTrivial, decryptU32, applyBinaryOp, OP } from '../src/fhe-engine'

const { Keypair } = StellarSdk
const u8 = (v: any): Uint8Array => (v instanceof Uint8Array ? v : Uint8Array.from(Buffer.from(v)))

const cfg = loadConfig()
let client: FhishStellarClient

beforeAll(() => {
  configureHttp()
  client = new FhishStellarClient(cfg)
  client.initFhe() // keygen ~40s (loads persisted key if present)
}, 120_000)

describe('FHE engine is real (not mocked)', () => {
  it('produces ~257 KB randomized ciphertexts that decrypt correctly', () => {
    const pk = getPublicKeyBytes()
    const ct1 = encryptValueWithPublicKeyBytes(1_000_000, pk)
    const ct2 = encryptValueWithPublicKeyBytes(1_000_000, pk)
    expect(ct1.length).toBeGreaterThan(200_000) // a real TFHE FheUint32, not a stub
    expect(Buffer.compare(Buffer.from(ct1), Buffer.from(ct2))).not.toBe(0) // probabilistic encryption
    expect(decryptU32(ct1)).toBe(1_000_000)
  })

  it('does real homomorphic add / min / sub', () => {
    const pk = getPublicKeyBytes()
    expect(decryptU32(applyBinaryOp(OP.ADD, encryptValueWithPublicKeyBytes(5, pk), encryptValueWithPublicKeyBytes(7, pk)))).toBe(12)
    expect(decryptU32(applyBinaryOp(OP.MIN, encryptTrivial(30), encryptTrivial(150)))).toBe(30)
    expect(decryptU32(applyBinaryOp(OP.SUB, encryptTrivial(150), encryptTrivial(30)))).toBe(120)
  })
})

describe('Stellar TestNet end-to-end (real chain + real FHE)', () => {
  it('mint -> confidential transfer -> decrypt = alice 750, bob 250; stranger denied', async () => {
    const TOK = cfg.tokenId
    const admin = client.keypair(cfg.deployerSecret)
    const alice = Keypair.random()
    const bob = Keypair.random()
    const stranger = Keypair.random()

    // Fund alice (she must sign the transfer); bob/stranger never need funding.
    const fb = await fetch(`https://friendbot.stellar.org?addr=${encodeURIComponent(alice.publicKey())}`)
    expect(fb.ok).toBe(true)
    await new Promise((r) => setTimeout(r, 3000))

    // Admin mints 1000 to alice (fresh holder) — real TestNet tx.
    const mint = await client.invoke(TOK, 'mint', [client.addrArg(alice.publicKey()), client.u32Arg(1000)], admin)
    expect(mint.hash).toMatch(/^[0-9a-f]{64}$/)

    // Alice encrypts 250 (real tfhe) and confidentially transfers it to bob — real TestNet tx.
    const amt = client.encrypt(250)
    const tr = await client.invoke(
      TOK,
      'transfer',
      [client.addrArg(alice.publicKey()), client.addrArg(bob.publicKey()), client.bytesArg(amt), client.bytesArg(new Uint8Array())],
      alice,
    )
    expect(tr.hash).toMatch(/^[0-9a-f]{64}$/)

    // Read the encrypted balance handles from the live contract, decrypt off-chain.
    const aliceH = u8(await client.read(TOK, 'balance_handle_of', [client.addrArg(alice.publicKey())]))
    const bobH = u8(await client.read(TOK, 'balance_handle_of', [client.addrArg(bob.publicKey())]))

    expect(await client.decrypt(TOK, 'can_decrypt', aliceH, alice)).toBe(750)
    expect(await client.decrypt(TOK, 'can_decrypt', bobH, bob)).toBe(250)

    // The on-chain ACL must deny an unrelated account.
    await expect(client.decrypt(TOK, 'can_decrypt', bobH, stranger)).rejects.toThrow()
  })
})
