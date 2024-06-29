/** 
 * call
 * 1.首先需要检查当前 this 是否为一个函数。
 *    因为 call 是一个函数方法，所以 this 应该是一个函数。
 *    如果 this 不是一个函数，我们抛出一个类型错误
 * 2. 将设置默认的 context
 *    如果没有提供 context，将使用全局对象（在浏览器环境中是 window）
 * 3. 将函数this作为 context 对象的一个属性
 *    这里使用 Symbol 创建一个唯一的属性名，以避免覆盖现有的属性
 * 4. 在给定的 context 上调用函数
 *    使用扩展运算符（...）将 args 数组展开为函数参数。函数调用的结果将存储在 result 变量中
 * 5. 调用完成后，我们从 context 对象中删除临时添加的函数属性。
 * 6. 返回结果
*/

//----------call-------------
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a function');
  }
  context = context || window;

  const fn = Symbol('fn');
  context[fn] = this;
  const res = context[fn](...args);

  delete context[fn];
  return res;
}
// function greet() {
//   console.log(this.name);
// }

// const alice = { name: 'Alice' };
// greet.myApply(alice); 


//----------apply-------------
Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a function');
  }
  context = context || window;

  const fn = Symbol('fn');
  context[fn] = this;
  const res = context[fn](...args);

  delete context[fn];
  return res;
}

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

// const person1 = { name: 'Alice' };
// const person2 = { name: 'Bob' };

// greet.myApply(person1, ['Hello', '!']); // 输出: Hello, Alice!
// greet.myApply(person2, ['Hi', '...']);  // 输出: Hi, Bob...


//----------bind-------------
/**
首先，我们需要明确 bind 的目标：
它用于创建一个新的函数，这个新函数的 this 上下文被设置为指定的对象，同时还可以接受预设的参数。


*/
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a function');
  }

  const self = this;

  //简单实现: 返回一个新函数, 可以接受参数
  const boundFunc = function (...innerArgs) { // 新函数接受一系列参数（...innerArgs）
    // return self.apply(context, args.concat(innerArgs)); // 这些参数将与预设参数（args）合并
    return self.apply(
      this instanceof boundFunc ? this : context // boundFunc是否是作为构造函数使用的
      , args.concat(innerArgs))
  }
  // 注意修改函数原型
  boundFunc.prototype = Object.create(this.prototype);

  return boundFunc;
}


// function Person(name) { // 构造函数
//   this.name = name;
// }

// Person.prototype.sayHello = function () { // 原型方法
//   console.log('Hello, ' + this.name);
// };

// const person1 = { name: 'Alice' };

// // 使用 bind 创建一个绑定函数, 将person1作为上下文对象
// const BoundPerson = Person.bind(person1);

// // 使用 new 操作符调用绑定函数
// const newPerson = new BoundPerson('Bob');

// // 检查新创建的对象
// console.log(newPerson); // 输出: Person { name: 'Bob' }
// newPerson.sayHello(); // 输出: Hello, Bob

// // 检查原型链
// console.log(newPerson instanceof Person); // 输出: true
// console.log(newPerson instanceof BoundPerson); // 输出: true


function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = { name: 'qq' };
const person2 = { name: 'hh' };

const greetPerson1 = greet.myBind(person1, 'Hello');
const greetPerson2 = greet.myBind(person2, 'Hi');

greetPerson1('!'); // 输出: Hello, Alice!
greetPerson2('...'); // 输出: Hi, Bob...


