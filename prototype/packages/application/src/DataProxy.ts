import {IData, Data} from "@freedesign/data";

export default class DataProxy implements IData{
  private data: IData = new Data();
  getTranslation(key: string): Promise<string | undefined> {
    return this.data.getTranslation(key);
  }
}