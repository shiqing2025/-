/** 
 * 实现版本号排序
 *  sort 方法和自定义的比较函数 对版本号数组进行排序
 * 
 *  ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] 
 * 进行降序排列,排序的结果为 
 *  ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
 */
const compareFn = (a, b) => {
  const aArr = a.split('.'); // 将版本号 分割成数字数组
  const bArr = b.split('.');

  let len = Math.max(aArr.length, bArr.length);
  for (let i = 0; i < len; i++) {
    aVal = aArr[i] || 0; // 如果子版本不存在，则默认为 0
    bVal = bArr[i] || 0;
    if (aVal !== bVal) {
      // return bVal - aVal; // 降序
      return aVal - bVal;
    }
  }
  return 0;
}

arr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5', '5.1']
const fn = (arr) => {
  return arr.sort(compareFn);
}

console.log(fn(arr));