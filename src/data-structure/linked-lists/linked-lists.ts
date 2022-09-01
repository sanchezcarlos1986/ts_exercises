class Nodo {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export type NodeType = {
  data: number;
  next: NodeType;
} | null;

export default class List {
  public head: NodeType;
  public last: NodeType;

  constructor() {
    this.head = null;
    this.last = null;
  }

  push(data: number): void {
    const nodo = new Nodo(data);

    if (this.head === null) {
      this.head = nodo;
    } else {
      this.last.next = nodo;
    }

    this.last = nodo;
  }

  print(): void {
    let aux = this.head;

    while (aux) {
      console.log(aux.data);
      aux = aux.next;
    }
  }

  getLastElement(): NodeType {
    let aux = this.head;

    while (aux?.next) {
      aux = aux.next;
    }

    return aux;
  }

  getElementByIndex(index: number): NodeType {
    let aux = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      aux = aux?.next;
      currentIndex++;
    }

    return aux;
  }

  find(element: number): NodeType {
    let aux = this.head;

    while (aux.data !== element) {
      aux = aux?.next;
    }

    return aux;
  }

  deleteByNode(element: number) {
    let aux = this.head;

    // if (!aux) return null

    if (aux.data === element) {
      this.head = aux.next;
      return;
    }

    while (aux?.next?.data !== element) {
      aux = aux?.next;
    }

    aux.next = aux.next.next;
  }
}
