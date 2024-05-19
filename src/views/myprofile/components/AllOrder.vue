<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="title-box">所有订单</div>
  <div class="order-content">
    <div class="rongqi">
      <div class="box">
        <span>萬達影城A聽</span>
        <span class="shengyushijian">剩餘時間:10:10分</span>
        <span class="shanchu">删除</span>
      </div>
      <div class="order-details">
        <div class="img-content">
          <div class="img-logo"><img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" /></div>
          <div class="img-text">
            <p class="title">湄公河</p>
            <p class="shijian">10月10日22:50</p>
            <p class="zuowei">A聽5排16號</p>
          </div>
        </div>
        <div class="qita">$490</div>
        <div class="qita">已付款</div>
        <div class="qita" @click="$router.push('/myprofile/orderdetails/999')">查看詳情</div>
      </div>
    </div>

    <div class="rongqi">
      <div class="box">
        <span>萬達影城A聽</span>
        <span class="shengyushijian">剩餘時間:10:10分</span>
        <span class="shanchu">删除</span>
      </div>
      <div class="order-details">
        <div class="img-content">
          <div class="img-logo"><img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" /></div>
          <div class="img-text">
            <p class="title">湄公河</p>
            <p class="shijian">10月10日22:50</p>
            <p class="zuowei">A聽5排16號</p>
          </div>
        </div>
        <div class="qita">$490</div>
        <div class="qita">已付款</div>
        <div class="qita">查看詳情</div>
      </div>
    </div>
  </div>

  <el-pagination class="fenye" background next-text="下一页" prev-text="上一页" layout="prev, pager, next, total, jumper" :total="50" />
</template>

<style scoped lang="scss">
.title-box {
  color: rgba(255, 109, 83, 1);
}
.order-content {
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid rgba(211, 211, 211, 0.2);
  .box {
    padding: 20px 30px;
    background: rgba(211, 211, 211, 0.2);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.09);
    display: flex;
    .shengyushijian {
      flex: 1;
      text-align: right;
      margin-right: 20px;
    }
    .shanchu {
      justify-self: end;
    }
  }
  .order-details {
    padding: 20px 30px 35px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img-content {
      display: flex;
      gap: 20px;
      .img-logo {
        img {
          height: 130px;
        }
      }
      .img-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 15px;
        p {
          font-size: 14px;
          line-height: 20px;
          opacity: 0.6;
        }
        .title {
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 22px;
          opacity: 1;
        }
      }
    }

    .qita {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(255, 255, 255, 1);
      opacity: 0.9;
    }
  }
}

// 修改分页样式
.fenye {
  width: fit-content;
  margin: auto;
  & > :deep(span) {
    color: white;
  }
}
</style>
