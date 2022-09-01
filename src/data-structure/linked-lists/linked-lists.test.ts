import List from "./linked-lists";
import type { NodeType } from "./linked-lists";

describe("Linked List", () => {
  const list = new List();

  test("render null head", () => {
    expect(list.head).toBe(null);
  });

  test("render head with just one head and tail", () => {
    const list = new List();

    list.push(1);

    const expectedHeadAndTail = { data: 1, next: null };

    expect(list.head).toEqual(expectedHeadAndTail);
    expect(list.last).toEqual(expectedHeadAndTail);
  });

  test("render head with just one head and linked nodes", () => {
    const list = new List();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const expectedNodeC: NodeType = { data: 4, next: null };
    const expectedNodeB: NodeType = { data: 3, next: expectedNodeC };
    const expectedNodeA: NodeType = { data: 2, next: expectedNodeB };
    const expectedHead: NodeType = { data: 1, next: expectedNodeA };

    expect(list.head).toEqual(expectedHead);
    expect(list.last).toEqual(expectedNodeC);
  });
});
