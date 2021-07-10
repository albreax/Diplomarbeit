import { LocalizationKey } from "../../domain/localization/LocalizationKey";

export default interface ILocalizationService {
  getTranslation(key: LocalizationKey) : Promise<string|undefined>;
}