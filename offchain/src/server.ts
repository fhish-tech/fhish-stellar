/**
 * fhish coprocessor — the off-chain service (HTTP gateway + relayer daemon in one process).
 *
 *   - holds the FHE keys (persisted) + the ciphertext store, does the real tfhe compute
 *   - GET  /health                -> status
 *   - GET  /public-key            -> the FHE public key (clients encrypt with it)
 *   - POST /ciphertext            -> { ciphertext } upload an input ciphertext, get its handle
 *   - GET  /ciphertext/:handle    -> fetch a materialized ciphertext
 *   - POST /decrypt               -> { handle, requester, signature, contractId, aclMethod } -> plaintext,
 *                                    gated by (a) a valid Ed25519 signature over the handle and
 *                                    (b) the on-chain ACL (is_allowed / can_decrypt).
 *   - background relayer watches CONTRACT_IDS and materializes their FheOp events.
 *
 * Run:  npm run gateway           (first boot ~40s for keygen; reuses KEY_FILE after)
 *   env: GATEWAY_PORT (8790), KEY_FILE (.fhe-keys/coprocessor.key), CONTRACT_IDS (csv; defaults to
 *        FHE_COPROCESSOR_ID,CONFIDENTIAL_TOKEN_ID from .env.testnet)
 */
import 'dotenv/config'
import http from 'node:http'
import * as StellarSdk from '@stellar/stellar-sdk'
import { configureHttp, loadConfig, type StellarConfig } from './config'
import { FheGateway } from './gateway'
import { runRelayer } from './relayer'
import { aclAllowed } from './acl'

const { Keypair } = StellarSdk
const rpc = StellarSdk.rpc

const toHex = (u: Uint8Array): string => '0x' + Buffer.from(u).toString('hex')
const unhex = (s: unknown): Uint8Array => new Uint8Array(Buffer.from(String(s).replace(/^0x/, ''), 'hex'))
const sendJson = (res: http.ServerResponse, code: number, obj: unknown): void => {
  const b = JSON.stringify(obj)
  res.writeHead(code, { 'content-type': 'application/json' })
  res.end(b)
}
async function readBody(req: http.IncomingMessage): Promise<any> {
  const chunks: Buffer[] = []
  for await (const c of req) chunks.push(c as Buffer)
  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {}
}

export interface CoprocessorHandle {
  close: () => Promise<void>
  port: number
  gateway: FheGateway
}

export async function startCoprocessor(opts: { cfg?: StellarConfig; keyFile?: string; port?: number; contractIds?: string[]; log?: (m: string) => void } = {}): Promise<CoprocessorHandle> {
  configureHttp()
  const cfg = opts.cfg ?? loadConfig()
  const log = opts.log ?? ((m: string) => console.log(m))
  const server = new rpc.Server(cfg.rpcUrl)
  const gateway = new FheGateway()
  const keyFile = opts.keyFile ?? process.env.KEY_FILE ?? '.fhe-keys/coprocessor.key'
  log(`loading/generating FHE keys (~40s first run) -> ${keyFile}`)
  const { generated } = gateway.init(keyFile)
  log(`keys ${generated ? 'generated' : 'loaded'}`)

  const watch = (opts.contractIds ?? (process.env.CONTRACT_IDS ?? [cfg.coprocessorId, cfg.tokenId].filter(Boolean).join(',')).split(',')).map((s) => s.trim()).filter(Boolean)

  let stop = false
  if (watch.length) {
    void runRelayer({ server, contractIds: watch, gateway, until: () => stop, log: (m) => log(`[relayer] ${m}`) }).catch((e) => log(`relayer crashed: ${(e as Error).message}`))
  }

  const httpServer = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? '/', 'http://localhost')
      if (req.method === 'GET' && url.pathname === '/health') return sendJson(res, 200, { ok: true, ciphertexts: gateway.size(), watching: watch })
      if (req.method === 'GET' && url.pathname === '/public-key') return sendJson(res, 200, { publicKey: toHex(gateway.publicKey()), scheme: 'tfhe/FheUint32' })
      if (req.method === 'POST' && url.pathname === '/ciphertext') {
        const b = await readBody(req)
        return sendJson(res, 200, { handle: toHex(gateway.uploadCiphertext(unhex(b.ciphertext))) })
      }
      if (req.method === 'GET' && url.pathname.startsWith('/ciphertext/')) {
        const ct = gateway.getCiphertext(url.pathname.split('/').pop()!.replace(/^0x/, ''))
        return ct ? sendJson(res, 200, { ciphertext: toHex(ct) }) : sendJson(res, 404, { error: 'not materialized' })
      }
      if (req.method === 'POST' && url.pathname === '/decrypt') {
        const b = await readBody(req)
        const handle = unhex(b.handle)
        const requester = String(b.requester)
        const signature = unhex(b.signature)
        const contractId = String(b.contractId)
        const aclMethod = String(b.aclMethod ?? 'is_allowed')
        if (!Keypair.fromPublicKey(requester).verify(Buffer.from(handle), Buffer.from(signature))) return sendJson(res, 401, { error: 'bad requester signature' })
        if (!(await aclAllowed(server, cfg, contractId, aclMethod, handle, requester))) return sendJson(res, 403, { error: 'not authorized by on-chain ACL' })
        const plaintext = await gateway.decryptFor(handle, async () => true, requester)
        return sendJson(res, 200, { plaintext })
      }
      sendJson(res, 404, { error: 'not found' })
    } catch (e) {
      sendJson(res, 400, { error: (e as Error).message })
    }
  })

  const port = opts.port ?? Number(process.env.GATEWAY_PORT ?? 8790)
  await new Promise<void>((resolve) => httpServer.listen(port, '127.0.0.1', resolve))
  log(`fhish coprocessor on http://127.0.0.1:${port}`)

  return {
    port,
    gateway,
    close: async () => {
      stop = true
      await new Promise<void>((resolve) => httpServer.close(() => resolve()))
    },
  }
}

// Run as a daemon when invoked directly.
if (import.meta.url === `file://${process.argv[1]}`) {
  startCoprocessor().catch((e) => {
    console.error('coprocessor failed:', e)
    process.exit(1)
  })
}
