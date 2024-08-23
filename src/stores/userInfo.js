import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { userUpdateApi, userPictureUpdateApi } from '@/api/userUpdate'

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
export const useUserInfo = defineStore(
  'userInfo',
  () => {
    const userInfo = ref(null)
    const setUesrInfo = (data, token) => {
      userInfo.value = data
      if (token) localStorage.token = token
    }

    const exitUser = () => {
      userInfo.value = null
      localStorage.removeItem('token')
      router.replace('/index')
    }

    // 更新用户函数
    const userUpdate = async newUserInfo => {
      // 调用 API 更新用户数据
      console.log(888)

      let data = null
      console.log(98)
      if (newUserInfo.userPicture) {
        ;({ data } = await userPictureUpdateApi(newUserInfo.userPicture))
      }
      ;({ data } = await userUpdateApi(newUserInfo))
      console.log(data)
      setUesrInfo(data)
    }
    return { userInfo, setUesrInfo, exitUser, userUpdate }
  },
  {
    persist: true
  }
)
