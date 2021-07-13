import DataProxy from "../../DataProxy";
import IDesignConverterService from "./IDesignConverterService";

export default class DesignConverterService implements IDesignConverterService {
    async convertDesign(){

        const res = await new DataProxy().readDesign();
        console.log(res)
    }

}