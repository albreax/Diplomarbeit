import { LocalizationKey } from "./domain/localization/LocalizationKey";

/**
 * Interface 
 */
export default interface IApplication {
  getTranslation(key: LocalizationKey) : Promise<string|undefined>;
}