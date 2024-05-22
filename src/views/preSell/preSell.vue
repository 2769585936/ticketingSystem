<script setup>
import { preSaleApi } from '@/api/filmInfo'
import { getTagsApi } from '@/api/other'
import { onMounted, ref } from 'vue'

const preSaleList = ref([])
const getPreSale = async () => {
  const { data: res } = await preSaleApi({
    limit: 10
  })
  preSaleList.value = res
}
onMounted(() => getPreSale())

// 获取标签列表
const tagsList = ref([])
const getTags = async () => {
  const { data: res } = await getTagsApi()
  tagsList.value = res
  console.log(res)
}

onMounted(() => getTags())
</script>
<template>
  <div class="main">
    <div class="container">
      <div class="content">
        <DetailItem v-for="item in preSaleList" :tags="tagsList" :movieInfo="item" :key="item._id"></DetailItem>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main {
  padding-top: 30px;
  padding-bottom: 30px;
  background: rgba(37, 38, 44, 1);

  .container {
    .content {
      display: grid;
      gap: 20px 30px;
      grid-template-columns: (repeat(auto-fill, minmax(585px, 1fr)));
    }
  }
}
</style>
