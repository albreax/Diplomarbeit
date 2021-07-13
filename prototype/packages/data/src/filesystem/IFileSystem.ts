export default interface IFileSystem {
  readDesign(): Promise<string>;
  writeUTF8File(path: string, content: string): void;
}