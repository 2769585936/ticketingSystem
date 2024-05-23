import request from '@/utils/axios'

//根据id 获取影城
export const getCinemasApi = params => {
  return request.get('cinemas', {
    params
  })
}
export const getCinemasTimeApi = params => {
  return request.get('cinemasTime', {
    params
  })
}

//
export const getCinemasIdApi = params => {
  return request.get('cinemasid', {
    params
  })
}
