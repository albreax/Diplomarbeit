import ITranslationRepository from "./ITranslationRepository";
import IUnitedprintAPI from "./IUnitedprintAPI";
import TranslationRepositoryMock from "./TranslationRepositoryMock";

export default class UnitedprintAPI implements IUnitedprintAPI {
  private translationRepo : ITranslationRepository = new TranslationRepositoryMock();
  public async getTranslation(key: string) {
    return this.translationRepo.getTranslation(key) ;
  }

}