import * as actionTypes from './constants'
import {
  getTopBanners,
  getHotRecommends
} from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getTopBannerAction = () => {
  return dispatch => {
    //发送网络请求？
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}
export const getHotRecommendsAction = (limit) => {
  return dispatch => {
    //发送网络请求？
    getHotRecommends(limit).then(res => {
      console.log(res.result);
      dispatch(changeHotRecommendsAction(res))
    })
  }
}