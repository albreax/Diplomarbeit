import {IData, Data} from "@freedesign/data";

export default class DataProxy implements IData{
  private data: IData = new Data();
  readDesign(): Promise<string> {
    return this.data.readDesign();
  }
  writeUTF8File(path: string, content: string): void {
    this.data.writeUTF8File(path, content);
  }
  getTranslation(key: string): Promise<string | undefined> {
    return this.data.getTranslation(key);
  }
}