import IData from "./IData";
import IUnitedprintAPIFacade from "./unitedprintAPI/IUnitedprintAPI";
import UnitedprintAPI from "./unitedprintAPI/UnitedprintAPI";

export default class DataFacade implements IData{
  private unitedprintAPI : IUnitedprintAPIFacade = new UnitedprintAPI();
  getTranslation(key: string): Promise<string | undefined> {
    return this.unitedprintAPI.getTranslation(key);
  }
}