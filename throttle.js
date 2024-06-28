/**
 * throttle
 * 节流（throttle）函数的主要目的是限制一个函数在一定时间内的执行频率。
 * 在规定的时间间隔内，只执行一次函数。
*/

const throttle = (fn, interval) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  }
}

// 测试代码
let count = 0;
const throttledFunction = throttle(() => console.log(++count), 0.1);

throttledFunction();
throttledFunction();
throttledFunction();
throttledFunction();
throttledFunction();


// 输出：1
// 在 1000 毫秒内，只有第一次调用的 throttledFunction 会执行