/** 
 * 浅拷贝 概念:
 * 浅拷贝（Shallow Copy）是指在复制一个对象时，仅复制对象的第一层属性，而不会递归复制对象的嵌套属性。
 * 如果对象的属性值是基本类型（如数字、字符串、布尔值等），那么浅拷贝会复制这些基本类型的值；
 * 而如果对象的属性值是引用类型（如对象、数组等），那么浅拷贝只会复制这些引用类型的引用（指针），而不会复制引用类型的内部结构(所以如果其中一个对象改变了这个地址，就会影响到另一个对象)。
 * 
 * 使用 Object.assign() 和展开运算符（...）实现的浅拷贝都只会拷贝对象的可枚举自有属性，而不会拷贝继承属性
*/



// 方法1: 遍历 key/value 赋值 
const shallowCopy1 = (obj) => {
  const res = {};
  const keys = Object.keys(obj); // Object.keys() 方法只会返回对象的可枚举自有属性键名，不会返回继承属性和不可枚举属性的键名
  for (i of keys) {
    res[i] = obj[i];
  };

  return res;
}

// 方法2: Object.assign()
const shallowCopy2 = (obj) => {
  return Object.assign({}, obj); // 在使用 Object.assign() 方法时，它只会复制源对象的可枚举的自有属性值，不会复制继承属性和不可枚举的属性
}

// 方法3: ...扩展运算符
const shallowCopy3 = (obj) => {
  return { ...obj };
}

// const obj1 = {
//   name: '张三',
//   age: 8,
//   pal: ['王五', '王六', '王七'],
//   friend: {
//     name: 'xx',
//     age: '9'
//   }
// }

// const obj2 = shallowCopy3(obj1);

// obj1.name = 'qq';
// obj1.age = 20;
// obj1.friend.age = 90;

// console.log(obj1);
// console.log(obj2);

