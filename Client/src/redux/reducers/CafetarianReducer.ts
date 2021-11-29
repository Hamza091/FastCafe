import {Retrieve_Cafetarian, Update_Cafetarian, Add_Cafetarian, Delete_Cafetarian} from '../constants/Constants'
import { Icafetarian } from '../Interface/Cafetarian'

const initialState:Array<Icafetarian> = []

interface Iaction{
    type:string,
    payload:Array<Icafetarian>
}

export const CafetarianReducer = (state=initialState,action:Iaction & {payload:string})=>{
    switch(action.type){

        case Retrieve_Cafetarian:
            return state=action.payload
        
        case Add_Cafetarian:
            return [action.payload[0],...state]

        case Update_Cafetarian:
            return state.map(caf=>caf.email===action.payload[0].email?action.payload[0]:caf)

        case Delete_Cafetarian:
            return state.filter(caf=>caf.email!==action.payload)

        default:
            return state

    }
}