# fhish on Stellar (Soroban) — Detailed Plan

Port the **fhish** Fully Homomorphic Encryption module to **Stellar / Soroban**, mirroring the
Algorand build but idiomatic to Soroban (Rust). This folder is **fully separate** from the Algorand
work (`/Volumes/Extreme SSD/Projects/algorand`); nothing is shared at the filesystem level.

## 0. Why this is a clean port

FHE on a chain = **handles on-chain + real `tfhe` math off-chain**. Only the *on-chain* layer is
chain-specific; the **off-chain coprocessor (FHE keys + ciphertext store + tfhe engine) is
chain-agnostic** and is reused as-is. So the work is: (1) rewrite 2 contracts in Rust/Soroban,
(2) swap the relayer/SDK's chain client from `algosdk` → `@stellar/stellar-sdk`.

## 1. Architecture mapping: Algorand AVM → Soroban

| Concern | Algorand (what we built) | Soroban (this port) |
|---|---|---|
| Language | Puya (TS + Python) | **Rust** (`soroban-sdk` 25.x) |
| Encrypted value | 32-byte handle (`bytes`) | `BytesN<32>` |
| Handle math | `op.sha256`, `op.itob` | `env.crypto().sha256(...)`, `u32::to_be_bytes` |
| ACL storage | `BoxMap`, name ≤ 64 B → had to hash `(handle‖acct)` | **typed `persistent` key `Acl(BytesN<32>, Address)`** — no length limit, no hashing needed ✅ |
| Reusable FHE layer | `FheLib` abstract base contract | **`fhe-lib` Rust crate** (plain shared module — cleaner than Puya inheritance) |
| Events | ARC-28 `emit(...)` logs | `#[contractevent]` structs `.publish(&env)` |
| Caller identity | `Txn.sender` (implicit) | explicit `caller: Address` arg + `caller.require_auth()` |
| Op budget | manual `ensureBudget` / OpUp | none — simulation sets resources ✅ |
| Decryption ACL read (off-chain) | algod box read | Soroban RPC `getLedgerEntries` on the `Acl(...)` key |
| Deploy/call client | `algosdk` / algokit-utils | `@stellar/stellar-sdk` + `stellar` CLI |
| Explorer proofs | Lora | Stellar Expert / `stellar.expert` |

Soroban is, if anything, a **better fit**: typed storage keys remove the 64-byte box hack, and there's
no opcode-budget juggling.

## 2. Folder structure

```
fhish-stellar/
├── PLAN.md                      ← this file
├── README.md
├── contracts/                   ← Soroban Rust workspace
│   ├── Cargo.toml               (workspace: fhe-lib, fhe-coprocessor, confidential-token)
│   ├── fhe-lib/                 shared FHE primitives (handle math, ACL, events) — NOT a contract
│   ├── fhe-coprocessor/         standalone FHE system contract
│   └── confidential-token/      fhEVM-style confidential token
├── offchain/                    ← TS: reused FHE gateway + Stellar relayer/SDK
│   ├── vendor/fhish-wasm/       (copied — Zama tfhe-rs, chain-agnostic)
│   ├── src/fhe-engine.ts        (copied from algorand offchain)
│   ├── src/gateway.ts           (copied)
│   ├── src/events.ts            (NEW — decode Soroban contract events)
│   ├── src/relayer.ts           (NEW — Stellar RPC getEvents → materialize)
│   ├── src/client.ts            (NEW — FhishClient over @stellar/stellar-sdk)
│   └── src/demo.ts
├── examples/                    ← 10 confidential-dApp examples (Stellar TestNet)
└── docs/
```

## 3. Contracts

### 3.1 `fhe-lib` (shared crate)
- Constants: type tags (`T_EBOOL=0`, `T_EUINT32=3`), opcodes (`ADD=1 … MIN=11 MAX=12 SELECT=10 TRIVIAL=200`).
- `enum FheKey { Acl(BytesN<32>, Address) }` (persistent storage key).
- Events: `TrivialEncrypt`, `VerifyInput`, `FheOp`, `FheSelect`, `Allow` (`#[contractevent]`).
- Functions (all take `&Env`): `make_handle`, `handle_type`, `grant`, `acl_allowed`,
  `trivial_encrypt`, `verify_input`, `binary_op` + helpers (`add_op`, `sub_op`, `min_op`, …, `ge_op`), `select`.
- `make_handle(pre, type) = sha256(pre)[0..31] ‖ type_byte` → `BytesN<32>` (deterministic; the relayer
  reads the result handle straight from the `FheOp` event, so the formula only needs to be deterministic).

### 3.2 `FheCoprocessor` (contract)
Public methods (each takes `caller: Address` + `require_auth`, grants the result to the caller):
`trivial_encrypt`, `verify_input`, `fhe_add/sub/mul/min/max/eq/ne/lt/le/gt/ge`, `select`, `allow`,
and read-only `is_allowed`, `get_handle_type`. Ops assert the caller is ACL-allowed on operands.

### 3.3 `ConfidentialToken` (contract)
- `__constructor(admin, name, symbol, decimals)`.
- `mint(to, amount)` (admin) → trivial-encrypt + homomorphic add into the encrypted balance.
- `transfer(from, to, enc_amount, proof)` → `send = min(amount, balance)`, `newFrom = balance − send`,
  `newTo = toBal + send`; grants decryption rights; emits `Transfer`. Amounts never on-chain.
- read-only `balance_handle_of`, `has_balance`, `can_decrypt`.
- Storage: `Balance(Address) → BytesN<32>` (persistent), admin/metadata/total_supply (instance).

## 4. Off-chain (reuse + adapt)
- **Reuse unchanged:** `fhe-engine.ts` (Zama tfhe via vendored `fhish-wasm`) + `gateway.ts` (keys,
  ciphertext store, compute, decrypt). Copied into `fhish-stellar/offchain` so the repo is standalone.
- **New `events.ts`:** decode Soroban contract events from RPC `getEvents` (XDR → values).
- **New `relayer.ts`:** poll Stellar RPC `getEvents` for the app's `FheOp`/`TrivialEncrypt` events →
  `materializeEvents` (same logic) into the gateway.
- **New `client.ts`:** `FhishClient` — `encrypt(v)` (public-key encrypt + upload), build/sign/submit
  contract invocations via `@stellar/stellar-sdk` (simulate → assemble → send), `decrypt(handle, signer)`
  (sign + gateway checks the on-chain `Acl(...)` ledger entry).

## 5. Skills used (per skills.stellar.org)
- `stellar-dev:soroban` — contracts, storage, events, testing, security (loaded).
- `stellar-dev:dapp` — `@stellar/stellar-sdk`, tx build/sign/submit, simulation.
- `stellar-dev:data` — RPC `getEvents` / `getLedgerEntries` for the relayer + ACL check.
- `stellar-dev:zk-proofs` — reference for the *alternative* native-ZK confidential-token path (see §8).
- `openzeppelin-skills:setup-stellar-contracts` — toolchain/setup conventions.

## 6. Milestones
1. **M1 — Contracts compile:** workspace + `fhe-lib` + `FheCoprocessor` → `stellar contract build` green. *(this turn)*
2. **M2 — Token + tests:** `ConfidentialToken` + Rust unit tests (`cargo test`) green.
3. **M3 — Off-chain:** Stellar relayer + `FhishClient`; local end-to-end (encrypt → transfer → decrypt).
4. **M4 — TestNet:** deploy both contracts, run 10 examples, capture real txn proofs (Stellar Expert).
5. **M5 — Docs + publish:** Mermaid diagrams, READMEs, publish `fhish-stellar` + `fhish-examples-stellar`.

## 7. TestNet
- Network: `Test SDF Network ; September 2015`; RPC `https://soroban-testnet.stellar.org`; Friendbot for funding.
- Deployer: a fresh `stellar keys generate` identity, Friendbot-funded (free).
- Proofs: contract IDs (`C...`) + tx hashes → `https://stellar.expert/explorer/testnet`.

## 8. Note on the "best architecture" question
Stellar has **native ZK primitives** (BLS12-381 today; BN254/Poseidon proposed — see `zk-proofs` skill).
For *pure private payments*, a ZK shielded-pool token is leaner than FHE (small proofs, no 257 KB
ciphertexts). We port the **FHE** model here (matching the Algorand build) because fhish's value is
**composable confidential computation** (auctions, voting, aggregation), not just payments. A future
`fhish-zk-stellar` could implement the ZK variant natively. The 257 KB ciphertext stays **off-chain**;
on-chain is only the 32-byte handle either way.

## 9. Publishing
Two public repos under `fhish-tech`, `-stellar` suffix:
- `fhish-stellar` — contracts + off-chain SDK + docs.
- `fhish-examples-stellar` — the 10 examples + TestNet proofs + diagrams.
(Same clean-staging + secret-scan process as the Algorand repos.)
