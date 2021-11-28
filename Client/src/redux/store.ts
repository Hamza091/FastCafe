import { combineReducers,createStore } from 'redux'
import {LoginReducer} from './reducers/LoginReducer'
import {ItemReducer} from './reducers/ItemReducer'
const rootReducer= combineReducers(
{
    LoginReducer,
    ItemReducer
}

)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)