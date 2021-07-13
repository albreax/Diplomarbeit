import {IApplication, Application, LocalizationKey} from "@freedesign/application"; 
export default class ApplicationProxy implements IApplication{
  convertDesign(): void {
    new Application().convertDesign();
  }
  public getTranslation(key: LocalizationKey): Promise<string | undefined> {
    return (new Application()).getTranslation(key);
  }
}