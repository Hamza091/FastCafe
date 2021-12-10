export interface IOrder {
    order_id:number,
    description:string,
    start_date:Date,
    status:string,
    completed_by:string,
    total_price:number,
    placed_by:string,
    students:any,
    order_items:Array<any>,
    item:Array<any>
}