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
    <video src="https://api.favnow.com/background.php" class="video-login" loop muted="0" autoplay></video>
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
  overflow: hidden;
  .video-login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }
  .login {
    background-color: rgba(22, 22, 22, 0.1);
    padding: 20px;
    backdrop-filter: blur(10px);
    margin: 150px auto;
    width: 425px;
    min-width: 425px;
    :deep(input::placeholder) {
      color: #ddd;
    }
  }
}
</style>
<style></style>
