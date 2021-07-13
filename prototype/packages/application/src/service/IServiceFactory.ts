import ICacheService from "./cache/ICacheService";
import IDesignConverterService from "./designConverter/IDesignConverterService";
import ILocalizationService from "./localization/ILocalizationService";
export default interface IServiceFactory {
  designConverterService(): IDesignConverterService;
  createLocalizationService() : ILocalizationService;
  createCacheService<T>() : ICacheService<T>;
}