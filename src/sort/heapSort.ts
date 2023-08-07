import { MinHeap } from "../Heap";

export function heapSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  const minHeap = new MinHeap(compare);
  for (const item of arr) {
    minHeap.push(item);
  }
  const sorted: T[] = [];
  while (!minHeap.isEmpty()) {
    sorted.push(minHeap.pop()!);
  }
  return sorted;
}
