<script setup>
import { hotSaleApi } from '@/api/filmInfo'
import { getTagsApi } from '@/api/other'
import { onMounted, onUnmounted, ref } from 'vue'

const hotSaleList = ref([])

const obj = {
  limit: 10,
  length: 0
}

const getHotSale = async () => {
  const { data: res } = await hotSaleApi(obj)
  isData.value = res.length ? false : true
  isNoMore.value = res.length ? false : true
  hotSaleList.value.push(...res)
  obj.length = hotSaleList.value.length
}
onMounted(() => getHotSale())

// 获取标签列表
const tagsList = ref([])
const getTags = async () => {
  const { data: res } = await getTagsApi()
  tagsList.value = res
}

onMounted(() => getTags())

// 加载更多逻辑
// 监听windwow scroll

const isData = ref(false)
const isNoMore = ref(false)

const getMoreData = () => {
  getHotSale()
}
const scrollFn = () => {
  if (isNoMore.value) return window.removeEventListener('scroll', scrollFn)
  if (isData.value) return
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 175) {
    getMoreData()
    isData.value = true
  }
}
onMounted(() => {
  window.addEventListener('scroll', scrollFn)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollFn)
})
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
  background: rgba(37, 38, 44, 1);

  .container {
    padding-top: 30px;
    padding-bottom: 30px;
    background: rgba(37, 38, 44, 1);
    .content {
      display: grid;
      gap: 20px 30px;
      grid-template-columns: (repeat(auto-fill, minmax(446px, 1fr)));
    }
  }
}
</style>
