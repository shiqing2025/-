/** 组合继承
 * 也称为伪经典继承，这种方式结合了原型链继承和构造函数继承。
 * 使用原型链实现对原型属性和方法的继承 Child.prototype = new Parent(); 
 * 通过借用构造函数实现对实例属性的继承 Parent.call(this, name);
*/

function Parent(name){
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function(){
  return this.name;
}

function Child(name, age){
  Parent.call(this, name); // 这里是构造函数继承，实现对实例属性的继承 // !! 问题：第二次调用Parent
  this.age = age;
}

Child.prototype = new Parent(); // 这里是原型链继承，实现对原型属性和方法的继承  // !! 问题：第一次调用Parent
Child.prototype.constructor = Child; // 修正constructor

Child.prototype.getAge = function(){
  return this.age;
}

var child1 = new Child('Kevin', '18');
// console.log(child1.constructor); // [Function: Child]

console.log(child1); // Child { name: 'Kevin', colors: [ 'red', 'blue', 'green' ], age: '18' }
// !! 问题: 下面可以看到 child1.__proto__ 也有name/colors属性,这些都是不必要的 
console.log(child1.__proto__); // Parent { name: 'Kevin', colors: [ 'red', 'blue', 'green' ] }