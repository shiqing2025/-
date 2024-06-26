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
Child.prototype = Object.create(Parent.prototype);

// 修正constructor指向
Child.prototype.constructor = Child;

Child.prototype.getAge = function () {
  return this.age;
}

var child1 = new Child('Kevin', 18);

console.log(child1);