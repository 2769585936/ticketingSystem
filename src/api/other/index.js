import request from '@/utils/axios'

export const getTagsApi = () => {
  return request.get('tags')
}
