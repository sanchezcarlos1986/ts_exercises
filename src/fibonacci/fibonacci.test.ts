import { fibonacci } from "./fibonacci";

describe.each`
  num  | expectedResult
  ${2} | ${[0, 1]}
  ${5} | ${[0, 1, 1, 2, 3]}
  ${8} | ${[0, 1, 1, 2, 3, 5, 8, 13]}
`("fibonacci", ({ num, expectedResult }) => {
  test("render array result", () => {
    expect(fibonacci(num)).toEqual(expectedResult);
  });
});
