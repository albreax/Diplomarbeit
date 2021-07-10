export default interface ITranslationRepository {
    getTranslation: (keys: string) => Promise<string | undefined>;
}