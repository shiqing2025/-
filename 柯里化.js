/**
 * 柯里化（Currying），又称部分求值（Partial Evaluation），
 * 是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
 *  并且返回接受余下的参数而且返回结果的新函数的技术。
 * 核心思想:
 * 把多参数传入的函数拆成单参数（或部分）函数，内部再返回调用下一个单参数（或部分）函数，依次处理剩余的参数。
 * 
 * 实现思路:
 * 创建一个函数,只接受一个参数,并返回一个函数; 依此类推。
 * 当新函数接收到的参数数量等于原始函数的参数数量时，将调用原始函数并传入收集到的所有参数。
*/
const curry = (fn) => {
  const arity = fn.length; // arity 表示函数接受的参数数量

  const curriedFunc = (...args) => { // (...args) 将所有传入的参数收集到一个名为 args 的数组中
    if (args.length >= arity) { // 收集到足够量的参数了,该执行了
      return fn(...args); // 这里的 ...args 将 args 数组展开为一个参数列表
    }
    // 如果参数数量不足，返回一个新函数，用于接收更多参数
    return function (...moreArgs) {
      return curriedFunc(...args, ...moreArgs);
    }
  }

  // 返回初始的柯里化函数
  return curriedFunc;
}

// 定义一个普通的接受三个参数的函数
function sum(a, b, c) {
  return a + b + c;
}

// 将普通函数转换为柯里化函数
const curriedSum = curry(sum);

// 使用柯里化函数计算结果
const result = curriedSum(1)(2)(3);
console.log(result); // 输出: 6
