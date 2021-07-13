import IApiManager from "./IApiManger";

export default class ApiManagerProxy implements IApiManager {
    private implementation: IApiManager;
    private static instance: ApiManagerProxy;
    private constructor() {
        if(process.title === "node" ) {
            const impl = require("./NodeApiManager");
            this.implementation = new impl.default();
        } else {
            // browser
            const impl = require("./BrowserApiManager");
            this.implementation = new impl.default();
        }

        this.fetch = this.implementation.fetch;
        this.fs = this.implementation.fs;
    }
    fetch;
    fs;

    public static getInstance(){
        if(!this.instance){
            this.instance = new ApiManagerProxy();
        }
        return this.instance;
    }
}