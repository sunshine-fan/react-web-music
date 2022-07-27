
// import {combineReducers} from 'redux'
import { combineReducers } from 'redux-immutable'
// redux - immutable 中的 combineReducers对象合并state的时候会帮对象转换为immutable 对象
import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
// combineReducers 用于合并reducer
const cReducer = combineReducers({
  recommend: recommendReducer
})
export default cReducer; 