let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: 'qq',
  age: 18
}


const render = (template, data) => {
  const regExp = /\{\{(\w+)\}\}/g;
  return template.replace(regExp, (match, key) => {
    return data[key];
  })
}

console.log(render(template, data)); // 我是qq，年龄18，性别undefined
