<script setup>
import { computed, inject, onActivated, onDeactivated, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { getOrderApi, updateOrderApi } from '@/api/order/index'

const router = useRouter()
const cinemasIdInfo = defineModel('cinemasIdInfo')
const currentComponent = defineModel('currentComponent')
const userSelectedSeat = ref(null)
const orderId = inject('orderId')

const btnSubmit = async () => {
  const { data: res } = await updateOrderApi({
    currentOrderState: 1,
    _id: orderId.value
  })
  currentComponent.value = 2
}

const orderInfo = ref({})
const getOrderInfo = async () => {
  const { data: res } = await getOrderApi({
    _id: orderId.value
  })
  orderInfo.value = res
  userSelectedSeat.value = res.seat
}

onActivated(() => {
  console.log('被激活了')
  getOrderInfo()
})

const pheo = ref({
  phone: '',
  yzx: ''
})
const totalPrice = computed(() => {
  if (!userSelectedSeat.value) return 0
  return Object.keys(userSelectedSeat.value).length * (Object.values(userSelectedSeat.value)[0].price + 5)
})
</script>
<template>
  <div class="main">
    <div class="container">
      <div class="order-time">
        <div class="img"><img src="@/assets/images/orderpic.png" alt="" /></div>
        <div class="wenben">
          <p class="text">請在5分鐘39秒內完成確認</p>
          <p class="text-cancl">訂單超時會自動取消</p>
        </div>
      </div>

      <div class="table-content">
        <h3 class="jiage">價格明細</h3>
        <div class="table-nei-content">
          <table class="my-table" :style="{ width: '100%' }">
            <thead>
              <tr>
                <th>电影信息</th>
                <th>类别</th>
                <th>座位信息</th>
                <th>单价</th>
              </tr>
            </thead>
            <tbody v-if="userSelectedSeat">
              <tr v-for="(item, key, index, s) in userSelectedSeat" :key="item.id">
                <td class="img-content-td" :rowspan="Object.keys(userSelectedSeat).length + 1" align="center" valign="center" v-if="index == 0">
                  <div class="information">
                    <div class="information-img">
                      <img :src="cinemasIdInfo._fid[0].pictureUrl" alt="" />
                    </div>
                    <div class="title-content">
                      <p class="film-name">{{ cinemasIdInfo._fid[0].filmTitle }}</p>
                      <p class="text-qt">{{ Object.keys(userSelectedSeat).length }}張-總價：${{ orderInfo.totalcost }}</p>
                      <p class="text-qt">今天10-07 {{ cinemasIdInfo.startTime }}（國語3D）</p>
                      <p class="text-qt">{{ cinemasIdInfo._cid[0].cinemaName }}-{{ cinemasIdInfo._cid[0].hall[cinemasIdInfo.hall] }}</p>
                    </div>
                  </div>
                </td>
                <td align="center">{{ item.type }}</td>
                <td align="center">{{ item.row + 1 }}排{{ item.column + 1 }}座</td>
                <td align="center">${{ item.price }}</td>
              </tr>
              <tr>
                <td align="center">服务费</td>
                <td align="center"></td>
                <td align="center">$5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="phone-verification-content">
        <div class="phone-content">
          <label for="phone" class="phone-label">
            <span>手机号码</span>
            <div class="phone-div">
              <input type="text" v-model="pheo.phone" id="phone" placeholder="请输入手机号码" />
            </div>
          </label>
          <label for="verification" class="phone-label">
            <span>验证码</span>
            <div class="phone-div">
              <input type="text" v-model="pheo.yzm" id="verification" placeholder="请输入验证码" />
              <button class="btn-yzm">获取验证码</button>
            </div>
          </label>
        </div>

        <p class="jine-content">
          <span class="jine-text">金额:</span>
          <span class="duona">$</span>
          <span class="total-prices">{{ Number(orderInfo.totalcost).toFixed(2) }}</span>
        </p>
        <p class="queding-order">
          <button @click="btnSubmit">确认</button>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-time {
  color: white;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  gap: 30px;
  background: rgba(211, 211, 211, 0.2);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
  .img {
    width: 47px;
    height: 53px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .wenben {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .text {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }
    .text-cancl {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
}

.table-content {
  color: white;
  .jiage {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
  }
  // 表格样式
  .table-nei-content {
    padding: 20px 0;
    border-bottom: 1px solid rgba(62, 62, 68, 1);
    .my-table {
      border-collapse: collapse;
      th {
        background: rgba(211, 211, 211, 0.2);
      }

      .img-content-td {
        max-width: 120px;
        height: 100%;
        .information {
          display: flex;
          .information-img {
            img {
              width: auto;
              max-height: 200px;
            }
          }
          .title-content {
            flex: 1;
            display: flex;
            padding-left: 22px;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            gap: 15px;
            .film-name {
              font-size: 26px;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
            .text-qt {
              font-size: 14px;
              line-height: 20px;
              color: rgba(255, 255, 255, 1);
            }
          }
        }
      }

      td,
      th {
        padding: 15px;
      }
    }
  }
}

.phone-verification-content {
  color: white;
  margin-top: 50px;
  border-top: 1px solid rgba(211, 211, 211, 0.2);
  padding: 30px 0;

  .phone-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    .phone-label {
      flex: 1;
      display: flex;
      align-content: center;
      line-height: 50px;
      .phone-div {
        margin-left: 30px;
        height: 50px;
        flex: 1;
        border-top: 1px solid rgba(211, 211, 211, 0.2);
        border-bottom: 1px solid rgba(211, 211, 211, 0.2);
        input {
          padding-left: 10px;
          width: calc(100% - 100px);
          font-size: 16px;
          height: 24px;
          line-height: 24px;
          color: white;
          background: none !important;
          border: none;
        }

        .btn-yzm {
          background: none;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          color: rgba(255, 109, 83, 1);

          &:focus-visible {
            outline: none;
          }
        }
      }
    }
  }

  .jine-content {
    text-align: right;
    padding: 30px 0 15px 0;
    line-height: 22px;
    .jine-text {
      /** 文本1 */
      font-size: 16px;
      font-weight: 400;
    }
    .duona {
      margin-left: 10px;
      font-size: 22px;
      color: rgba(255, 88, 83, 1);
    }
    .total-prices {
      font-size: 26px;
      font-weight: 500;
      color: rgba(255, 88, 83, 1);
    }
  }
  .queding-order {
    text-align: right;
    button {
      color: white;
      border-radius: 10px;
      font-size: 16px;
      width: 195px;
      height: 47px;
      background: rgba(255, 109, 83, 1);
    }
  }
}
</style>
