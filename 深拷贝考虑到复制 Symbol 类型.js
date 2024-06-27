/**
 * 深拷贝（考虑到复制 Symbol 类型）
 * 
 * Reflect.ownKeys(obj) 是一个 JavaScript 方法，
 * 它返回一个包含给定对象 obj 的所有自身属性键（包括非枚举属性、符号属性和字符串属性）的数组。
 * 这个方法类似于 Object.getOwnPropertyNames(obj) 和 Object.getOwnPropertySymbols(obj) 的组合
*/

const isObject = (val) => {
  return typeof val === 'object' && val !== null;
}

const deepClone = (obj, map = new WeakMap()) => {
  if (!isObject(obj)) return obj;

  if (map.has(obj)) {
    return map.get(obj);
  }

  let target = Array.isArray(obj) ? [] : {};
  Reflect.ownKeys(obj).forEach(key => { // 处理symbol类型属性
    if (isObject(obj[key])) { // 递归
      target[key] = deepClone(obj[key], map);
    } else {
      target[key] = obj[key];
    }
  })

  map.set(obj, target); // 处理循环引用问题

  return target;
}