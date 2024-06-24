function getAllEnumerableKeys(obj) {
  const keys = [];

  for (const key in obj) {
    keys.push(key);
  }

  return keys;
}

const obj1 = {
  a: 1,
  b: 2
};

const obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

const keys = getAllEnumerableKeys(obj2);
console.log(keys); // 输出：[ 'c', 'd', 'a', 'b' ]