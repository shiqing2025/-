/*
LRU（Least Recently Used，最近最少使用）算法是一种常用的缓存淘汰策略。
在这种策略中，当缓存满了之后，最近最少使用的数据会被移除以腾出空间给新的数据。

在JavaScript中，可以使用 Map 数据结构来实现LRU缓存。
Map不仅可以存储键值对数据，还可以记住键值对的插入顺序，这对于实现LRU算法非常有用。
*/

const { tokTypes } = require("@babel/core");

class LRUCache {
  constructor(length) {
    this.length = length;
    this.map = new Map();
  }

  // get 
  get(key) {
    if (!this.map.get(key)) {
      return null;
    }

    const val = this.map.get(key);

    // 更新最近最少使用-删除重添
    this.map.delete(key);
    this.map.set(key, val);

    return val
  }

  // put
  put(key, val) {
    if (this.map.has(key)) {
      this.map.delete(key);
    } else if (this.map.size >= this.length) {
      const delKey = this.map.keys().next().value; // 获取Map对象中第一个元素的键
      this.map.delete(delKey);
    }
    this.map.set(key, val);
  }
}

// 创建一个最大容量为3的LRU缓存
const cache = new LRUCache(3);

// 向缓存中添加数据
cache.put(1, 'one');
cache.put(2, 'two');
cache.put(3, 'three');

console.log(cache.get(1)); // 输出: 'one'
console.log(cache.get(2)); // 输出: 'two'

// 此时，缓存已满，再向其中添加数据将导致最近最少使用的数据（key为3）被移除
cache.put(4, 'four');

console.log(cache.get(3)); // 输出: null，因为key为3的数据已被移除
console.log(cache.get(4)); // 输出: 'four'

// 更新已存在的数据
cache.put(1, 'updated-one');
console.log(cache.get(1)); // 输出: 'updated-one'