/*
  树形结构转成列表 
  dfs 递归
*/

// // 广度优先搜索 迭代
const treeToListBFS = (tree) => {
  if (!tree.length) return [];
  const list = [];
  const queue = [...tree];

  const bfs = () => {
    const curNode = queue.shift();
    const { id, name } = curNode;
    list.push({ id, name });

    if (curNode.children) {
      for (const item of curNode.children) {
        queue.push(item);
      }
    }
  }

  while (queue.length > 0) {
    bfs(tree);
  }

  return list;
}


// 深度优先搜索 递归
const treeToListDFS = (tree) => {
  if (!tree.length) return [];

  const list = [];

  const dfs = (nodeList) => {
    if (!nodeList) return; // 1.基本情况（Base case）：递归的终止条件，即当问题规模缩小到一定程度时，可以直接求解的情况。基本情况是递归算法的出口，确保递归过程最终能够结束。在编写递归函数时，需要首先处理基本情况。

    nodeList.forEach(node => {

      list.push({ // 结果合并（Result combination）：在处理完子问题后，需要将子问题的解合并为原问题的解。这个过程可能涉及到数据结构的操作、数学计算等
        id: node.id,
        name: node.name,
      });

      if (node.children) { // 递归处理子节点 
        dfs(node.children); // 2.递归调用（Recursive call）：函数自身的调用。在调用自身时，需要修改输入参数，使问题规模逐渐缩小，从而最终达到基本情况。
      }
    })
  }

  dfs(tree);

  return list;
}


// 示例树形结构
const tree = [
  {
    id: 1,
    name: 'Node 1',
    children: [
      {
        id: 2,
        name: 'Node 1.1',
        children: [
          {
            id: 4,
            name: 'Node 1.1.1',
          },
        ],
      },
      {
        id: 3,
        name: 'Node 1.2',
      },
    ],
  },
  {
    id: 5,
    name: 'Node 2',
    children: [
      {
        id: 6,
        name: 'Node 2.1',
      },
    ],
  },
];

const list1 = treeToListBFS(tree);
const list2 = treeToListDFS(tree);
console.log(list1);
console.log(list2);