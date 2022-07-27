import React, { memo, useEffect } from 'react'
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { getNewAlbum } from '@/services/recommend'
export default memo(function HYNewAlbum () {
  useEffect(() => {
    getNewAlbum(10).then(res => {
      console.log(res);
    })
  }, [])
  return (
    <div>
      <HYThemeHeaderRCM title="新碟上架"></HYThemeHeaderRCM>
    </div>
  )
})