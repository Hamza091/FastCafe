import {Update_Login} from '../constants/Constants'
import { Ilogin } from '../Interface/Login'

const initialState:Ilogin = {success:false}

interface Iaction{
    type:string,
    payload:Ilogin
}

export const LoginReducer = (state=initialState,action:Iaction)=>{
    switch(action.type){

        case Update_Login:
            return state=action.payload

        default:
            return state

    }
}