/**
 * new 操作符
 * 手写 new 操作符实现
 * 注意: 如果构造函数返回了一个对象或函数，那么 myNew 函数应该返回这个值，而不是新创建的对象，以模拟 new 操作符的行为。
*/

const myNew = (constructorFun, ...args) => {
  const obj = Object.create(constructorFun.prototype);
  const res = constructorFun.apply(obj, args);
  if (res && (typeof res === 'object' || typeof res === 'function')) {
    return res
  }
  return obj;
}


function Person(name, city) {
  this.name = name;
  this.city = city;

  // 这里我们返回一个对象
  return { color: 'red' };
}

const girl = myNew(Person, 'qq', 'bj');

console.log(girl);  // 输出: { color: 'red' }