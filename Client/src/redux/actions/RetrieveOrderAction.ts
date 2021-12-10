import {Retrieve_Order} from '../constants/Constants'

export const RetrieveOrderAction = (params:Array<any>) =>{
    return{
        type:Retrieve_Order,
        payload:params
    }
}