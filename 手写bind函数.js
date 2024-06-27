/*
bind 方法允许我们创建具有预设 this 上下文的新函数。
*/
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a function');
  }
  const self = this;

  const boundFunc = function (...restArgs) {
    ctx = this instanceof boundFunc ? this : context;
    return self.apply(ctx, args.concat(restArgs));
  }
  boundFunc.prototype = Object.create(this.prototype);
  console.log('--boundFunc', boundFunc);
  console.log('----context', context);
  return boundFunc;
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