/**
 * FhishStellarClient — the fhish SDK for Stellar/Soroban.
 *
 * encrypt(value) -> handle (real tfhe public-key encryption + upload to the gateway), invoke a
 * Soroban contract method (simulate -> assemble -> sign -> send -> poll, then materialize the
 * emitted FheOp events into real ciphertexts), and decrypt a handle for an authorized requester
 * (the requester signs the handle; the gateway verifies the Ed25519 signature AND the on-chain ACL).
 */
import * as StellarSdk from '@stellar/stellar-sdk'
import { FheGateway } from './gateway'
import { encryptValueWithPublicKeyBytes, TYPE } from './fhe-engine'
import { decodeEvent, type DecodedEvent } from './events'
import { materializeEvents } from './relayer'
import { loadConfig, type StellarConfig } from './config'

const { Contract, TransactionBuilder, Keypair, Address, nativeToScVal, scValToNative, BASE_FEE } = StellarSdk
const rpc = StellarSdk.rpc
const EXPLORER = 'https://stellar.expert/explorer/testnet'
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export interface InvokeResult {
  returnValue: any
  hash: string
  url: string
  events: DecodedEvent[]
}

export class FhishStellarClient {
  readonly cfg: StellarConfig
  readonly server: InstanceType<typeof rpc.Server>
  readonly gateway = new FheGateway()

  constructor(cfg: StellarConfig = loadConfig()) {
    this.cfg = cfg
    this.server = new rpc.Server(cfg.rpcUrl)
  }

  initFhe(): { generated: boolean } {
    return this.gateway.init('.fhe-keys/stellar-client.key')
  }
  publicKey(): Uint8Array {
    return this.gateway.publicKey()
  }
  keypair(secret: string): InstanceType<typeof Keypair> {
    return Keypair.fromSecret(secret)
  }

  bytesArg(h: Uint8Array): StellarSdk.xdr.ScVal {
    return nativeToScVal(Buffer.from(h), { type: 'bytes' })
  }
  addrArg(a: string): StellarSdk.xdr.ScVal {
    return Address.fromString(a).toScVal()
  }
  u32Arg(n: number): StellarSdk.xdr.ScVal {
    return nativeToScVal(n, { type: 'u32' })
  }

  /** Encrypt a value under the gateway public key and upload it; returns the input handle. */
  encrypt(value: number): Uint8Array {
    return this.gateway.uploadCiphertext(encryptValueWithPublicKeyBytes(value, this.publicKey()), TYPE.EUINT32)
  }

  /** Build → simulate → sign → send → poll a contract call; materialize its events; decode return. */
  async invoke(contractId: string, method: string, args: StellarSdk.xdr.ScVal[], signer: InstanceType<typeof Keypair>): Promise<InvokeResult> {
    const account = await this.server.getAccount(signer.publicKey())
    const contract = new Contract(contractId)
    let tx = new TransactionBuilder(account, { fee: BASE_FEE, networkPassphrase: this.cfg.networkPassphrase })
      .addOperation(contract.call(method, ...args))
      .setTimeout(60)
      .build()

    const sim = await this.server.simulateTransaction(tx)
    if (rpc.Api.isSimulationError(sim)) throw new Error(`simulate ${method}: ${sim.error}`)
    tx = rpc.assembleTransaction(tx, sim).build()
    tx.sign(signer)

    const sent = await this.server.sendTransaction(tx)
    if (sent.status === 'ERROR') throw new Error(`send ${method}: ${JSON.stringify(sent.errorResult)}`)
    let got = await this.server.getTransaction(sent.hash)
    for (let i = 0; got.status === 'NOT_FOUND' && i < 30; i++) {
      await sleep(1000)
      got = await this.server.getTransaction(sent.hash)
    }
    if (got.status !== 'SUCCESS') throw new Error(`tx ${method}: ${got.status}`)

    const events = await this.fetchEvents(contractId, (got as any).ledger, sent.hash)
    materializeEvents(events, this.gateway)
    const returnValue = (got as any).returnValue ? scValToNative((got as any).returnValue) : undefined
    return { returnValue, hash: sent.hash, url: `${EXPLORER}/tx/${sent.hash}`, events }
  }

  /** Fetch this tx's contract events via RPC getEvents (retry — RPC indexing can lag the tx). */
  private async fetchEvents(contractId: string, ledger: number, txHash: string): Promise<DecodedEvent[]> {
    for (let i = 0; i < 6; i++) {
      const res: any = await this.server.getEvents({ startLedger: ledger, filters: [{ type: 'contract', contractIds: [contractId] }], limit: 200 })
      const mine = (res.events ?? []).filter((e: any) => e.txHash === txHash)
      if (mine.length) return mine.map(decodeEvent)
      await sleep(1000)
    }
    return []
  }

  /** Read-only contract call via simulation (no transaction, no fee). */
  async read(contractId: string, method: string, args: StellarSdk.xdr.ScVal[]): Promise<any> {
    const account = await this.server.getAccount(this.cfg.deployerAddress)
    const contract = new Contract(contractId)
    const tx = new TransactionBuilder(account, { fee: BASE_FEE, networkPassphrase: this.cfg.networkPassphrase })
      .addOperation(contract.call(method, ...args))
      .setTimeout(60)
      .build()
    const sim = await this.server.simulateTransaction(tx)
    if (rpc.Api.isSimulationError(sim)) throw new Error(`read ${method}: ${sim.error}`)
    const retval = (sim as any).result?.retval
    return retval ? scValToNative(retval) : undefined
  }

  /**
   * Decrypt a handle for `requester`: the requester proves identity by signing the handle, the
   * gateway verifies the Ed25519 signature AND the on-chain ACL (`can_decrypt`/`is_allowed`),
   * then decrypts the real ciphertext. `aclMethod` = "can_decrypt" (token) or "is_allowed" (coprocessor).
   */
  async decrypt(contractId: string, aclMethod: string, handle: Uint8Array, requester: InstanceType<typeof Keypair>): Promise<number> {
    const sig = requester.sign(Buffer.from(handle))
    if (!Keypair.fromPublicKey(requester.publicKey()).verify(Buffer.from(handle), sig)) throw new Error('bad requester signature')
    const allowed = await this.read(contractId, aclMethod, [this.bytesArg(handle), this.addrArg(requester.publicKey())])
    if (allowed !== true) throw new Error('on-chain ACL denied')
    return this.gateway.decryptFor(handle, async () => true, requester.publicKey())
  }
}
