function createChild(parentObj) {
  var child = Object.create(parentObj); // 创建一个新对象，其原型指向parentObj
  child.sayHi = function () { // 增强新对象，添加sayHi方法 // 问题2 : 每个新创建的对象都会创建该方法，这就无法实现函数复用
    console.log("hi");
  };
  return child; // 返回增强后的对象
}

var parent = {
  name: "Tom",
  friends: ["Bob", "Alice"] // 问题1 : 所有实例共享父类的引用属性
};

var child1 = createChild(parent);
child1.sayHi(); // 输出: "hi"

var child2 = createChild(parent);
child2.friends.push("John");
console.log(parent.friends); // 输出: ["Bob", "Alice", "John"]