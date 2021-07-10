import {IApplication, Application, LocalizationKey} from "@freedesign/application"; 
export default class ApplicationProxy implements IApplication{
  public getTranslation(key: LocalizationKey): Promise<string | undefined> {
    return (new Application()).getTranslation(key);
  }
}