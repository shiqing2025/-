/** 
 * 获取数据类型
*/
const getType = (target) => {
  const typeStr = Object.prototype.toString.call(target); // [object Array]

  const spaceIdx = typeStr.indexOf(' ');
  const type = typeStr.slice(spaceIdx, -1);
  return type;
}

// 测试
console.log(getType([])); // Array
console.log(getType({})); // Object
console.log(getType(1)); // Number
console.log(getType('')); // String
console.log(getType(undefined)); // Undefined
console.log(getType(null)); // Null
console.log(getType(true)); // Boolean
console.log(getType(Symbol(1))); // Symbol
console.log(getType(new Map())); // Map
console.log(getType(new Set())); // Set
console.log(getType(new Date())); // Date
console.log(getType(function () { })); // Function
console.log(getType(new Error())); // Error
console.log(getType(new RegExp())); // RegExp

console.log(getType(new Int8Array())); // Int8Array
console.log(getType(new Uint8Array())); // Uint8Array
console.log(getType(new Uint8ClampedArray())); // Uint8ClampedArray
console.log(getType(new Int16Array())); // Int16Array
console.log(getType(new Uint16Array())); // Uint16Array
console.log(getType(new Int32Array())); // Int32Array
console.log(getType(new Uint32Array())); // Uint32Array
console.log(getType(new Float32Array())); // Float32Array
console.log(getType(new Float64Array())); // Float64Array
console.log(getType(new BigInt64Array())); // BigInt64Array
console.log(getType(new BigUint64Array())); // BigUint64Array
console.log(getType(new ArrayBuffer())); // ArrayBuffer
console.log(getType(new SharedArrayBuffer())); // SharedArrayBuffer
console.log(getType(new WeakMap())); // WeakMap
console.log(getType(new WeakSet())); // WeakSet
console.log(getType(new Proxy({}, {}))); // Proxy
console.log(getType(new URLSearchParams())); // URLSearchParams
console.log(getType(new FormData())); // FormData
console.log(getType(new Blob())); // Blob
