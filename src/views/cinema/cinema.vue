<script setup>
import { getMovieInfoApi } from '@/api/filmInfo'
import { getTagsApi } from '@/api/other'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieInfo = ref({})

const tagsList = ref([])

const getTagsList = async () => {
  const { data: res } = await getTagsApi()
  tagsList.value = res
}
onMounted(() => getTagsList())

const getMovieInfo = async () => {
  const { data: res } = await getMovieInfoApi({ _id: route.query._fid })
  movieInfo.value = res[0]
}

onMounted(() => getMovieInfo())
</script>
<template>
  <div class="main">
    <div class="wallpaper">
      <img class="wallpaper-sm" :src="movieInfo.pictureUrl" alt="" />
      <div class="top-title">
        <div class="content container">
          <div class="left">
            <img :src="movieInfo.pictureUrl" alt="" />
          </div>
          <div class="right">
            <div class="title">
              <span>{{ movieInfo.filmTitle }}</span>
              <span class="star" v-if="'score' in movieInfo">
                <img v-for="(xing, index) of movieInfo.score" :key="index" src="@/assets/images/score-r.png" alt="" />
                <img v-for="(xing, index) of 5 - movieInfo.score" :key="index" src="@/assets/images/score-v.png" alt="" />
              </span>
              <span class="score-count">{{ movieInfo.score * 2 }}分</span>
            </div>
            <div class="description">壹戰成神、壹觸即發</div>
            <div class="tabs">
              <div class="tab" v-for="item of movieInfo.tag" :key="item">{{ tagsList[item].name }}</div>
            </div>
            <div class="date-time">2019年-10-01大陸上映 片長{{ movieInfo.duration }}分鍾</div>
            <div class="des">影片介紹</div>
            <div class="details ellipsis-multiline">
              {{ movieInfo.describe }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.main {
  .wallpaper {
    position: sticky;
    left: 0;
    right: 0;
    top: 80px;

    @media (max-width: 468px) {
      .wallpaper-sm {
        display: none;
      }
    }

    > img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 400px;
      object-fit: fill;
    }
  }

  .top-title {
    backdrop-filter: blur(5px);
    .content {
      height: 400px;
      padding-top: 50px;
      display: flex;
      .left {
        img {
          width: 240px;
          height: 330px;
          object-fit: cover;
        }
      }
      .right {
        color: rgba(255, 255, 255, 1);
        margin: 40px 0 30px 30px;
        .title {
          font-size: 26px;
          font-weight: 400;
          line-height: 36px;
          color: rgba(255, 255, 255, 1);
          display: flex;
          align-items: center;
          span {
            margin-right: 20px;
          }
          .star {
            display: flex;
            img {
              margin-left: 6px;
            }
          }
          .score-count {
            font-size: 22px;
            font-weight: 500;
            line-height: 31px;
            color: rgba(255, 207, 50, 1);
          }
        }

        .description {
          margin-top: 15px;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
        }
        .tabs {
          display: flex;
          margin: 10px 0;
          .tab {
            border-radius: 5px;
            padding: 4px 5px;
            font-size: 12px;
            margin-right: 8px;
            background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.09);
          }
        }
        .date-time {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        .des {
          margin: 15px 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 25px;
        }
      }
    }
  }
}
</style>
