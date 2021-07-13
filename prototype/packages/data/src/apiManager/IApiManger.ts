import fs from "fs";
import {RequestInfo, RequestInit, Response}  from 'node-fetch';
type nodeFetch = (info: RequestInfo, init?: RequestInit | undefined) => Promise<Response>
export default interface IApiManager {
    fetch: typeof window.fetch | nodeFetch;
    fs: () => typeof fs | undefined;
}