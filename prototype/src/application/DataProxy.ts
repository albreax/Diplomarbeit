import DataFacade from "../data/Data";
import IData from "../data/IData";

export default class DataProxy implements IData{
  private dataFacade: IData = new DataFacade();
  getTranslation(key: string): Promise<string | undefined> {
    return this.dataFacade.getTranslation(key);
  }
}