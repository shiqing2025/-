/** 
 * 使用 setinterval 模拟实现 settimeout 
 * 
 * 思路: 执行一次后清除定时器
*/
function mySetTimeout(func, delay) {
  let timerId = null;

  function loop() {
    timerId = setInterval(() => {
      func();
      clearInterval(timerId);
    }, delay);
  }
  
  loop();
}

/** 
 * 使用 setInterval 实现循环定时调用可能会遇到以下问题：
 * 1. 累计延迟 (累计误差) : 如果回调函数的执行时间超过了 setInterval 的延迟时间，那么回调函数的执行可能会累积延迟。
 *    这是因为 setInterval 不会等待上一个回调函数执行完成，而是在每个延迟周期后立即执行下一个回调。
 *    如果回调函数的执行时间较长，这可能导致回调函数被连续调用，而没有间隔。
 * 2. 不精确的延迟时间 : setInterval 的延迟时间并不是精确的，它只是指定了回调函数执行的最小间隔时间。
 * 3. 浏览器标签页最小化或隐藏时的行为：当浏览器标签页被最小化或隐藏时，某些浏览器可能会降低 setInterval 的执行频率，以节省系统资源。
 *    这可能导致回调函数在这种情况下执行得更慢。
 * 4. 错误处理：如果回调函数中发生错误，setInterval 会继续执行后续的回调。这可能导致错误被忽略，或者错误的累积影响程序的正常运行
*/

/** 
 * 使用 setTimeout 来实现循环定时调用
 * 1. 避免栈溢出：setInterval 可能会因为回调函数执行时间过长而导致栈溢出，尤其是在高频调用的情况下。
 *    使用 setTimeout 可以避免这个问题，因为每次回调执行完毕后，才会设置下一次的定时。
 * 2. 更好的控制执行时机：setTimeout 允许开发者更精确地控制回调函数的执行时机。
 *    如果回调函数执行时间不确定，使用 setTimeout 可以确保每次回调执行完毕后再进行下一次的定时，从而避免多个回调同时执行。
 * 3. 灵活性：使用 setTimeout 可以更灵活地控制定时器的行为，例如在某些条件下取消定时器或调整定时间隔。
*/