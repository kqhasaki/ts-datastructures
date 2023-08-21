export function binarySearch<T>(
  array: Array<T>,
  targetFunction: (ele: T) => number
): number {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparisonResult = targetFunction(array[mid]!);

    if (comparisonResult === 0) {
      return mid;
    } else if (comparisonResult < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
