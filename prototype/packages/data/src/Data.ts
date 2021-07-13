import FileSystem from "./filesystem/FileSystem";
import IFileSystem from "./filesystem/IFileSystem";
import IData from "./IData";
import IUnitedprintAPI from "./unitedprintAPI/IUnitedprintAPI";
import UnitedprintAPI from "./unitedprintAPI/UnitedprintAPI";

export default class Data implements IData{
  private unitedprintAPI : IUnitedprintAPI = new UnitedprintAPI();
  private fileSystem : IFileSystem = new FileSystem();
  readDesign(): Promise<string> {
    return this.fileSystem.readDesign();
  }
  writeUTF8File(path: string, content: string): void {
    this.fileSystem.writeUTF8File(path, content)
  }
  getTranslation(key: string): Promise<string | undefined> {
    return this.unitedprintAPI.getTranslation(key);
  }
}