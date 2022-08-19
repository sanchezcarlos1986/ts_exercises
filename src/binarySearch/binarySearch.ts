/* eslint-disable require-jsdoc */

export function binarySearch(array: number[], value: number) {
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2);

    if (array[midIndex] === value) {
      return midIndex;
    }

    if (array[midIndex] < value) {
      minIndex = midIndex + 1;
    } else {
      maxIndex = midIndex - 1;
    }
  }

  return -1;
}
