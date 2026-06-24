#![no_std]
//! fhe-lib — reusable FHE primitive layer for fhish on Soroban (the Stellar analogue of the
//! Algorand `FheLib`). Plain Rust functions over `&Env`: deterministic 32-byte handles, symbolic
//! FHE ops (compute handle + emit event; the real tfhe math is materialized off-chain), and an
//! explicit ACL in persistent storage. Shared by FheCoprocessor and ConfidentialToken.

use soroban_sdk::{contractevent, contracttype, Address, Bytes, BytesN, Env};

// FHE type tags (last byte of every handle, Zama-style)
pub const T_EBOOL: u32 = 0;
pub const T_EUINT32: u32 = 3;

// Operation codes (domain-separate the handle hash + label the FheOp event)
pub const OP_ADD: u32 = 1;
pub const OP_SUB: u32 = 2;
pub const OP_MUL: u32 = 3;
pub const OP_EQ: u32 = 4;
pub const OP_NE: u32 = 5;
pub const OP_LT: u32 = 6;
pub const OP_LE: u32 = 7;
pub const OP_GT: u32 = 8;
pub const OP_GE: u32 = 9;
pub const OP_SELECT: u32 = 10;
pub const OP_MIN: u32 = 11;
pub const OP_MAX: u32 = 12;
pub const OP_TRIVIAL: u32 = 200;

/// Persistent storage key: presence of `Acl(handle, account)` == account may decrypt/use handle.
#[contracttype]
#[derive(Clone)]
pub enum FheKey {
    Acl(BytesN<32>, Address),
}

// ---- ARC-28-equivalent events the off-chain coprocessor / relayer indexes ----
#[contractevent(topics = ["trivial_encrypt"])]
pub struct TrivialEncrypt {
    pub value: u32,
    pub ct_type: u32,
    pub result: BytesN<32>,
}

#[contractevent(topics = ["verify_input"])]
pub struct VerifyInput {
    pub input_handle: BytesN<32>,
    pub caller: Address,
    pub result: BytesN<32>,
}

#[contractevent(topics = ["fhe_op"])]
pub struct FheOp {
    pub opcode: u32,
    pub lhs: BytesN<32>,
    pub rhs: BytesN<32>,
    pub scalar: u32,
    pub result: BytesN<32>,
}

#[contractevent(topics = ["fhe_select"])]
pub struct FheSelect {
    pub cond: BytesN<32>,
    pub if_true: BytesN<32>,
    pub if_false: BytesN<32>,
    pub result: BytesN<32>,
}

#[contractevent(topics = ["allow"])]
pub struct Allow {
    pub handle: BytesN<32>,
    pub account: Address,
}

/// Build a 32-byte handle: 31 bytes of sha256(preimage) + 1 type-tag byte.
pub fn make_handle(env: &Env, preimage: &Bytes, ct_type: u32) -> BytesN<32> {
    let digest = env.crypto().sha256(preimage).to_array();
    let mut out = [0u8; 32];
    out[..31].copy_from_slice(&digest[..31]);
    out[31] = ct_type as u8;
    BytesN::from_array(env, &out)
}

/// Read the FHE type tag from a handle's last byte.
pub fn handle_type(handle: &BytesN<32>) -> u32 {
    handle.to_array()[31] as u32
}

pub fn grant(env: &Env, handle: &BytesN<32>, account: &Address) {
    env.storage()
        .persistent()
        .set(&FheKey::Acl(handle.clone(), account.clone()), &true);
}

pub fn acl_allowed(env: &Env, handle: &BytesN<32>, account: &Address) -> bool {
    env.storage()
        .persistent()
        .has(&FheKey::Acl(handle.clone(), account.clone()))
}

pub fn trivial_encrypt(env: &Env, value: u32, ct_type: u32) -> BytesN<32> {
    let mut pre = Bytes::new(env);
    pre.extend_from_array(&OP_TRIVIAL.to_be_bytes());
    pre.extend_from_array(&value.to_be_bytes());
    pre.extend_from_array(&ct_type.to_be_bytes());
    let h = make_handle(env, &pre, ct_type);
    TrivialEncrypt { value, ct_type, result: h.clone() }.publish(env);
    h
}

pub fn verify_input(env: &Env, input_handle: &BytesN<32>, caller: &Address, _proof: &Bytes) -> BytesN<32> {
    // proof is a pass-through today (like fhish's InputVerifier stub).
    VerifyInput {
        input_handle: input_handle.clone(),
        caller: caller.clone(),
        result: input_handle.clone(),
    }
    .publish(env);
    input_handle.clone()
}

pub fn binary_op(env: &Env, opcode: u32, lhs: &BytesN<32>, rhs: &BytesN<32>, scalar: u32, result_type: u32) -> BytesN<32> {
    let mut pre = Bytes::new(env);
    pre.extend_from_array(&opcode.to_be_bytes());
    pre.extend_from_array(&lhs.to_array());
    pre.extend_from_array(&rhs.to_array());
    pre.extend_from_array(&scalar.to_be_bytes());
    let result = make_handle(env, &pre, result_type);
    FheOp { opcode, lhs: lhs.clone(), rhs: rhs.clone(), scalar, result: result.clone() }.publish(env);
    result
}

pub fn select_op(env: &Env, cond: &BytesN<32>, if_true: &BytesN<32>, if_false: &BytesN<32>) -> BytesN<32> {
    let result_type = handle_type(if_true);
    let mut pre = Bytes::new(env);
    pre.extend_from_array(&OP_SELECT.to_be_bytes());
    pre.extend_from_array(&cond.to_array());
    pre.extend_from_array(&if_true.to_array());
    pre.extend_from_array(&if_false.to_array());
    let result = make_handle(env, &pre, result_type);
    FheSelect { cond: cond.clone(), if_true: if_true.clone(), if_false: if_false.clone(), result: result.clone() }.publish(env);
    result
}

// convenience wrappers (result type inferred from lhs for arithmetic; ebool for comparisons)
pub fn add_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_ADD, a, b, 0, handle_type(a)) }
pub fn sub_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_SUB, a, b, 0, handle_type(a)) }
pub fn mul_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_MUL, a, b, 0, handle_type(a)) }
pub fn min_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_MIN, a, b, 0, handle_type(a)) }
pub fn max_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_MAX, a, b, 0, handle_type(a)) }
pub fn eq_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_EQ, a, b, 0, T_EBOOL) }
pub fn ne_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_NE, a, b, 0, T_EBOOL) }
pub fn lt_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_LT, a, b, 0, T_EBOOL) }
pub fn le_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_LE, a, b, 0, T_EBOOL) }
pub fn gt_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_GT, a, b, 0, T_EBOOL) }
pub fn ge_op(env: &Env, a: &BytesN<32>, b: &BytesN<32>) -> BytesN<32> { binary_op(env, OP_GE, a, b, 0, T_EBOOL) }
