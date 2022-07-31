import { fizzbuzz } from "./fizzbuzz";

const numbers = new Array(20).fill(1).map((num, index) => num + index);

const expectedResult = [
  "1",
  "2",
  "fizz",
  "4",
  "buzz",
  "fizz",
  "7",
  "8",
  "fizz",
  "buzz",
  "11",
  "fizz",
  "13",
  "14",
  "fizzbuzz",
  "16",
  "17",
  "fizz",
  "19",
  "buzz",
];

describe("fizzbuzz", () => {
  test(`get fizz, buzz or number`, () => {
    expect(fizzbuzz(numbers)).toEqual(expectedResult);
  });
});
