import React, { memo } from 'react'

import HYTopBanner from './c-cpns/top-bannner'
import HYHotRecommend from './c-cpns/hot-recommend'
import HYNewAlbum from './c-cpns/new-album'
import HYRecommendRanking from './c-cpns/ranking-list'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

function HYRecommend (props) {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HYHotRecommend>
          </HYHotRecommend>
          <HYNewAlbum></HYNewAlbum>
          <HYRecommendRanking></HYRecommendRanking>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(HYRecommend)
//todo 重构前 未使用 redux - hooks
// function HYRecommend (props) {
//   console.log(props);
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   //发起网络请求
//   return (
//     <div>
//       <h2>HYRecommend{topBanners.length}</h2>
//     </div>
//   )
// }
// // const aa = () => {
// //   console.log("111111");
// // }
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// //返回一个高阶组件
// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend)) 