import {Retrieve_Category} from '../constants/Constants'
import { Icategory } from '../Interface/Category'

export const RetrieveCategoryAction = (params:Array<Icategory>) =>{
    return{
        type:Retrieve_Category,
        payload:params
    }
}