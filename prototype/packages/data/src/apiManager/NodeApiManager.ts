import fs from "fs";
import IApiManager from "./IApiManger";
import fetch, {RequestInfo, RequestInit} from 'node-fetch';
export default class BrowserApiManager implements IApiManager{
    fetch (url: RequestInfo, init?: RequestInit | undefined) {return fetch(url, init)};
    fs () {
        return fs;
    }
}