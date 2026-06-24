/**
 * TestNet harness for the fhish Stellar examples. Reuses the off-chain SDK (FhishStellarClient =
 * gateway + relayer + tfhe engine) from ../offchain. Each example deploys its OWN fresh Soroban
 * contract (install wasm once, then create-contract per example), runs real on-chain calls
 * (recording tx proofs), materializes the FHE off-chain, and decrypts — gated by signature + ACL.
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { randomBytes } from 'node:crypto'
import * as StellarSdk from '@stellar/stellar-sdk'
import { FhishStellarClient } from '../../offchain/src/stellar-client'
import { loadConfig, configureHttp } from '../../offchain/src/config'

const { Operation, Address, TransactionBuilder, BASE_FEE, hash, scValToNative, Keypair, nativeToScVal } = StellarSdk
const rpc = StellarSdk.rpc
const EXPLORER = 'https://stellar.expert/explorer/testnet'
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const txUrl = (h: string): string => `${EXPLORER}/tx/${h}`
export const contractUrl = (id: string): string => `${EXPLORER}/contract/${id}`
export const acctUrl = (a: string): string => `${EXPLORER}/account/${a}`

export interface TxnProof {
  label: string
  txId: string
  url: string
}
export type ContractName = 'FheCoprocessor' | 'ConfidentialToken'

const WASM: Record<ContractName, string> = {
  FheCoprocessor: resolve(process.cwd(), 'wasm', 'fhe_coprocessor.wasm'),
  ConfidentialToken: resolve(process.cwd(), 'wasm', 'confidential_token.wasm'),
}
// Reuse the persisted gateway keyset from ../offchain so we skip the ~40s keygen.
const KEY_FILE = resolve(process.cwd(), '..', 'offchain', '.fhe-keys', 'stellar-client.key')

export class Harness {
  readonly cfg = loadConfig()
  readonly client: FhishStellarClient
  readonly server: InstanceType<typeof rpc.Server>
  readonly deployer: InstanceType<typeof Keypair>
  private wasmHash: Partial<Record<ContractName, Buffer>> = {}

  constructor() {
    configureHttp()
    this.client = new FhishStellarClient(this.cfg)
    this.server = this.client.server
    this.deployer = Keypair.fromSecret(this.cfg.deployerSecret)
  }

  /** Load (or generate) the gateway FHE keyset, reusing ../offchain's key if present. */
  initFhe(): { generated: boolean } {
    return this.client.gateway.init(KEY_FILE)
  }

  // ── ScVal arg helpers (delegate to the SDK client) ───────────────────────
  addr(a: string): StellarSdk.xdr.ScVal {
    return this.client.addrArg(a)
  }
  bytes(b: Uint8Array): StellarSdk.xdr.ScVal {
    return this.client.bytesArg(b)
  }
  u32(n: number): StellarSdk.xdr.ScVal {
    return this.client.u32Arg(n)
  }
  str(s: string): StellarSdk.xdr.ScVal {
    return nativeToScVal(s, { type: 'string' })
  }

  /** Submit a single-operation tx (simulate → assemble → sign → send → poll). */
  private async submit(op: StellarSdk.xdr.Operation, signer = this.deployer): Promise<{ got: any; hash: string }> {
    const account = await this.server.getAccount(signer.publicKey())
    let tx = new TransactionBuilder(account, { fee: BASE_FEE, networkPassphrase: this.cfg.networkPassphrase })
      .addOperation(op)
      .setTimeout(120)
      .build()
    const sim = await this.server.simulateTransaction(tx)
    if (rpc.Api.isSimulationError(sim)) throw new Error(`simulate: ${sim.error}`)
    tx = rpc.assembleTransaction(tx, sim).build()
    tx.sign(signer)
    const sent = await this.server.sendTransaction(tx)
    if (sent.status === 'ERROR') throw new Error(`send: ${JSON.stringify(sent.errorResult)}`)
    let got: any = await this.server.getTransaction(sent.hash)
    for (let i = 0; got.status === 'NOT_FOUND' && i < 40; i++) {
      await sleep(1000)
      got = await this.server.getTransaction(sent.hash)
    }
    if (got.status !== 'SUCCESS') throw new Error(`tx: ${got.status}`)
    return { got, hash: sent.hash }
  }

  /** Upload the contract wasm once (cached by contract name); returns the wasm hash. */
  private async installWasm(name: ContractName): Promise<Buffer> {
    if (this.wasmHash[name]) return this.wasmHash[name]!
    const wasm = readFileSync(WASM[name])
    await this.submit(Operation.uploadContractWasm({ wasm }))
    const h = hash(wasm)
    this.wasmHash[name] = h
    return h
  }

  /** Deploy a fresh instance of a contract on TestNet; returns its id + a deploy proof. */
  async deploy(name: ContractName, constructorArgs: StellarSdk.xdr.ScVal[] = []): Promise<{ contractId: string; proof: TxnProof }> {
    const wasmHash = await this.installWasm(name)
    const op = await Operation.createCustomContract({
      address: Address.fromString(this.deployer.publicKey()),
      wasmHash,
      salt: randomBytes(32),
      constructorArgs,
    })
    const { got, hash: txHash } = await this.submit(op)
    const contractId: string = scValToNative(got.returnValue)
    return { contractId, proof: { label: `deploy ${name}`, txId: txHash, url: txUrl(txHash) } }
  }

  /** Coprocessor op — auto-prepends caller = deployer (the contract `require_auth`s the caller). */
  async cop(contractId: string, method: string, args: StellarSdk.xdr.ScVal[], label: string): Promise<{ value: any; proof: TxnProof }> {
    return this.call(contractId, method, [this.addr(this.deployer.publicKey()), ...args], label, this.deployer)
  }

  /** Invoke a contract method, materialize its FHE events, return the (decoded) result + proof. */
  async call(contractId: string, method: string, args: StellarSdk.xdr.ScVal[], label: string, signer = this.deployer): Promise<{ value: any; proof: TxnProof }> {
    const r = await this.client.invoke(contractId, method, args, signer)
    return { value: r.returnValue, proof: { label, txId: r.hash, url: r.url } }
  }

  /** Read-only call (simulation, no tx). */
  async read(contractId: string, method: string, args: StellarSdk.xdr.ScVal[]): Promise<any> {
    return this.client.read(contractId, method, args)
  }

  /** Client-side public-key encryption + upload; returns the input handle. */
  encrypt(value: number): Uint8Array {
    return this.client.encrypt(value)
  }

  randomAccount(): InstanceType<typeof Keypair> {
    return Keypair.random()
  }

  /** Decrypt a handle for `signer` (signs the handle; gateway checks signature + on-chain ACL). */
  async decrypt(contractId: string, aclMethod: 'is_allowed' | 'can_decrypt', handle: Uint8Array, signer: InstanceType<typeof Keypair>): Promise<number> {
    return this.client.decrypt(contractId, aclMethod, handle, signer)
  }
}
