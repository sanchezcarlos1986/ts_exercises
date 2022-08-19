import { binarySearch } from "./binarySearch";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe.each`
  key   | expectedResult
  ${2}  | ${1}
  ${5}  | ${4}
  ${8}  | ${7}
  ${18} | ${-1}
`("binarySearch", ({ key, expectedResult }) => {
  test("render null head", () => {
    expect(binarySearch(array, key)).toBe(expectedResult);
  });
});
