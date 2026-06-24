/**
 * FheGateway — holds the FHE secret (client key) and the ciphertext store (handle -> ciphertext).
 *
 * Mirrors fhish-gateway: serves the public key, accepts encrypted-input uploads, materializes
 * computed ciphertexts (driven by the relayer), and decrypts a handle for an ACL-authorized
 * caller. The secret key never leaves this process; clients only ever see the public key.
 */
import {
  initFheEngine,
  initFheEngineWithKeyFile,
  applyBinaryOp,
  encryptTrivial,
  decryptByHandle,
  getPublicKeyBytes,
  handleForCiphertext,
  TYPE,
} from './fhe-engine'

const hx = (u: Uint8Array): string => Buffer.from(u).toString('hex')

export class FheGateway {
  private store = new Map<string, Uint8Array>() // handleHex -> ciphertext bytes

  /** Generate ephemeral keys, or load/persist them from `keyFile` for a stable identity. */
  init(keyFile?: string): { generated: boolean } {
    if (keyFile) return { generated: initFheEngineWithKeyFile(keyFile) }
    initFheEngine()
    return { generated: true }
  }

  publicKey(): Uint8Array {
    return getPublicKeyBytes()
  }

  /** Client uploads a ciphertext; the gateway derives the handle and stores it. */
  uploadCiphertext(ct: Uint8Array, type: number = TYPE.EUINT32): Uint8Array {
    const handle = handleForCiphertext(ct, type)
    this.store.set(hx(handle), ct)
    return handle
  }

  has(handle: Uint8Array | string): boolean {
    return this.store.has(typeof handle === 'string' ? handle : hx(handle))
  }
  getCiphertext(handle: Uint8Array | string): Uint8Array | undefined {
    return this.store.get(typeof handle === 'string' ? handle : hx(handle))
  }
  /** Used by the relayer to persist a materialized result ciphertext under its handle. */
  putCiphertext(handle: Uint8Array | string, ct: Uint8Array): void {
    this.store.set(typeof handle === 'string' ? handle : hx(handle), ct)
  }

  size(): number {
    return this.store.size
  }

  // ---- FHE compute (driven by the relayer as it sees on-chain ops) ----

  /** Materialize a trivially-encrypted constant under its (contract-computed) result handle. */
  materializeTrivial(value: number, resultHandle: Uint8Array | string): void {
    this.putCiphertext(resultHandle, encryptTrivial(value))
  }

  /** Materialize a homomorphic op: result ciphertext = op(operand ciphertexts), stored by handle. */
  materializeOp(opcode: number, lhs: Uint8Array | string, rhs: Uint8Array | string, resultHandle: Uint8Array | string): void {
    const ctL = this.getCiphertext(lhs)
    const ctR = this.getCiphertext(rhs)
    if (!ctL || !ctR) throw new Error('materializeOp: missing operand ciphertext (relayer behind?)')
    this.putCiphertext(resultHandle, applyBinaryOp(opcode, ctL, ctR))
  }

  /**
   * Decrypt a handle for `requester`, gated by an ACL check (the gateway must confirm the
   * requester is permitted on-chain before revealing the plaintext).
   */
  async decryptFor(handle: Uint8Array, authorize: (handle: Uint8Array, requester: string) => Promise<boolean>, requester: string): Promise<number> {
    const ok = await authorize(handle, requester)
    if (!ok) throw new Error(`requester ${requester} is not authorized to decrypt ${hx(handle).slice(0, 12)}…`)
    const ct = this.getCiphertext(handle)
    if (!ct) throw new Error(`ciphertext not materialized for handle ${hx(handle).slice(0, 12)}… (relayer behind?)`)
    return decryptByHandle(handle, ct)
  }
}
