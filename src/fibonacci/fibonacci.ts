export function fibonacci(n: number): number[] {
  const outputs = [0, 1];

  for (let i = 2; i < n; i++) {
    outputs[i] = outputs[i - 1] + outputs[i - 2];
  }

  return outputs;
}
