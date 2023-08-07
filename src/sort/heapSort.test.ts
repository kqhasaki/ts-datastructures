import { heapSort } from "./heapSort";

describe("heapSort", () => {
  it("should sort the array in ascending order", () => {
    const arr = [9, 4, 7, 1, 3, 6, 5, 2, 8];
    const compareFn = (a: number, b: number) => a - b;

    const sortedArr = heapSort(arr, compareFn);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should work with custom objects", () => {
    const arr = [
      { value: 9 },
      { value: 4 },
      { value: 7 },
      // ... other custom objects ...
    ];

    const compareFn = (a: { value: number }, b: { value: number }) =>
      a.value - b.value;

    const sorted = heapSort(arr, compareFn);

    // ... expected sorted array ...
    expect(sorted.map((item) => item.value)).toEqual([4, 7, 9]);
  });

  // Add more test cases as needed
});
