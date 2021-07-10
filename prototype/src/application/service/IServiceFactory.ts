import ICacheService from "./cache/ICacheService";
import ILocalizationService from "./localization/ILocalizationService";
export default interface IServiceFactory {
  createLocalizationService() : ILocalizationService;
  createCacheService<T>() : ICacheService<T>;
}