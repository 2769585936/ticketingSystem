<script setup>
const componentIs = defineModel('componentIs')

const componentIsChange = index => {
  componentIs.value = index
}
</script>
<template>
  <div class="login-content-form">
    <h4>忘記密碼</h4>
    <div class="form-content">
      <form class="form" @submit.prevent="false" autocomplete="off">
        <div class="colum">
          <label for="phone">手机号码</label>
          <div class="input-content">
            <input id="phone" type="text" />
            <div class="get-yzm"></div>
          </div>
        </div>
        <div class="colum">
          <label for="phonemima">手机密码</label>
          <div class="input-content">
            <input id="phonemima" type="text" />
            <div class="get-yzm"></div>
          </div>
        </div>
        <div class="colum yanzhengma">
          <label for="yanzhenma">验证码</label>
          <div class="input-content">
            <input id="yanzhenma" type="text" />
            <div class="get-yzm">获取验证码</div>
          </div>
        </div>
        <div class="qita-anniu">
          <div @click="componentIsChange(0)">登录</div>
          <div @click="componentIsChange(1)">注册</div>
        </div>
        <button class="btn">登录</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('@/views/login/styles/login.scss');
</style>
