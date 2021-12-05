import {Add_Category,Retrieve_Category} from '../constants/Constants'
import { Icategory } from '../Interface/Category'

const initialState:Array<Icategory> = []

interface Iaction{
    type:string,
    payload:Array<Icategory>
}



export const CategoryReducer = (state=initialState,action:Iaction)=>{
    switch(action.type){

        case Retrieve_Category:
            return state=action.payload
        
        case Add_Category:
            return [action.payload[0],...state]

        default:
            return state

    }
}