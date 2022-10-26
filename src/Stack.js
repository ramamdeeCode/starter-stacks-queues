class Node {
  constructor(value, next) {
    this.value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  //O(1)
  push(value) {
    // Create a new node,
    // add data to the new node, and
    // have the pointer point to the top
    this.top = new Node(value, this.top);
    return this;
  }

  //0(1)
  pop(value) {
    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }
}
