
import {combineReducers} from 'redux'

import {reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'
// combineReducers 用于合并reducer
const  cReducer  =  combineReducers({
  recommend:recommendReducer
})
export default cReducer; 