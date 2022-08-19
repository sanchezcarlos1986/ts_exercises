class Nodo {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class Stack {
  public top;
  constructor() {
    this.top = null;
  }

  push(item) {
    const nodo = new Nodo(item, this.top);
    this.top = nodo;
  }

  deleteByNode(element: number) {
    let aux = this.top;

    // if (!aux) return null

    if (aux.data === element) {
      this.top = aux.prev;
      return;
    }

    while (aux?.prev?.data !== element) {
      aux = aux?.prev;
    }

    aux.prev = aux.prev.prev;
  }
}

const stack = new Stack();

stack.push(15);
stack.push(10);
stack.push(23);

console.log(stack.top);

stack.deleteByNode(10);

console.log(stack.top);
