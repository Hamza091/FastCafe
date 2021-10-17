import {Update_Login} from '../constants/Constants'
import { Ilogin } from '../Interface/Login'

export const LoginAction = (params:Ilogin) =>{
    return{
        type:Update_Login,
        payload:params
    }
}