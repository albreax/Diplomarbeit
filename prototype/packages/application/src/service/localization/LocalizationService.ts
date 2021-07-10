import DataProxy from "../../DataProxy";
import ICacheService from "../cache/ICacheService";
import ServiceFactory from "../ServiceFactory";
import ILocalizationService from "./ILocalizationService";

class LocalizationCache {
  private cache: ICacheService<string>;
  private static instance: LocalizationCache;
  private constructor(){
    const factory = ServiceFactory.getInstance();
    this.cache = factory.createCacheService<string>();
  }
  public getValue(key: string) {return this.cache.getValue(key)};
  public addValue(key: string, value: string) { this.cache.addValue(key, value) }
  public static getInstance() {
    if(!this.instance) {
      this.instance = new LocalizationCache();
    }
    return this.instance
  }
}
export class LocalizationService implements ILocalizationService {
  
  public async getTranslation(key: string) {
    const value = LocalizationCache.getInstance().getValue(key);
    if (!value) {
      const trans = await new DataProxy().getTranslation(key);
      if(trans) LocalizationCache.getInstance().addValue(key, trans);
      return trans;
    }

    return value
  }
}