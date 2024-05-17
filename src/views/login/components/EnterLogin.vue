<script setup>
// vue 3.4 最新写法 子向父修改值
const componentIs = defineModel('componentIs')

const componentIsChange = index => {
  componentIs.value = index
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
            <input id="phone" type="text" placeholder="请输入手机号码" />
            <div class="get-yzm"></div>
          </div>
        </div>
        <div class="colum">
          <label for="phonemima">手机密码</label>
          <div class="input-content">
            <input id="phonemima" type="text" placeholder="请输入密码" />
            <div class="get-yzm"></div>
          </div>
        </div>
        <div class="qita-anniu">
          <div @click="componentIsChange(1)">註冊</div>
          <div @click="componentIsChange(2)">忘記密碼？</div>
        </div>
        <button class="btn">登入</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('@/views/login/styles/login.scss');
</style>
