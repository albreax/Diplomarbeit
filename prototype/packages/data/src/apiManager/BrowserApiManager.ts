import IApiManager from "./IApiManger";

export default class BrowserApiManager implements IApiManager{
    fetch(input: RequestInfo, init?: RequestInit | undefined) {
        return window.fetch(input, init);
    }
    fs() { 
        return undefined;
    }

}