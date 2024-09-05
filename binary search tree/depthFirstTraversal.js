// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

const iterativeDepthFirstTraversal = (root) => {
  const values = [];

  if (root === null) {
    return; // return a  message or empty array
  }

  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    // for left
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values;
};

function recursiveDepthFirstTraversal(root) {
  if (root === null) {
    return; // return a  message or empty array
  }

  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);

  //   return [root.key, leftValues, rightValues];
  //   o/p    [a, [b,c,d] ,[e,f,g] ]
  return [root.key, ...leftValues, ...rightValues];
  //   o/p   [a,b,c,d,e,f,g]
}
