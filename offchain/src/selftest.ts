import { initFheEngine, getPublicKeyBytes, encryptValueWithPublicKeyBytes, encryptTrivial, decryptU32, applyBinaryOp, OP } from './fhe-engine'

console.log('Stellar off-chain FHE engine self-test (real tfhe via fhish-wasm)…')
const t0 = Date.now()
initFheEngine()
console.log(`keygen ok in ${((Date.now() - t0) / 1000).toFixed(0)}s; publicKey ${getPublicKeyBytes().length} bytes`)
const pk = getPublicKeyBytes()
const add = decryptU32(applyBinaryOp(OP.ADD, encryptValueWithPublicKeyBytes(5, pk), encryptValueWithPublicKeyBytes(7, pk)))
const min = decryptU32(applyBinaryOp(OP.MIN, encryptTrivial(30), encryptTrivial(150)))
const sub = decryptU32(applyBinaryOp(OP.SUB, encryptTrivial(150), encryptTrivial(30)))
console.log(`add(5,7)=${add}  min(30,150)=${min}  sub(150,30)=${sub}`)
if (add !== 12 || min !== 30 || sub !== 120) {
  console.error('FAIL')
  process.exit(1)
}
console.log('FHE engine OK ✅')
