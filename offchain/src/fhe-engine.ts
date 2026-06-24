/**
 * Real FHE engine — thin wrapper over the prebuilt `fhish-wasm` (Zama tfhe-rs, nodejs target).
 * This is the ONLY package that exposes homomorphic operators (the official `tfhe` npm does not).
 * Verified working in Node v25 by the spike: encrypt -> homomorphic add -> decrypt == 12.
 *
 * Opcodes/type tags MUST match smart_contracts/fhe_coprocessor/contract.algo.ts.
 */
import * as wasm from 'fhish-wasm'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

export const OP = {
  ADD: 1, SUB: 2, MUL: 3, EQ: 4, NE: 5, LT: 6, LE: 7, GT: 8, GE: 9, SELECT: 10, MIN: 11, MAX: 12, TRIVIAL: 200,
} as const
export const TYPE = { EBOOL: 0, EUINT8: 1, EUINT16: 2, EUINT32: 3, EUINT64: 4 } as const

export type Ciphertext = Uint8Array

let clientKey: any
let serverKey: any
let publicKey: any
let ready = false

/** Generate a fresh keyset (client/server/public) and arm the server key for homomorphic ops. */
export function initFheEngine(): void {
  if (ready) return
  if (typeof (wasm as any).init_panic_hook === 'function') (wasm as any).init_panic_hook()
  const config = new wasm.FhisConfig()
  clientKey = wasm.FhisClientKey.generate(config)
  serverKey = wasm.FhisServerKey.new(clientKey) // ~120 MB — regenerate at boot, never ship
  publicKey = wasm.FhisCompactPublicKey.new(clientKey)
  wasm.set_server_key(serverKey)
  ready = true
}

/** Restore the gateway's secret from a persisted client key (stable across restarts). */
export function initFromClientKey(clientKeyBytes: Uint8Array): void {
  if (typeof (wasm as any).init_panic_hook === 'function') (wasm as any).init_panic_hook()
  clientKey = wasm.FhisClientKey.deserialize(clientKeyBytes)
  serverKey = wasm.FhisServerKey.new(clientKey)
  publicKey = wasm.FhisCompactPublicKey.new(clientKey)
  wasm.set_server_key(serverKey)
  ready = true
}

export function exportClientKey(): Uint8Array {
  return clientKey.serialize()
}

/**
 * Load the FHE secret (client key) from `keyFile`, or generate + persist it on first run.
 * The server key is always regenerated in-memory from the client key (never persisted — it's
 * ~120 MB). Returns true if a NEW key was generated. This is how a real gateway keeps stable
 * decryption identity across restarts.
 */
export function initFheEngineWithKeyFile(keyFile: string): boolean {
  if (existsSync(keyFile)) {
    initFromClientKey(new Uint8Array(readFileSync(keyFile)))
    return false
  }
  initFheEngine()
  mkdirSync(dirname(keyFile), { recursive: true })
  writeFileSync(keyFile, exportClientKey())
  return true
}
export function getPublicKeyBytes(): Uint8Array {
  return publicKey.serialize()
}

// ---- encryption (public-key path is what clients use; they only need the public key) ----
export function encryptValueWithPublicKeyBytes(value: number, pkBytes: Uint8Array): Ciphertext {
  const pk = wasm.FhisCompactPublicKey.deserialize(pkBytes)
  return wasm.FhisUint32.encrypt_with_public_key(value, pk).serialize()
}
export function encryptTrivial(value: number): Ciphertext {
  return wasm.FhisUint32.encrypt_trivial(value).serialize()
}
export function decryptU32(ct: Ciphertext): number {
  return wasm.FhisUint32.deserialize(ct).decrypt(clientKey)
}

/** Apply a homomorphic binary op to two serialized ciphertexts; returns the serialized result. */
export function applyBinaryOp(opcode: number, lhs: Ciphertext, rhs: Ciphertext): Ciphertext {
  const a = wasm.FhisUint32.deserialize(lhs)
  const b = wasm.FhisUint32.deserialize(rhs)
  let r: any
  switch (opcode) {
    case OP.ADD: r = a.add(b); break
    case OP.SUB: r = a.sub(b); break
    case OP.MUL: r = a.mul(b); break
    case OP.MIN: r = a.min(b); break
    case OP.MAX: r = a.max(b); break
    // comparisons return an encrypted boolean (FhisBool); serialize works the same
    case OP.EQ: r = a.eq(b); break
    case OP.NE: r = a.ne(b); break
    case OP.LT: r = a.lt(b); break
    case OP.LE: r = a.le(b); break
    case OP.GT: r = a.gt(b); break
    case OP.GE: r = a.ge(b); break
    default:
      throw new Error(`applyBinaryOp: opcode ${opcode} not materializable (euint select isn't exposed by fhish-wasm).`)
  }
  return r.serialize()
}

export function decryptBool(ct: Ciphertext): boolean {
  return wasm.FhisBool.deserialize(ct).decrypt(clientKey)
}

/** Decrypt by the handle's type tag: ebool (tag 0) -> 0/1, otherwise euint32. */
export function decryptByHandle(handle: Uint8Array, ct: Ciphertext): number {
  return handle[31] === TYPE.EBOOL ? (decryptBool(ct) ? 1 : 0) : decryptU32(ct)
}

/** Handle = sha256(ciphertext)[0:31] ‖ typeByte — matches the contract's handle format. */
export function handleForCiphertext(ct: Ciphertext, type: number): Uint8Array {
  const h = createHash('sha256').update(ct).digest()
  const out = new Uint8Array(32)
  out.set(h.subarray(0, 31))
  out[31] = type
  return out
}

// self-test: `npm run fhe-selftest`
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('FHE engine self-test (real tfhe via fhish-wasm)…')
  const t0 = Date.now()
  initFheEngine()
  console.log(`keygen ok in ${((Date.now() - t0) / 1000).toFixed(1)}s; publicKey ${getPublicKeyBytes().length} bytes`)
  const pk = getPublicKeyBytes()
  const a = encryptValueWithPublicKeyBytes(5, pk)
  const b = encryptValueWithPublicKeyBytes(7, pk)
  console.log('decrypt(5+7)        =', decryptU32(applyBinaryOp(OP.ADD, a, b)))
  console.log('decrypt(min(30,150))=', decryptU32(applyBinaryOp(OP.MIN, encryptTrivial(30), encryptTrivial(150))))
  console.log('decrypt(150-30)     =', decryptU32(applyBinaryOp(OP.SUB, encryptTrivial(150), encryptTrivial(30))))
}
