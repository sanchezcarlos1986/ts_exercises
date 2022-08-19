import { getPairs, Pairs } from "./findPairsToGetKey";

describe.each`
  array                     | key   | expectedResult
  ${[0, 9, 7, 12, 5, 8, 3]} | ${12} | ${[[0, 12], [3, 9], [5, 7]]}
  ${[0, 9, 7, 12, 5, 8, 3]} | ${15} | ${[[7, 8], [3, 12]]}
`("getPairs", ({ array, key, expectedResult }) => {
  test("get pairs that sum a result from an array", () => {
    const list: Pairs[] = getPairs(array, key);

    expect(list).toEqual(expectedResult);
  });
});
