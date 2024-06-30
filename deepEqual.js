/*
判断两个对象是否相同（即它们的结构和值是否完全相等）
*/

// 辅助函数 判断输入是否为对象
const isObject = val => {
  return typeof val === 'object' && val !== null;
}

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true; // 严格相等

  if (!isObject(obj1) || !isObject(obj2)) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (!keys2.includes(key) || !deepEqual(val1, val2)) {
      return false;
    }
  }
  return true;

}


// 示例 1：基本类型值
console.log(deepEqual(1, 1)); // 输出：true
console.log(deepEqual('hello', 'hello')); // 输出：true
console.log(deepEqual(null, null)); // 输出：true
console.log(deepEqual(undefined, undefined)); // 输出：true
console.log(deepEqual(1, '1')); // 输出：false
console.log(deepEqual(null, undefined)); // 输出：false

// 示例 2：简单对象
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };
console.log(deepEqual(obj1, obj2)); // 输出：true
console.log(deepEqual(obj1, obj3)); // 输出：false

// 示例 3：嵌套对象
const nestedObj1 = {
  a: { b: { c: 1, d: [2, 3] }, e: 4 },
  f: 'hello'
};

const nestedObj2 = {
  a: { b: { c: 1, d: [2, 3] }, e: 4 },
  f: 'hello'
};

const nestedObj3 = {
  a: { b: { c: 1, d: [2, 4] }, e: 4 },
  f: 'hello'
};

console.log(deepEqual(nestedObj1, nestedObj2)); // 输出：true
console.log(deepEqual(nestedObj1, nestedObj3)); // 输出：false

// 示例 4：数组
const arr1 = [1, 2, { a: 3, b: 4 }, [5, 6]];
const arr2 = [1, 2, { a: 3, b: 4 }, [5, 6]];
const arr3 = [1, 2, { a: 3, b: 4 }, [5, 7]];
console.log(deepEqual(arr1, arr2)); // 输出：true
console.log(deepEqual(arr1, arr3)); // 输出：false