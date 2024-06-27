/**
 * 手写 instanceof 操作符实现
*/

const myInstanceof = function (Constructor, obj) {
  // 边界条件判断
  if (typeof Constructor !== 'function') {
    throw new TypeError('not a function');
  }
  if (obj === null || typeof obj !== 'object' && typeof obj !== 'function') {
    return false; // 检查 obj 是否为 null、非对象或非函数
  }

  // 要顺着对象的原型链找
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}


// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// }
// const p = new Person('qq', 18);
// const obj = new Object('hh');

// // console.log(p instanceof Person);
// console.log(myInstanceof(Person, p));