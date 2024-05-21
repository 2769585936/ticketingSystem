<script setup>
import { onMounted, ref, markRaw } from 'vue'
import EnterLogin from './components/EnterLogin.vue' //登录组件
import SignIn from './components/SignIn.vue' //注册组件
import ForgetPassword from './components/ForgetPassword.vue' //忘记密码组件

const componentIs = ref(0)
const componentList = markRaw([EnterLogin, SignIn, ForgetPassword])
const canvas = ref(null)
</script>
<template>
  <div class="layout">
    <!-- <canvas ref="canvas" class="cas"></canvas> -->
    <div class="login">
      <component v-model:componentIs="componentIs" :is="componentList[componentIs]"></component>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/images/login-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  .cas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: red;
  }
  .login {
    margin: 150px auto;
    width: 375px;
    min-width: 375px;
  }
}
</style>
