
import CacheService from "./cache/CacheService";
import IServiceFactory from "./IServiceFactory";
import { LocalizationService } from "./localization/LocalizationService";

export default class ServiceFactory implements IServiceFactory{
  private static instance: IServiceFactory;
  private constructor(){}
  public createLocalizationService() {
    return new LocalizationService();
  }

  public createCacheService<T>() {
    return new CacheService<T>();
  }
  public static getInstance() {
    if(!this.instance) {
      this.instance = new ServiceFactory();
    }
    return this.instance
  }
}