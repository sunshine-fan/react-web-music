import * as actionTypes from './constants'
import { Map } from 'immutable'
//默认值 immutable对象取出时 取药get方法
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
})
function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    // case actionTypes.CHANGE_HOT_RECOMMEND:
    //   return state.set("hotRecommends", action.hotRecommends);
    default:
      return state;
  }
}
export default reducer 