import { mergeArraysByKey } from "./mergeArraysByKey";

const arrayA = [
  { id: 9, name: "Carlos", age: 35 },
  { id: 10, name: "Rafaela", age: 7 },
];

const arrayB = [
  {
    id: 5,
    name: "Carlos",
    email: "sanchez.carlos.1986@gmail.com",
    registered: true,
  },
  {
    id: 6,
    name: "Rafaela",
    email: "rafis@gmail.com",
    registered: true,
  },
];

const expectedResult = [
  {
    id: 1,
    name: "Carlos",
    age: 35,
    email: "sanchez.carlos.1986@gmail.com",
    registered: true,
  },
  {
    id: 2,
    name: "Rafaela",
    age: 7,
    email: "rafis@gmail.com",
    registered: true,
  },
];

describe("mergeArraysByKey", () => {
  test(`return merged arrays by key`, () => {
    expect(
      mergeArraysByKey({
        arrayA,
        arrayB,
        key: "name",
      })
    ).toEqual(expectedResult);
  });
});
