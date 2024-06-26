/**
 * settimeout 模拟实现 setinterval(带清除定时器的版本)
 *
 * 思路:
 * 递归调用 setTimeout
 */

function mySetInterval(func, delay) {
  let timerId = null;
  function loop() {
    timerId = setTimeout(() => {
      func();
      loop();
    }, delay);
  }
  loop();

  function clear() {
    clearTimeout(timerId);
  }

  mySetInterval.clear = clear;
  return mySetInterval;
}

// test
const logFunc = () => console.log("Hello");
const timer = mySetInterval(logFunc, 1000);
setTimeout(() => {
  timer.clear();
}, 5000);
