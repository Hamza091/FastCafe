import { combineReducers,createStore } from 'redux'
import {LoginReducer} from './reducers/LoginReducer'
import {ItemReducer} from './reducers/ItemReducer'
import {CafetarianReducer} from './reducers/CafetarianReducer'
const rootReducer= combineReducers(
{
    LoginReducer,
    ItemReducer,
    CafetarianReducer
}

)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)