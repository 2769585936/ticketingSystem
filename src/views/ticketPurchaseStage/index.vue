<script setup>
import { getCinemasIdApi } from '@/api/cinemas'
import { onMounted, provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import ChooseSeat from './components/ChooseSeat.vue'
import ConfirmOrder from './components/ConfirmOrder.vue'
import OrderPass from './components/OrderPass.vue'

const route = useRoute()

const currentComponent = ref(0)
const components = [ChooseSeat, ConfirmOrder, OrderPass]

const cinemasIdInfo = ref({})
const getCinemasId = async () => {
  const { _id } = route.query
  const { data: res } = await getCinemasIdApi({
    _id
  })
  cinemasIdInfo.value = res[0]
  // console.log(res[0])
}

// 用户信息
const userSelectedSeat = ref({})
// 用户订单
const orderId = ref(null)
provide('userSeatSelected', userSelectedSeat)
provide('orderId', orderId)

onMounted(() => getCinemasId())
</script>

<template>
  <div class="main">
    <div class="container">
      <ul class="nav-nar">
        <li class="active">選擇場次</li>
        <li class="active" @click="currentComponent = 0">選擇座位</li>
        <li @click="currentComponent = 1">確認</li>
        <li @click="currentComponent = 2">成功</li>
      </ul>
      <keep-alive>
        <component adc="adc" v-model:currentComponent="currentComponent" v-model:cinemasIdInfo="cinemasIdInfo" :is="components[currentComponent]" />
      </keep-alive>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: 50px 0;
  background: #25262c;
  .container {
    .nav-nar {
      color: white;
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
