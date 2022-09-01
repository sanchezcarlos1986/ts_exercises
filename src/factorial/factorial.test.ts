import { factorial } from "./factorial";

describe.each`
  num  | expectedResult
  ${0} | ${1}
  ${4} | ${24}
  ${5} | ${120}
  ${6} | ${720}
`("factorial", ({ num, expectedResult }) => {
  test("render array result", () => {
    expect(factorial(num)).toEqual(expectedResult);
  });
});
