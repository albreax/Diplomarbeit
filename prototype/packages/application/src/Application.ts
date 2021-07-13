
import { LocalizationKey } from "./domain/localization/LocalizationKey";
import IApplication from "./IApplication";
import ServiceFactory from "./service/ServiceFactory";

export default class Application implements IApplication {
  public async getTranslation(key: LocalizationKey) {
    return ServiceFactory.getInstance().createLocalizationService().getTranslation(key);
  };
  
  public convertDesign(){
    return ServiceFactory.getInstance().designConverterService().convertDesign();
  }
}