/*
大数相加 bigNumberAdd
*/

const bigNumberAdd = (n1, n2) => {
  const maxLen = Math.max(n1.length, n2.length);

  const a = n1.padStart(maxLen, '0'); // padStart方法补齐位数
  const b = n2.padStart(maxLen, '0');

  let res = '';
  let carry = 0;

  for (let i = maxLen - 1; i >= 0; i--) {   // 从后向前逐位相加
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;  // 和要加上进位!
    carry = Math.floor(sum / 10); // 注意进位的处理
    res = (sum % 10) + res;
  }

  if (carry) {
    res = carry + res; // 处理最后的进位
  }

  return res;
}

const num1 = '12345678901234567890';
const num2 = '98765432109876543210';

console.log(bigNumberAdd(num1, num2));