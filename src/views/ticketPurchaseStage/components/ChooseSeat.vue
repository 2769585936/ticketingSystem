<script setup>
import { inject, onMounted, ref, toRef, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { createPreOrderApi } from '@/api/cinemas/index'

const router = useRouter()

const cinemasIdInfo = defineModel('cinemasIdInfo')
const currentComponent = defineModel('currentComponent')
const userSelectedSeat = inject('userSeatSelected')
const orderId = inject('orderId')

const orderSubmit = async () => {
  if (!Object.keys(userSelectedSeat.value).length) return

  const count = Object.keys(userSelectedSeat.value).length
  const price = cinemasIdInfo.value.price
  const createOrderObj = {
    _changciid: cinemasIdInfo.value._id,
    _userid: '664bf30714352ec40e7bea45',
    seat: userSelectedSeat.value,
    xiaofei: 5,
    count: count,
    price: price,
    totalcost: (price + 5) * count,
    orderStartTime: Date.now(),
    currentOrderState: 2
  }

  const { data: res } = await createPreOrderApi(createOrderObj)
  orderId.value = res._id
  currentComponent.value = 1
}

// 用户选择的作为

const selectSeated = zw => {
  const { price } = cinemasIdInfo.value
  const type = 'A票种'
  const { row, column, rowValue, columnValue } = zw
  let zuoweiRowIndex = row
  let zuoweiColunmIndex = column
  if (columnValue.isHide || columnValue.isSelected) return
  for (let index = 0; index < column; index++) {
    rowValue[index].isHide && zuoweiColunmIndex--
  }
  userSelectedSeat.value[row + '-' + column] = {
    row: zuoweiRowIndex,
    column: zuoweiColunmIndex,
    rowValue,
    columnValue,
    price,
    type
  }
  console.log(userSelectedSeat)
}

const deleteSeat = key => {
  delete userSelectedSeat.value[key]
}
</script>
<template>
  <div class="choose-seat">
    <div class="left">
      <div class="icons">
        <div class="icon-item">
          <div class="zuowei icon-bg-can"></div>
          <span>普通</span>
        </div>
        <div class="icon-item">
          <div class="zuowei icon-bg-none"></div>
          <span>售出</span>
        </div>
        <div class="icon-item">
          <div class="zuowei icon-bg-my-can"></div>
          <span>已选</span>
        </div>
      </div>
      <!-- 荧幕 -->
      <div class="screen"></div>
      <!-- 座位列表 -->
      <div class="seating-area">
        <div class="column">
          <div class="col-index" v-for="(list, index) in cinemasIdInfo.seat">{{ index + 1 }}</div>
        </div>
        <div class="seating-area-zuowei">
          <div class="zuowei-content row" v-for="(row, rowIndex) in cinemasIdInfo.seat" :key="row">
            <div
              class="zuowei zuowei-boredr"
              @click="
                selectSeated({
                  row: rowIndex,
                  rowValue: row,
                  column: columnIndex,
                  columnValue: item
                })
              "
              v-for="(item, columnIndex) in row"
              :key="item"
              :class="{ 'icon-bg-user-selected': userSelectedSeat[rowIndex + '-' + columnIndex] }"
            >
              <div class="zuowei icon-bg-can" :class="{ 'icon-bg-my-can': item.isSelected }" v-if="!item.isHide"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="buy-seat">
        <div class="buy-box" v-for="(item, key) in userSelectedSeat">
          <span class="del-zuo" @click="deleteSeat(key)">×</span>
          <span class="zuo">{{ item.row + 1 }}排{{ item.column + 1 }}座</span>
          <span class="jine">${{ item.price }}</span>
        </div>
      </div>
      <button class="queren-buy" @click="orderSubmit">確認</button>
    </div>
    <div class="right" v-if="cinemasIdInfo._fid">
      <div class="title-top">
        <div class="img">
          <img :src="cinemasIdInfo._fid[0].pictureUrl" alt="" />
        </div>
        <div class="details">
          <p class="title">{{ cinemasIdInfo._fid[0].filmTitle }}</p>
          <p class="history">{{ cinemasIdInfo._fid[0].issueDate }}大陸上映片長{{ cinemasIdInfo._fid[0].duration }}分鍾</p>
        </div>
      </div>

      <div class="introduce">
        <h3 class="jieshao">影片介紹</h3>
        <p class="miaoshu">
          {{ cinemasIdInfo._fid[0].describe }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.choose-seat {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  color: white;
  .left {
    flex: 1;
    // 座位样式
    .zuowei {
      width: 26px;
      height: 23px;
      overflow: hidden;
    }

    // 可选
    .icon-bg-can {
      background: #fff;
    }

    // 售出
    .icon-bg-none {
      background: #999;
    }

    // 已选
    .icon-bg-my-can {
      background: rgba(255, 109, 83, 1);
    }
    // 预选
    .icon-bg-user-selected {
      overflow: hidden;
      border: 3px solid rgba(255, 109, 83, 1);
    }
    .icons {
      width: 200px;
      margin: auto;
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
    }
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .screen {
      position: relative;
      margin: 20px auto 70px auto;
      width: 560px;
      height: 10px;
      border-radius: 10px;
      background: rgba(255, 109, 83, 1);
      &::after {
        content: '銀幕';
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(255, 109, 83, 1);
      }
    }

    // 座位列表
    .seating-area {
      position: relative;
      .column {
        position: absolute;
        width: 26px;
        height: 100%;
        border-radius: 10px;
        background: rgba(211, 211, 211, 0.2);
        display: grid;
        gap: 15px;
        text-align: center;
      }
      .seating-area-zuowei {
        width: 80%;
        margin: auto;
        display: grid;
        gap: 15px;
        .zuowei-content {
          width: 100%;
          height: 26px;
          display: flex;
          justify-content: space-between;
          .zuowei-boredr {
            overflow: hidden;
            border-radius: 10px 10px 0 0;
          }
        }
      }
    }

    .buy-seat {
      margin: 40px auto;
      width: 70%;
      display: grid;
      gap: 15px;
      grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
      .buy-box {
        position: relative;
        width: 78px;
        height: 52px;
        background: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .zuo {
          color: rgba(51, 51, 51, 1);
          font-size: 12px;
          font-weight: 400;
          line-height: 17px;
        }
        .jine {
          color: rgba(255, 99, 83, 1);
          font-size: 12px;
          font-weight: 600;
          line-height: 17px;
        }

        .del-zuo {
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%, -50%);
          width: 14px;
          height: 14px;
          line-height: 14px;
          border-radius: 50%;
          background: rgba(153, 153, 153, 1);
        }
      }
    }
    .queren-buy {
      display: block;
      margin: 20px auto;
      width: 336px;
      height: 47px;
      color: white;
      background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
    }
  }
  .right {
    background: rgba(211, 211, 211, 0.2);
    padding: 30px;
    width: 380px;
    .title-top {
      display: flex;
      .img {
        width: 150px;
        img {
          width: 100%;
        }
      }
      .details {
        padding-left: 30px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-size: 26px;
          font-weight: 500;
          line-height: 36px;
        }
        .history {
          margin-top: 10px;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
    .introduce {
      .jieshao {
        padding: 25px 0 15px 0;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
      }
      .miaoshu {
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
}
</style>
