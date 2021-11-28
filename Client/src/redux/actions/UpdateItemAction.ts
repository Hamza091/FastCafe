import {Update_Item} from '../constants/Constants'
import { Iitem } from '../Interface/Item'

export const UpdateItemAction = (params:Iitem) =>{
    return{
        type:Update_Item,
        payload:[params]
    }
}