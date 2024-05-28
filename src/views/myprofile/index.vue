<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nav = ref([
  {
    title: '个人资料',
    path: '/myprofile/personal'
  },
  {
    title: '所有訂單',
    path: '/myprofile/order/all'
  },
  {
    title: '待支付订单',
    path: '/myprofile/order/unpai'
  },
  {
    title: '已支付订单',
    path: '/myprofile/order/pai'
  }
])
const changeTab = path => {
  router.push(path)
}
</script>

<template>
  <div class="layout">
    <div class="container">
      <div class="left">
        <div class="subject">个人中心</div>
        <ul>
          <li @click="changeTab(item.path)" :class="{ active: $route.path == item.path }" v-for="(item, index) of nav" :key="index">
            {{ item.title }}
          </li>
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
