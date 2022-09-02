class Nodo {
  data: number;
  next: NodeType;
  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

export type NodeType = {
  data: number;
  next: NodeType;
} | null;

export class LinkedList {
  head: NodeType;
  tail: NodeType;
  length: number;
  constructor(value: number) {
    const newNode: NodeType = new Nodo(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  unshift(value: number) {
    const newNode: NodeType = new Nodo(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currentHead = this.head;
      this.head = newNode;
      this.head?.next = currentHead;
    }
    this.length++;
    return this;
  }

  shift() {
    const currentHead = this.head;
    this.head = currentHead?.next;
    this.length--;
    return this;
  }

  push(value: number) {
    const newNode: NodeType = new Nodo(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.tail || !this.head?.next) {
      return this;
    }

    let pre = this.head;
    let temp = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;

      if (!temp?.next) {
        this.tail = pre;
        this.tail.next = null;
      }
    }

    this.length--;
    return this;
  }
}
