import {Update_Order} from '../constants/Constants'

export const UpdateOrderStatusAction = (params:any) =>{
    return{
        type:Update_Order,
        payload:params
    }
}