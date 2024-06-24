// 1. JSON.parse(JSON.stringify());
const fn1 = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}

// 2. 创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性依次添加到新对象上
const fn2 = (obj) => {
  if (typeof obj === 'object' && obj !== null) {  // 注意值为 null

    const newObj = Array.isArray(obj) ? [] : {}; // 注意值为 数组
    for (const key in obj) {
      newObj[key] = fn2(obj[key]);
    }
    return newObj;
  } else {
    return obj;
  }
}

// 3. 处理循环引用 额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系
const fn3 = (obj, map = new WeakMap()) => {
  if (typeof obj === 'object' && obj !== null) {
    if (map.get(obj)) return map.get(obj);  // 注意循环引用

    const newObj = Array.isArray(obj) ? [] : {};
    map.set(obj, newObj);

    for (const key in obj) {
      newObj[key] = fn3(obj[key], map);
    }
    return newObj;
  } else {
    return obj;
  }
}




const obj1 = {   // 原数据，包含字符串、对象、函数、数组等不同的类型
  name: "test",
  city: null,
  main: {
    a: 1,
    b: 2
  },
  fn: function () {

  },
  friends: [1, 2, 3, [22, 33]],
}
obj1.child = obj1; // 对象存在循环引用的情况，即对象的属性间接或直接的引用了自身的情况

const obj2 = fn3(obj1);

obj1.name = 'qq';
obj2.main.a = 2222;


console.log('obj1:', obj1);
console.log('obj2:', obj2);

