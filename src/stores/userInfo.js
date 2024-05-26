import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'

export const useUserInfo = defineStore(
  'userInfo',
  () => {
    const userInfo = ref(null)
    const setUesrInfo = (data, token) => {
      userInfo.value = data
      localStorage.token = token
    }

    const exitUser = () => {
      userInfo.value = null
      localStorage.removeItem('token')
      router.replace('/index')
    }
    return { userInfo, setUesrInfo, exitUser }
  },
  {
    persist: true
  }
)
