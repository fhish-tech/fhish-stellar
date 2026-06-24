/* @ts-self-types="./fhish_wasm.d.ts" */

class FhisBool {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisBool.prototype);
        obj.__wbg_ptr = ptr;
        FhisBoolFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisBoolFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisbool_free(ptr, 0);
    }
    /**
     * @param {FhisBool} other
     * @returns {FhisBool}
     */
    and(other) {
        _assertClass(other, FhisBool);
        const ret = wasm.fhisbool_and(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisClientKey} client_key
     * @returns {boolean}
     */
    decrypt(client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhisbool_decrypt(this.__wbg_ptr, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] !== 0;
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisBool}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisbool_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {boolean} value
     * @param {FhisClientKey} client_key
     * @returns {FhisBool}
     */
    static encrypt(value, client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhisbool_encrypt(value, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {boolean} value
     * @param {FhisCompactPublicKey} public_key
     * @returns {FhisBool}
     */
    static encrypt_with_public_key(value, public_key) {
        _assertClass(public_key, FhisCompactPublicKey);
        const ret = wasm.fhisbool_encrypt_with_public_key(value, public_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisBool} then_
     * @param {FhisBool} else_
     * @returns {FhisBool}
     */
    mux(then_, else_) {
        _assertClass(then_, FhisBool);
        _assertClass(else_, FhisBool);
        const ret = wasm.fhisbool_mux(this.__wbg_ptr, then_.__wbg_ptr, else_.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @returns {FhisBool}
     */
    not() {
        const ret = wasm.fhisbool_not(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisBool} other
     * @returns {FhisBool}
     */
    or(other) {
        _assertClass(other, FhisBool);
        const ret = wasm.fhisbool_or(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @param {bigint} serialized_size_limit
     * @returns {FhisBool}
     */
    static safe_deserialize(buffer, serialized_size_limit) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisbool_safe_deserialize(ptr0, len0, serialized_size_limit);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {bigint} serialized_size_limit
     * @returns {Uint8Array}
     */
    safe_serialize(serialized_size_limit) {
        const ret = wasm.fhisbool_safe_serialize(this.__wbg_ptr, serialized_size_limit);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisbool_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {FhisBool} other
     * @returns {FhisBool}
     */
    xor(other) {
        _assertClass(other, FhisBool);
        const ret = wasm.fhisbool_xor(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
}
if (Symbol.dispose) FhisBool.prototype[Symbol.dispose] = FhisBool.prototype.free;
exports.FhisBool = FhisBool;

class FhisClientKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisClientKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisClientKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisClientKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisclientkey_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisClientKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisclientkey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisClientKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisConfig} config
     * @returns {FhisClientKey}
     */
    static generate(config) {
        _assertClass(config, FhisConfig);
        const ret = wasm.fhisclientkey_generate(config.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisClientKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisConfig} config
     * @param {bigint} seed_hi
     * @param {bigint} seed_lo
     * @returns {FhisClientKey}
     */
    static generate_deterministic(config, seed_hi, seed_lo) {
        _assertClass(config, FhisConfig);
        const ret = wasm.fhisclientkey_generate_deterministic(config.__wbg_ptr, seed_hi, seed_lo);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisClientKey.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @param {bigint} serialized_size_limit
     * @returns {FhisClientKey}
     */
    static safe_deserialize(buffer, serialized_size_limit) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisclientkey_safe_deserialize(ptr0, len0, serialized_size_limit);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisClientKey.__wrap(ret[0]);
    }
    /**
     * @param {bigint} serialized_size_limit
     * @returns {Uint8Array}
     */
    safe_serialize(serialized_size_limit) {
        const ret = wasm.fhisclientkey_safe_serialize(this.__wbg_ptr, serialized_size_limit);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisclientkey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisClientKey.prototype[Symbol.dispose] = FhisClientKey.prototype.free;
exports.FhisClientKey = FhisClientKey;

class FhisCompactPublicKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisCompactPublicKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisCompactPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisCompactPublicKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhiscompactpublickey_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisCompactPublicKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhiscompactpublickey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisCompactPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisClientKey} client_key
     * @returns {FhisCompactPublicKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhiscompactpublickey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisCompactPublicKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhiscompactpublickey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisCompactPublicKey.prototype[Symbol.dispose] = FhisCompactPublicKey.prototype.free;
exports.FhisCompactPublicKey = FhisCompactPublicKey;

class FhisCompressedServerKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisCompressedServerKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisCompressedServerKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisCompressedServerKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhiscompressedserverkey_free(ptr, 0);
    }
    /**
     * @returns {FhisServerKey}
     */
    decompress() {
        const ret = wasm.fhiscompressedserverkey_decompress(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisServerKey.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisCompressedServerKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhiscompressedserverkey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisCompressedServerKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisClientKey} client_key
     * @returns {FhisCompressedServerKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhiscompressedserverkey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisCompressedServerKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhiscompressedserverkey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisCompressedServerKey.prototype[Symbol.dispose] = FhisCompressedServerKey.prototype.free;
exports.FhisCompressedServerKey = FhisCompressedServerKey;

class FhisConfig {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisConfigFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisconfig_free(ptr, 0);
    }
    constructor() {
        const ret = wasm.fhisconfig_default();
        this.__wbg_ptr = ret >>> 0;
        FhisConfigFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
}
if (Symbol.dispose) FhisConfig.prototype[Symbol.dispose] = FhisConfig.prototype.free;
exports.FhisConfig = FhisConfig;

class FhisPublicKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisPublicKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisPublicKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhispublickey_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisPublicKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhispublickey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisClientKey} client_key
     * @returns {FhisPublicKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhispublickey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisPublicKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhispublickey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisPublicKey.prototype[Symbol.dispose] = FhisPublicKey.prototype.free;
exports.FhisPublicKey = FhisPublicKey;

class FhisServerKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisServerKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisServerKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisServerKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisserverkey_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisServerKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisserverkey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisServerKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisClientKey} client_key
     * @returns {FhisServerKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhisserverkey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisServerKey.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @param {bigint} serialized_size_limit
     * @returns {FhisServerKey}
     */
    static safe_deserialize(buffer, serialized_size_limit) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisserverkey_safe_deserialize(ptr0, len0, serialized_size_limit);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisServerKey.__wrap(ret[0]);
    }
    /**
     * @param {bigint} serialized_size_limit
     * @returns {Uint8Array}
     */
    safe_serialize(serialized_size_limit) {
        const ret = wasm.fhisserverkey_safe_serialize(this.__wbg_ptr, serialized_size_limit);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisserverkey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisServerKey.prototype[Symbol.dispose] = FhisServerKey.prototype.free;
exports.FhisServerKey = FhisServerKey;

class FhisShortintClientKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintClientKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintClientKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintClientKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintclientkey_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisShortintClientKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisshortintclientkey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintClientKey.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @returns {FhisShortintUint2}
     */
    encrypt(value) {
        const ret = wasm.fhisshortintclientkey_encrypt(this.__wbg_ptr, value);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintUint2.__wrap(ret[0]);
    }
    /**
     * @param {FhisShortintConfig} config
     * @returns {FhisShortintClientKey}
     */
    static new(config) {
        _assertClass(config, FhisShortintConfig);
        const ret = wasm.fhisshortintclientkey_new(config.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintClientKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisshortintclientkey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisShortintClientKey.prototype[Symbol.dispose] = FhisShortintClientKey.prototype.free;
exports.FhisShortintClientKey = FhisShortintClientKey;

class FhisShortintCompactCiphertextList {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintCompactCiphertextList.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintCompactCiphertextListFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintCompactCiphertextListFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintcompactciphertextlist_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisShortintCompactCiphertextList}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisshortintcompactciphertextlist_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompactCiphertextList.__wrap(ret[0]);
    }
    /**
     * @returns {FhisShortintUint2}
     */
    expand() {
        const ret = wasm.fhisshortintcompactciphertextlist_expand(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintUint2.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisshortintcompactciphertextlist_serialize(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    size_bytes() {
        const ret = wasm.fhisshortintcompactciphertextlist_size_bytes(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) FhisShortintCompactCiphertextList.prototype[Symbol.dispose] = FhisShortintCompactCiphertextList.prototype.free;
exports.FhisShortintCompactCiphertextList = FhisShortintCompactCiphertextList;

class FhisShortintCompactPublicKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintCompactPublicKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintCompactPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintCompactPublicKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintcompactpublickey_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisShortintCompactPublicKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisshortintcompactpublickey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompactPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @returns {FhisShortintCompactCiphertextList}
     */
    encrypt(value) {
        const ret = wasm.fhisshortintcompactpublickey_encrypt(this.__wbg_ptr, value);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompactCiphertextList.__wrap(ret[0]);
    }
    /**
     * @param {FhisShortintClientKey} client_key
     * @returns {FhisShortintCompactPublicKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisShortintClientKey);
        const ret = wasm.fhisshortintcompactpublickey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompactPublicKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisshortintcompactpublickey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {number}
     */
    size_bytes() {
        const ret = wasm.fhisshortintcompactpublickey_size_bytes(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) FhisShortintCompactPublicKey.prototype[Symbol.dispose] = FhisShortintCompactPublicKey.prototype.free;
exports.FhisShortintCompactPublicKey = FhisShortintCompactPublicKey;

class FhisShortintCompressedPublicKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintCompressedPublicKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintCompressedPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintCompressedPublicKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintcompressedpublickey_free(ptr, 0);
    }
    /**
     * @returns {FhisShortintCompactPublicKey}
     */
    decompress() {
        const ret = wasm.fhisshortintcompressedpublickey_decompress(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompactPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisShortintCompressedPublicKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisshortintcompressedpublickey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompressedPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisShortintClientKey} client_key
     * @returns {FhisShortintCompressedPublicKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisShortintClientKey);
        const ret = wasm.fhisshortintcompressedpublickey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompressedPublicKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisshortintcompressedpublickey_serialize(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisShortintCompressedPublicKey.prototype[Symbol.dispose] = FhisShortintCompressedPublicKey.prototype.free;
exports.FhisShortintCompressedPublicKey = FhisShortintCompressedPublicKey;

class FhisShortintConfig {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintConfig.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintConfigFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintConfigFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintconfig_free(ptr, 0);
    }
    /**
     * @returns {FhisShortintConfig}
     */
    static carry_1() {
        const ret = wasm.fhisshortintconfig_carry_1();
        return FhisShortintConfig.__wrap(ret);
    }
    /**
     * @returns {FhisShortintConfig}
     */
    static carry_2() {
        const ret = wasm.fhisshortintconfig_carry_2();
        return FhisShortintConfig.__wrap(ret);
    }
    /**
     * @returns {FhisShortintConfig}
     */
    static carry_2_128bit() {
        const ret = wasm.fhisshortintconfig_carry_2_128bit();
        return FhisShortintConfig.__wrap(ret);
    }
    /**
     * @returns {FhisShortintConfig}
     */
    static compact_pk() {
        const ret = wasm.fhisshortintconfig_compact_pk();
        return FhisShortintConfig.__wrap(ret);
    }
    /**
     * @returns {FhisShortintConfig}
     */
    static compact_pk_v1() {
        const ret = wasm.fhisshortintconfig_compact_pk_v1();
        return FhisShortintConfig.__wrap(ret);
    }
    constructor() {
        const ret = wasm.fhisshortintconfig_default();
        this.__wbg_ptr = ret >>> 0;
        FhisShortintConfigFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {FhisShortintConfig}
     */
    static pbs_ks_small() {
        const ret = wasm.fhisshortintconfig_pbs_ks_small();
        return FhisShortintConfig.__wrap(ret);
    }
    /**
     * @returns {FhisShortintConfig}
     */
    static small() {
        const ret = wasm.fhisshortintconfig_small();
        return FhisShortintConfig.__wrap(ret);
    }
}
if (Symbol.dispose) FhisShortintConfig.prototype[Symbol.dispose] = FhisShortintConfig.prototype.free;
exports.FhisShortintConfig = FhisShortintConfig;

class FhisShortintPublicKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintPublicKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintPublicKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintpublickey_free(ptr, 0);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisShortintPublicKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisshortintpublickey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @returns {FhisShortintUint2}
     */
    encrypt(value) {
        const ret = wasm.fhisshortintpublickey_encrypt(this.__wbg_ptr, value);
        return FhisShortintUint2.__wrap(ret);
    }
    /**
     * @param {FhisShortintClientKey} client_key
     * @returns {FhisShortintPublicKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisShortintClientKey);
        const ret = wasm.fhisshortintpublickey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintPublicKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisshortintpublickey_serialize(this.__wbg_ptr);
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisShortintPublicKey.prototype[Symbol.dispose] = FhisShortintPublicKey.prototype.free;
exports.FhisShortintPublicKey = FhisShortintPublicKey;

class FhisShortintServerKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintServerKey.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintServerKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintServerKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintserverkey_free(ptr, 0);
    }
    /**
     * @param {FhisShortintUint2} ct1
     * @param {FhisShortintUint2} ct2
     * @returns {FhisShortintUint2}
     */
    add(ct1, ct2) {
        _assertClass(ct1, FhisShortintUint2);
        _assertClass(ct2, FhisShortintUint2);
        const ret = wasm.fhisshortintserverkey_add(this.__wbg_ptr, ct1.__wbg_ptr, ct2.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintUint2.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisShortintServerKey}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisshortintserverkey_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintServerKey.__wrap(ret[0]);
    }
    /**
     * @param {FhisShortintUint2} ct1
     * @param {FhisShortintUint2} ct2
     * @returns {FhisShortintUint2}
     */
    mul(ct1, ct2) {
        _assertClass(ct1, FhisShortintUint2);
        _assertClass(ct2, FhisShortintUint2);
        const ret = wasm.fhisshortintserverkey_mul(this.__wbg_ptr, ct1.__wbg_ptr, ct2.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintUint2.__wrap(ret[0]);
    }
    /**
     * @param {FhisShortintClientKey} client_key
     * @returns {FhisShortintServerKey}
     */
    static new(client_key) {
        _assertClass(client_key, FhisShortintClientKey);
        const ret = wasm.fhisshortintserverkey_new(client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintServerKey.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisshortintserverkey_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {FhisShortintUint2} ct1
     * @param {FhisShortintUint2} ct2
     * @returns {FhisShortintUint2}
     */
    sub(ct1, ct2) {
        _assertClass(ct1, FhisShortintUint2);
        _assertClass(ct2, FhisShortintUint2);
        const ret = wasm.fhisshortintserverkey_sub(this.__wbg_ptr, ct1.__wbg_ptr, ct2.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintUint2.__wrap(ret[0]);
    }
}
if (Symbol.dispose) FhisShortintServerKey.prototype[Symbol.dispose] = FhisShortintServerKey.prototype.free;
exports.FhisShortintServerKey = FhisShortintServerKey;

class FhisShortintUint2 {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisShortintUint2.prototype);
        obj.__wbg_ptr = ptr;
        FhisShortintUint2Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisShortintUint2Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisshortintuint2_free(ptr, 0);
    }
    /**
     * @param {FhisShortintClientKey} client_key
     * @returns {number}
     */
    decrypt(client_key) {
        _assertClass(client_key, FhisShortintClientKey);
        const ret = wasm.fhisshortintuint2_decrypt(this.__wbg_ptr, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0];
    }
    /**
     * @param {FhisShortintClientKey} client_key
     * @returns {bigint}
     */
    decrypt_full(client_key) {
        _assertClass(client_key, FhisShortintClientKey);
        const ret = wasm.fhisshortintuint2_decrypt_full(this.__wbg_ptr, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return BigInt.asUintN(64, ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisShortintUint2}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisshortintuint2_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintUint2.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @param {FhisShortintPublicKey} public_key
     * @returns {FhisShortintUint2}
     */
    static encrypt(value, public_key) {
        _assertClass(public_key, FhisShortintPublicKey);
        const ret = wasm.fhisshortintuint2_encrypt(value, public_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintUint2.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @param {FhisShortintCompactPublicKey} compact_public_key
     * @returns {FhisShortintCompactCiphertextList}
     */
    static encrypt_compact(value, compact_public_key) {
        _assertClass(compact_public_key, FhisShortintCompactPublicKey);
        const ret = wasm.fhisshortintuint2_encrypt_compact(value, compact_public_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisShortintCompactCiphertextList.__wrap(ret[0]);
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisshortintuint2_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
}
if (Symbol.dispose) FhisShortintUint2.prototype[Symbol.dispose] = FhisShortintUint2.prototype.free;
exports.FhisShortintUint2 = FhisShortintUint2;

class FhisUint32 {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisUint32.prototype);
        obj.__wbg_ptr = ptr;
        FhisUint32Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisUint32Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisuint32_free(ptr, 0);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    add(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_add(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {number} scalar
     * @returns {FhisUint32}
     */
    add_scalar(scalar) {
        const ret = wasm.fhisuint32_add_scalar(this.__wbg_ptr, scalar);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    bitand(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_bitand(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @returns {FhisUint32}
     */
    bitnot() {
        const ret = wasm.fhisuint32_bitnot(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    bitor(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_bitor(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    bitxor(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_bitxor(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisClientKey} client_key
     * @returns {number}
     */
    decrypt(client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhisuint32_decrypt(this.__wbg_ptr, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] >>> 0;
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisUint32}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisuint32_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @param {FhisClientKey} client_key
     * @returns {FhisUint32}
     */
    static encrypt(value, client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhisuint32_encrypt(value, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @returns {FhisUint32}
     */
    static encrypt_trivial(value) {
        const ret = wasm.fhisuint32_encrypt_trivial(value);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {number} value
     * @param {FhisCompactPublicKey} public_key
     * @returns {FhisUint32}
     */
    static encrypt_with_public_key(value, public_key) {
        _assertClass(public_key, FhisCompactPublicKey);
        const ret = wasm.fhisuint32_encrypt_with_public_key(value, public_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisBool}
     */
    eq(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_eq(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisBool}
     */
    ge(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_ge(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisBool}
     */
    gt(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_gt(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisBool}
     */
    le(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_le(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {number} shift
     * @returns {FhisUint32}
     */
    left_shift(shift) {
        const ret = wasm.fhisuint32_left_shift(this.__wbg_ptr, shift);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisBool}
     */
    lt(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_lt(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    max(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_max(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    min(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_min(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    mul(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_mul(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {number} scalar
     * @returns {FhisUint32}
     */
    mul_scalar(scalar) {
        const ret = wasm.fhisuint32_mul_scalar(this.__wbg_ptr, scalar);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisBool}
     */
    ne(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_ne(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {number} shift
     * @returns {FhisUint32}
     */
    right_shift(shift) {
        const ret = wasm.fhisuint32_right_shift(this.__wbg_ptr, shift);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @param {bigint} serialized_size_limit
     * @returns {FhisUint32}
     */
    static safe_deserialize(buffer, serialized_size_limit) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisuint32_safe_deserialize(ptr0, len0, serialized_size_limit);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {bigint} serialized_size_limit
     * @returns {Uint8Array}
     */
    safe_serialize(serialized_size_limit) {
        const ret = wasm.fhisuint32_safe_serialize(this.__wbg_ptr, serialized_size_limit);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisuint32_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {FhisUint32} other
     * @returns {FhisUint32}
     */
    sub(other) {
        _assertClass(other, FhisUint32);
        const ret = wasm.fhisuint32_sub(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
    /**
     * @param {number} scalar
     * @returns {FhisUint32}
     */
    sub_scalar(scalar) {
        const ret = wasm.fhisuint32_sub_scalar(this.__wbg_ptr, scalar);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint32.__wrap(ret[0]);
    }
}
if (Symbol.dispose) FhisUint32.prototype[Symbol.dispose] = FhisUint32.prototype.free;
exports.FhisUint32 = FhisUint32;

class FhisUint64 {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(FhisUint64.prototype);
        obj.__wbg_ptr = ptr;
        FhisUint64Finalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FhisUint64Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_fhisuint64_free(ptr, 0);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    add(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_add(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {bigint} scalar
     * @returns {FhisUint64}
     */
    add_scalar(scalar) {
        const ret = wasm.fhisuint64_add_scalar(this.__wbg_ptr, scalar);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    bitand(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_bitand(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    bitor(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_bitor(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    bitxor(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_bitxor(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisClientKey} client_key
     * @returns {bigint}
     */
    decrypt(client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhisuint64_decrypt(this.__wbg_ptr, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return BigInt.asUintN(64, ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {FhisUint64}
     */
    static deserialize(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisuint64_deserialize(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {bigint} value
     * @param {FhisClientKey} client_key
     * @returns {FhisUint64}
     */
    static encrypt(value, client_key) {
        _assertClass(client_key, FhisClientKey);
        const ret = wasm.fhisuint64_encrypt(value, client_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {bigint} value
     * @returns {FhisUint64}
     */
    static encrypt_trivial(value) {
        const ret = wasm.fhisuint64_encrypt_trivial(value);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {bigint} value
     * @param {FhisCompactPublicKey} public_key
     * @returns {FhisUint64}
     */
    static encrypt_with_public_key(value, public_key) {
        _assertClass(public_key, FhisCompactPublicKey);
        const ret = wasm.fhisuint64_encrypt_with_public_key(value, public_key.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisBool}
     */
    eq(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_eq(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisBool}
     */
    ge(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_ge(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisBool}
     */
    gt(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_gt(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisBool}
     */
    le(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_le(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisBool}
     */
    lt(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_lt(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    max(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_max(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    min(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_min(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    mul(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_mul(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {bigint} scalar
     * @returns {FhisUint64}
     */
    mul_scalar(scalar) {
        const ret = wasm.fhisuint64_mul_scalar(this.__wbg_ptr, scalar);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisBool}
     */
    ne(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_ne(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisBool.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @param {bigint} serialized_size_limit
     * @returns {FhisUint64}
     */
    static safe_deserialize(buffer, serialized_size_limit) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.fhisuint64_safe_deserialize(ptr0, len0, serialized_size_limit);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {bigint} serialized_size_limit
     * @returns {Uint8Array}
     */
    safe_serialize(serialized_size_limit) {
        const ret = wasm.fhisuint64_safe_serialize(this.__wbg_ptr, serialized_size_limit);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @returns {Uint8Array}
     */
    serialize() {
        const ret = wasm.fhisuint64_serialize(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {FhisUint64} other
     * @returns {FhisUint64}
     */
    sub(other) {
        _assertClass(other, FhisUint64);
        const ret = wasm.fhisuint64_sub(this.__wbg_ptr, other.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
    /**
     * @param {bigint} scalar
     * @returns {FhisUint64}
     */
    sub_scalar(scalar) {
        const ret = wasm.fhisuint64_sub_scalar(this.__wbg_ptr, scalar);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FhisUint64.__wrap(ret[0]);
    }
}
if (Symbol.dispose) FhisUint64.prototype[Symbol.dispose] = FhisUint64.prototype.free;
exports.FhisUint64 = FhisUint64;

class Shortint {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortint_free(ptr, 0);
    }
    /**
     * @param {ShortintCompressedCiphertext} compressed_ciphertext
     * @returns {ShortintCiphertext}
     */
    static decompress_ciphertext(compressed_ciphertext) {
        _assertClass(compressed_ciphertext, ShortintCompressedCiphertext);
        const ret = wasm.shortint_decompress_ciphertext(compressed_ciphertext.__wbg_ptr);
        return ShortintCiphertext.__wrap(ret);
    }
    /**
     * @param {ShortintClientKey} client_key
     * @param {ShortintCiphertext} ct
     * @returns {bigint}
     */
    static decrypt(client_key, ct) {
        _assertClass(client_key, ShortintClientKey);
        _assertClass(ct, ShortintCiphertext);
        const ret = wasm.shortint_decrypt(client_key.__wbg_ptr, ct.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {ShortintCiphertext}
     */
    static deserialize_ciphertext(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shortint_deserialize_ciphertext(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintCiphertext.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {ShortintClientKey}
     */
    static deserialize_client_key(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shortint_deserialize_client_key(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintClientKey.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {ShortintCompressedCiphertext}
     */
    static deserialize_compressed_ciphertext(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shortint_deserialize_compressed_ciphertext(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintCompressedCiphertext.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {ShortintCompressedPublicKey}
     */
    static deserialize_compressed_public_key(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shortint_deserialize_compressed_public_key(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintCompressedPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {ShortintCompressedServerKey}
     */
    static deserialize_compressed_server_key(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shortint_deserialize_compressed_server_key(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintCompressedServerKey.__wrap(ret[0]);
    }
    /**
     * @param {Uint8Array} buffer
     * @returns {ShortintPublicKey}
     */
    static deserialize_public_key(buffer) {
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.shortint_deserialize_public_key(ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintPublicKey.__wrap(ret[0]);
    }
    /**
     * @param {ShortintClientKey} client_key
     * @param {bigint} message
     * @returns {ShortintCiphertext}
     */
    static encrypt(client_key, message) {
        _assertClass(client_key, ShortintClientKey);
        const ret = wasm.shortint_encrypt(client_key.__wbg_ptr, message);
        return ShortintCiphertext.__wrap(ret);
    }
    /**
     * @param {ShortintClientKey} client_key
     * @param {bigint} message
     * @returns {ShortintCompressedCiphertext}
     */
    static encrypt_compressed(client_key, message) {
        _assertClass(client_key, ShortintClientKey);
        const ret = wasm.shortint_encrypt_compressed(client_key.__wbg_ptr, message);
        return ShortintCompressedCiphertext.__wrap(ret);
    }
    /**
     * @param {ShortintCompressedPublicKey} public_key
     * @param {bigint} message
     * @returns {ShortintCiphertext}
     */
    static encrypt_with_compressed_public_key(public_key, message) {
        _assertClass(public_key, ShortintCompressedPublicKey);
        const ret = wasm.shortint_encrypt_with_compressed_public_key(public_key.__wbg_ptr, message);
        return ShortintCiphertext.__wrap(ret);
    }
    /**
     * @param {ShortintPublicKey} public_key
     * @param {bigint} message
     * @returns {ShortintCiphertext}
     */
    static encrypt_with_public_key(public_key, message) {
        _assertClass(public_key, ShortintPublicKey);
        const ret = wasm.shortint_encrypt_with_public_key(public_key.__wbg_ptr, message);
        return ShortintCiphertext.__wrap(ret);
    }
    /**
     * @param {ShortintParameters} parameters
     * @returns {ShortintClientKey}
     */
    static new_client_key(parameters) {
        _assertClass(parameters, ShortintParameters);
        const ret = wasm.shortint_new_client_key(parameters.__wbg_ptr);
        return ShortintClientKey.__wrap(ret);
    }
    /**
     * @param {bigint} seed_high_bytes
     * @param {bigint} seed_low_bytes
     * @param {ShortintParameters} parameters
     * @returns {ShortintClientKey}
     */
    static new_client_key_from_seed_and_parameters(seed_high_bytes, seed_low_bytes, parameters) {
        _assertClass(parameters, ShortintParameters);
        const ret = wasm.shortint_new_client_key_from_seed_and_parameters(seed_high_bytes, seed_low_bytes, parameters.__wbg_ptr);
        return ShortintClientKey.__wrap(ret);
    }
    /**
     * @param {ShortintClientKey} client_key
     * @returns {ShortintCompressedPublicKey}
     */
    static new_compressed_public_key(client_key) {
        _assertClass(client_key, ShortintClientKey);
        const ret = wasm.shortint_new_compressed_public_key(client_key.__wbg_ptr);
        return ShortintCompressedPublicKey.__wrap(ret);
    }
    /**
     * @param {ShortintClientKey} client_key
     * @returns {ShortintCompressedServerKey}
     */
    static new_compressed_server_key(client_key) {
        _assertClass(client_key, ShortintClientKey);
        const ret = wasm.shortint_new_compressed_server_key(client_key.__wbg_ptr);
        return ShortintCompressedServerKey.__wrap(ret);
    }
    /**
     * @param {number} std_dev
     * @returns {ShortintNoiseDistribution}
     */
    static new_gaussian_from_std_dev(std_dev) {
        const ret = wasm.shortint_new_gaussian_from_std_dev(std_dev);
        return ShortintNoiseDistribution.__wrap(ret);
    }
    /**
     * @param {number} lwe_dimension
     * @param {number} glwe_dimension
     * @param {number} polynomial_size
     * @param {ShortintNoiseDistribution} lwe_noise_distribution
     * @param {ShortintNoiseDistribution} glwe_noise_distribution
     * @param {number} pbs_base_log
     * @param {number} pbs_level
     * @param {number} ks_base_log
     * @param {number} ks_level
     * @param {bigint} message_modulus
     * @param {bigint} carry_modulus
     * @param {bigint} max_noise_level
     * @param {number} log2_p_fail
     * @param {number} modulus_power_of_2_exponent
     * @param {ShortintEncryptionKeyChoice} encryption_key_choice
     * @returns {ShortintParameters}
     */
    static new_parameters(lwe_dimension, glwe_dimension, polynomial_size, lwe_noise_distribution, glwe_noise_distribution, pbs_base_log, pbs_level, ks_base_log, ks_level, message_modulus, carry_modulus, max_noise_level, log2_p_fail, modulus_power_of_2_exponent, encryption_key_choice) {
        _assertClass(lwe_noise_distribution, ShortintNoiseDistribution);
        _assertClass(glwe_noise_distribution, ShortintNoiseDistribution);
        const ret = wasm.shortint_new_parameters(lwe_dimension, glwe_dimension, polynomial_size, lwe_noise_distribution.__wbg_ptr, glwe_noise_distribution.__wbg_ptr, pbs_base_log, pbs_level, ks_base_log, ks_level, message_modulus, carry_modulus, max_noise_level, log2_p_fail, modulus_power_of_2_exponent, encryption_key_choice);
        return ShortintParameters.__wrap(ret);
    }
    /**
     * @param {ShortintClientKey} client_key
     * @returns {ShortintPublicKey}
     */
    static new_public_key(client_key) {
        _assertClass(client_key, ShortintClientKey);
        const ret = wasm.shortint_new_public_key(client_key.__wbg_ptr);
        return ShortintPublicKey.__wrap(ret);
    }
    /**
     * @param {ShortintCiphertext} ciphertext
     * @returns {Uint8Array}
     */
    static serialize_ciphertext(ciphertext) {
        _assertClass(ciphertext, ShortintCiphertext);
        const ret = wasm.shortint_serialize_ciphertext(ciphertext.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {ShortintClientKey} client_key
     * @returns {Uint8Array}
     */
    static serialize_client_key(client_key) {
        _assertClass(client_key, ShortintClientKey);
        const ret = wasm.shortint_serialize_client_key(client_key.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {ShortintCompressedCiphertext} ciphertext
     * @returns {Uint8Array}
     */
    static serialize_compressed_ciphertext(ciphertext) {
        _assertClass(ciphertext, ShortintCompressedCiphertext);
        const ret = wasm.shortint_serialize_compressed_ciphertext(ciphertext.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {ShortintCompressedPublicKey} public_key
     * @returns {Uint8Array}
     */
    static serialize_compressed_public_key(public_key) {
        _assertClass(public_key, ShortintCompressedPublicKey);
        const ret = wasm.shortint_serialize_compressed_public_key(public_key.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {ShortintCompressedServerKey} server_key
     * @returns {Uint8Array}
     */
    static serialize_compressed_server_key(server_key) {
        _assertClass(server_key, ShortintCompressedServerKey);
        const ret = wasm.shortint_serialize_compressed_server_key(server_key.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {ShortintPublicKey} public_key
     * @returns {Uint8Array}
     */
    static serialize_public_key(public_key) {
        _assertClass(public_key, ShortintPublicKey);
        const ret = wasm.shortint_serialize_public_key(public_key.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        return v1;
    }
    /**
     * @param {number} bound_log2
     * @returns {ShortintNoiseDistribution}
     */
    static try_new_t_uniform(bound_log2) {
        const ret = wasm.shortint_try_new_t_uniform(bound_log2);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintNoiseDistribution.__wrap(ret[0]);
    }
}
if (Symbol.dispose) Shortint.prototype[Symbol.dispose] = Shortint.prototype.free;
exports.Shortint = Shortint;

class ShortintCiphertext {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintCiphertext.prototype);
        obj.__wbg_ptr = ptr;
        ShortintCiphertextFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintCiphertextFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintciphertext_free(ptr, 0);
    }
}
if (Symbol.dispose) ShortintCiphertext.prototype[Symbol.dispose] = ShortintCiphertext.prototype.free;
exports.ShortintCiphertext = ShortintCiphertext;

class ShortintClientKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintClientKey.prototype);
        obj.__wbg_ptr = ptr;
        ShortintClientKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintClientKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintclientkey_free(ptr, 0);
    }
}
if (Symbol.dispose) ShortintClientKey.prototype[Symbol.dispose] = ShortintClientKey.prototype.free;
exports.ShortintClientKey = ShortintClientKey;

class ShortintCompactPublicKeyEncryptionParameters {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintCompactPublicKeyEncryptionParameters.prototype);
        obj.__wbg_ptr = ptr;
        ShortintCompactPublicKeyEncryptionParametersFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintCompactPublicKeyEncryptionParametersFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintcompactpublickeyencryptionparameters_free(ptr, 0);
    }
    /**
     * @param {ShortintCompactPublicKeyEncryptionParametersName} name
     */
    constructor(name) {
        const ret = wasm.shortintcompactpublickeyencryptionparameters_new(name);
        this.__wbg_ptr = ret >>> 0;
        ShortintCompactPublicKeyEncryptionParametersFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} encryption_lwe_dimension
     * @param {ShortintNoiseDistribution} encryption_noise_distribution
     * @param {bigint} message_modulus
     * @param {bigint} carry_modulus
     * @param {number} modulus_power_of_2_exponent
     * @param {number} ks_base_log
     * @param {number} ks_level
     * @param {ShortintEncryptionKeyChoice} encryption_key_choice
     * @returns {ShortintCompactPublicKeyEncryptionParameters}
     */
    static new_parameters(encryption_lwe_dimension, encryption_noise_distribution, message_modulus, carry_modulus, modulus_power_of_2_exponent, ks_base_log, ks_level, encryption_key_choice) {
        _assertClass(encryption_noise_distribution, ShortintNoiseDistribution);
        const ret = wasm.shortintcompactpublickeyencryptionparameters_new_parameters(encryption_lwe_dimension, encryption_noise_distribution.__wbg_ptr, message_modulus, carry_modulus, modulus_power_of_2_exponent, ks_base_log, ks_level, encryption_key_choice);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ShortintCompactPublicKeyEncryptionParameters.__wrap(ret[0]);
    }
}
if (Symbol.dispose) ShortintCompactPublicKeyEncryptionParameters.prototype[Symbol.dispose] = ShortintCompactPublicKeyEncryptionParameters.prototype.free;
exports.ShortintCompactPublicKeyEncryptionParameters = ShortintCompactPublicKeyEncryptionParameters;

/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16}
 */
const ShortintCompactPublicKeyEncryptionParametersName = Object.freeze({
    PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 0, "0": "PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_1_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 1, "1": "V1_1_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_1_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1: 2, "2": "V1_1_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1",
    V1_0_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 3, "3": "V1_0_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_0_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1: 4, "4": "V1_0_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1",
    V0_11_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64: 5, "5": "V0_11_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64",
    V0_11_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64_ZKV1: 6, "6": "V0_11_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64_ZKV1",
    V1_2_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 7, "7": "V1_2_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_2_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1: 8, "8": "V1_2_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1",
    V1_3_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 9, "9": "V1_3_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_3_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1: 10, "10": "V1_3_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1",
    V1_4_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 11, "11": "V1_4_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_4_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1: 12, "12": "V1_4_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1",
    V1_5_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 13, "13": "V1_5_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_5_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1: 14, "14": "V1_5_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1",
    V1_6_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 15, "15": "V1_6_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_6_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1: 16, "16": "V1_6_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128_ZKV1",
});
exports.ShortintCompactPublicKeyEncryptionParametersName = ShortintCompactPublicKeyEncryptionParametersName;

class ShortintCompressedCiphertext {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintCompressedCiphertext.prototype);
        obj.__wbg_ptr = ptr;
        ShortintCompressedCiphertextFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintCompressedCiphertextFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintcompressedciphertext_free(ptr, 0);
    }
}
if (Symbol.dispose) ShortintCompressedCiphertext.prototype[Symbol.dispose] = ShortintCompressedCiphertext.prototype.free;
exports.ShortintCompressedCiphertext = ShortintCompressedCiphertext;

class ShortintCompressedPublicKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintCompressedPublicKey.prototype);
        obj.__wbg_ptr = ptr;
        ShortintCompressedPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintCompressedPublicKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintcompressedpublickey_free(ptr, 0);
    }
}
if (Symbol.dispose) ShortintCompressedPublicKey.prototype[Symbol.dispose] = ShortintCompressedPublicKey.prototype.free;
exports.ShortintCompressedPublicKey = ShortintCompressedPublicKey;

class ShortintCompressedServerKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintCompressedServerKey.prototype);
        obj.__wbg_ptr = ptr;
        ShortintCompressedServerKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintCompressedServerKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintcompressedserverkey_free(ptr, 0);
    }
}
if (Symbol.dispose) ShortintCompressedServerKey.prototype[Symbol.dispose] = ShortintCompressedServerKey.prototype.free;
exports.ShortintCompressedServerKey = ShortintCompressedServerKey;

/**
 * @enum {0 | 1}
 */
const ShortintEncryptionKeyChoice = Object.freeze({
    Big: 0, "0": "Big",
    Small: 1, "1": "Small",
});
exports.ShortintEncryptionKeyChoice = ShortintEncryptionKeyChoice;

class ShortintNoiseDistribution {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintNoiseDistribution.prototype);
        obj.__wbg_ptr = ptr;
        ShortintNoiseDistributionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintNoiseDistributionFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintnoisedistribution_free(ptr, 0);
    }
}
if (Symbol.dispose) ShortintNoiseDistribution.prototype[Symbol.dispose] = ShortintNoiseDistribution.prototype.free;
exports.ShortintNoiseDistribution = ShortintNoiseDistribution;

/**
 * @enum {0 | 1}
 */
const ShortintPBSOrder = Object.freeze({
    KeyswitchBootstrap: 0, "0": "KeyswitchBootstrap",
    BootstrapKeyswitch: 1, "1": "BootstrapKeyswitch",
});
exports.ShortintPBSOrder = ShortintPBSOrder;

class ShortintParameters {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintParameters.prototype);
        obj.__wbg_ptr = ptr;
        ShortintParametersFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintParametersFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintparameters_free(ptr, 0);
    }
    /**
     * @returns {bigint}
     */
    carry_modulus() {
        const ret = wasm.shortintparameters_carry_modulus(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @returns {ShortintEncryptionKeyChoice}
     */
    encryption_key_choice() {
        const ret = wasm.shortintparameters_encryption_key_choice(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    glwe_dimension() {
        const ret = wasm.shortintparameters_glwe_dimension(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {ShortintNoiseDistribution}
     */
    glwe_noise_distribution() {
        const ret = wasm.shortintparameters_glwe_noise_distribution(this.__wbg_ptr);
        return ShortintNoiseDistribution.__wrap(ret);
    }
    /**
     * @returns {number}
     */
    ks_base_log() {
        const ret = wasm.shortintparameters_ks_base_log(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    ks_level() {
        const ret = wasm.shortintparameters_ks_level(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    lwe_dimension() {
        const ret = wasm.shortintparameters_lwe_dimension(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {ShortintNoiseDistribution}
     */
    lwe_noise_distribution() {
        const ret = wasm.shortintparameters_lwe_noise_distribution(this.__wbg_ptr);
        return ShortintNoiseDistribution.__wrap(ret);
    }
    /**
     * @returns {bigint}
     */
    message_modulus() {
        const ret = wasm.shortintparameters_message_modulus(this.__wbg_ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
     * @param {ShortintParametersName | null} [name]
     */
    constructor(name) {
        const ret = wasm.shortintparameters_new(isLikeNone(name) ? 569 : name);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0] >>> 0;
        ShortintParametersFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @returns {number}
     */
    pbs_base_log() {
        const ret = wasm.shortintparameters_pbs_base_log(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    pbs_level() {
        const ret = wasm.shortintparameters_pbs_level(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    polynomial_size() {
        const ret = wasm.shortintparameters_polynomial_size(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {bigint} new_value
     */
    set_carry_modulus(new_value) {
        wasm.shortintparameters_set_carry_modulus(this.__wbg_ptr, new_value);
    }
    /**
     * @param {ShortintEncryptionKeyChoice} new_value
     */
    set_encryption_key_choice(new_value) {
        wasm.shortintparameters_set_encryption_key_choice(this.__wbg_ptr, new_value);
    }
    /**
     * @param {number} new_value
     */
    set_glwe_dimension(new_value) {
        wasm.shortintparameters_set_glwe_dimension(this.__wbg_ptr, new_value);
    }
    /**
     * @param {ShortintNoiseDistribution} new_value
     */
    set_glwe_noise_distribution(new_value) {
        _assertClass(new_value, ShortintNoiseDistribution);
        wasm.shortintparameters_set_glwe_noise_distribution(this.__wbg_ptr, new_value.__wbg_ptr);
    }
    /**
     * @param {number} new_value
     */
    set_ks_base_log(new_value) {
        wasm.shortintparameters_set_ks_base_log(this.__wbg_ptr, new_value);
    }
    /**
     * @param {number} new_value
     */
    set_ks_level(new_value) {
        wasm.shortintparameters_set_ks_level(this.__wbg_ptr, new_value);
    }
    /**
     * @param {number} new_value
     */
    set_lwe_dimension(new_value) {
        wasm.shortintparameters_set_lwe_dimension(this.__wbg_ptr, new_value);
    }
    /**
     * @param {ShortintNoiseDistribution} new_value
     */
    set_lwe_noise_distribution(new_value) {
        _assertClass(new_value, ShortintNoiseDistribution);
        wasm.shortintparameters_set_lwe_noise_distribution(this.__wbg_ptr, new_value.__wbg_ptr);
    }
    /**
     * @param {bigint} new_value
     */
    set_message_modulus(new_value) {
        wasm.shortintparameters_set_message_modulus(this.__wbg_ptr, new_value);
    }
    /**
     * @param {number} new_value
     */
    set_pbs_base_log(new_value) {
        wasm.shortintparameters_set_pbs_base_log(this.__wbg_ptr, new_value);
    }
    /**
     * @param {number} new_value
     */
    set_pbs_level(new_value) {
        wasm.shortintparameters_set_pbs_level(this.__wbg_ptr, new_value);
    }
    /**
     * @param {number} new_value
     */
    set_polynomial_size(new_value) {
        wasm.shortintparameters_set_polynomial_size(this.__wbg_ptr, new_value);
    }
}
if (Symbol.dispose) ShortintParameters.prototype[Symbol.dispose] = ShortintParameters.prototype.free;
exports.ShortintParameters = ShortintParameters;

/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255 | 256 | 257 | 258 | 259 | 260 | 261 | 262 | 263 | 264 | 265 | 266 | 267 | 268 | 269 | 270 | 271 | 272 | 273 | 274 | 275 | 276 | 277 | 278 | 279 | 280 | 281 | 282 | 283 | 284 | 285 | 286 | 287 | 288 | 289 | 290 | 291 | 292 | 293 | 294 | 295 | 296 | 297 | 298 | 299 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | 309 | 310 | 311 | 312 | 313 | 314 | 315 | 316 | 317 | 318 | 319 | 320 | 321 | 322 | 323 | 324 | 325 | 326 | 327 | 328 | 329 | 330 | 331 | 332 | 333 | 334 | 335 | 336 | 337 | 338 | 339 | 340 | 341 | 342 | 343 | 344 | 345 | 346 | 347 | 348 | 349 | 350 | 351 | 352 | 353 | 354 | 355 | 356 | 357 | 358 | 359 | 360 | 361 | 362 | 363 | 364 | 365 | 366 | 367 | 368 | 369 | 370 | 371 | 372 | 373 | 374 | 375 | 376 | 377 | 378 | 379 | 380 | 381 | 382 | 383 | 384 | 385 | 386 | 387 | 388 | 389 | 390 | 391 | 392 | 393 | 394 | 395 | 396 | 397 | 398 | 399 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 419 | 420 | 421 | 422 | 423 | 424 | 425 | 426 | 427 | 428 | 429 | 430 | 431 | 432 | 433 | 434 | 435 | 436 | 437 | 438 | 439 | 440 | 441 | 442 | 443 | 444 | 445 | 446 | 447 | 448 | 449 | 450 | 451 | 452 | 453 | 454 | 455 | 456 | 457 | 458 | 459 | 460 | 461 | 462 | 463 | 464 | 465 | 466 | 467 | 468 | 469 | 470 | 471 | 472 | 473 | 474 | 475 | 476 | 477 | 478 | 479 | 480 | 481 | 482 | 483 | 484 | 485 | 486 | 487 | 488 | 489 | 490 | 491 | 492 | 493 | 494 | 495 | 496 | 497 | 498 | 499 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511 | 512 | 513 | 514 | 515 | 516 | 517 | 518 | 519 | 520 | 521 | 522 | 523 | 524 | 525 | 526 | 527 | 528 | 529 | 530 | 531 | 532 | 533 | 534 | 535 | 536 | 537 | 538 | 539 | 540 | 541 | 542 | 543 | 544 | 545 | 546 | 547 | 548 | 549 | 550 | 551 | 552 | 553 | 554 | 555 | 556 | 557 | 558 | 559 | 560 | 561 | 562 | 563 | 564 | 565 | 566 | 567 | 568}
 */
const ShortintParametersName = Object.freeze({
    PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128: 0, "0": "PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128: 1, "1": "V1_1_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128: 2, "2": "V1_1_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128: 3, "3": "V1_1_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128: 4, "4": "V1_1_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128: 5, "5": "V1_1_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128: 6, "6": "V1_1_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128: 7, "7": "V1_1_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128: 8, "8": "V1_1_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128: 9, "9": "V1_1_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128: 10, "10": "V1_1_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128: 11, "11": "V1_1_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128: 12, "12": "V1_1_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128: 13, "13": "V1_1_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128: 14, "14": "V1_1_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128: 15, "15": "V1_1_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128: 16, "16": "V1_1_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128: 17, "17": "V1_1_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128: 18, "18": "V1_1_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128: 19, "19": "V1_1_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128: 20, "20": "V1_1_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128: 21, "21": "V1_1_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128: 22, "22": "V1_1_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128: 23, "23": "V1_1_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128: 24, "24": "V1_1_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128: 25, "25": "V1_1_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128: 26, "26": "V1_1_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128: 27, "27": "V1_1_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128: 28, "28": "V1_1_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128: 29, "29": "V1_1_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128: 30, "30": "V1_1_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128: 31, "31": "V1_1_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128: 32, "32": "V1_1_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128: 33, "33": "V1_1_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128: 34, "34": "V1_1_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128: 35, "35": "V1_1_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128: 36, "36": "V1_1_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128: 37, "37": "V1_1_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128: 38, "38": "V1_1_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128: 39, "39": "V1_1_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128: 40, "40": "V1_1_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 41, "41": "V1_1_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 42, "42": "V1_1_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 43, "43": "V1_1_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 44, "44": "V1_1_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 45, "45": "V1_1_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 46, "46": "V1_1_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 47, "47": "V1_1_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 48, "48": "V1_1_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 49, "49": "V1_1_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 50, "50": "V1_1_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 51, "51": "V1_1_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 52, "52": "V1_1_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 53, "53": "V1_1_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 54, "54": "V1_1_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 55, "55": "V1_1_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 56, "56": "V1_1_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 57, "57": "V1_1_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 58, "58": "V1_1_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 59, "59": "V1_1_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 60, "60": "V1_1_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 61, "61": "V1_1_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 62, "62": "V1_1_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 63, "63": "V1_1_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 64, "64": "V1_1_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 65, "65": "V1_1_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 66, "66": "V1_1_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 67, "67": "V1_1_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 68, "68": "V1_1_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 69, "69": "V1_1_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 70, "70": "V1_1_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_1_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 71, "71": "V1_1_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128: 72, "72": "V1_0_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128: 73, "73": "V1_0_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128: 74, "74": "V1_0_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128: 75, "75": "V1_0_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128: 76, "76": "V1_0_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128: 77, "77": "V1_0_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128: 78, "78": "V1_0_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128: 79, "79": "V1_0_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128: 80, "80": "V1_0_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128: 81, "81": "V1_0_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128: 82, "82": "V1_0_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128: 83, "83": "V1_0_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128: 84, "84": "V1_0_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128: 85, "85": "V1_0_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128: 86, "86": "V1_0_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128: 87, "87": "V1_0_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128: 88, "88": "V1_0_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128: 89, "89": "V1_0_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128: 90, "90": "V1_0_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128: 91, "91": "V1_0_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128: 92, "92": "V1_0_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128: 93, "93": "V1_0_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128: 94, "94": "V1_0_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128: 95, "95": "V1_0_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128: 96, "96": "V1_0_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128: 97, "97": "V1_0_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128: 98, "98": "V1_0_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128: 99, "99": "V1_0_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128: 100, "100": "V1_0_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128: 101, "101": "V1_0_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128: 102, "102": "V1_0_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128: 103, "103": "V1_0_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128: 104, "104": "V1_0_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128: 105, "105": "V1_0_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128: 106, "106": "V1_0_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128: 107, "107": "V1_0_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128: 108, "108": "V1_0_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128: 109, "109": "V1_0_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128: 110, "110": "V1_0_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128: 111, "111": "V1_0_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 112, "112": "V1_0_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 113, "113": "V1_0_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 114, "114": "V1_0_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 115, "115": "V1_0_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 116, "116": "V1_0_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 117, "117": "V1_0_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 118, "118": "V1_0_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 119, "119": "V1_0_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 120, "120": "V1_0_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 121, "121": "V1_0_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 122, "122": "V1_0_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 123, "123": "V1_0_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 124, "124": "V1_0_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 125, "125": "V1_0_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 126, "126": "V1_0_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 127, "127": "V1_0_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 128, "128": "V1_0_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 129, "129": "V1_0_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 130, "130": "V1_0_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 131, "131": "V1_0_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 132, "132": "V1_0_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 133, "133": "V1_0_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 134, "134": "V1_0_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 135, "135": "V1_0_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 136, "136": "V1_0_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 137, "137": "V1_0_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 138, "138": "V1_0_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 139, "139": "V1_0_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 140, "140": "V1_0_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 141, "141": "V1_0_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_0_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 142, "142": "V1_0_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V0_11_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M64: 143, "143": "V0_11_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M64: 144, "144": "V0_11_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M64: 145, "145": "V0_11_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M64: 146, "146": "V0_11_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M64: 147, "147": "V0_11_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M64: 148, "148": "V0_11_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M64: 149, "149": "V0_11_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M64: 150, "150": "V0_11_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M64: 151, "151": "V0_11_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M64: 152, "152": "V0_11_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M64: 153, "153": "V0_11_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M64: 154, "154": "V0_11_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M64: 155, "155": "V0_11_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M64: 156, "156": "V0_11_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M64: 157, "157": "V0_11_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M64: 158, "158": "V0_11_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M64: 159, "159": "V0_11_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M64: 160, "160": "V0_11_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M64: 161, "161": "V0_11_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M64: 162, "162": "V0_11_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M64: 163, "163": "V0_11_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M64: 164, "164": "V0_11_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M64: 165, "165": "V0_11_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M64: 166, "166": "V0_11_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M64: 167, "167": "V0_11_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M64: 168, "168": "V0_11_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M64: 169, "169": "V0_11_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M64: 170, "170": "V0_11_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M64: 171, "171": "V0_11_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M64: 172, "172": "V0_11_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M64: 173, "173": "V0_11_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M64: 174, "174": "V0_11_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M64: 175, "175": "V0_11_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M64: 176, "176": "V0_11_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M64: 177, "177": "V0_11_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M64: 178, "178": "V0_11_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M64: 179, "179": "V0_11_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M64: 180, "180": "V0_11_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M64: 181, "181": "V0_11_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M64: 182, "182": "V0_11_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 183, "183": "V0_11_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 184, "184": "V0_11_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 185, "185": "V0_11_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 186, "186": "V0_11_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 187, "187": "V0_11_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 188, "188": "V0_11_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 189, "189": "V0_11_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 190, "190": "V0_11_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 191, "191": "V0_11_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 192, "192": "V0_11_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 193, "193": "V0_11_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 194, "194": "V0_11_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 195, "195": "V0_11_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 196, "196": "V0_11_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 197, "197": "V0_11_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 198, "198": "V0_11_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 199, "199": "V0_11_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 200, "200": "V0_11_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 201, "201": "V0_11_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 202, "202": "V0_11_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 203, "203": "V0_11_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 204, "204": "V0_11_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 205, "205": "V0_11_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 206, "206": "V0_11_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 207, "207": "V0_11_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 208, "208": "V0_11_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64: 209, "209": "V0_11_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M64: 210, "210": "V0_11_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M64: 211, "211": "V0_11_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M64: 212, "212": "V0_11_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M64",
    V0_11_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M64: 213, "213": "V0_11_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M64",
    V1_2_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128: 214, "214": "V1_2_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128: 215, "215": "V1_2_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128: 216, "216": "V1_2_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128: 217, "217": "V1_2_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128: 218, "218": "V1_2_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128: 219, "219": "V1_2_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128: 220, "220": "V1_2_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128: 221, "221": "V1_2_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128: 222, "222": "V1_2_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128: 223, "223": "V1_2_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128: 224, "224": "V1_2_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128: 225, "225": "V1_2_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128: 226, "226": "V1_2_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128: 227, "227": "V1_2_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128: 228, "228": "V1_2_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128: 229, "229": "V1_2_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128: 230, "230": "V1_2_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128: 231, "231": "V1_2_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128: 232, "232": "V1_2_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128: 233, "233": "V1_2_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128: 234, "234": "V1_2_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128: 235, "235": "V1_2_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128: 236, "236": "V1_2_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128: 237, "237": "V1_2_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128: 238, "238": "V1_2_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128: 239, "239": "V1_2_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128: 240, "240": "V1_2_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128: 241, "241": "V1_2_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128: 242, "242": "V1_2_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128: 243, "243": "V1_2_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128: 244, "244": "V1_2_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128: 245, "245": "V1_2_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128: 246, "246": "V1_2_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128: 247, "247": "V1_2_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128: 248, "248": "V1_2_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128: 249, "249": "V1_2_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128: 250, "250": "V1_2_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128: 251, "251": "V1_2_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128: 252, "252": "V1_2_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128: 253, "253": "V1_2_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 254, "254": "V1_2_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 255, "255": "V1_2_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 256, "256": "V1_2_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 257, "257": "V1_2_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 258, "258": "V1_2_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 259, "259": "V1_2_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 260, "260": "V1_2_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 261, "261": "V1_2_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 262, "262": "V1_2_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 263, "263": "V1_2_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 264, "264": "V1_2_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 265, "265": "V1_2_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 266, "266": "V1_2_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 267, "267": "V1_2_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 268, "268": "V1_2_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 269, "269": "V1_2_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 270, "270": "V1_2_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 271, "271": "V1_2_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 272, "272": "V1_2_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 273, "273": "V1_2_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 274, "274": "V1_2_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 275, "275": "V1_2_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 276, "276": "V1_2_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 277, "277": "V1_2_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 278, "278": "V1_2_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 279, "279": "V1_2_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 280, "280": "V1_2_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 281, "281": "V1_2_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 282, "282": "V1_2_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 283, "283": "V1_2_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_2_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 284, "284": "V1_2_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128: 285, "285": "V1_3_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128: 286, "286": "V1_3_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128: 287, "287": "V1_3_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128: 288, "288": "V1_3_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128: 289, "289": "V1_3_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128: 290, "290": "V1_3_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128: 291, "291": "V1_3_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128: 292, "292": "V1_3_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128: 293, "293": "V1_3_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128: 294, "294": "V1_3_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128: 295, "295": "V1_3_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128: 296, "296": "V1_3_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128: 297, "297": "V1_3_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128: 298, "298": "V1_3_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128: 299, "299": "V1_3_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128: 300, "300": "V1_3_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128: 301, "301": "V1_3_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128: 302, "302": "V1_3_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128: 303, "303": "V1_3_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128: 304, "304": "V1_3_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128: 305, "305": "V1_3_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128: 306, "306": "V1_3_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128: 307, "307": "V1_3_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128: 308, "308": "V1_3_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128: 309, "309": "V1_3_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128: 310, "310": "V1_3_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128: 311, "311": "V1_3_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128: 312, "312": "V1_3_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128: 313, "313": "V1_3_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128: 314, "314": "V1_3_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128: 315, "315": "V1_3_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128: 316, "316": "V1_3_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128: 317, "317": "V1_3_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128: 318, "318": "V1_3_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128: 319, "319": "V1_3_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128: 320, "320": "V1_3_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128: 321, "321": "V1_3_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128: 322, "322": "V1_3_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128: 323, "323": "V1_3_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128: 324, "324": "V1_3_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 325, "325": "V1_3_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 326, "326": "V1_3_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 327, "327": "V1_3_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 328, "328": "V1_3_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 329, "329": "V1_3_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 330, "330": "V1_3_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 331, "331": "V1_3_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 332, "332": "V1_3_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 333, "333": "V1_3_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 334, "334": "V1_3_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 335, "335": "V1_3_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 336, "336": "V1_3_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 337, "337": "V1_3_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 338, "338": "V1_3_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 339, "339": "V1_3_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 340, "340": "V1_3_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 341, "341": "V1_3_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 342, "342": "V1_3_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 343, "343": "V1_3_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 344, "344": "V1_3_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 345, "345": "V1_3_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 346, "346": "V1_3_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 347, "347": "V1_3_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 348, "348": "V1_3_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 349, "349": "V1_3_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 350, "350": "V1_3_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 351, "351": "V1_3_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 352, "352": "V1_3_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 353, "353": "V1_3_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 354, "354": "V1_3_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_3_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 355, "355": "V1_3_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128: 356, "356": "V1_4_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128: 357, "357": "V1_4_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128: 358, "358": "V1_4_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128: 359, "359": "V1_4_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128: 360, "360": "V1_4_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128: 361, "361": "V1_4_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128: 362, "362": "V1_4_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128: 363, "363": "V1_4_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128: 364, "364": "V1_4_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128: 365, "365": "V1_4_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128: 366, "366": "V1_4_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128: 367, "367": "V1_4_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128: 368, "368": "V1_4_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128: 369, "369": "V1_4_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128: 370, "370": "V1_4_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128: 371, "371": "V1_4_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128: 372, "372": "V1_4_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128: 373, "373": "V1_4_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128: 374, "374": "V1_4_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128: 375, "375": "V1_4_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128: 376, "376": "V1_4_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128: 377, "377": "V1_4_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128: 378, "378": "V1_4_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128: 379, "379": "V1_4_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128: 380, "380": "V1_4_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128: 381, "381": "V1_4_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128: 382, "382": "V1_4_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128: 383, "383": "V1_4_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128: 384, "384": "V1_4_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128: 385, "385": "V1_4_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128: 386, "386": "V1_4_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128: 387, "387": "V1_4_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128: 388, "388": "V1_4_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128: 389, "389": "V1_4_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128: 390, "390": "V1_4_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128: 391, "391": "V1_4_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128: 392, "392": "V1_4_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128: 393, "393": "V1_4_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128: 394, "394": "V1_4_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128: 395, "395": "V1_4_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 396, "396": "V1_4_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 397, "397": "V1_4_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 398, "398": "V1_4_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 399, "399": "V1_4_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 400, "400": "V1_4_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 401, "401": "V1_4_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 402, "402": "V1_4_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 403, "403": "V1_4_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 404, "404": "V1_4_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 405, "405": "V1_4_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 406, "406": "V1_4_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 407, "407": "V1_4_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 408, "408": "V1_4_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 409, "409": "V1_4_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 410, "410": "V1_4_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 411, "411": "V1_4_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 412, "412": "V1_4_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 413, "413": "V1_4_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 414, "414": "V1_4_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 415, "415": "V1_4_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 416, "416": "V1_4_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 417, "417": "V1_4_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 418, "418": "V1_4_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 419, "419": "V1_4_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 420, "420": "V1_4_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 421, "421": "V1_4_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 422, "422": "V1_4_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 423, "423": "V1_4_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 424, "424": "V1_4_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 425, "425": "V1_4_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_4_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 426, "426": "V1_4_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128: 427, "427": "V1_5_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128: 428, "428": "V1_5_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128: 429, "429": "V1_5_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128: 430, "430": "V1_5_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128: 431, "431": "V1_5_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128: 432, "432": "V1_5_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128: 433, "433": "V1_5_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128: 434, "434": "V1_5_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128: 435, "435": "V1_5_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128: 436, "436": "V1_5_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128: 437, "437": "V1_5_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128: 438, "438": "V1_5_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128: 439, "439": "V1_5_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128: 440, "440": "V1_5_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128: 441, "441": "V1_5_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128: 442, "442": "V1_5_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128: 443, "443": "V1_5_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128: 444, "444": "V1_5_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128: 445, "445": "V1_5_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128: 446, "446": "V1_5_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128: 447, "447": "V1_5_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128: 448, "448": "V1_5_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128: 449, "449": "V1_5_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128: 450, "450": "V1_5_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128: 451, "451": "V1_5_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128: 452, "452": "V1_5_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128: 453, "453": "V1_5_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128: 454, "454": "V1_5_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128: 455, "455": "V1_5_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128: 456, "456": "V1_5_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128: 457, "457": "V1_5_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128: 458, "458": "V1_5_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128: 459, "459": "V1_5_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128: 460, "460": "V1_5_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128: 461, "461": "V1_5_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128: 462, "462": "V1_5_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128: 463, "463": "V1_5_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128: 464, "464": "V1_5_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128: 465, "465": "V1_5_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128: 466, "466": "V1_5_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 467, "467": "V1_5_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 468, "468": "V1_5_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 469, "469": "V1_5_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 470, "470": "V1_5_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 471, "471": "V1_5_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 472, "472": "V1_5_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 473, "473": "V1_5_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 474, "474": "V1_5_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 475, "475": "V1_5_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 476, "476": "V1_5_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 477, "477": "V1_5_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 478, "478": "V1_5_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 479, "479": "V1_5_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 480, "480": "V1_5_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 481, "481": "V1_5_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 482, "482": "V1_5_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 483, "483": "V1_5_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 484, "484": "V1_5_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 485, "485": "V1_5_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 486, "486": "V1_5_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 487, "487": "V1_5_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 488, "488": "V1_5_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 489, "489": "V1_5_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 490, "490": "V1_5_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 491, "491": "V1_5_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 492, "492": "V1_5_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 493, "493": "V1_5_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 494, "494": "V1_5_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 495, "495": "V1_5_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 496, "496": "V1_5_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_5_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 497, "497": "V1_5_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128: 498, "498": "V1_6_PARAM_MESSAGE_1_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128: 499, "499": "V1_6_PARAM_MESSAGE_1_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128: 500, "500": "V1_6_PARAM_MESSAGE_2_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128: 501, "501": "V1_6_PARAM_MESSAGE_1_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128: 502, "502": "V1_6_PARAM_MESSAGE_2_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128: 503, "503": "V1_6_PARAM_MESSAGE_3_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128: 504, "504": "V1_6_PARAM_MESSAGE_1_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128: 505, "505": "V1_6_PARAM_MESSAGE_2_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128: 506, "506": "V1_6_PARAM_MESSAGE_3_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128: 507, "507": "V1_6_PARAM_MESSAGE_4_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128: 508, "508": "V1_6_PARAM_MESSAGE_1_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128: 509, "509": "V1_6_PARAM_MESSAGE_2_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128: 510, "510": "V1_6_PARAM_MESSAGE_3_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128: 511, "511": "V1_6_PARAM_MESSAGE_4_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128: 512, "512": "V1_6_PARAM_MESSAGE_5_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128: 513, "513": "V1_6_PARAM_MESSAGE_1_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128: 514, "514": "V1_6_PARAM_MESSAGE_2_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128: 515, "515": "V1_6_PARAM_MESSAGE_3_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128: 516, "516": "V1_6_PARAM_MESSAGE_4_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128: 517, "517": "V1_6_PARAM_MESSAGE_5_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128: 518, "518": "V1_6_PARAM_MESSAGE_6_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128: 519, "519": "V1_6_PARAM_MESSAGE_1_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128: 520, "520": "V1_6_PARAM_MESSAGE_2_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128: 521, "521": "V1_6_PARAM_MESSAGE_3_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128: 522, "522": "V1_6_PARAM_MESSAGE_4_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128: 523, "523": "V1_6_PARAM_MESSAGE_5_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128: 524, "524": "V1_6_PARAM_MESSAGE_6_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128: 525, "525": "V1_6_PARAM_MESSAGE_7_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128: 526, "526": "V1_6_PARAM_MESSAGE_1_CARRY_7_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128: 527, "527": "V1_6_PARAM_MESSAGE_2_CARRY_6_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128: 528, "528": "V1_6_PARAM_MESSAGE_3_CARRY_5_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128: 529, "529": "V1_6_PARAM_MESSAGE_4_CARRY_4_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128: 530, "530": "V1_6_PARAM_MESSAGE_5_CARRY_3_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128: 531, "531": "V1_6_PARAM_MESSAGE_6_CARRY_2_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128: 532, "532": "V1_6_PARAM_MESSAGE_7_CARRY_1_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128: 533, "533": "V1_6_PARAM_MESSAGE_8_CARRY_0_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128: 534, "534": "V1_6_PARAM_MESSAGE_1_CARRY_1_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128: 535, "535": "V1_6_PARAM_MESSAGE_2_CARRY_2_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128: 536, "536": "V1_6_PARAM_MESSAGE_3_CARRY_3_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128: 537, "537": "V1_6_PARAM_MESSAGE_4_CARRY_4_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 538, "538": "V1_6_PARAM_MESSAGE_1_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 539, "539": "V1_6_PARAM_MESSAGE_1_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 540, "540": "V1_6_PARAM_MESSAGE_1_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 541, "541": "V1_6_PARAM_MESSAGE_1_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 542, "542": "V1_6_PARAM_MESSAGE_1_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 543, "543": "V1_6_PARAM_MESSAGE_1_CARRY_7_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 544, "544": "V1_6_PARAM_MESSAGE_2_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 545, "545": "V1_6_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 546, "546": "V1_6_PARAM_MESSAGE_2_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 547, "547": "V1_6_PARAM_MESSAGE_2_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 548, "548": "V1_6_PARAM_MESSAGE_2_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 549, "549": "V1_6_PARAM_MESSAGE_2_CARRY_6_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 550, "550": "V1_6_PARAM_MESSAGE_3_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 551, "551": "V1_6_PARAM_MESSAGE_3_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 552, "552": "V1_6_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 553, "553": "V1_6_PARAM_MESSAGE_3_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 554, "554": "V1_6_PARAM_MESSAGE_3_CARRY_5_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 555, "555": "V1_6_PARAM_MESSAGE_4_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 556, "556": "V1_6_PARAM_MESSAGE_4_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 557, "557": "V1_6_PARAM_MESSAGE_4_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 558, "558": "V1_6_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 559, "559": "V1_6_PARAM_MESSAGE_5_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 560, "560": "V1_6_PARAM_MESSAGE_5_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 561, "561": "V1_6_PARAM_MESSAGE_5_CARRY_3_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 562, "562": "V1_6_PARAM_MESSAGE_6_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 563, "563": "V1_6_PARAM_MESSAGE_6_CARRY_2_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128: 564, "564": "V1_6_PARAM_MESSAGE_7_CARRY_1_COMPACT_PK_KS_PBS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 565, "565": "V1_6_PARAM_MESSAGE_1_CARRY_1_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 566, "566": "V1_6_PARAM_MESSAGE_2_CARRY_2_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 567, "567": "V1_6_PARAM_MESSAGE_3_CARRY_3_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
    V1_6_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128: 568, "568": "V1_6_PARAM_MESSAGE_4_CARRY_4_COMPACT_PK_PBS_KS_GAUSSIAN_2M128",
});
exports.ShortintParametersName = ShortintParametersName;

class ShortintPublicKey {
    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ShortintPublicKey.prototype);
        obj.__wbg_ptr = ptr;
        ShortintPublicKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ShortintPublicKeyFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_shortintpublickey_free(ptr, 0);
    }
}
if (Symbol.dispose) ShortintPublicKey.prototype[Symbol.dispose] = ShortintPublicKey.prototype.free;
exports.ShortintPublicKey = ShortintPublicKey;

function init_panic_hook() {
    wasm.init_panic_hook();
}
exports.init_panic_hook = init_panic_hook;

function main() {
    wasm.main();
}
exports.main = main;

/**
 * @param {FhisServerKey} server_key
 */
function set_server_key(server_key) {
    _assertClass(server_key, FhisServerKey);
    const ret = wasm.set_server_key(server_key.__wbg_ptr);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}
exports.set_server_key = set_server_key;

/**
 * @param {ShortintParametersName | null} [param]
 * @returns {string}
 */
function shortint_params_name(param) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ret = wasm.shortint_params_name(isLikeNone(param) ? 569 : param);
        var ptr1 = ret[0];
        var len1 = ret[1];
        if (ret[3]) {
            ptr1 = 0; len1 = 0;
            throw takeFromExternrefTable0(ret[2]);
        }
        deferred2_0 = ptr1;
        deferred2_1 = len1;
        return getStringFromWasm0(ptr1, len1);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}
exports.shortint_params_name = shortint_params_name;

/**
 * @param {ShortintCompactPublicKeyEncryptionParametersName} param
 * @returns {string}
 */
function shortint_pke_params_name(param) {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.shortint_pke_params_name(param);
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}
exports.shortint_pke_params_name = shortint_pke_params_name;

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_2e59b1b37a9a34c3: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg___wbindgen_is_function_49868bde5eb1e745: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_40c5a80572e8f9d3: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_b29b5c5a8065ba1a: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_c0cca72b82b86f4d: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_throw_81fc77679af83bc6: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_call_d578befcc3145dee: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_crypto_38df2bab126b63dc: function(arg0) {
            const ret = arg0.crypto;
            return ret;
        },
        __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_getRandomValues_c44a50d8cfdaebeb: function() { return handleError(function (arg0, arg1) {
            arg0.getRandomValues(arg1);
        }, arguments); },
        __wbg_getTime_f6ac312467f7cf09: function(arg0) {
            const ret = arg0.getTime();
            return ret;
        },
        __wbg_length_0c32cb8543c8e4c8: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_msCrypto_bd5a034af96bcba6: function(arg0) {
            const ret = arg0.msCrypto;
            return ret;
        },
        __wbg_new_0_bfa2ef4bc447daa2: function() {
            const ret = new Date();
            return ret;
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_with_length_9cedd08484b73942: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return ret;
        },
        __wbg_node_84ea875411254db1: function(arg0) {
            const ret = arg0.node;
            return ret;
        },
        __wbg_process_44c7a14e11e9f69e: function(arg0) {
            const ret = arg0.process;
            return ret;
        },
        __wbg_prototypesetcall_3e05eb9545565046: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_randomFillSync_6c25eac9869eb53c: function() { return handleError(function (arg0, arg1) {
            arg0.randomFillSync(arg1);
        }, arguments); },
        __wbg_require_b4edbdcf3e2a1ef0: function() { return handleError(function () {
            const ret = module.require;
            return ret;
        }, arguments); },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_THIS_a1248013d790bf5f: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_f2e0f995a21329ff: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_24f78b6d23f286ea: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_59fd959c540fe405: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_subarray_0f98d3fb634508ad: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_versions_276b2795b1c6a219: function(arg0) {
            const ret = arg0.versions;
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./fhish_wasm_bg.js": import0,
    };
}

const FhisBoolFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisbool_free(ptr >>> 0, 1));
const FhisClientKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisclientkey_free(ptr >>> 0, 1));
const FhisCompactPublicKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhiscompactpublickey_free(ptr >>> 0, 1));
const FhisCompressedServerKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhiscompressedserverkey_free(ptr >>> 0, 1));
const FhisConfigFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisconfig_free(ptr >>> 0, 1));
const FhisPublicKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhispublickey_free(ptr >>> 0, 1));
const FhisServerKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisserverkey_free(ptr >>> 0, 1));
const FhisShortintClientKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintclientkey_free(ptr >>> 0, 1));
const FhisShortintCompactCiphertextListFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintcompactciphertextlist_free(ptr >>> 0, 1));
const FhisShortintCompactPublicKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintcompactpublickey_free(ptr >>> 0, 1));
const FhisShortintCompressedPublicKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintcompressedpublickey_free(ptr >>> 0, 1));
const FhisShortintConfigFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintconfig_free(ptr >>> 0, 1));
const FhisShortintPublicKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintpublickey_free(ptr >>> 0, 1));
const FhisShortintServerKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintserverkey_free(ptr >>> 0, 1));
const FhisShortintUint2Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisshortintuint2_free(ptr >>> 0, 1));
const FhisUint32Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisuint32_free(ptr >>> 0, 1));
const FhisUint64Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_fhisuint64_free(ptr >>> 0, 1));
const ShortintFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortint_free(ptr >>> 0, 1));
const ShortintCiphertextFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintciphertext_free(ptr >>> 0, 1));
const ShortintClientKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintclientkey_free(ptr >>> 0, 1));
const ShortintCompactPublicKeyEncryptionParametersFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintcompactpublickeyencryptionparameters_free(ptr >>> 0, 1));
const ShortintCompressedCiphertextFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintcompressedciphertext_free(ptr >>> 0, 1));
const ShortintCompressedPublicKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintcompressedpublickey_free(ptr >>> 0, 1));
const ShortintCompressedServerKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintcompressedserverkey_free(ptr >>> 0, 1));
const ShortintNoiseDistributionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintnoisedistribution_free(ptr >>> 0, 1));
const ShortintParametersFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintparameters_free(ptr >>> 0, 1));
const ShortintPublicKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_shortintpublickey_free(ptr >>> 0, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
function decodeText(ptr, len) {
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

const wasmPath = `${__dirname}/fhish_wasm_bg.wasm`;
const wasmBytes = require('fs').readFileSync(wasmPath);
const wasmModule = new WebAssembly.Module(wasmBytes);
let wasm = new WebAssembly.Instance(wasmModule, __wbg_get_imports()).exports;
wasm.__wbindgen_start();
