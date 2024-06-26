/**
 *
"构造函数继承"（也被称为"经典继承"或"伪经典继承"）的本质是在子类的构造函数中通过调用父类的构造函数并改变其上下文（this指向）来达到继承效果。

在JavaScript中，函数的call和apply方法可以改变函数执行时的上下文，即函数体内this的值。
当我们在子类的构造函数中调用Parent.call(this, name)时，实际上是在新创建的子类实例的上下文中执行了父类的构造函数，
这样父类的所有属性和方法都会被复制到子类实例中，从而实现了继承。

但这种方式只能继承父类的实例属性和方法，不能继承父类原型上的属性和方法。
而且因为属性和方法都是在构造函数中定义的，所以每个实例都会有一份自己的副本，这会导致内存浪费。

这就是构造函数继承的本质。虽然它有一些缺点，但在某些场景下，如需要传递参数，或需要避免引用类型属性被所有实例共享时，可以结合其他继承方式一起使用。
 */

function Parent(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}

Parent.prototype.sayAge = function () {
  console.log(this.age);
};

function Child(name, age) {
  Parent.call(this, name); // 在新创建的子类实例的上下文中执行了父类的构造函数，这样父类的所有属性和方法都会被复制到子类实例中，从而实现了继承。
  this.age = age;
}

var child = new Child("John", 18);
child.sayName(); // John
child.sayAge(); // TypeError: child.sayAge is not a function
