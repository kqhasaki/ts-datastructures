import { MinHeap } from "./MinHeap"; // 假设你的 MinHeap 类在 MinHeap.ts 文件中

describe("MinHeap", () => {
  it("should correctly push and pop elements", () => {
    const minHeap = new MinHeap<number>((a, b) => a - b);

    minHeap.push(5);
    minHeap.push(3);
    minHeap.push(8);
    minHeap.push(1);
    minHeap.push(10);

    expect(minHeap.pop()).toBe(1);
    expect(minHeap.pop()).toBe(3);
    expect(minHeap.pop()).toBe(5);
    expect(minHeap.pop()).toBe(8);
    expect(minHeap.pop()).toBe(10);
    expect(minHeap.pop()).toBeUndefined();
  });

  it("should correctly return the size and peek", () => {
    const minHeap = new MinHeap<number>((a, b) => a - b);

    minHeap.push(5);
    minHeap.push(3);

    expect(minHeap.size()).toBe(2);
    expect(minHeap.peek()).toBe(3);

    minHeap.push(8);

    expect(minHeap.size()).toBe(3);
    expect(minHeap.peek()).toBe(3);
  });
});
