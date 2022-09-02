export function quickSort(arr: number[]): number[] {
  const pivot: number = arr[0];
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  if (arr.length < 1) return [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
