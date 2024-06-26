class Parent {
  constructor(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
  }
  
  getName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类的构造函数 Parent.call(this, name);
    this.age = age;
  }
  
  getAge() {
    return this.age;
  }
}

const child1 = new Child('Kevin', 18);

console.log(child1.getName()); // 输出: "Kevin"
console.log(child1.getAge()); // 输出: 18