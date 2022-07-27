import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
// shallowEqual 改变时进行浅层比较
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
export default memo(function HYTopBanner (props) {
  //state 记录组件内的变量
  const [currentIndex, setCurrentIndex] = useState(0)

  //1.组件与 redux 关联，获取数据何进行操作
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    // getIn 可迭代的方法
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);
  const dispatch = useDispatch();


  // todo 其他hooks
  const bannerRef = useRef();
  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  //组件中不知直接传入 回调函数 需要对其作出一个缓存
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  //todo 其他业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")
  return (
    // 传入css变量
    <BannerWrapper bgImage={bgImage}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className='banner-item' key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} className='image'></img>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <div className='btn'></div>
          <div className='left'></div>
          <div className='right'></div>
        </BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e => bannerRef.current.prev()} ></button>
          <button className='btn right' onClick={e => bannerRef.current.next()} ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})