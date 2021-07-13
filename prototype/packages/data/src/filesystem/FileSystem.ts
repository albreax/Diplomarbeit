import ApiManagerProxy from "../apiManager/ApiManagerProxy";
import IFileSystem from "./IFileSystem";

const path = __dirname + "/../../__mock__/testdesign.xml";
export default class FileSystem implements IFileSystem{
  readDesign(): Promise<string> {
      return new Promise((resolve, reject) => {
        ApiManagerProxy.getInstance().fs()!.readFile(path, 'utf8', (err, data) => {
        if(err){
          reject(err);
          return;
        }
        resolve(data)
        return ;
      });
    });
  }
  writeUTF8File(path: string, content: string): void {
    throw new Error("Method not implemented.");
  }
}