<script setup>
import { ref } from 'vue'

const zuoList = ref([
  {
    id: 1,
    type: 'A票种',
    seat: '3排10座',
    price: 30
  },
  {
    id: 2,
    type: 'A票种',
    seat: '3排10座',
    price: 30
  }
])
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
            <tbody>
              <tr v-for="(item, index) in zuoList" :key="item.id">
                <td class="img-content-td" :rowspan="zuoList.length + 1" align="center" valign="center" v-if="index == 0">
                  <div class="information">
                    <div class="information-img">
                      <img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" />
                    </div>
                    <div class="title-content">
                      <p class="film-name">湄公河行動</p>
                      <p class="text-qt">1張-總價：$450</p>
                      <p class="text-qt">今天10-07 22:50（國語3D）</p>
                      <p class="text-qt">萬達影城-A聽 3排15座</p>
                    </div>
                  </div>
                </td>
                <td align="center">{{ item.type }}</td>
                <td align="center">{{ item.seat }}</td>
                <td align="center">{{ item.price }}</td>
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-time {
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
</style>
