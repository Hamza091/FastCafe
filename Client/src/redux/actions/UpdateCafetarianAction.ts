import {Update_Cafetarian} from '../constants/Constants'
import { Icafetarian } from '../Interface/Cafetarian'

export const UpdateCafetarianAction = (params:Icafetarian) =>{
    return{
        type:Update_Cafetarian,
        payload:[params]
    }
}