class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
DoublyLinkedList.prototype.insertAtBegining = function (data) {
  const newNode = new Node(data, this.head, null);

  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
};
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);

  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
};
DoublyLinkedList.prototype.insertAfter = function (prevNode, data) {
  if (prevNode == null) {
    console.log("invalid prev node");
  }
  const newNode = new Node(data, prevNode.next, prevNode);

  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
    // prevNode.next = newNode;
  }
  prevNode.next = newNode;

  //tail
  if (newNode.next == null) {
    this.tail == newNode;
  }
};
DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    console.log("nothing to delete");
    return;
  }
  if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};
DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    console.log("DoublyLinkedList is empty");
    return;
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};
DoublyLinkedList.prototype.reverse = function () {
  // let curr = this.head;
  // let temp = null;

  // while (curr) {
  //   ///swapping
  //   temp = curr.prev;
  //   curr.prev = curr.next;
  //   curr.next = temp;

  //   //move to next node
  //   curr = curr.prev;
  // }
  // if (temp != null) {
  //   this.tail = this.head;
  //   this.head = temp.prev;
  // }
  let curr = this.head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    curr.prev = next;
    prev = curr;
    curr = next;
  }
  // After the loop, prev will be the new head of the reversed list
  if (prev) {
    this.tail = this.head; // Update tail to be the old head
    this.head = prev; // Update head to be the new head
  }
};
