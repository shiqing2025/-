/**
 * 实现 LazyMan 的核心思路:
 * 异步编程 事件循环 
 * 创建一个任务队列，每次调用 LazyMan 方法（如 eat，sleep）时，就在任务队列中添加一个新的任务。
 * 然后需要一个方法来依次执行这些任务
 * 由于 sleep 方法需要延时执行，所以需要用到 setTimeout 来实现异步等待。
*/

class LazyManClass {
  constructor(name) {
    this.taskList = [];
    this.name = name;
    console.log(`--Hi I am ${this.name}`);
    setTimeout(() => this.next(), 0)
  }

  // eat
  eat(name) {
    const fn = () => {
      console.log(`I am eating ${name}`);
      this.next();
    }
    this.taskList.push(fn);
    return this;
  }

  //sleep
  sleep(time) {
    const fn = () => {
      console.log(`Now i will sleep ${time} second`)
      setTimeout(() => {
        console.log(`Already sleep`);
        this.next(); // 这种this要尤其注意
      }, time * 1000);
    }
    this.taskList.push(fn);
    return this;
  }


  next() {
    if (this.taskList.length > 0) {
      const fn = this.taskList.shift();
      fn && fn();
    }
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleep(3).eat('junk food');
