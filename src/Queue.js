class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queque {
  constructor() {
    this.first = null;
    this.last = null;
  }

  //o(1)
  enqueue(value) {
    const newNode = new Node(value);

    if (this.first) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }
    this.last = newNode;
  }

  //O(1)
  dequeue() {
    if (this.first) {
      const dequeued = this.first;
      this.first = dequeued.next;
      if (dequeued === this.last) {
        this.last = null;
      }
      return this.dequeued.value;
    }
  }
}
