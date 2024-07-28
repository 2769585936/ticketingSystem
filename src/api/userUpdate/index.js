import request from '@/utils/axios'

export const userUpdateApi = data => {
  return request.post('/update/user', data)
}
export const userPictureUpdateApi = data => {
  return request.post('/update/user/picture', data)
}
