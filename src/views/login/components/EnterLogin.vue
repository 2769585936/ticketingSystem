<script setup>
import md5 from 'md5'
import { ref } from 'vue'
import { logonApi } from '@/api/login'
import { useRoute, useRouter } from 'vue-router'
import { useUserInfo } from '@/stores/userInfo'

// vue 3.4 最新写法 子向父修改值
const componentIs = defineModel('componentIs')

const router = useRouter()
const route = useRoute()
const formLogin = ref({
  phone: '',
  password: ''
})
const componentIsChange = index => {
  componentIs.value = index
}

const userInfoStore = useUserInfo()
// 登录
const btnLogin = async () => {
  console.log(router)
  if (formLogin.value.phone && formLogin.value.password) {
    const data = await logonApi({
      phone: formLogin.value.phone,
      password: md5(formLogin.value.password)
    }).catch(err => {})
    if (data) {
      const { data: res, token } = data
      userInfoStore.setUesrInfo(res, token)

      const fromRoute = route.query.fromRoute
      fromRoute ? router.replace(fromRoute) : router.replace('/')
    }
  } else {
    console.log('用户名或密码不能为空')
  }
}
</script>
<template>
  <div class="login-content-form">
    <h4>登入</h4>
    <div class="form-content">
      <form class="form" @submit.prevent="false" autocomplete="off">
        <div class="colum">
          <label for="phone">手机号码</label>
          <div class="input-content">
            <input id="phone" v-model="formLogin.phone" type="text" placeholder="请输入手机号码" />
            <div class="get-yzm"></div>
          </div>
        </div>
        <div class="colum">
          <label for="phonemima">手机密码</label>
          <div class="input-content">
            <input id="phonemima" v-model="formLogin.password" type="password" placeholder="请输入密码" />
            <div class="get-yzm"></div>
          </div>
        </div>
        <div class="qita-anniu">
          <div @click="componentIsChange(1)">註冊</div>
          <div @click="componentIsChange(2)">忘記密碼？</div>
        </div>
        <button class="btn" @click="btnLogin">登入</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('@/views/login/styles/login.scss');
</style>
