<script setup>
import { useCountDown } from '@/utils/index'
import { dayjs } from 'element-plus'
import { computed } from 'vue'

import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

const time = useCountDown()
const { item, deleteOrders } = defineProps(['item', 'deleteOrders'])
time.start(item.orderStartTime)

const dayf = data => {
  return dayjs(data).format('MM月DD日')
}

const movies = computed(() => {
  return item.movies[0]
})
const _cid = computed(() => {
  return movies.value._cid[0]
})

// 删除弹出框
const deleteOpen = id => {
  ElMessageBox.confirm('确定删除吗', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
    .then(() => {
      deleteOrders(id)
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
    .catch(() => {})
}

const frm = data => {
  let str = ''
  switch (data) {
    case 1:
      str = '已支付'
      break
    case 2:
      str = '未支付'
      break
  }
  return str
}
</script>

<template>
  <div class="rongqi">
    <div class="box">
      <span>{{ _cid.cinemaName }}{{ _cid.hall[movies.hall] }}</span>
      <span class="shengyushijian" v-if="item.currentOrderState == 2">剩余支付时间:{{ time.formatTime }}分</span>
      <span class="shengyushijian" v-else></span>
      <span class="shanchu" @click="deleteOpen(item._id)">删除</span>
    </div>

    <div class="order-details">
      <div class="img-content">
        <div class="img-logo"><img :src="item.movies[0]._fid[0].pictureUrl" alt="" /></div>
        <div class="img-text">
          <p class="title">{{ item.movies[0]._fid[0].filmTitle }}</p>
          <p class="shijian">{{ dayf(item.orderStartTime) }} {{ item.movies[0].startTime }}</p>
          <p class="zuowei">{{ _cid.hall[movies.hall] }} {{ Object.values(item.seat)[0].row + 1 + '排' + (Object.values(item.seat)[0].column + 1) + '号' }}</p>
        </div>
      </div>
      <div class="qita">${{ item.totalcost }}</div>
      <div class="qita">{{ frm(item.currentOrderState) }}</div>
      <div class="qita" @click="$router.push('/myprofile/orderdetails/' + item._id)">查看详情</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  .qita:nth-child(4) {
    cursor: pointer;
  }
}
</style>
