import React ,{ memo, useEffect} from 'react'
import {renderRoutes} from 'react-router-config'

import request from '@/services/axios'

import {DiscoverWrapper,TopMenu} from './style'
import {dicoverMenu} from '@/services/local-data'
import {NavLink} from "react-router-dom"


export default memo(function HYDiscover(props){
  useEffect(()=>{
    request({
      url:'./banner'
    }).then(res=>{
      console.log(res);
    })
  })
  const {route} = props; 
  return(
    <DiscoverWrapper>
        <div className='top'>
          <TopMenu className='wrap-v1'>
            {
              dicoverMenu.map((item,index)=>{
                return(
                  <div className='item' key={item.title}>
                      <NavLink to={item.link}>{item.title}</NavLink>
                  </div>
                )
              })
            }
          </TopMenu>
        </div>
        {/* //传入当前路由的子路由 */}
        {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})