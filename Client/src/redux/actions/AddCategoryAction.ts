import {Add_Category} from '../constants/Constants'
import { Icategory } from '../Interface/Category'

export const AddCategory = (params:Icategory) =>{
    return{
        type:Add_Category,
        payload:[params]
    }
}