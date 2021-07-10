import Application from "../../application/Applicaton";
import { LocalizationKey } from "../../application/domain/localization/LocalizationKey";
import IApplication from "../../application/IApplication";

export default class ApplicationProxy implements IApplication{
  public getTranslation(key: LocalizationKey): Promise<string | undefined> {
    return (new Application()).getTranslation(key);
  }
}