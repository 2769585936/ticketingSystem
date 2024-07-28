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
      let data = null,
        code
      if (newUserInfo.userPicture) {
        ;({ code, data } = await userPictureUpdateApi(newUserInfo.userPicture))
      }
      ;({ data, code } = await userUpdateApi(newUserInfo))
      setUesrInfo(data)
      // 假设 API 名称为 updateUser
      if (code === '0000') {
        ElMessage({
          message: '更新成功',
          type: 'success',
          plain: true
        })
      } else {
        ElMessage({
          message: res.data.msg,
          type: 'error',
          plain: true
        })
      }
    }
    return { userInfo, setUesrInfo, exitUser, userUpdate }
  },
  {
    persist: true
  }
)
