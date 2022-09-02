import { quickSort } from "./quickSort";

describe("quickSort", () => {
  test("render array result", () => {
    expect(quickSort([-22, 2, 8, 5, -11, 6])).toEqual([-22, -11, 2, 5, 6, 8]);
  });
});
