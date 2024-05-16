<template>
  <div class="main">
    <div class="container">
      <ul class="nav-nar">
        <li class="active"><span class="text">選擇場次</span></li>
        <li class="active">選擇座位</li>
        <li @click="$router.back()">確認</li>
        <li>成功</li>
      </ul>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  padding: 50px 0;
  background: #25262c;
  .container {
    .nav-nar {
      width: 820px;
      margin: auto;
      display: flex;
      align-items: center;
      height: 60px;
      overflow: hidden;
      border-radius: 39px;
      background: rgba(211, 211, 211, 0.2);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

      li {
        flex: 1;
        height: 100%;
        text-align: center;
        // padding: 0 20px;
        line-height: 1;
        @include flex-center;
        .text {
          font-size: 16px;
          font-weight: 500;
          line-height: 22px;
        }
        &.active {
          background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
          box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
        }
      }
    }
  }
}
</style>
