/*
  列表转成树形结构
 */

const list = [
  { id: 1, name: 'Node 1', parentId: null },
  { id: 2, name: 'Node 1.1', parentId: 1 },
  { id: 3, name: 'Node 1.2', parentId: 1 },
  { id: 4, name: 'Node 1.1.1', parentId: 2 },
  { id: 5, name: 'Node 2', parentId: null },
  { id: 6, name: 'Node 2.1', parentId: 5 },
];

const listToTree = (list) => {
  if (!list.length) return [];

  const cache = {};
  const res = [];

  for (const item of list) {
    cache[item.id] = { ...item, children: [] };
    if (!cache[item.parentId]) {
      res.push(cache[item.id]); // 如果当前节点没有父节点，将其作为根节点添加到结果数组中
    } else {
      cache[item.parentId].children.push(cache[item.id]); //  // 如果当前节点有父节点，将当前节点添加到父节点的children数组中
    }
  }
  return res;
}

console.log(listToTree(list));