// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstSearch = (root) => {
  const values = [];

  if (root === null) {
    return; // return a  message or empty array
  }

  const queue = [];

  while (queue.length > 0) {
    const node = queue.shift(); // point of optimization
    values.push(node.key);
    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return values;
};
