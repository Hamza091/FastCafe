import {Retrieve_Order} from '../constants/Constants'

const initialState:Array<any> = []

export const OrderReducer = (state=initialState,action:any)=>{
    switch(action.type){

        case Retrieve_Order:
            return state=action.payload
        
        default:
            return state

    }
}