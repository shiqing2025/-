/**
 * compose 函数是一个函数式编程概念，它接受多个函数作为参数，并返回一个新函数。
 * 当调用这个新函数时，它会将参数传递给最后一个函数，然后将该函数的返回值作为参数传递给倒数第二个函数，依此类推，直到第一个函数。
 * 换句话说，compose 函数是用于将多个函数组合成一个函数的工具，从右到左依次执行这些函数。
 *
 * 示例
 * const add1 = (a) => a + 1
 * const add2 = (a) => a + 2
 * const add3 = (a) => a + 3
 * const add4 = (a) => a + 4
 *
 * const fun = compose(add1, add2, add3, add4);
 * console.log(fun(10)); // 20  10 + 4 + 3 + 2 + 1
 */

const add1 = (a) => a + 1;
const add2 = (a) => a + 2;
const add3 = (a) => a + 3;
const add4 = (a) => a + 4;

const compose = (...funcs) => {
  // 扩展运算符 接收不定量参数
  // 需要返回一个新的函数,它接收一个初始值作为参数
  return function (initData) {
    return funcs.reduceRight((acc, curFn) => curFn(acc), initData); // acc 变量表示当前累积的结果，fn 表示当前迭代的函数。
  };
};

/*
reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
注意: reduce() 对于空数组是不会执行回调函数的。
*/

/*
总结:
`compose` 函数的实现思路可以总结为以下几点：

1. 使用扩展运算符（`...`）收集传入的一系列函数到一个名为 `funcs` 的数组中。
2. 返回一个新的函数，该函数接收一个初始值作为参数。
3. 在新函数内部，使用 `reduceRight()` 方法从右到左遍历 `funcs` 数组，将当前累积结果作为参数传递给当前迭代的函数，并将函数返回值作为下一次迭代的累积结果。
4. 当 `reduceRight()` 遍历完成后，得到从右到左依次执行所有函数的最终结果，并返回该结果。
*/

const fun = compose(add1, add2, add3, add4);
console.log(fun(10)); // 20  10 + 4 + 3 + 2 + 1
