# fhish-stellar — off-chain coprocessor + SDK

The chain-agnostic FHE engine (real Zama `tfhe`), the gateway/relayer, and the
**`FhishStellarClient`** SDK that drives the Soroban contracts. This is where the real ciphertext
math happens — Soroban only stores 32-byte handles + an ACL and emits `FheOp` events.

## Files

| File | Role |
|------|------|
| `src/fhe-engine.ts` | Real Zama `tfhe` (via vendored `fhish-wasm`): keygen, public-key encrypt, trivial-encrypt, homomorphic ops (`add`/`sub`/`mul`/`min`/`max`/compares), decrypt, deterministic `handleForCiphertext`. **Chain-agnostic.** |
| `src/gateway.ts` | `FheGateway`: persistent keyset, ciphertext store, `materializeTrivial`/`materializeOp` (replay an on-chain op into a real ciphertext), `decryptFor` (ACL-gated). |
| `src/events.ts` | Decode Soroban `contractevent`s from the RPC `getEvents` response (stable across TransactionMeta versions). |
| `src/stellar-client.ts` | **`FhishStellarClient`** — `encrypt` (real PK-encrypt + upload), `invoke` (build → simulate → assemble → sign → send → poll → materialize events), `read` (simulate-only), `decrypt` (sign handle → verify Ed25519 → check on-chain ACL → decrypt). |
| `src/config.ts` | Load the gitignored `.env.testnet`; IPv4 + no-keepalive HTTP (long FHE gaps stale sockets). |
| `src/demo.ts` | Full end-to-end showcase: `mint → confidential transfer → decrypt` on TestNet. |
| `src/selftest.ts` | Pure-engine self-test (no chain). |
| `test/e2e.test.ts` | **Anti-mock** suite (below). |

## Run

```bash
npm install
npm run fhe-selftest   # pure FHE engine: add/min/sub over real ciphertexts (no chain)
npm test               # anti-mock vitest suite (real tfhe + live TestNet)
npm run demo           # mint → transfer → decrypt on TestNet, prints alice 750 / bob 250
```

Needs a funded `.env.testnet` (gitignored): `RPC_URL`, `NETWORK_PASSPHRASE`, `DEPLOYER_SECRET`,
`DEPLOYER_ADDRESS`, `FHE_COPROCESSOR_ID`, `CONFIDENTIAL_TOKEN_ID`. The FHE keyset persists in
`.fhe-keys/` (~40 s to generate the first time, then loaded).

## Proving it's not mocked

The test suite is deliberately adversarial about mocking:

1. **The crypto is real** — it asserts ciphertexts are ~257 KB and *randomized* (two encryptions of
   the same value differ), and that real homomorphic `add`/`min`/`sub` decrypt to the right answer.
2. **The chain is real** — the e2e test runs `mint(1000) → transfer(enc 250) → decrypt` against the
   **live** deployed TestNet contracts, then decrypts the on-chain balance handles to **alice 750 /
   bob 250**, and asserts a stranger is **denied** by the on-chain ACL. Those numbers can only be
   produced by real homomorphic compute over handles minted by real transactions.

```
✓ FHE engine is real — ~257KB randomized ciphertexts, real homomorphic add/min/sub
✓ Stellar TestNet e2e — mint → transfer → decrypt = alice 750, bob 250; stranger DENIED
```

## How `invoke` materializes FHE

A contract call returns a 32-byte handle and emits `FheOp` events (`{opcode, lhs, rhs, result}`) or
`trivial_encrypt` events (`{value, ct_type, result}`). After the tx confirms, the client fetches the
tx's events via `getEvents` (filtered by contract + tx hash) and replays each op in the gateway with
real `tfhe`, storing the resulting ciphertext under its handle — so a later `decrypt(handle)` finds a
real ciphertext to decrypt.

> **Honest scope:** a single trusted gateway holds the FHE secret key, input proofs are a
> pass-through, and ops are seconds-long in single-threaded wasm. Production needs threshold KMS, ZK
> input proofs, and a native coprocessor. See the [root README](../README.md).
