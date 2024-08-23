import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
const baseDefault = import.meta.env.VITE_APP_API_BASEURL
console.log(baseDefault)
const request = axios.create({
  baseURL: baseDefault + '/api',
  timeout: 10000
})

request.interceptors.request.use(config => {
  if (localStorage.token) config.headers.Authorization = `Bearer ${localStorage.token}`
  return config
})
request.interceptors.response.use(
  response => {
    if (response.data.message) {
      let message = response.data.message
      ElMessage({
        type: message.type,
        message: message.message,
        grouping: true
      })
    }
    if (response.status != 200 || response.data.code !== '0000') {
      return Promise.reject(response.data)
    }
    return response.data
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
