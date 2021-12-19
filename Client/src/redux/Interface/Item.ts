import { Icategory } from "./Category";

export interface Iitem {
    
    item_id:number,
    iname:string,
    available_qty:number,
    price:number,
    item_category:Array<Icategory>;

}