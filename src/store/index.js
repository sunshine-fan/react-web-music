// 单个状态管理 单个reducer 需要进行统一管理
//applyMiddleware 使用中间件 时导入  thunk中间件
import {createStore,applyMiddleware,compose }from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'
//  redux-devtools 如果您使用中间件和增强器设置商店，请更改 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
const store = createStore(reducer,composeEnhancers(
  //合并多个中间件
  applyMiddleware(thunk)
));

export default store;