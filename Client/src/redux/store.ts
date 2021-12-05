import { combineReducers,createStore } from 'redux'
import {LoginReducer} from './reducers/LoginReducer'
import {ItemReducer} from './reducers/ItemReducer'
import {CafetarianReducer} from './reducers/CafetarianReducer'
import {CategoryReducer} from './reducers/CategoryReducer'

const rootReducer= combineReducers(
{
    LoginReducer,
    ItemReducer,
    CafetarianReducer,
    CategoryReducer
}

)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)