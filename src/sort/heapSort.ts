import { MinHeap } from "../Tree";

/**
 * 堆排序（Heap Sort）是一种基于二叉堆（堆）的排序算法，它利用了堆的特性来实现高效的排序操作。堆排序的时间复杂度为O(n log n)，其中n是要排序的元素数量。相比于其他排序算法，堆排序的优点在于具有较好的时间复杂度，并且不需要额外的辅助空间。
 * 堆排序的主要步骤如下：
 * 构建最大堆（或最小堆）：将待排序的元素构建成一个二叉堆。如果要实现升序排序，则构建最大堆；如果要实现降序排序，则构建最小堆。构建堆的时间复杂度为O(n)。
 * 排序：将堆顶元素（根节点）与堆的最后一个叶子节点交换位置，然后将堆的大小减一（排除最后一个已排序的元素），并对堆顶元素进行堆化操作（保持堆的性质）。重复这个过程，直到堆的大小为1，即所有元素都已排序。堆化的时间复杂度为O(log n)，重复这个步骤n-1次，因此整个排序的时间复杂度为O(n log n)。
 */
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
