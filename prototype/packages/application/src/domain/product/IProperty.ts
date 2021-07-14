import { PropertyGroup } from "./PropertyGroup";

export default interface IProperty {
    group: PropertyGroup;
    id: number;
    value: string;
}