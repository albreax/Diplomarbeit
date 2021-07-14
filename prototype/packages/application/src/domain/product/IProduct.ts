import IPage from "./IPage";
import IProperty from "./IProperty";
import { ProductGroup } from "./ProductGroup";

export default interface IProduct {
    group: ProductGroup;
    pages:IPage[];
    properties: IProperty[];
}