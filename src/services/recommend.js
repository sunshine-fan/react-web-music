import request from './axios'

export function getTopBanners () {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends (limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum (limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}