import request from '@/utils/axios'

export const logonApi = data => {
  return request.post('/login', data)
}
