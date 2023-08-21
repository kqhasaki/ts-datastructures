import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  it("should find the index of target element in a sorted array", () => {
    const sortedArray = [1, 3, 5, 7, 9, 11];

    // Test cases with various target functions
    expect(binarySearch(sortedArray, (ele) => ele - 5)).toBe(2);
    expect(binarySearch(sortedArray, (ele) => ele - 9)).toBe(4);
  });

  it("should handle target not found by returning -1", () => {
    const sortedArray = [2, 4, 6, 8, 10];

    // Test cases where the target element is not found
    expect(binarySearch(sortedArray, (ele) => ele - 7)).toBe(-1);
    expect(binarySearch(sortedArray, (ele) => ele - 1)).toBe(-1);
  });

  it("should handle empty array by returning -1", () => {
    const emptyArray: number[] = [];

    // Test case with an empty array
    expect(binarySearch(emptyArray, (ele) => ele - 42)).toBe(-1);
  });

  it("should handle array with a single element", () => {
    const arrayWithSingleElement = [42];

    // Test case with an array containing a single element
    expect(binarySearch(arrayWithSingleElement, (ele) => ele - 42)).toBe(0);
  });

  it("should handle custom target functions", () => {
    const sortedArray = [10, 25, 30, 40, 50];

    // Test cases with custom target functions
    expect(binarySearch(sortedArray, (ele) => ele - 25)).toBe(1);
    expect(binarySearch(sortedArray, (ele) => ele - 15)).toBe(-1);
  });
});
