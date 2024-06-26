const arr = [1, [2, [3, [4, 5]]], 6]

// 1. flat 数组自带的扁平化方法,flat的参数代表的是需要展开几层，如果是Infinity的话，就是不管嵌套几层，全部都展开
const func1 = (arr) => {
  return arr.flat(Infinity);
}
// console.log(func1(arr));

// 2. 正则 使用正则把字符串里面的 [ 和 ] 去掉
const func2 = (arr) => {
  const str = JSON.stringify(arr).replace(/\[|\]/g, '');
  const res = JSON.parse('[' + str + ']');
  // return res;
}

// 3. 递归
const res = [];
const func3 = (arr) => {
  for (let n of arr) {
    if (Array.isArray(n)) {
      fn(n);
    } else {
      res.push(n);
    }
  }
  return res;
}
// console.log(func3(arr));

// 4. 使用 reduce
{
  const flat = (arr) => {
    if (!arr.length) return;
    return arr.reduce((pre, cur) => Array.isArray(cur) ? [...pre, ...flat(cur)] : [...pre, cur], [])
  }
  console.log(flat(arr));
}

/* 注意 对于单行代码,若加了{} 一定要return */

