export const fizzbuzz = (numbers: number[]): string[] => {
  const result = numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
    if (num % 3 === 0) return "fizz";
    if (num % 5 === 0) return "buzz";

    return String(num);
  });

  return result;
};
