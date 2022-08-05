class Nodo {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export type INode = {
  data: number;
  next: INode | null;
};

export default class List {
  public head: INode | null;
  public last: INode | null;

  constructor() {
    this.head = null;
    this.last = null;
  }

  push(data: number) {
    const nodo = new Nodo(data);

    if (this.head === null) {
      this.head = nodo;
    } else {
      this.last.next = nodo;
    }

    this.last = nodo;
  }
}
