

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }
  context = context || globalThis;
  const fn = Symbol('this');
  context[fn] = this;
  console.log('args---', args);
  res = context[fn](...args)
  delete context[fn];
  return res;
}

Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }
  context = context || globalThis; // 设置默认值
  const fn = Symbol('this'); // Symbol的作用 不会出现属性名称的覆盖
  context[fn] = this; // this 就是当前函数
  console.log('args---', args);
  res = context[fn](...args)
  delete context[fn]; // 清理到 fn, 防止污染
  return res;
}


const sayHi = function (city, age) {
  console.log('hi', this.name, city, age);
}
sayHi.myApply(null, ['beijing', '20']);
