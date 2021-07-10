export default interface IUnitedprintAPIFacade {
  getTranslation(key: string) : Promise<string | undefined>;

}