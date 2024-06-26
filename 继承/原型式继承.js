/** 
 * 原型式继承  Object.create()
 * 适合不需要单独创建构造函数，但仍然需要在对象间共享信息的场合
 * Object.create() 这个方法接收两个参数：作为新对象原型的对象，以及给新对象定义额外属性的对象（第二个可选
 * 优点: 1. 可以在不必指定构造函数的情况下创建一个对象
 *      2. 可以通过原型链实现属性的共享
 * 
 * 缺点: 1. 所有实例共享父类的引用属性 
*/

var parent = {
  name: "Tom",
  friends: ["Bob", "Alice"]
};

var child1 = Object.create(parent);
child1.name = "Jim";
child1.friends.push("Lucy");

var child2 = Object.create(parent);
child2.name = "Lily";
child2.friends.push("John");

console.log(child1.name); // 输出: Jim
console.log(child2.name); // 输出: Lily
console.log(child1.friends); // 输出: ["Bob", "Alice", "Lucy", "John"]

console.log(parent.name); // 输出: Tom
console.log(parent.friends); // 输出: ["Bob", "Alice", "Lucy", "John"]