/** Decode Soroban contract events from the RPC `getEvents` response (stable across meta versions). */
import * as StellarSdk from '@stellar/stellar-sdk'

const { scValToNative, xdr } = StellarSdk

export interface DecodedEvent {
  name: string
  data: any
}

/** getEvents returns topic/value as parsed xdr.ScVal (or base64 strings) — handle both. */
const dec = (v: any): any => (typeof v === 'string' ? scValToNative(xdr.ScVal.fromXDR(v, 'base64')) : scValToNative(v))

export function decodeEvent(e: any): DecodedEvent {
  const topic = (e.topic ?? e.topicJson ?? []).map(dec)
  return { name: String(topic[0]), data: dec(e.value) }
}
