<script setup>
import { useRoute, useRouter } from 'vue-router'
import { deleteOrdersApi, getOrdersApi } from '@/api/order'
import { onMounted, ref, computed } from 'vue'
import { dayjs } from 'element-plus'

const route = useRoute()
const router = useRouter()
const _id = route.params.id

const orderInfo = ref(null)
const getOrders = async () => {
  const { data: res } = await getOrdersApi({
    _id,
    type: 'id'
  })
  orderInfo.value = res[0]
  console.log(res[0])
}

onMounted(() => getOrders())

const movies = computed(() => {
  return orderInfo.value.movies[0]
})
const _cid = computed(() => {
  return movies.value._cid[0]
})

// 删除弹出框

const deleteOpen = id => {
  ElMessageBox.confirm('确定删除吗', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  }).then(async () => {
    await deleteOrdersApi({
      _id: id
    })

    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    router.replace('/myprofile')
  })
}

const seatStr = computed(() => {
  console.log(orderInfo.value.seat)
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
  console.log(str)
  return str
})

const dayf = data => {
  return dayjs(data).format('MM月DD日')
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
  <div>
    <div class="title-box"><span>订单详情</span> <span>返回</span></div>
    <div class="order-content">
      <div class="rongqi" v-if="orderInfo">
        <div class="box">
          <svg width="68" style="color: rgba(255, 109, 83, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path>
          </svg>
          <span class="shengyushijian">{{ frm(orderInfo.currentOrderState) }}</span>
          <span class="shanchu">
            <img width="59" src="https://img.js.design/assets/img/643d1646097d676c83ee616b.png" alt="" />
          </span>
        </div>
        <div class="box bianhao">
          <span>訂單編號：{{ _id }}</span>
          <span @click="deleteOpen(_id)" class="shanchu">删除</span>
        </div>
        <div class="order-details">
          <dl>
            <div>
              <dt>影片</dt>
              <dd>{{ movies._fid[0].filmTitle }}</dd>
            </div>
            <div>
              <dt>开场时间</dt>
              <dd>{{ dayf(orderInfo.orderStartTime) }} {{ movies.startTime }}</dd>
            </div>
            <div>
              <dt>影院</dt>
              <dd>{{ _cid.cinemaName }}</dd>
            </div>
            <div>
              <dt>座位</dt>
              <dd>{{ _cid.hall[movies.hall] }} {{ seatStr }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
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
    justify-content: space-between;
    align-items: center;
    .shengyushijian {
      flex: 1;
      text-align: left;
      margin-left: 15px;
      font-size: 22px;
      // height: fit-content;
    }
    .shanchu {
      text-align: right;
    }

    &.bianhao {
      margin-top: 30px;
    }
  }
  .order-details {
    padding: 20px 30px 35px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    dl {
      flex: 1;
      display: flex;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      justify-content: space-between;
      text-align: center;
      & > div {
        width: fit-content;
        & > dt {
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
