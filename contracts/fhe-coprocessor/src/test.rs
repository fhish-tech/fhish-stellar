#![cfg(test)]
use crate::{FheCoprocessor, FheCoprocessorClient};
use soroban_sdk::{testutils::Address as _, Address, Env};

fn setup(env: &Env) -> FheCoprocessorClient {
    let id = env.register(FheCoprocessor, ());
    FheCoprocessorClient::new(env, &id)
}

#[test]
fn trivial_add_acl_and_determinism() {
    let env = Env::default();
    env.mock_all_auths();
    let client = setup(&env);
    let caller = Address::generate(&env);

    let h5 = client.trivial_encrypt(&caller, &5u32, &3u32);
    let h7 = client.trivial_encrypt(&caller, &7u32, &3u32);
    assert_ne!(h5, h7);

    // deterministic: same value + type -> same handle (off-chain coprocessor can reproduce)
    let h5b = client.trivial_encrypt(&caller, &5u32, &3u32);
    assert_eq!(h5, h5b);

    let sum = client.fhe_add(&caller, &h5, &h7);
    assert_eq!(client.get_handle_type(&sum), 3); // euint32

    // ACL: the producer is allowed on the result, an unrelated account is not
    assert!(client.is_allowed(&sum, &caller));
    let stranger = Address::generate(&env);
    assert!(!client.is_allowed(&sum, &stranger));
}

#[test]
fn min_max_sub_and_comparison_types() {
    let env = Env::default();
    env.mock_all_auths();
    let client = setup(&env);
    let caller = Address::generate(&env);
    let a = client.trivial_encrypt(&caller, &30u32, &3u32);
    let b = client.trivial_encrypt(&caller, &80u32, &3u32);

    let mn = client.fhe_min(&caller, &a, &b);
    let mx = client.fhe_max(&caller, &a, &b);
    let df = client.fhe_sub(&caller, &b, &a);
    assert_eq!(client.get_handle_type(&mn), 3); // euint32
    assert_eq!(client.get_handle_type(&mx), 3);
    assert_eq!(client.get_handle_type(&df), 3);

    let ge = client.fhe_ge(&caller, &b, &a);
    assert_eq!(client.get_handle_type(&ge), 0); // ebool
}

#[test]
fn fhe_op_denied_without_acl() {
    let env = Env::default();
    env.mock_all_auths();
    let client = setup(&env);
    let owner = Address::generate(&env);
    let h5 = client.trivial_encrypt(&owner, &5u32, &3u32);
    let h7 = client.trivial_encrypt(&owner, &7u32, &3u32);

    // a stranger who was never granted access to the operands cannot operate on them
    let stranger = Address::generate(&env);
    assert!(client.try_fhe_add(&stranger, &h5, &h7).is_err());
}

#[test]
fn delegated_allow_grants_access() {
    let env = Env::default();
    env.mock_all_auths();
    let client = setup(&env);
    let owner = Address::generate(&env);
    let friend = Address::generate(&env);

    let h = client.trivial_encrypt(&owner, &42u32, &3u32);
    assert!(!client.is_allowed(&h, &friend));
    client.allow(&owner, &h, &friend);
    assert!(client.is_allowed(&h, &friend));
}
