import { quickSort, quickSortNew } from "./quickSort"; // 替换成你的模块路径

describe("QuickSort", () => {
  const compareFunction = (a: number, b: number) => a - b;

  describe("quickSort", () => {
    test("should sort an empty array", () => {
      const inputArray: number[] = [];
      const sortedArray = quickSort(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual([]);
    });

    test("should sort an array with a single element", () => {
      const inputArray = [1];
      const sortedArray = quickSort(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual([1]);
    });

    test("should sort an array with multiple elements", () => {
      const inputArray = [7, 2, 1, 6, 8, 5, 3, 4];
      const sortedArray = quickSort(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual(inputArray.slice().sort(compareFunction));
    });

    test("should handle duplicate elements", () => {
      const inputArray = [5, 2, 1, 6, 5, 5, 3, 4];
      const sortedArray = quickSort(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual(inputArray.slice().sort(compareFunction));
    });

    test("should sort a large array", () => {
      const inputArray = Array.from({ length: 1000 }, () => Math.random());
      const sortedArray = quickSort(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual(inputArray.slice().sort(compareFunction));
    });

    // ...其他测试用例
  });

  describe("quickSortNew", () => {
    test("should sort an empty array", () => {
      const inputArray: number[] = [];
      const sortedArray = quickSortNew(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual([]);
    });

    test("should sort an array with a single element", () => {
      const inputArray = [1];
      const sortedArray = quickSortNew(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual([1]);
    });

    test("should sort an array with multiple elements", () => {
      const inputArray = [7, 2, 1, 6, 8, 5, 3, 4];
      const sortedArray = quickSortNew(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual(inputArray.slice().sort(compareFunction));
    });

    test("should handle duplicate elements", () => {
      const inputArray = [5, 2, 1, 6, 5, 5, 3, 4];
      const sortedArray = quickSortNew(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual(inputArray.slice().sort(compareFunction));
    });

    test("should sort a large array", () => {
      const inputArray = Array.from({ length: 1000 }, () => Math.random());
      const sortedArray = quickSortNew(inputArray.slice(), compareFunction);
      expect(sortedArray).toEqual(inputArray.slice().sort(compareFunction));
    });

    // ...其他测试用例
  });
});
