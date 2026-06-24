/**
 * Relayer — turns the symbolic FHE ops a Soroban contract emitted into REAL ciphertexts.
 *
 * `materializeEvents` replays a batch of decoded contract events (in emission order) by driving the
 * gateway's tfhe compute, writing each result ciphertext back under the exact handle the contract
 * computed. `runRelayer` is the production daemon: it polls Soroban RPC `getEvents` for the watched
 * contracts and materializes their events as they appear. Materialization is idempotent, so
 * re-seeing an event is harmless.
 */
import * as StellarSdk from '@stellar/stellar-sdk'
import { decodeEvent, type DecodedEvent } from './events'
import { FheGateway } from './gateway'

const u8 = (v: any): Uint8Array => (v instanceof Uint8Array ? v : Uint8Array.from(Buffer.from(v)))
const hx = (u: any): string => Buffer.from(u8(u)).toString('hex')

export type MaterializeResult = { materialized: number; skipped: string[] }

/** Replay decoded FheOp / trivial_encrypt events into real ciphertexts in the gateway. */
export function materializeEvents(events: DecodedEvent[], gateway: FheGateway): MaterializeResult {
  let materialized = 0
  const skipped: string[] = []
  for (const e of events) {
    if (e.name === 'trivial_encrypt') {
      gateway.materializeTrivial(Number(e.data.value), u8(e.data.result))
      materialized++
    } else if (e.name === 'verify_input') {
      const ih = u8(e.data.result ?? e.data.input_handle)
      if (!gateway.has(ih)) skipped.push(`verify_input: missing uploaded ciphertext ${hx(ih).slice(0, 12)}…`)
    } else if (e.name === 'fhe_op') {
      try {
        gateway.materializeOp(Number(e.data.opcode), u8(e.data.lhs), u8(e.data.rhs), u8(e.data.result))
        materialized++
      } catch (err) {
        skipped.push((err as Error).message)
      }
    } else if (e.name === 'fhe_select') {
      skipped.push('fhe_select: euint select not exposed by fhish-wasm (contracts use min/max instead)')
    }
    // mint / transfer / allow are app-level signals; nothing to materialize.
  }
  return { materialized, skipped }
}

export interface RelayerOptions {
  server: InstanceType<typeof StellarSdk.rpc.Server>
  contractIds: string[]
  gateway: FheGateway
  /** Ledger to start from (default: ~recent window before now). */
  startLedger?: number
  pollMs?: number
  /** Stop predicate (for tests / graceful shutdown); return true to end the loop. */
  until?: () => boolean
  log?: (msg: string) => void
}

/** Production daemon: poll RPC getEvents for the watched contracts and materialize their events. */
export async function runRelayer(opts: RelayerOptions): Promise<void> {
  const log = opts.log ?? (() => {})
  const { server, gateway } = opts
  let cursor: string | undefined
  let startLedger = opts.startLedger
  if (startLedger === undefined) {
    const latest = await server.getLatestLedger()
    startLedger = Math.max(1, latest.sequence - 60) // ~5 min window
  }
  log(`watching ${opts.contractIds.length} contract(s) from ledger ${startLedger}`)
  while (!(opts.until?.() ?? false)) {
    try {
      const params: any = cursor ? { cursor } : { startLedger }
      params.filters = [{ type: 'contract', contractIds: opts.contractIds }]
      params.limit = 200
      const res: any = await server.getEvents(params)
      const evs: any[] = res.events ?? []
      if (evs.length) {
        const r = materializeEvents(evs.map(decodeEvent), gateway)
        if (r.materialized) log(`materialized ${r.materialized} ciphertext(s) from ${evs.length} event(s)`)
        cursor = res.cursor ?? evs[evs.length - 1].id ?? cursor
      }
    } catch (e) {
      log(`getEvents failed: ${(e as Error).message}`)
    }
    await new Promise((r) => setTimeout(r, opts.pollMs ?? 2000))
  }
}
