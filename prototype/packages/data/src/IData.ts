import IFileSystem from "./filesystem/IFileSystem";
import IUnitedprintAPI from "./unitedprintAPI/IUnitedprintAPI";

export default interface IData extends 
IUnitedprintAPI,
IFileSystem
{}