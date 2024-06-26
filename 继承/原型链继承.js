/** 
 * 原型链
 * 构造函数、原型和实例的关系：
    1. 每个构造函数都有一个原型对象prototype
    2. 原型对象有一个属性指回构造函数 constructor
    3. 实例有一个内部指针指向原型 __proto__ ; 也有一个属性指回构造函数 constructor
*/
/** 
 * 原型链继承 
 * 使用原型实现继承时，实质上是将子类的原型设置为父类的一个实例，
 * 这样子类的原型就包含了父类的属性和方法，从而实现了继承。
*/
// 1. 引用类型的属性被所有实例共享：由于子类的原型是父类的实例，所以父类中的引用类型属性（如数组、对象）会被所有子类实例共享，一个实例修改该属性时，其他实例也会受到影响。
{
  function Parent() {
    this.colors = ["red", "blue", "green"]; // 通过构造函数生成实例时,colors属性会被所有实例共享 即原型属性变成了实例属性!!
  }
  
  function Child() {}
  
  Child.prototype = new Parent(); // 将子类的原型设置为父类的实例 (因为都实例化了,所以Parent函数作为构造函数 肯定会执行,所以colors属性会被所有子类实例共享?)
  
  var child1 = new Child();
  var child2 = new Child();
  
  child1.colors.push("yellow");
  console.log(child2.colors); // ["red", "blue", "green", "yellow"]
}
// 2. 在创建子类实例时，无法向父类构造函数传递参数：子类实例化时，父类构造函数中的参数是固定的，无法根据不同实例传递不同参数。
{
  function Parent(name) {
    this.name = name;
  }

/*
通过原型链实现继承时，可以向父类构造函数传递参数(盗用构造函数)，但这需要在子类构造函数中调用父类构造函数。
然而，这样做会导致父类构造函数被调用两次，一次是在子类构造函数中, 另一次是在设置子类原型时(即通过构造函数生成实例时).
*/
  
  function Child() {}
  
  Child.prototype = new Parent("John"); // 
  
  var child1 = new Child();
  var child2 = new Child();
  
  console.log(child1.name); // "John"
  console.log(child2.name); // "John"
}

// 3. 原型链的继承关系较为复杂，容易出错：当多层继承关系复杂时，查找原型链中的属性和方法可能会出现问题，不易于调试和维护。

// 尽管原型链继承存在这些缺陷，但它仍然是JavaScript中一种重要的继承方式。在实际开发中，可以通过组合继承、寄生组合继承等方式来解决这些问题。