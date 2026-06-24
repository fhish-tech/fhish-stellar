#![cfg(test)]
use crate::{ConfidentialToken, ConfidentialTokenClient};
use soroban_sdk::{testutils::Address as _, Address, Bytes, BytesN, Env, String};

/// A stand-in encrypted-amount handle (euint32 type tag in the last byte).
fn euint32_handle(env: &Env, seed: u8) -> BytesN<32> {
    let mut a = [seed; 32];
    a[31] = 3;
    BytesN::from_array(env, &a)
}

fn setup(env: &Env) -> (ConfidentialTokenClient, Address) {
    let admin = Address::generate(env);
    let name = String::from_str(env, "Demo USD");
    let symbol = String::from_str(env, "dUSD");
    let id = env.register(ConfidentialToken, (admin.clone(), name, symbol, 6u32));
    (ConfidentialTokenClient::new(env, &id), admin)
}

#[test]
fn mint_updates_encrypted_balance() {
    let env = Env::default();
    env.mock_all_auths();
    let (client, _admin) = setup(&env);
    let alice = Address::generate(&env);

    let b1 = client.mint(&alice, &100u32);
    assert!(client.has_balance(&alice));
    assert!(client.can_decrypt(&b1, &alice));
    assert_eq!(client.total_supply(), 100);

    // minting again homomorphically updates the balance handle
    let b2 = client.mint(&alice, &50u32);
    assert_ne!(b1, b2);
    assert_eq!(client.total_supply(), 150);
}

#[test]
fn confidential_transfer_and_acl() {
    let env = Env::default();
    env.mock_all_auths();
    let (client, _admin) = setup(&env);
    let alice = Address::generate(&env);
    let bob = Address::generate(&env);

    client.mint(&alice, &1000u32);
    let amt = euint32_handle(&env, 7); // stand-in encrypted amount
    let _sent = client.transfer(&alice, &bob, &amt, &Bytes::new(&env));

    // bob now has an (encrypted) balance only he can decrypt
    assert!(client.has_balance(&bob));
    let bob_bal = client.balance_handle_of(&bob);
    assert!(client.can_decrypt(&bob_bal, &bob));
    let carol = Address::generate(&env);
    assert!(!client.can_decrypt(&bob_bal, &carol));

    // alice's balance handle changed (now encrypted 1000 - sent)
    let alice_bal = client.balance_handle_of(&alice);
    assert!(client.can_decrypt(&alice_bal, &alice));
}

#[test]
fn transfer_without_balance_fails() {
    let env = Env::default();
    env.mock_all_auths();
    let (client, _admin) = setup(&env);
    let nobody = Address::generate(&env);
    let bob = Address::generate(&env);
    let amt = euint32_handle(&env, 9);
    assert!(client.try_transfer(&nobody, &bob, &amt, &Bytes::new(&env)).is_err());
}

#[test]
fn mint_requires_admin_auth() {
    let env = Env::default();
    env.mock_all_auths();
    let (client, admin) = setup(&env);
    let alice = Address::generate(&env);

    client.mint(&alice, &100u32);
    // the only authorization mint required is the admin's
    let auths = env.auths();
    assert_eq!(auths.len(), 1);
    assert_eq!(auths.get(0).unwrap().0, admin);
}
