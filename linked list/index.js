class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertAtBegining = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// insert at end
// take data
// convert it to node
// check if head is null {
//     add
// }
// else {
//     move to end ===>{
//         assume head is last
//         verify (last.next == null){
//             add
//         }
//         else {
//             update last with new value
//         }
//     }
// }
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    // this.head == null in js null treated as false
    this.head = newNode;
    return;
  }
  let last = this.head;

  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

//insert at given node

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log(`the given prev node cannot be null`);
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // if list is empty
  }
  if (!this.head.next) {
    this.head = null; //if there is only one node
  }
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

// delete at specific key
LinkedList.prototype.deleteByKey = function (key) {
  // if list empty
  if (!this.head) {
    console.log("list is empty");
    return;
  }
  // if key is at head
  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }
  let curr = this.head;
  while (curr.next !== null) {
    if (curr.next.data === key) {
      curr.next = curr.next.next;
      return;
    }
    curr = curr.next;
  }
  console.log(`No node found with specified key ${key}`);
};

//search operation

LinkedList.prototype.search = function (key) {
  let curr = this.head;
  while (curr) {
    if (curr.data === key) {
      return true;
    }
    curr = curr.next;
  }
  return false;
};

// traversal

LinkedList.prototype.printList = function () {
  let curr = this.head;

  let listValue = [];
  while (curr) {
    listValue.push(curr.data);
    curr = curr.next;
  }
  console.log(listValue.join(" -> "));
};

// reverse
LinkedList.prototype.reverse = function () {
  let curr = this.head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  this.head = prev;
};
