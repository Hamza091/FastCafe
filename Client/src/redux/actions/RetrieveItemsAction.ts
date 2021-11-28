import {Retrieve_Items} from '../constants/Constants'
import { Iitem } from '../Interface/Item'

export const RetrieveItemsAction = (params:Array<Iitem>) =>{
    return{
        type:Retrieve_Items,
        payload:params
    }
}