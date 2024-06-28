/**
 * 防抖（debounce）函数的主要目的是限制一个函数在短时间内的重复执行。
 * 如果在规定的时间内再次触发该函数，则会重新计算执行时间。
*/

const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => { // 返回一个函数
    // console.log('args', args);
    if (timer) clearTimeout(timer);  // 在新的函数被调用时清除之前的定时器
    timer = setTimeout(() => {
      return fn.apply(this, args);
    }, delay); // 重新设置定时器，在等待 wait 毫秒后执行原函数 fn
  }
}

// 使用示例
const debouncedFun = debounce(() => {
}, 1000);

window.addEventListener(
  "scroll",
  debouncedFun('qq')
);