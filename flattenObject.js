/*
实现一个对象的 flatten 方法
*/

// 辅助函数,判断输入是否为对象
const isObject = (input) => {
  return typeof input === 'object' && input !== null;
}

const flattenObject = (obj) => {
  const res = {};

  const dfs = (input, parentKey = '') => {
    // for循环隐式地充当了递归出口，从而终止了递归过程
    if (Array.isArray(input)) { // 处理数组
      input.forEach((val, idx) => {
        const newKey = `${parentKey}[${idx}]`; // a[0]
        if (isObject(val)) {
          dfs(val, newKey);
        } else {
          res[newKey] = val;
        };
      })
    } else { // 处理对象
      for (const [key, val] of Object.entries(input)) {
        // const newKey = `${parentKey}[${key}]`;
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (isObject(val)) {
          dfs(val, newKey);
        } else {
          res[newKey] = val;
        }
      }
    }
  }

  dfs(obj);
  return res;
}

// 示例
const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [4, { g: 5, h: [6, 7] }]
};

console.log(flattenObject(obj));
// 输出：{ a: 1, 'b.c': 2, 'b.d.e': 3, 'f[0]': 4, 'f[1].g': 5, 'f[1].h[0]': 6, 'f[1].h[1]': 7 }