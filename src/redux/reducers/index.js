import { combineReducers } from 'redux'
import { authreducers } from './authreducers'

export const reducer = combineReducers ({
    auth : authreducers
})