import request from '@/utils/axios'

// 推荐
export const recommendFilmApi = () => {
  return request.get('recommend')
}

// 热售
export const hotSaleApi = params => {
  return request.get('hotSale', {
    params
  })
}

// 即将上映
export const preSaleApi = params => {
  return request.get('preSale', {
    params
  })
}

export const getMovieInfoApi = params => {
  return request.get('movieInfo', {
    params
  })
}
