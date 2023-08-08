/**
 * 小顶堆（Min Heap）是一种特殊的二叉堆数据结构，它满足以下定义：
 * 二叉堆结构：小顶堆是一种完全二叉树（或近似完全二叉树），这意味着除了最底层之外，其他层的节点都被完全填充，并且最底层的节点都靠左排列。
 * 堆属性：对于小顶堆中的每个节点，其值都小于等于其左右子节点的值。也就是说，堆中的根节点是整个堆中的最小值。
 * 适用于最小值的查找：小顶堆的结构使得查找最小值的操作非常高效，可以在O(1)的时间内找到堆的根节点，即最小值。
 * 小顶堆常常用于优先级队列（Priority Queue）的实现，以及一些基于堆的排序算法，如堆排序。在小顶堆中，较小的元素被放置在较高的层级，因此可以轻松地找到和删除最小的元素，而不需要遍历整个数据结构。
 * 小顶堆的特性和操作与大顶堆（Max Heap）类似，唯一的不同在于大顶堆中每个节点的值都大于等于其左右子节点的值，而小顶堆中每个节点的值都小于等于其左右子节点的值。
 */
export class MinHeap<T> {
  private heap: T[] = [];

  constructor(private compare: (a: T, b: T) => number) {}

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private shiftUp(index: number): void {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    const value = this.heap[index]!;
    const parentValue = this.heap[parentIndex]!;
    if (this.compare(this.heap[parentIndex]!, this.heap[index]!) > 0) {
      [this.heap[parentIndex], this.heap[index]] = [value, parentValue];
      this.shiftUp(parentIndex);
    }
  }

  private shiftDown(index: number): void {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.compare(this.heap[leftChildIndex]!, this.heap[smallest]!) < 0
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.compare(this.heap[rightChildIndex]!, this.heap[smallest]!) < 0
    ) {
      smallest = rightChildIndex;
    }

    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest]!,
        this.heap[index]!,
      ];
      this.shiftDown(smallest);
    }
  }

  public size(): number {
    return this.heap.length;
  }

  public isEmpty(): boolean {
    return this.heap.length === 0;
  }

  public peek(): T | undefined {
    return this.heap[0];
  }

  public push(value: T): void {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  public pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.shiftDown(0);
    return root;
  }
}
