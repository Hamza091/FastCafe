import {Retrieve_Items, Update_Item, Add_Item, Delete_Item} from '../constants/Constants'
import { Iitem } from '../Interface/Item'

const initialState:Array<Iitem> = []

interface Iaction{
    type:string,
    payload:Array<Iitem>
}



export const ItemReducer = (state=initialState,action:Iaction & {payload:number})=>{
    switch(action.type){

        case Retrieve_Items:
            return state=action.payload
        
        case Add_Item:
            return [action.payload[0],...state]

        case Update_Item:
            return state.map(item=>item.item_id===action.payload[0].item_id?action.payload[0]:item)

        case Delete_Item:
            return state.filter(item=>item.item_id!==action.payload)

        default:
            return state

    }
}