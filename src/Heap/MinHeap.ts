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
