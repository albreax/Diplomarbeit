import ApiManagerProxy from "../apiManager/ApiManagerProxy";
import ITranslationRepository from "./ITranslationRepository";

const url = "/mocking/local.json"; // mock file in public directory
export default class TranslationRepositoryMock implements ITranslationRepository {
  public async getTranslation(key: string) {
    const respond = await ApiManagerProxy.getInstance().fetch(url);
    const json: {key: string, value: string}[] = await respond.json();
    return json?.filter(o => o.key === key)?.pop()?.value;
  }
}