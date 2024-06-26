function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () { // 原型方法
  return this.name;
}

function Child(name, age) {
  Parent.call(this, name); // 借用构造函数，实现对实例属性的继承
  this.age = age;
}

// 创建一个中间对象，其原型指向Parent.prototype
// 没有直接将子类的原型设置为父类的实例, 避免了两次调用父类构造函数及避免产生不必要的属性
Child.prototype = Object.create(Parent.prototype);

// 修正constructor指向
Child.prototype.constructor = Child;

Child.prototype.getAge = function () {
  return this.age;
}

var child1 = new Child('Kevin', 18);

console.log(child1);


/** 
"寄生"的含义在于通过借用构造函数（即Parent.call(this)）来继承父类的实例属性和方法，这种方式就像是子类在父类实例上"寄生"，获取到父类的属性和方法。"组合式"则在于它同时使用了原型链的方式来继承父类原型上的属性和方法。

具体来说：

"Parent.call(this)"这行代码是借用构造函数的方式，即在子类构造函数内部调用父类构造函数。这样，父类构造函数中定义的所有属性和方法都会被复制到子类实例中，这就实现了对父类实例属性和方法的继承。这个过程就像是子类在父类实例上"寄生"，从而获取到父类的属性和方法。

"Children.prototype = Object.create(Parent.prototype)"这行代码是原型链的方式，即通过创建一个新对象，这个对象的原型是父类的原型，然后将这个新对象赋值给子类的原型。这样，子类就可以继承父类原型上的属性和方法。这是"组合式"继承的一部分，因为它结合了原型链和借用构造函数两种方式。

"Children.prototype.constructor = Children"这行代码是修复constructor属性的指向，因为在创建新对象并修改子类原型的过程中，constructor的指向被改变了，所以需要手动修复。

通过这种方式，子类既可以继承父类实例的属性和方法，也可以继承父类原型的属性和方法，同时避免了在子类原型上创建不必要的属性。因此，这种方式被称为"寄生组合式继承"。
*/