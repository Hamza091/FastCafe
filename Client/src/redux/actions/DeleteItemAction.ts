import {Delete_Item} from '../constants/Constants'

export const DeleteItemAction = (params:number) =>{
    return{
        type:Delete_Item,
        payload:params
    }
}