/*
bind 方法允许我们创建具有预设 this 上下文的新函数。
*/
Function.prototype.myBind = function (context, ...args) {
  // 检查调用bind者(this)是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Not a function');
  }

  context = context || globalThis;

  const func = (...restArgs) => {
    return this.apply(context, args.concat(restArgs));
  }
  return func;
}

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person1 = { name: 'qq' };
const person2 = { name: 'hh' };

const greetPerson1 = greet.myBind(person1, 'Hello');
const greetPerson2 = greet.myBind(person2, 'Hi');

greetPerson1('!'); // 输出: Hello, Alice!
greetPerson2('...'); // 输出: Hi, Bob...