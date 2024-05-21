import request from '@/utils/axios'

export const recommendFilmApi = () => {
  return request.get('recommend')
}
