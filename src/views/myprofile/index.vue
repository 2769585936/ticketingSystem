<script setup></script>

<template>
  <div class="layout">
    <div class="container">
      <div class="left">
        <div class="subject">个人中心</div>
        <ul>
          <li class="active">个人资料</li>
          <li>所有訂單</li>
          <li>待使用訂單</li>
          <li>已使用訂單</li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding: 30px 0;
  background: rgba(37, 38, 44, 1);
  .container {
    display: flex;
    height: 100%;
    border: 1px solid rgba(211, 211, 211, 0.2);
    .left {
      min-height: calc(100vh - 80px - 175px - 80px);
      width: 230px;
      text-align: center;
      background: rgba(211, 211, 211, 0.2);
      .subject {
        padding: 20px 0;
        font-size: 20px;
        line-height: 28px;
        color: #fff;
      }
      ul li {
        padding: 15px 0;
        font-size: 16px;
        line-height: 22px;
        color: rgba(255, 255, 255, 1);

        &.active {
          background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
        }
      }
    }
    .right {
      color: #fff;
      flex: 1;
      padding: 30px 20px 20px 45px;
    }
  }
}
</style>
