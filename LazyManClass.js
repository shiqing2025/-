class LazyManClass {
  constructor(name) {
    console.log('hi ', name);
    this.name = name;
    this.taskList = [];

    setTimeout(() => {
      console.log('this.taskList', JSON.parse(JSON.stringify(this.taskList)))
      return this.next();
    }, 0)
  }

  // eat
  eat(type) {
    const _this = this;
    const fn = function () {
      console.log('eat--', type);
      _this.next();
    }
    this.taskList.push(fn);
    return this;
  }

  // sleep
  sleep(second) {
    const _this = this;
    const fn = function () {
      console.log('need sleep ', second, 'second');
      setTimeout(() => {
        console.log('Done')
        _this.next();
      }, second * 1000)
    }
    this.taskList.push(fn);
    return this;
  }

  next() {
    const fn = this.taskList.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleep(3).eat('junk food');