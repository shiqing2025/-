在 JavaScript 中，扩展语法（spread syntax）的 `...` 操作符有两种主要的使用场景：

1. **将参数收集到一个数组中**：当在定义函数时，在参数列表中使用 `...` 操作符，它会将所有传入的参数收集到一个数组中。例如：

    ```javascript
    function foo(...args) {
      console.log(args);
    }

    foo(1, 2, 3, 4); // 输出: [1, 2, 3, 4]
    ```

    在这个示例中，函数 `foo` 接受任意数量的参数，并将它们收集到 `args` 数组中。

2. **将数组展开为一个参数列表**：当在调用函数时，在参数列表中使用 `...` 操作符，它会将数组中的元素展开为一个参数列表。例如：

    ```javascript
    function bar(a, b, c, d) {
      console.log(a, b, c, d);
    }

    const numbers = [1, 2, 3, 4];
    bar(...numbers); // 输出: 1 2 3 4
    ```

    在这个示例中，我们有一个数组 `numbers`，我们使用 `...` 操作符将它展开为参数列表，然后传递给函数 `bar`。

总的来说，可以根据上下文来决定 `...` 操作符的行为：在函数定义（参数收集）中，它将参数收集到数组中；在函数调用（参数展开）中，它将数组展开为参数列表。