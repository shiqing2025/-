/** 
 * 实现一个发布订阅模式 拥有 on emit once off 方法
 * 思路：

1. 创建一个 EventEmitter 类，用于管理事件和处理函数. 类中包含一个 events 对象，用于存储事件名及其对应的处理函数数组。
2. 实现 on 方法：用于订阅事件。当调用 on 方法时，将事件名作为 key，处理函数作为 value 存储到 events 对象中。
3. 实现 emit 方法：用于发布事件。当调用 emit 方法时，根据事件名从 events 对象中找到对应的处理函数数组，依次执行这些处理函数。
4. 实现 once 方法：用于订阅一次性事件。在 once 方法中，创建一个只执行一次的处理函数（onceCallback），将其传递给 on 方法进行订阅。
  当事件被触发时，onceCallback 会执行原始的处理函数，并调用 off 方法将自身从事件列表中移除。
5. 实现 off 方法：用于移除事件订阅。当调用 off 方法时，根据事件名从 events 对象中找到对应的处理函数数组，将指定的处理函数从数组中移除。

*/

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // 订阅事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
    // console.log('----on', eventName, this.events[eventName])
  }

  // 移除事件订阅
  off(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((item) => item !== cb)
    }
  }

  // 订阅一次性事件
  once(eventName, cb) {
    const wrapper = (...args) => {
      cb.apply(null, args);
      this.off(eventName, wrapper);
    }
    this.on(eventName, wrapper);
  }

  // 发布事件
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(null, args);
      });
    }
  }

}

// test 
const eventEmitter = new EventEmitter();

function callback1(message) {
  console.log('Callback 1:', message);
}

function callback2(message) {
  console.log('Callback 2:', message);
}

eventEmitter.on('event1', callback1);
eventEmitter.on('event1', callback2);

eventEmitter.emit('event1', 'Hello, world!'); // 输出：Callback 1: Hello, world! 和 Callback 2: Hello, world!

eventEmitter.off('event1', callback1);

eventEmitter.emit('event1', 'Hello again!'); // 输出：Callback 2: Hello again!

eventEmitter.once('event2', callback1);

eventEmitter.emit('event2', 'This is a one-time event'); // 输出：Callback 1: This is a one-time event
eventEmitter.emit('event2', 'This should not be printed'); // 不输出任何内容
