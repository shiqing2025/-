

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function');
  }
  context = context || globalThis;
  const fn = Symbol('this'); // 方法命名注意不能重名,故用Symbol
  context[fn] = this; // 将函数作为 传入对象的方法

  res = context[fn](...args) // 执行对象方法 
  delete context[fn]; // 注意需要删除对象方法
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
