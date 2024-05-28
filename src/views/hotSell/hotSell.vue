<script setup>
import { hotSaleApi } from '@/api/filmInfo'
import { getTagsApi } from '@/api/other'
import { onMounted, ref } from 'vue'

const hotSaleList = ref([])
const getHotSale = async () => {
  const { data: res } = await hotSaleApi()
  hotSaleList.value = res
}
onMounted(() => getHotSale())

// 获取标签列表
const tagsList = ref([])
const getTags = async () => {
  const { data: res } = await getTagsApi()
  tagsList.value = res
}

onMounted(() => getTags())
</script>
<template>
  <div class="main">
    <div class="container">
      <div class="content">
        <DetailItem v-for="item in hotSaleList" :tags="tagsList" :movieInfo="item" :key="item._id"></DetailItem>
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
