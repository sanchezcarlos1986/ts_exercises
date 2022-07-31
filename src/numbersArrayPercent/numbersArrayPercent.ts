const getPercent = (num: number, total: number, decimals: number): string =>
  ((num * 100) / total).toFixed(decimals);

export const numbersArrayPercent = (
  numbers: number[]
): Record<string, string>[] => {
  const total = numbers.reduce((acc, item) => acc + item);
  const result = numbers.map((num) => ({
    [String(num)]: `${getPercent(num, total, 2)}% of ${total}`,
  }));

  return result;
};
