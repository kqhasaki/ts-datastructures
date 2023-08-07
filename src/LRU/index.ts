export class LRU<K, V> {
  private cache: Map<K, V> = new Map();
  public constructor(private capacity: number) {}

  public get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value != undefined) {
      // Move the accessed item to the end of the map (most recently used)
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  public put(key: K, value: V): void {
    if (this.cache.size >= this.capacity) {
      // Remove the least recently used item (first item in the map)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  public size(): number {
    return this.cache.size;
  }

  public toString(): string {
    return JSON.stringify({ size: this.cache.size, cache: this.cache });
  }
}
