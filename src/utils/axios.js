import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000
})

request.interceptors.request.use(config => {
  if (localStorage.token) config.headers.Authorization = `Bearer ${localStorage.token}`
  return config
})
request.interceptors.response.use(
  value => {
    if (value.data.code !== '0000') {
      ElMessage({
        message: value.data.msg,
        type: 'error',
        plain: true
      })
      return Promise.reject(value.data)
    }
    return Promise.resolve(value.data)
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
