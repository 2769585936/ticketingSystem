<script setup>
import { getOrdersApi } from '@/api/order'
import { dayjs } from 'element-plus'
import { ref, inject, onMounted, onActivated, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const cinemasIdInfo = defineModel('cinemasIdInfo')
const orderId = inject('orderId')

const orderInfo = ref(null)
const getOrders = async () => {
  const { data: res } = await getOrdersApi({
    _id: orderId.value,
    type: 'id'
  })
  orderInfo.value = res[0]
}

onMounted(() => getOrders())

onActivated(() => {
  getOrders()
})

const movies = computed(() => {
  return orderInfo.value.movies[0]
})
const _cid = computed(() => {
  return movies.value._cid[0]
})

const dayf = data => {
  return dayjs(data).format('MM月DD日')
}
const seatStr = computed(() => {
  let str = ''
  const rowMap = new Map()

  for (const val of Object.values(orderInfo.value.seat)) {
    const { row, column } = val
    !rowMap.has(row) && rowMap.set(row, new Set())

    rowMap.get(row).add(column)
  }
  rowMap.forEach((item, key) => {
    str += key + 1 + '排('
    item.forEach(col => {
      str += col + 1 + '号,'
    })
    str = str.replace(/,$/, '')
    str += ')、'
  })
  str = str.replace(/、$/, '')

  return str
})
</script>
<template>
  <div class="content">
    <div class="movie-information" v-if="orderInfo">
      <div class="img">
        <img :src="movies._fid[0].pictureUrl" alt="" />
      </div>
      <div class="zhong">
        <p class="move-title"></p>
        {{ movies._fid[0].filmTitle }}
        <p>{{ orderInfo.count }}張-總價：${{ orderInfo.totalcost }}</p>
        <p>{{ dayf(orderInfo.orderStartTime) }} {{ movies.startTime }}（國語3D）</p>
        <p>{{ _cid.cinemaName }}-{{ _cid.hall[movies.hall] }} {{ seatStr }}</p>
      </div>
      <div class="right">
        <p class="xinxi">請到戲院櫃台支付完成交易</p>
        <p class="wxzhifu">
          <img src="https://img.js.design/assets/img/643d1646097d676c83ee616b.png" alt="" />
        </p>
        <p class="xinxi">{{ orderInfo._id }}</p>
      </div>
    </div>
    <div class="rule-content">
      <h4>規則說明</h4>
      <ul>
        <li>（1）提前30分鐘取票，否則失效</li>
        <li>（2）3次購票未取，則6個月內無法再次購票</li>
        <li>（3）電影放映前30分鐘請至櫃台出示QR Code進行付款取票，否則失效</li>
        <li>（4）該帳號如3次訂票未取票付款，則6個月內無法再次訂票</li>
        <li>（5）訂票後無法退換票</li>
      </ul>
    </div>
    <div class="btn-zuihou">
      <button>确定我的订单</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  padding: 50px 175px;
  width: 820px;
  margin: 50px auto;
  background: white;
  .movie-information {
    width: 100%;
    display: flex;
    // gap: 15px;
    justify-content: space-between;
    .img {
      img {
        width: 107px;
        height: auto;
      }
    }
    .zhong {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      & > * {
        text-align: left;
        color: #000;
      }

      .move-title {
        font-size: 26px;
        font-weight: 600;
        line-height: 36px;
        color: rgba(51, 51, 51, 1);
      }
      & > p:nth-child(n + 2) {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(153, 153, 153, 1);
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;
      & > p {
        text-align: center;
        color: #000;
      }
      .xinxi {
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        color: rgba(51, 51, 51, 1);
      }
      .wxzhifu {
        padding: 10px 0;
        @include flex-center;
        img {
          width: 105px;
          height: auto;
        }
      }
    }
  }

  .rule-content {
    & * {
      color: rgba(51, 51, 51, 1);
    }
    h4 {
      margin-top: 10px;
      padding: 5px 0;
    }
    ul li {
      margin-top: 5px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .btn-zuihou {
    margin-top: 50px;
    button {
      color: white;
      width: 100%;
      height: 47px;
      background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
      box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
    }
  }
}
</style>
