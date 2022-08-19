export type Pairs = [number, number];

const setPairs = (arr: number[], key: number): Pairs[] => {
  const pairs: Pairs[] = [];

  for (let i = 0; i < arr.length; i++) {
    arr.map((_, index) => {
      if (arr[i] + arr[index] === key) {
        pairs.push([arr[i], arr[index]]);
      }
    });
  }

  return pairs;
};

export const getPairs = (arr: number[], key: number): Pairs[] => {
  const pairs: Pairs[] = setPairs(arr, key);

  const sortedAndStringifiedItems: string[] = pairs.map((item) =>
    JSON.stringify(item.sort((a, b) => a - b))
  );

  const uniqueArrayCombinations: Pairs[] = [
    ...new Set(sortedAndStringifiedItems),
  ].map((item) => JSON.parse(item));

  return uniqueArrayCombinations;
};
