/** 
 * 实现有并行限制的 Promise 调度器
 * 
 * 题目描述:
 * JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
 * 
 * 思路:
 * 一个队列来存储待执行的任务
 * 一个计数器来跟踪当前正在执行的任务数
 * 一个方法（如addTask）来添加任务到队列中
 * 一个方法（如runTask）来从队列中取出任务并执行，同时确保并发限制得到遵守 
 * 注意需要递归的执行上面这个方法
*/

class Scheduler {
  constructor(limit) {
    this.limit = limit || 2;
    this.queue = [];
    this.runCount = 0;
  }

  addTask(task) {
    this.queue.push(task); // 将异步任务添加任务到队列中
    this.runTask(); // 执行任务
  }

  runTask() {
    if (this.runCount >= this.limit || this.queue.length === 0) {
      return
    }

    this.runCount++;
    const task = this.queue.shift();

    task().then(() => { // 执行异步任务
      this.runCount--;
      this.runTask; // 递归执行任务
    })
  }
}


// 使用示例
const scheduler = new Scheduler(2);

const task1 = () => new Promise((resolve) => setTimeout(() => { console.log('Task 1'); resolve(); }, 1000));
const task2 = () => new Promise((resolve) => setTimeout(() => { console.log('Task 2'); resolve(); }, 2000));
const task3 = () => new Promise((resolve) => setTimeout(() => { console.log('Task 3'); resolve(); }, 3000));
const task4 = () => new Promise((resolve) => setTimeout(() => { console.log('Task 4'); resolve(); }, 4000));

scheduler.addTask(task1);
scheduler.addTask(task2);
scheduler.addTask(task3);
scheduler.addTask(task4);