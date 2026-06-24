#![no_std]
//! ConfidentialToken — an fhEVM-style confidential token on Soroban (the Stellar analogue of the
//! Algorand ConfidentialToken). Balances are ENCRYPTED: each account's balance is a 32-byte FHE
//! handle (the real ciphertext lives off-chain). `transfer` moves value with homomorphic
//! arithmetic and never reveals the amount or balances on-chain. Underflow-safe via min().

use fhe_lib as fhe;
use soroban_sdk::{contract, contractevent, contractimpl, contracttype, Address, Bytes, BytesN, Env, String};

#[contracttype]
#[derive(Clone)]
pub enum DataKey {
    Admin,
    Name,
    Symbol,
    Decimals,
    TotalSupply,
    Balance(Address),
}

#[contractevent(topics = ["mint"])]
pub struct Mint {
    pub to: Address,
    pub amount: u32,
    pub balance: BytesN<32>,
}

#[contractevent(topics = ["transfer"])]
pub struct Transfer {
    pub from: Address,
    pub to: Address,
    pub sent: BytesN<32>,
}

fn balance_of(env: &Env, account: &Address) -> Option<BytesN<32>> {
    env.storage().persistent().get(&DataKey::Balance(account.clone()))
}

#[contract]
pub struct ConfidentialToken;

#[contractimpl]
impl ConfidentialToken {
    pub fn __constructor(env: Env, admin: Address, name: String, symbol: String, decimals: u32) {
        env.storage().instance().set(&DataKey::Admin, &admin);
        env.storage().instance().set(&DataKey::Name, &name);
        env.storage().instance().set(&DataKey::Symbol, &symbol);
        env.storage().instance().set(&DataKey::Decimals, &decimals);
        env.storage().instance().set(&DataKey::TotalSupply, &0u32);
    }

    /// Admin issues `amount` (public) new tokens to `to`, added homomorphically to its balance.
    pub fn mint(env: Env, to: Address, amount: u32) -> BytesN<32> {
        let admin: Address = env.storage().instance().get(&DataKey::Admin).unwrap();
        admin.require_auth();

        let amt = fhe::trivial_encrypt(&env, amount, fhe::T_EUINT32);
        let new_bal = match balance_of(&env, &to) {
            Some(bal) => fhe::add_op(&env, &bal, &amt),
            None => amt,
        };
        env.storage().persistent().set(&DataKey::Balance(to.clone()), &new_bal);
        fhe::grant(&env, &new_bal, &to); // recipient may decrypt their own balance

        let supply: u32 = env.storage().instance().get(&DataKey::TotalSupply).unwrap_or(0);
        env.storage().instance().set(&DataKey::TotalSupply, &supply.checked_add(amount).expect("supply overflow"));

        Mint { to, amount, balance: new_bal.clone() }.publish(&env);
        new_bal
    }

    /// Confidentially transfer an ENCRYPTED amount to `to`.
    /// `enc_amount` is the handle of the encrypted amount (uploaded to the gateway first).
    /// Underflow-safe: actually-sent = min(amount, balance) — you can never send more than you hold.
    pub fn transfer(env: Env, from: Address, to: Address, enc_amount: BytesN<32>, proof: Bytes) -> BytesN<32> {
        from.require_auth();
        let from_bal = balance_of(&env, &from).expect("sender has no balance");

        let amt = fhe::verify_input(&env, &enc_amount, &from, &proof);
        let send = fhe::min_op(&env, &amt, &from_bal);
        let new_from = fhe::sub_op(&env, &from_bal, &send);
        let to_bal = balance_of(&env, &to).unwrap_or_else(|| fhe::trivial_encrypt(&env, 0, fhe::T_EUINT32));
        let new_to = fhe::add_op(&env, &to_bal, &send);

        env.storage().persistent().set(&DataKey::Balance(from.clone()), &new_from);
        env.storage().persistent().set(&DataKey::Balance(to.clone()), &new_to);
        fhe::grant(&env, &new_from, &from);
        fhe::grant(&env, &new_to, &to);
        fhe::grant(&env, &send, &to);

        Transfer { from, to, sent: send.clone() }.publish(&env);
        send
    }

    /// The account's encrypted balance handle (then decrypt off-chain via the gateway).
    pub fn balance_handle_of(env: Env, account: Address) -> BytesN<32> {
        balance_of(&env, &account).expect("no balance")
    }

    pub fn has_balance(env: Env, account: Address) -> bool {
        env.storage().persistent().has(&DataKey::Balance(account))
    }

    /// Whether `account` is permitted (via ACL) to decrypt `handle` — used by the gateway.
    pub fn can_decrypt(env: Env, handle: BytesN<32>, account: Address) -> bool {
        fhe::acl_allowed(&env, &handle, &account)
    }

    pub fn total_supply(env: Env) -> u32 {
        env.storage().instance().get(&DataKey::TotalSupply).unwrap_or(0)
    }
}

#[cfg(test)]
mod test;
