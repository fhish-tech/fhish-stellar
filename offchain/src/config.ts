import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { setGlobalDispatcher, Agent } from 'undici'

/** Disable HTTP keep-alive — long FHE gaps (~40s keygen, ~15s/op) stale idle RPC sockets. */
export function configureHttp(): void {
  setGlobalDispatcher(new Agent({ keepAliveTimeout: 1, keepAliveMaxTimeout: 1, connect: { timeout: 60_000 } }))
}

function findUp(name: string): string {
  let dir = process.cwd()
  for (let i = 0; i < 6; i++) {
    const p = resolve(dir, name)
    if (existsSync(p)) return p
    const parent = resolve(dir, '..')
    if (parent === dir) break
    dir = parent
  }
  return resolve(process.cwd(), name)
}

export interface StellarConfig {
  rpcUrl: string
  networkPassphrase: string
  deployerSecret: string
  deployerAddress: string
  coprocessorId: string
  tokenId: string
}

export function loadConfig(): StellarConfig {
  const env = readFileSync(findUp('.env.testnet'), 'utf8')
  const get = (k: string): string => (env.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1] ?? '').trim()
  return {
    rpcUrl: get('RPC_URL') || 'https://soroban-testnet.stellar.org',
    networkPassphrase: get('NETWORK_PASSPHRASE') || 'Test SDF Network ; September 2015',
    deployerSecret: get('DEPLOYER_SECRET'),
    deployerAddress: get('DEPLOYER_ADDRESS'),
    coprocessorId: get('FHE_COPROCESSOR_ID'),
    tokenId: get('CONFIDENTIAL_TOKEN_ID'),
  }
}
