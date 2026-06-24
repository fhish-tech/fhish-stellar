/* tslint:disable */
/* eslint-disable */

export class FhisBool {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    and(other: FhisBool): FhisBool;
    decrypt(client_key: FhisClientKey): boolean;
    static deserialize(buffer: Uint8Array): FhisBool;
    static encrypt(value: boolean, client_key: FhisClientKey): FhisBool;
    static encrypt_with_public_key(value: boolean, public_key: FhisCompactPublicKey): FhisBool;
    mux(then_: FhisBool, else_: FhisBool): FhisBool;
    not(): FhisBool;
    or(other: FhisBool): FhisBool;
    static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FhisBool;
    safe_serialize(serialized_size_limit: bigint): Uint8Array;
    serialize(): Uint8Array;
    xor(other: FhisBool): FhisBool;
}

export class FhisClientKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisClientKey;
    static generate(config: FhisConfig): FhisClientKey;
    static generate_deterministic(config: FhisConfig, seed_hi: bigint, seed_lo: bigint): FhisClientKey;
    static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FhisClientKey;
    safe_serialize(serialized_size_limit: bigint): Uint8Array;
    serialize(): Uint8Array;
}

export class FhisCompactPublicKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisCompactPublicKey;
    static new(client_key: FhisClientKey): FhisCompactPublicKey;
    serialize(): Uint8Array;
}

export class FhisCompressedServerKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    decompress(): FhisServerKey;
    static deserialize(buffer: Uint8Array): FhisCompressedServerKey;
    static new(client_key: FhisClientKey): FhisCompressedServerKey;
    serialize(): Uint8Array;
}

export class FhisConfig {
    free(): void;
    [Symbol.dispose](): void;
    constructor();
}

export class FhisPublicKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisPublicKey;
    static new(client_key: FhisClientKey): FhisPublicKey;
    serialize(): Uint8Array;
}

export class FhisServerKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisServerKey;
    static new(client_key: FhisClientKey): FhisServerKey;
    static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FhisServerKey;
    safe_serialize(serialized_size_limit: bigint): Uint8Array;
    serialize(): Uint8Array;
}

export class FhisShortintClientKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisShortintClientKey;
    encrypt(value: number): FhisShortintUint2;
    static new(config: FhisShortintConfig): FhisShortintClientKey;
    serialize(): Uint8Array;
}

export class FhisShortintCompactCiphertextList {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisShortintCompactCiphertextList;
    expand(): FhisShortintUint2;
    serialize(): Uint8Array;
    size_bytes(): number;
}

export class FhisShortintCompactPublicKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisShortintCompactPublicKey;
    encrypt(value: number): FhisShortintCompactCiphertextList;
    static new(client_key: FhisShortintClientKey): FhisShortintCompactPublicKey;
    serialize(): Uint8Array;
    size_bytes(): number;
}

export class FhisShortintCompressedPublicKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    decompress(): FhisShortintCompactPublicKey;
    static deserialize(buffer: Uint8Array): FhisShortintCompressedPublicKey;
    static new(client_key: FhisShortintClientKey): FhisShortintCompressedPublicKey;
    serialize(): Uint8Array;
}

export class FhisShortintConfig {
    free(): void;
    [Symbol.dispose](): void;
    static carry_1(): FhisShortintConfig;
    static carry_2(): FhisShortintConfig;
    static carry_2_128bit(): FhisShortintConfig;
    static compact_pk(): FhisShortintConfig;
    static compact_pk_v1(): FhisShortintConfig;
    constructor();
    static pbs_ks_small(): FhisShortintConfig;
    static small(): FhisShortintConfig;
}

export class FhisShortintPublicKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static deserialize(buffer: Uint8Array): FhisShortintPublicKey;
    encrypt(value: number): FhisShortintUint2;
    static new(client_key: FhisShortintClientKey): FhisShortintPublicKey;
    serialize(): Uint8Array;
}

export class FhisShortintServerKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    add(ct1: FhisShortintUint2, ct2: FhisShortintUint2): FhisShortintUint2;
    static deserialize(buffer: Uint8Array): FhisShortintServerKey;
    mul(ct1: FhisShortintUint2, ct2: FhisShortintUint2): FhisShortintUint2;
    static new(client_key: FhisShortintClientKey): FhisShortintServerKey;
    serialize(): Uint8Array;
    sub(ct1: FhisShortintUint2, ct2: FhisShortintUint2): FhisShortintUint2;
}

export class FhisShortintUint2 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    decrypt(client_key: FhisShortintClientKey): number;
    decrypt_full(client_key: FhisShortintClientKey): bigint;
    static deserialize(buffer: Uint8Array): FhisShortintUint2;
    static encrypt(value: number, public_key: FhisShortintPublicKey): FhisShortintUint2;
    static encrypt_compact(value: number, compact_public_key: FhisShortintCompactPublicKey): FhisShortintCompactCiphertextList;
    serialize(): Uint8Array;
}

export class FhisUint32 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    add(other: FhisUint32): FhisUint32;
    add_scalar(scalar: number): FhisUint32;
    bitand(other: FhisUint32): FhisUint32;
    bitnot(): FhisUint32;
    bitor(other: FhisUint32): FhisUint32;
    bitxor(other: FhisUint32): FhisUint32;
    decrypt(client_key: FhisClientKey): number;
    static deserialize(buffer: Uint8Array): FhisUint32;
    static encrypt(value: number, client_key: FhisClientKey): FhisUint32;
    static encrypt_trivial(value: number): FhisUint32;
    static encrypt_with_public_key(value: number, public_key: FhisCompactPublicKey): FhisUint32;
    eq(other: FhisUint32): FhisBool;
    ge(other: FhisUint32): FhisBool;
    gt(other: FhisUint32): FhisBool;
    le(other: FhisUint32): FhisBool;
    left_shift(shift: number): FhisUint32;
    lt(other: FhisUint32): FhisBool;
    max(other: FhisUint32): FhisUint32;
    min(other: FhisUint32): FhisUint32;
    mul(other: FhisUint32): FhisUint32;
    mul_scalar(scalar: number): FhisUint32;
    ne(other: FhisUint32): FhisBool;
    right_shift(shift: number): FhisUint32;
    static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FhisUint32;
    safe_serialize(serialized_size_limit: bigint): Uint8Array;
    serialize(): Uint8Array;
    sub(other: FhisUint32): FhisUint32;
    sub_scalar(scalar: number): FhisUint32;
}

export class FhisUint64 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    add(other: FhisUint64): FhisUint64;
    add_scalar(scalar: bigint): FhisUint64;
    bitand(other: FhisUint64): FhisUint64;
    bitor(other: FhisUint64): FhisUint64;
    bitxor(other: FhisUint64): FhisUint64;
    decrypt(client_key: FhisClientKey): bigint;
    static deserialize(buffer: Uint8Array): FhisUint64;
    static encrypt(value: bigint, client_key: FhisClientKey): FhisUint64;
    static encrypt_trivial(value: bigint): FhisUint64;
    static encrypt_with_public_key(value: bigint, public_key: FhisCompactPublicKey): FhisUint64;
    eq(other: FhisUint64): FhisBool;
    ge(other: FhisUint64): FhisBool;
    gt(other: FhisUint64): FhisBool;
    le(other: FhisUint64): FhisBool;
    lt(other: FhisUint64): FhisBool;
    max(other: FhisUint64): FhisUint64;
    min(other: FhisUint64): FhisUint64;
    mul(other: FhisUint64): FhisUint64;
    mul_scalar(scalar: bigint): FhisUint64;
    ne(other: FhisUint64): FhisBool;
    static safe_deserialize(buffer: Uint8Array, serialized_size_limit: bigint): FhisUint64;
    safe_serialize(serialized_size_limit: bigint): Uint8Array;
    serialize(): Uint8Array;
    sub(other: FhisUint64): FhisUint64;
    sub_scalar(scalar: bigint): FhisUint64;
}

export class Shortint {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static decompress_ciphertext(compressed_ciphertext: ShortintCompressedCiphertext): ShortintCiphertext;
    static decrypt(client_key: ShortintClientKey, ct: ShortintCiphertext): bigint;
    static deserialize_ciphertext(buffer: Uint8Array): ShortintCiphertext;
    static deserialize_client_key(buffer: Uint8Array): ShortintClientKey;
    static deserialize_compressed_ciphertext(buffer: Uint8Array): ShortintCompressedCiphertext;
    static deserialize_compressed_public_key(buffer: Uint8Array): ShortintCompressedPublicKey;
    static deserialize_compressed_server_key(buffer: Uint8Array): ShortintCompressedServerKey;
    static deserialize_public_key(buffer: Uint8Array): ShortintPublicKey;
    static encrypt(client_key: ShortintClientKey, message: bigint): ShortintCiphertext;
    static encrypt_compressed(client_key: ShortintClientKey, message: bigint): ShortintCompressedCiphertext;
    static encrypt_with_compressed_public_key(public_key: ShortintCompressedPublicKey, message: bigint): ShortintCiphertext;
    static encrypt_with_public_key(public_key: ShortintPublicKey, message: bigint): ShortintCiphertext;
    static new_client_key(parameters: ShortintParameters): ShortintClientKey;
    static new_client_key_from_seed_and_parameters(seed_high_bytes: bigint, seed_low_bytes: bigint, parameters: ShortintParameters): ShortintClientKey;
    static new_compressed_public_key(client_key: ShortintClientKey): ShortintCompressedPublicKey;
    static new_compressed_server_key(client_key: ShortintClientKey): ShortintCompressedServerKey;
    static new_gaussian_from_std_dev(std_dev: number): ShortintNoiseDistribution;
    static new_parameters(lwe_dimension: number, glwe_dimension: number, polynomial_size: number, lwe_noise_distribution: ShortintNoiseDistribution, glwe_noise_distribution: ShortintNoiseDistribution, pbs_base_log: number, pbs_level: number, ks_base_log: number, ks_level: number, message_modulus: bigint, carry_modulus: bigint, max_noise_level: bigint, log2_p_fail: number, modulus_power_of_2_exponent: number, encryption_key_choice: ShortintEncryptionKeyChoice): ShortintParameters;
    static new_public_key(client_key: ShortintClientKey): ShortintPublicKey;
    static serialize_ciphertext(ciphertext: ShortintCiphertext): Uint8Array;
    static serialize_client_key(client_key: ShortintClientKey): Uint8Array;
    static serialize_compressed_ciphertext(ciphertext: ShortintCompressedCiphertext): Uint8Array;
    static serialize_compressed_public_key(public_key: ShortintCompressedPublicKey): Uint8Array;
    static serialize_compressed_server_key(server_key: ShortintCompressedServerKey): Uint8Array;
    static serialize_public_key(public_key: ShortintPublicKey): Uint8Array;
    static try_new_t_uniform(bound_log2: number): ShortintNoiseDistribution;
}

export class ShortintCiphertext {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class ShortintClientKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class ShortintCompactPublicKeyEncryptionParameters {
    free(): void;
    [Symbol.dispose](): void;
    constructor(name: ShortintCompactPublicKeyEncryptionParametersName);
    static new_parameters(encryption_lwe_dimension: number, encryption_noise_distribution: ShortintNoiseDistribution, message_modulus: bigint, carry_modulus: bigint, modulus_power_of_2_exponent: number, ks_base_log: number, ks_level: number, encryption_key_choice: ShortintEncryptionKeyChoice): ShortintCompactPublicKeyEncryptionParameters;
}

export enum ShortintCompactPublicKeyEncryptionParametersName {
    PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 0,
    V1_1_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 1,
    V1_1_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1 = 2,
    V1_0_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 3,
    V1_0_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1 = 4,
    V0_11_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64 = 5,
    V0_11_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64_ZKV1 = 6,
    V1_2_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 7,
    V1_2_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1 = 8,
    V1_3_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 9,
    V1_3_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1 = 10,
    V1_4_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 11,
    V1_4_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1 = 12,
    V1_5_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 13,
    V1_5_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1 = 14,
    V1_6_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 15,
    V1_6_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1 = 16,
}

export class ShortintCompressedCiphertext {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class ShortintCompressedPublicKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export class ShortintCompressedServerKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export enum ShortintEncryptionKeyChoice {
    Big = 0,
    Small = 1,
}

export class ShortintNoiseDistribution {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export enum ShortintPBSOrder {
    KeyswitchBootstrap = 0,
    BootstrapKeyswitch = 1,
}

export class ShortintParameters {
    free(): void;
    [Symbol.dispose](): void;
    carry_modulus(): bigint;
    encryption_key_choice(): ShortintEncryptionKeyChoice;
    glwe_dimension(): number;
    glwe_noise_distribution(): ShortintNoiseDistribution;
    ks_base_log(): number;
    ks_level(): number;
    lwe_dimension(): number;
    lwe_noise_distribution(): ShortintNoiseDistribution;
    message_modulus(): bigint;
    constructor(name?: ShortintParametersName | null);
    pbs_base_log(): number;
    pbs_level(): number;
    polynomial_size(): number;
    set_carry_modulus(new_value: bigint): void;
    set_encryption_key_choice(new_value: ShortintEncryptionKeyChoice): void;
    set_glwe_dimension(new_value: number): void;
    set_glwe_noise_distribution(new_value: ShortintNoiseDistribution): void;
    set_ks_base_log(new_value: number): void;
    set_ks_level(new_value: number): void;
    set_lwe_dimension(new_value: number): void;
    set_lwe_noise_distribution(new_value: ShortintNoiseDistribution): void;
    set_message_modulus(new_value: bigint): void;
    set_pbs_base_log(new_value: number): void;
    set_pbs_level(new_value: number): void;
    set_polynomial_size(new_value: number): void;
}

export enum ShortintParametersName {
    PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128 = 0,
    V1_1_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 1,
    V1_1_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 2,
    V1_1_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 3,
    V1_1_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 4,
    V1_1_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 5,
    V1_1_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 6,
    V1_1_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 7,
    V1_1_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 8,
    V1_1_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 9,
    V1_1_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 10,
    V1_1_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 11,
    V1_1_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 12,
    V1_1_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 13,
    V1_1_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 14,
    V1_1_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 15,
    V1_1_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 16,
    V1_1_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 17,
    V1_1_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 18,
    V1_1_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 19,
    V1_1_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 20,
    V1_1_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 21,
    V1_1_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 22,
    V1_1_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 23,
    V1_1_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 24,
    V1_1_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 25,
    V1_1_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 26,
    V1_1_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 27,
    V1_1_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 28,
    V1_1_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128 = 29,
    V1_1_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 30,
    V1_1_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 31,
    V1_1_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 32,
    V1_1_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 33,
    V1_1_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 34,
    V1_1_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 35,
    V1_1_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 36,
    V1_1_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128 = 37,
    V1_1_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128 = 38,
    V1_1_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128 = 39,
    V1_1_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128 = 40,
    V1_1_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 41,
    V1_1_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 42,
    V1_1_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 43,
    V1_1_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 44,
    V1_1_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 45,
    V1_1_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 46,
    V1_1_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 47,
    V1_1_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 48,
    V1_1_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 49,
    V1_1_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 50,
    V1_1_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 51,
    V1_1_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 52,
    V1_1_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 53,
    V1_1_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 54,
    V1_1_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 55,
    V1_1_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 56,
    V1_1_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 57,
    V1_1_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 58,
    V1_1_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 59,
    V1_1_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 60,
    V1_1_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 61,
    V1_1_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 62,
    V1_1_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 63,
    V1_1_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 64,
    V1_1_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 65,
    V1_1_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 66,
    V1_1_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 67,
    V1_1_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 68,
    V1_1_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 69,
    V1_1_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 70,
    V1_1_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 71,
    V1_0_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 72,
    V1_0_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 73,
    V1_0_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 74,
    V1_0_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 75,
    V1_0_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 76,
    V1_0_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 77,
    V1_0_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 78,
    V1_0_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 79,
    V1_0_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 80,
    V1_0_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 81,
    V1_0_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 82,
    V1_0_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 83,
    V1_0_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 84,
    V1_0_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 85,
    V1_0_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 86,
    V1_0_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 87,
    V1_0_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 88,
    V1_0_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 89,
    V1_0_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 90,
    V1_0_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 91,
    V1_0_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 92,
    V1_0_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 93,
    V1_0_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 94,
    V1_0_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 95,
    V1_0_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 96,
    V1_0_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 97,
    V1_0_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 98,
    V1_0_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 99,
    V1_0_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128 = 100,
    V1_0_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 101,
    V1_0_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 102,
    V1_0_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 103,
    V1_0_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 104,
    V1_0_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 105,
    V1_0_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 106,
    V1_0_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 107,
    V1_0_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128 = 108,
    V1_0_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128 = 109,
    V1_0_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128 = 110,
    V1_0_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128 = 111,
    V1_0_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 112,
    V1_0_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 113,
    V1_0_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 114,
    V1_0_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 115,
    V1_0_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 116,
    V1_0_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 117,
    V1_0_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 118,
    V1_0_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 119,
    V1_0_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 120,
    V1_0_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 121,
    V1_0_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 122,
    V1_0_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 123,
    V1_0_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 124,
    V1_0_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 125,
    V1_0_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 126,
    V1_0_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 127,
    V1_0_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 128,
    V1_0_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 129,
    V1_0_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 130,
    V1_0_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 131,
    V1_0_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 132,
    V1_0_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 133,
    V1_0_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 134,
    V1_0_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 135,
    V1_0_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 136,
    V1_0_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 137,
    V1_0_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 138,
    V1_0_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 139,
    V1_0_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 140,
    V1_0_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 141,
    V1_0_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 142,
    V0_11_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 143,
    V0_11_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M64 = 144,
    V0_11_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 145,
    V0_11_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M64 = 146,
    V0_11_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M64 = 147,
    V0_11_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 148,
    V0_11_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M64 = 149,
    V0_11_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M64 = 150,
    V0_11_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M64 = 151,
    V0_11_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 152,
    V0_11_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M64 = 153,
    V0_11_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M64 = 154,
    V0_11_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M64 = 155,
    V0_11_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M64 = 156,
    V0_11_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 157,
    V0_11_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M64 = 158,
    V0_11_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M64 = 159,
    V0_11_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M64 = 160,
    V0_11_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M64 = 161,
    V0_11_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M64 = 162,
    V0_11_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 163,
    V0_11_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M64 = 164,
    V0_11_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M64 = 165,
    V0_11_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M64 = 166,
    V0_11_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M64 = 167,
    V0_11_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M64 = 168,
    V0_11_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M64 = 169,
    V0_11_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 170,
    V0_11_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M64 = 171,
    V0_11_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M64 = 172,
    V0_11_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M64 = 173,
    V0_11_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M64 = 174,
    V0_11_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M64 = 175,
    V0_11_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M64 = 176,
    V0_11_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M64 = 177,
    V0_11_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M64 = 178,
    V0_11_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M64 = 179,
    V0_11_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M64 = 180,
    V0_11_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M64 = 181,
    V0_11_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M64 = 182,
    V0_11_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 183,
    V0_11_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 184,
    V0_11_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 185,
    V0_11_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 186,
    V0_11_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 187,
    V0_11_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 188,
    V0_11_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 189,
    V0_11_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 190,
    V0_11_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 191,
    V0_11_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 192,
    V0_11_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 193,
    V0_11_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 194,
    V0_11_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 195,
    V0_11_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 196,
    V0_11_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 197,
    V0_11_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 198,
    V0_11_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 199,
    V0_11_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 200,
    V0_11_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 201,
    V0_11_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 202,
    V0_11_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 203,
    V0_11_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 204,
    V0_11_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 205,
    V0_11_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 206,
    V0_11_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 207,
    V0_11_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 208,
    V0_11_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64 = 209,
    V0_11_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M64 = 210,
    V0_11_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M64 = 211,
    V0_11_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M64 = 212,
    V0_11_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M64 = 213,
    V1_2_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 214,
    V1_2_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 215,
    V1_2_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 216,
    V1_2_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 217,
    V1_2_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 218,
    V1_2_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 219,
    V1_2_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 220,
    V1_2_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 221,
    V1_2_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 222,
    V1_2_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 223,
    V1_2_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 224,
    V1_2_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 225,
    V1_2_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 226,
    V1_2_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 227,
    V1_2_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 228,
    V1_2_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 229,
    V1_2_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 230,
    V1_2_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 231,
    V1_2_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 232,
    V1_2_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 233,
    V1_2_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 234,
    V1_2_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 235,
    V1_2_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 236,
    V1_2_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 237,
    V1_2_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 238,
    V1_2_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 239,
    V1_2_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 240,
    V1_2_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 241,
    V1_2_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128 = 242,
    V1_2_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 243,
    V1_2_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 244,
    V1_2_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 245,
    V1_2_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 246,
    V1_2_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 247,
    V1_2_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 248,
    V1_2_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 249,
    V1_2_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128 = 250,
    V1_2_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128 = 251,
    V1_2_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128 = 252,
    V1_2_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128 = 253,
    V1_2_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 254,
    V1_2_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 255,
    V1_2_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 256,
    V1_2_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 257,
    V1_2_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 258,
    V1_2_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 259,
    V1_2_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 260,
    V1_2_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 261,
    V1_2_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 262,
    V1_2_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 263,
    V1_2_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 264,
    V1_2_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 265,
    V1_2_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 266,
    V1_2_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 267,
    V1_2_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 268,
    V1_2_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 269,
    V1_2_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 270,
    V1_2_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 271,
    V1_2_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 272,
    V1_2_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 273,
    V1_2_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 274,
    V1_2_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 275,
    V1_2_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 276,
    V1_2_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 277,
    V1_2_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 278,
    V1_2_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 279,
    V1_2_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 280,
    V1_2_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 281,
    V1_2_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 282,
    V1_2_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 283,
    V1_2_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 284,
    V1_3_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 285,
    V1_3_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 286,
    V1_3_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 287,
    V1_3_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 288,
    V1_3_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 289,
    V1_3_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 290,
    V1_3_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 291,
    V1_3_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 292,
    V1_3_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 293,
    V1_3_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 294,
    V1_3_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 295,
    V1_3_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 296,
    V1_3_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 297,
    V1_3_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 298,
    V1_3_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 299,
    V1_3_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 300,
    V1_3_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 301,
    V1_3_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 302,
    V1_3_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 303,
    V1_3_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 304,
    V1_3_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 305,
    V1_3_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 306,
    V1_3_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 307,
    V1_3_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 308,
    V1_3_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 309,
    V1_3_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 310,
    V1_3_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 311,
    V1_3_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 312,
    V1_3_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128 = 313,
    V1_3_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 314,
    V1_3_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 315,
    V1_3_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 316,
    V1_3_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 317,
    V1_3_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 318,
    V1_3_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 319,
    V1_3_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 320,
    V1_3_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128 = 321,
    V1_3_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128 = 322,
    V1_3_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128 = 323,
    V1_3_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128 = 324,
    V1_3_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 325,
    V1_3_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 326,
    V1_3_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 327,
    V1_3_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 328,
    V1_3_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 329,
    V1_3_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 330,
    V1_3_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 331,
    V1_3_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 332,
    V1_3_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 333,
    V1_3_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 334,
    V1_3_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 335,
    V1_3_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 336,
    V1_3_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 337,
    V1_3_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 338,
    V1_3_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 339,
    V1_3_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 340,
    V1_3_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 341,
    V1_3_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 342,
    V1_3_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 343,
    V1_3_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 344,
    V1_3_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 345,
    V1_3_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 346,
    V1_3_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 347,
    V1_3_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 348,
    V1_3_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 349,
    V1_3_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 350,
    V1_3_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 351,
    V1_3_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 352,
    V1_3_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 353,
    V1_3_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 354,
    V1_3_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 355,
    V1_4_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 356,
    V1_4_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 357,
    V1_4_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 358,
    V1_4_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 359,
    V1_4_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 360,
    V1_4_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 361,
    V1_4_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 362,
    V1_4_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 363,
    V1_4_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 364,
    V1_4_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 365,
    V1_4_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 366,
    V1_4_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 367,
    V1_4_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 368,
    V1_4_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 369,
    V1_4_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 370,
    V1_4_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 371,
    V1_4_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 372,
    V1_4_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 373,
    V1_4_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 374,
    V1_4_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 375,
    V1_4_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 376,
    V1_4_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 377,
    V1_4_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 378,
    V1_4_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 379,
    V1_4_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 380,
    V1_4_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 381,
    V1_4_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 382,
    V1_4_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 383,
    V1_4_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128 = 384,
    V1_4_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 385,
    V1_4_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 386,
    V1_4_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 387,
    V1_4_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 388,
    V1_4_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 389,
    V1_4_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 390,
    V1_4_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 391,
    V1_4_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128 = 392,
    V1_4_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128 = 393,
    V1_4_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128 = 394,
    V1_4_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128 = 395,
    V1_4_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 396,
    V1_4_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 397,
    V1_4_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 398,
    V1_4_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 399,
    V1_4_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 400,
    V1_4_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 401,
    V1_4_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 402,
    V1_4_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 403,
    V1_4_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 404,
    V1_4_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 405,
    V1_4_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 406,
    V1_4_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 407,
    V1_4_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 408,
    V1_4_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 409,
    V1_4_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 410,
    V1_4_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 411,
    V1_4_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 412,
    V1_4_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 413,
    V1_4_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 414,
    V1_4_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 415,
    V1_4_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 416,
    V1_4_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 417,
    V1_4_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 418,
    V1_4_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 419,
    V1_4_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 420,
    V1_4_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 421,
    V1_4_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 422,
    V1_4_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 423,
    V1_4_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 424,
    V1_4_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 425,
    V1_4_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 426,
    V1_5_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 427,
    V1_5_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 428,
    V1_5_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 429,
    V1_5_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 430,
    V1_5_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 431,
    V1_5_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 432,
    V1_5_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 433,
    V1_5_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 434,
    V1_5_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 435,
    V1_5_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 436,
    V1_5_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 437,
    V1_5_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 438,
    V1_5_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 439,
    V1_5_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 440,
    V1_5_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 441,
    V1_5_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 442,
    V1_5_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 443,
    V1_5_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 444,
    V1_5_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 445,
    V1_5_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 446,
    V1_5_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 447,
    V1_5_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 448,
    V1_5_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 449,
    V1_5_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 450,
    V1_5_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 451,
    V1_5_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 452,
    V1_5_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 453,
    V1_5_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 454,
    V1_5_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128 = 455,
    V1_5_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 456,
    V1_5_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 457,
    V1_5_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 458,
    V1_5_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 459,
    V1_5_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 460,
    V1_5_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 461,
    V1_5_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 462,
    V1_5_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128 = 463,
    V1_5_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128 = 464,
    V1_5_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128 = 465,
    V1_5_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128 = 466,
    V1_5_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 467,
    V1_5_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 468,
    V1_5_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 469,
    V1_5_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 470,
    V1_5_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 471,
    V1_5_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 472,
    V1_5_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 473,
    V1_5_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 474,
    V1_5_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 475,
    V1_5_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 476,
    V1_5_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 477,
    V1_5_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 478,
    V1_5_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 479,
    V1_5_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 480,
    V1_5_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 481,
    V1_5_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 482,
    V1_5_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 483,
    V1_5_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 484,
    V1_5_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 485,
    V1_5_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 486,
    V1_5_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 487,
    V1_5_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 488,
    V1_5_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 489,
    V1_5_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 490,
    V1_5_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 491,
    V1_5_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 492,
    V1_5_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 493,
    V1_5_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 494,
    V1_5_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 495,
    V1_5_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 496,
    V1_5_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 497,
    V1_6_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 498,
    V1_6_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 499,
    V1_6_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 500,
    V1_6_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 501,
    V1_6_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 502,
    V1_6_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 503,
    V1_6_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 504,
    V1_6_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 505,
    V1_6_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 506,
    V1_6_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 507,
    V1_6_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 508,
    V1_6_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 509,
    V1_6_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 510,
    V1_6_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 511,
    V1_6_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 512,
    V1_6_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 513,
    V1_6_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 514,
    V1_6_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 515,
    V1_6_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 516,
    V1_6_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 517,
    V1_6_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 518,
    V1_6_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 519,
    V1_6_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 520,
    V1_6_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 521,
    V1_6_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 522,
    V1_6_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 523,
    V1_6_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 524,
    V1_6_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 525,
    V1_6_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128 = 526,
    V1_6_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128 = 527,
    V1_6_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128 = 528,
    V1_6_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128 = 529,
    V1_6_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128 = 530,
    V1_6_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128 = 531,
    V1_6_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128 = 532,
    V1_6_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128 = 533,
    V1_6_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128 = 534,
    V1_6_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128 = 535,
    V1_6_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128 = 536,
    V1_6_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128 = 537,
    V1_6_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 538,
    V1_6_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 539,
    V1_6_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 540,
    V1_6_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 541,
    V1_6_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 542,
    V1_6_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 543,
    V1_6_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 544,
    V1_6_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 545,
    V1_6_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 546,
    V1_6_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 547,
    V1_6_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 548,
    V1_6_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 549,
    V1_6_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 550,
    V1_6_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 551,
    V1_6_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 552,
    V1_6_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 553,
    V1_6_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 554,
    V1_6_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 555,
    V1_6_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 556,
    V1_6_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 557,
    V1_6_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 558,
    V1_6_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 559,
    V1_6_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 560,
    V1_6_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 561,
    V1_6_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 562,
    V1_6_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 563,
    V1_6_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128 = 564,
    V1_6_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 565,
    V1_6_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 566,
    V1_6_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 567,
    V1_6_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128 = 568,
}

export class ShortintPublicKey {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
}

export function init_panic_hook(): void;

export function main(): void;

export function set_server_key(server_key: FhisServerKey): void;

export function shortint_params_name(param?: ShortintParametersName | null): string;

export function shortint_pke_params_name(param: ShortintCompactPublicKeyEncryptionParametersName): string;
