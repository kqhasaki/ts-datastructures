function partition<T>(
  arr: Array<T>,
  left: number,
  right: number,
  compareFunction: (a: T, b: T) => number
): number {
  const pivot = arr[Math.floor((right + left) / 2)]!;
  let i = left;
  let j = right;
  while (i <= j) {
    while (compareFunction(arr[i]!, pivot) < 0) {
      i++;
    }
    while (compareFunction(arr[j]!, pivot) > 0) {
      j--;
    }
    if (i <= j) {
      const temp = arr[j]!;
      arr[j]! = arr[i]!;
      arr[i]! = temp;
      i++;
      j--;
    } else {
      break;
    }
  }

  return i;
}

function quick<T>(
  arr: Array<T>,
  left: number,
  right: number,
  compareFunction: (a: T, b: T) => number
): void {
  let idx: number;
  if (arr.length > 1 && left < right) {
    idx = partition(arr, left, right, compareFunction);
    quick(arr, left, idx - 1, compareFunction);
    quick(arr, idx, right, compareFunction);
  }
}

export function quickSort<T>(
  arr: Array<T>,
  compareFunction: (a: T, b: T) => number
): Array<T> {
  quick(arr, 0, arr.length - 1, compareFunction);
  return arr;
}

export function quickSortNew<T>(
  arr: Array<T>,
  compareFunction: (a: T, b: T) => number
): Array<T> {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIdx = Math.floor((arr.length - 1) / 2);
  const pivot = arr[pivotIdx]!;
  const left: T[] = [];
  const right: T[] = [];

  for (let idx = 0; idx < arr.length; idx++) {
    if (idx === pivotIdx) {
      continue;
    }
    const curr = arr[idx]!;
    if (compareFunction(curr, pivot) < 0) {
      left.push(curr);
    } else {
      right.push(curr);
    }
  }

  return [
    ...quickSortNew(left, compareFunction),
    pivot,
    ...quickSortNew(right, compareFunction),
  ];
}
