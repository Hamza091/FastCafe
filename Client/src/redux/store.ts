import { combineReducers,createStore } from 'redux'
import {LoginReducer} from './reducers/LoginReducer'

const rootReducer= combineReducers(
{
    LoginReducer,
}

)

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)