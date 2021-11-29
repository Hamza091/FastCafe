import {Delete_Cafetarian} from '../constants/Constants'

export const DeleteCafetarianAction = (params:string) =>{
    return{
        type:Delete_Cafetarian,
        payload:params
    }
}