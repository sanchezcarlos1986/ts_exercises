import { numbersArrayPercent } from "./numbersArrayPercent";

const numbers = [1, 2, 3];

const expectedResult = [
  { "1": "16.67% of 6" },
  { "2": "33.33% of 6" },
  { "3": "50.00% of 6" },
];

describe("numbersArrayPercent", () => {
  test(`get total and percents`, () => {
    expect(numbersArrayPercent(numbers)).toEqual(expectedResult);
  });
});
