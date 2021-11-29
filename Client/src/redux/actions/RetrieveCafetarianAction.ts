import {Retrieve_Cafetarian} from '../constants/Constants'
import { Icafetarian } from '../Interface/Cafetarian'

export const RetrieveCafetarianAction = (params:Array<Icafetarian>) =>{
    return{
        type:Retrieve_Cafetarian,
        payload:params
    }
}