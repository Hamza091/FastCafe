import {Add_Cafetarian} from '../constants/Constants'
import { Icafetarian } from '../Interface/Cafetarian'

export const AddCafetarianAction = (params:Icafetarian) =>{
    return{
        type:Add_Cafetarian,
        payload:[params]
    }
}