// 1. JSON.parse(JSON.stringify());
const fn1 = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// 2. Create a new object, traverse the object to be cloned,
// and add the properties of the object to be cloned to the new object one by one
const fn2 = (obj) => {
  if (typeof obj === "object" && obj !== null) {
    // Determine whether the object is an object or an array
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      newObj[key] = fn2(obj[key]);
    }
    return newObj;
  } else {
    return obj;
  }
};

// 3. Handle circular references by allocating an additional storage space
// to store the corresponding relationship between the current object and the copied object
const fn3 = (obj, map = new WeakMap()) => {
  if (typeof obj === "object" && obj !== null) {
    if (map.get(obj)) return map.get(obj); // Be careful of circular references

    const newObj = Array.isArray(obj) ? [] : {};
    map.set(obj, newObj);

    for (const key in obj) {
      newObj[key] = fn3(obj[key], map);
    }
    return newObj;
  } else {
    return obj;
  }
};

// Util function 1 - Get data type
const getType = (target) => {
  const typeStr = Object.prototype.toString.call(target); // 注意 Object.prototype.toString.call() 的用法
  const spaceIdx = typeStr.indexOf(" ");
  const type = typeStr.splice(spaceIdx, -1);
  return type;
};

// Util function 2 - Get the initialization data of different types of data, such as [] and {}
const getInitData = (target) => {
  const Ctor = target.constructor; // Every object has a constructor property that points to the constructor function that created the object
  return new Ctor(); // new Array() or new Object() etc.
};

const obj1 = {
  // original data, including strings, objects, functions, arrays and other different types etc.
  name: "test",
  city: null,
  main: {
    a: 1,
    b: 2,
  },
  fn: function () {},
  friends: [1, 2, 3, [22, 33]],
};
obj1.child = obj1; //  object has circular references, meaning the properties of the object indirectly or directly refer to itself.

const obj2 = fn3(obj1);

obj1.name = "qq";
obj2.main.a = 2222;

console.log("obj1:", obj1);
console.log("obj2:", obj2);
