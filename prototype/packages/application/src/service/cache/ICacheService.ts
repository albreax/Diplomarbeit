export default interface ICacheService<T> {
  getValue: (key: string) => T | undefined;
  addValue: (key: string, value: T) => void;
}