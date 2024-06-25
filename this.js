/** 
 * this 指向相关问题
 * 1. 在全局作用域中，`this` 指向全局对象（在浏览器中是 `window` 对象）
 * 2. 在函数中，`this` 的指向取决于函数的调用方式
 *  如果是普通的函数调用，`this` 仍然指向全局对象（非严格模式下）
 * 3. 在对象的方法中，`this` 指向调用该方法的对象
 * 4. 在构造函数中，`this` 指向新创建的对象实例
 * 5. 使用 `call`、`apply` 或 `bind` 方法调用函数时，可以显式地指定 `this` 的值。
*/

// 一些题目
{
  var length = 10;

  function fn() {
    console.log('fn----', this);
    return this.length + 1;
  }

  var obj1 = {
    length: 5,

    test1: function () {
      console.log('test1----', this);
      return fn();
    },
  };

  obj1.test2 = fn;
  const c = obj1.test2.call();
  console.log('c----:', c); // 11
  const d = obj1.test2();
  console.log('d----:', d); // 6

  const a = obj1.test1.call(); // 11
  const b = obj1.test1(); // 11
}

{
  var obj = {
    a: 10,
    b: this.a + 10,
    fn: function () {
      return this.a;
    }
  }
  console.log(obj.b); NaN
  console.log(
    obj.fn(), // 10
    obj.fn // f
  );
}

{
  var a = 20;
  var obj = {
    a: 10,
    getA: function () {
      return this.a;
    }
  }
  console.log(obj.getA()); // 10
  var test = obj.getA;
  console.log(test()); // 20
}

{
  var a = 5;
  function fn1() {
    var a = 6;
    console.log(a); // 6
    console.log(this.a); // 5
  }
  function fn2(fn) {
    var a = 7;
    fn();
  }
  var obj = {
    a: 8,
    getA: fn1

  }
  fn2(obj.getA);
}

// 4
{
  function fn() {
    'use strict'; // 严格模式
    var a = 1;
    var obj = {
      a: 10,
      c: this.a + 20
    }
    return obj.c;
  }
  console.log(fn());//  Cannot read properties of undefined (reading 'a')
}


{
  // 声明一个构造函数 
  function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
  }
  // Person(); 
  Person.prototype.getName = function () {
    console.log(this);
  };
  var p1 = new Person("test", 18);
  p1.getName(); // {test 18 }
}

{
  var obj = {
    foo: "test",
    fn: function () {
      var mine = this;
      console.log(this.foo); // test
      console.log(mine.foo); // test
      (function () {
        console.log(this.foo); // undefined
        console.log(mine.foo);  // test
      })();
    }
  };
  obj.fn();
}

{
  function foo() {
    console.log(this.a);
  }
  var a = 2;
  var o = {
    a: 3,
    foo: foo
  };
  var p = { a: 4 };

  o.foo(); // 3
  (p.foo = o.foo)(); // 2
  p.foo = o.foo;
  p.foo(); // 4
}

{
  function foo() {
    console.log(this.a);
  }
  var obj1 = {
    a: 3,
    foo: foo
  };
  var obj2 = {
    a: 5,
    foo: foo
  };
  obj1.foo(); // 3
  obj2.foo(); // 5

  obj1.foo.call(obj2); // 5
  obj2.foo.call(obj1); // 3
}

// 9
{
  function test(arg) {
    this.x = arg;
    return this;
  }

  var x = test(5); // window
  var y = test(6); // window.x = 6
  console.log('x.x---:', x.x); // 6.x = undefined 
  console.log('y.x', y.x); //  6
}

{

  var obj = {
    data: [1, 2, 3, 4, 5],
    data2: [1, 2, 3, 4, 5],
    fn: function () {
      console.log("--test--");
      console.log(this);
      return this.data.map(function (item) {
        console.log(this);
        return item * 2;
      });
    },
    fn2: function () {
      console.log("---test2---");
      console.log(this);
      return this.data2.map(item => {
        console.log(this);
        return item * 2;
      });
    }
  };
  obj.fn();
  obj.fn2();
}