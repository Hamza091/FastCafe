import {Add_Item} from '../constants/Constants'
import { Iitem } from '../Interface/Item'

export const AddItemAction = (params:Iitem) =>{
    return{
        type:Add_Item,
        payload:[params]
    }
}