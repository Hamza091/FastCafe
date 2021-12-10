import { combineReducers,createStore } from 'redux'
import {LoginReducer} from './reducers/LoginReducer'
import {ItemReducer} from './reducers/ItemReducer'
import {CafetarianReducer} from './reducers/CafetarianReducer'
import {CategoryReducer} from './reducers/CategoryReducer'
import {OrderReducer} from './reducers/OrderReducer'

const rootReducer= combineReducers(
{
    LoginReducer,
    ItemReducer,
    CafetarianReducer,
    CategoryReducer,
    OrderReducer
}

)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)