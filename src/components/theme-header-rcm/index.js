import React, { memo } from 'react'
import { HeaderWrapper } from './style'

// prop传值校验
import PropTypes from 'prop-types'

// import propstype
const HYThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props;
  return (
    <HeaderWrapper className='sprite_02'>
      <div className="left">
        <h3 className='title'>{title}</h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  <span className="divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
//开启prop传值校验 父组件传值 类型 + 是否必穿
HYThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}
//是否存在默认值
HYThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default HYThemeHeaderRCM