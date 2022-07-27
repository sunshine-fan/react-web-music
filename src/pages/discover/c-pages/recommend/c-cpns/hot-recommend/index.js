import React, { memo, useEffect } from 'react'
import { RecommendWrapper } from './style'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYThemeCover from '@/components/song-cover'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/contants'

import { getHotRecommendsAction } from '../../store/actionCreators'
export default memo(function HYHotRecommend () {
  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch()
  //其他 hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])
  return (
    <RecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子",]}></HYThemeHeaderRCM>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <HYThemeCover key={item.id} info={item}></HYThemeCover>
              // <div key={index}>{item.name}</div>
            )
          })
        }
      </div>
    </RecommendWrapper>
  )
})