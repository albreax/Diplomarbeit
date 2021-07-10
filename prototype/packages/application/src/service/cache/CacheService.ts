import ICacheService from "./ICacheService";
export default class CacheService<T> implements ICacheService<T> {
  private cache: {[key : string]: T} = {};
  public getValue(key: string) { return this.cache[key] };
  public addValue(key: string, value: T) { this.cache[key] = value };
} 