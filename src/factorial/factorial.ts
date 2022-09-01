export function factorial(num: number): number {
  let acc = 1;

  for (let i = 2; i <= num; i++) {
    acc *= i;
  }

  return acc;
}

// 5

/**
 * acc = 1 * 2 = 2
 * acc = 2 * 3 = 6
 * acc = 6 * 4 = 24
 * acc = 24 * 5 = 120
 */
