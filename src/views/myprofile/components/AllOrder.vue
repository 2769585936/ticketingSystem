<script setup>
import { getOrdersApi } from '@/api/order'
import { useUserInfo } from '@/stores/userInfo'
import { dayjs } from 'element-plus'
import { computed, onMounted, ref } from 'vue'

import OrderItem from './OrderItem.vue'

import { deleteOrdersApi } from '@/api/order'

const { userInfo } = useUserInfo()
const orderList = ref([])
const pageObj = ref({
  total: 0,
  currentIndex: 1,
  size: 3
})
const getOrders = async () => {
  console.log(userInfo._id)
  const { data: res } = await getOrdersApi({
    userid: userInfo._id,
    type: 'all'
  })
  orderList.value = res
  pageObj.value.total = res.length
}

onMounted(() => getOrders())

const currentList = computed(() => {
  const { currentIndex, size } = pageObj.value
  const list = orderList.value.slice((currentIndex - 1) * size, currentIndex * size)
  console.log(list)
  return list
}, {})

// 删除事件
const deleteOrders = async id => {
  const { data: res } = await deleteOrdersApi({
    _id: id
  })
  getOrders()
}
</script>
<template>
  <div class="title-box">所有订单</div>
  <div class="order-content">
    <OrderItem :deleteOrders :item="item" v-for="item of currentList" :key="item._id"> </OrderItem>
  </div>

  <el-pagination hide-on-single-page class="fenye" v-model:current-page="pageObj.currentIndex" background next-text="下一页" :default-page-size="3" prev-text="上一页" layout=" prev, pager, next, total, jumper" :total="pageObj.total" />
</template>

<style scoped lang="scss">
.title-box {
  color: rgba(255, 109, 83, 1);
}
.order-content {
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid rgba(211, 211, 211, 0.2);
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
