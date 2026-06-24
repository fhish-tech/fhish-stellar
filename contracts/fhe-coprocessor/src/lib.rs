#![no_std]
//! FheCoprocessor — standalone FHE system contract for fhish on Soroban. Exposes the raw symbolic
//! FHE ops as contract methods; each is ACL-gated on the caller and grants the result to the caller.
//! The real ciphertext math is materialized off-chain by the relayer that indexes the emitted events.

use fhe_lib as fhe;
use soroban_sdk::{contract, contractimpl, Address, Bytes, BytesN, Env};

#[contract]
pub struct FheCoprocessor;

type Op = fn(&Env, &BytesN<32>, &BytesN<32>) -> BytesN<32>;

fn require_operands(env: &Env, caller: &Address, lhs: &BytesN<32>, rhs: &BytesN<32>) {
    if !(fhe::acl_allowed(env, lhs, caller) && fhe::acl_allowed(env, rhs, caller)) {
        panic!("caller not allowed on operand handle");
    }
}

fn binop(env: &Env, caller: &Address, lhs: &BytesN<32>, rhs: &BytesN<32>, op: Op) -> BytesN<32> {
    require_operands(env, caller, lhs, rhs);
    let r = op(env, lhs, rhs);
    fhe::grant(env, &r, caller);
    r
}

#[contractimpl]
impl FheCoprocessor {
    /// Trivially encrypt a public constant into a handle (Zama `asEuintX(value)`).
    pub fn trivial_encrypt(env: Env, caller: Address, value: u32, ct_type: u32) -> BytesN<32> {
        caller.require_auth();
        let h = fhe::trivial_encrypt(&env, value, ct_type);
        fhe::grant(&env, &h, &caller);
        h
    }

    /// Register an uploaded external ciphertext (Zama `asEuintX(handle, proof)`). Proof pass-through.
    pub fn verify_input(env: Env, caller: Address, input_handle: BytesN<32>, proof: Bytes, _ct_type: u32) -> BytesN<32> {
        caller.require_auth();
        let h = fhe::verify_input(&env, &input_handle, &caller, &proof);
        fhe::grant(&env, &h, &caller);
        h
    }

    pub fn fhe_add(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::add_op)
    }
    pub fn fhe_sub(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::sub_op)
    }
    pub fn fhe_mul(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::mul_op)
    }
    pub fn fhe_min(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::min_op)
    }
    pub fn fhe_max(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::max_op)
    }
    pub fn fhe_eq(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::eq_op)
    }
    pub fn fhe_ne(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::ne_op)
    }
    pub fn fhe_lt(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::lt_op)
    }
    pub fn fhe_le(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::le_op)
    }
    pub fn fhe_gt(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::gt_op)
    }
    pub fn fhe_ge(env: Env, caller: Address, lhs: BytesN<32>, rhs: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        binop(&env, &caller, &lhs, &rhs, fhe::ge_op)
    }

    pub fn select(env: Env, caller: Address, cond: BytesN<32>, if_true: BytesN<32>, if_false: BytesN<32>) -> BytesN<32> {
        caller.require_auth();
        if !(fhe::acl_allowed(&env, &cond, &caller)
            && fhe::acl_allowed(&env, &if_true, &caller)
            && fhe::acl_allowed(&env, &if_false, &caller))
        {
            panic!("caller not allowed on operand handle");
        }
        let r = fhe::select_op(&env, &cond, &if_true, &if_false);
        fhe::grant(&env, &r, &caller);
        r
    }

    /// Grant `account` access to `handle`. Only an already-allowed caller may delegate.
    pub fn allow(env: Env, caller: Address, handle: BytesN<32>, account: Address) {
        caller.require_auth();
        if !fhe::acl_allowed(&env, &handle, &caller) {
            panic!("only an allowed account can delegate access");
        }
        fhe::grant(&env, &handle, &account);
        fhe::Allow { handle, account }.publish(&env);
    }

    pub fn is_allowed(env: Env, handle: BytesN<32>, account: Address) -> bool {
        fhe::acl_allowed(&env, &handle, &account)
    }

    pub fn get_handle_type(_env: Env, handle: BytesN<32>) -> u32 {
        fhe::handle_type(&handle)
    }
}

#[cfg(test)]
mod test;
