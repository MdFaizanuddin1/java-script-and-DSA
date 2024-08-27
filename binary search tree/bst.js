//implimentation line 2-15
class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    //node --> root node
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    // node -> root
    if (node === null) return null;

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      //leaf node
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        //only one node
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }
  inOrder(node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }

  preOrderTraversal() {
    const result = [];
    this.preOrder(this.root, result);
    return result;
  }
  preOrder(node, result) {
    if (node !== null) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }
  postOrderTraversal() {
    const result = [];
    this.postOrder(this.root, result);
    return result;
  }
  postOrder(node, result) {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.key);
    }
  }
}
