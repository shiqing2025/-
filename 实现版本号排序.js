/** 
 * 实现版本号排序
 *  ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] 进行降序排列,排序的结果为 
 *  ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
 */

function sortVersion(versions) {
  return versions.sort((a, b) => {
    const arr1 = a.split('.');
    const arr2 = b.split('.');
    const len = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
      const num1 = parseInt(arr1[i] || 0);
      const num2 = parseInt(arr2[i] || 0);
      if (num1 > num2) {
        return -1;
      } else if (num1 < num2) {
        return 1;
      }
    }
    return 0;
  });
}