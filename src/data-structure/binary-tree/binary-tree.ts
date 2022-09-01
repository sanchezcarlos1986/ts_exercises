/* eslint-disable require-jsdoc */

export type NodeType = {
  value: number;
  left: NodeType;
  right: NodeType;
} | null;

class Nodo {
  public value: number;
  public left: NodeType;
  public right: NodeType;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  public root: NodeType;
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return !this.root;
  }

  insert(value: number) {
    const nodo: NodeType = new Nodo(value);
    if (Boolean(this.isEmpty())) {
      this.root = nodo;
    } else {
      this.insertNode(this.root, nodo);
    }
  }

  insertNode(root: NodeType, nodo: NodeType) {
    if (nodo?.value < root.value) {
      if (!root.left) {
        root.left = nodo;
      } else {
        this.insertNode(root.left, nodo);
      }
    } else {
      if (!root.right) {
        root.right = nodo;
      } else {
        this.insertNode(root.right, nodo);
      }
    }
  }

  search(root, value) {
    if (!root) return "no root found";

    if (root.value === value) {
      return root;
    } else {
      if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// console.log(bst.search(bst.root, 11));

console.log("::::: PRE ORDER ::::::");
bst.preOrder(bst.root);

console.log("::::: IN ORDER ::::::");
bst.inOrder(bst.root);

console.log("::::: POST ORDER ::::::");
bst.postOrder(bst.root);
