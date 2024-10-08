// breadth first

function treeSumWithBFS(root) {
  if (root === null) return 0;

  const queue = [];
  const sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
}

// dfs
const treeSumWithDFS = (root) => {
  if (root === null) return 0;

  return root.key + treeSumWithDFS(root.left) + treeSumWithDFS(root.right);
};
