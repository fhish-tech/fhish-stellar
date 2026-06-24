/** On-chain ACL check via simulation — `is_allowed`/`can_decrypt` (handle, account) -> bool. */
import * as StellarSdk from '@stellar/stellar-sdk'
import type { StellarConfig } from './config'

const { Contract, TransactionBuilder, Address, nativeToScVal, scValToNative, BASE_FEE } = StellarSdk
const rpc = StellarSdk.rpc

export async function aclAllowed(
  server: InstanceType<typeof rpc.Server>,
  cfg: StellarConfig,
  contractId: string,
  aclMethod: string,
  handle: Uint8Array,
  account: string,
): Promise<boolean> {
  const acc = await server.getAccount(cfg.deployerAddress)
  const c = new Contract(contractId)
  const tx = new TransactionBuilder(acc, { fee: BASE_FEE, networkPassphrase: cfg.networkPassphrase })
    .addOperation(c.call(aclMethod, nativeToScVal(Buffer.from(handle), { type: 'bytes' }), Address.fromString(account).toScVal()))
    .setTimeout(60)
    .build()
  const sim = await server.simulateTransaction(tx)
  if (rpc.Api.isSimulationError(sim)) return false
  const retval = (sim as any).result?.retval
  return retval ? scValToNative(retval) === true : false
}
