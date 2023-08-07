import { LRU } from ".";

describe("LRU Cache", () => {
  let lru: LRU<number, string>;

  beforeEach(() => {
    lru = new LRU<number, string>(3);
  });

  it("should add and retrieve items correctly", () => {
    lru.put(1, "one");
    lru.put(2, "two");
    lru.put(3, "three");

    expect(lru.get(1)).toBe("one");
    expect(lru.get(2)).toBe("two");
    expect(lru.get(3)).toBe("three");
  });

  it("should remove least recently used item when capacity is exceeded", () => {
    lru.put(1, "one");
    lru.put(2, "two");
    lru.put(3, "three");
    lru.put(4, "four"); // Exceeds capacity

    expect(lru.get(1)).toBeUndefined(); // 'one' should have been removed
  });

  it("should return correct cache size", () => {
    lru.put(1, "one");
    lru.put(2, "two");
    lru.put(3, "three");

    expect(lru.size()).toBe(3);
  });

  it("should correctly represent cache as a string", () => {
    lru.put(1, "one");
    lru.put(2, "two");
    lru.put(3, "three");

    expect(lru.toString()).toBe(
      JSON.stringify({
        size: 3,
        cache: new Map([
          [1, "one"],
          [2, "two"],
          [3, "three"],
        ]),
      })
    );
  });
});
