import {Retrieve_Order} from '../constants/Constants'
import {Update_Order} from '../constants/Constants'

const initialState:Array<any> = []

export const OrderReducer = (state=initialState,action:any)=>{
    switch(action.type){

        case Retrieve_Order:
            return state=action.payload
        
        case Update_Order:
            return state.map(ord=>ord.order_id===action.payload.order_id?action.payload:ord)
        
        default:
            return state

    }
}