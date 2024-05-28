<script setup>
import { computed, onMounted, ref } from 'vue'
import { hotSaleApi, preSaleApi, recommendFilmApi } from '@/api/filmInfo/index'

const recommendFilmList = ref([])

onMounted(async () => {
  const { data: res } = await recommendFilmApi()
  recommendFilmList.value = res
})

// 获取热售数据
const hotSaleList = ref([])

const getHotSale = async () => {
  const obj = {
    limit: 10
  }
  const { data: res } = await hotSaleApi(obj)
  hotSaleList.value = res
}

onMounted(() => {
  getHotSale()
})

// 切换热售和即将上映
const showMovieInfo = ref('hot')
const preSaleList = ref([])

let preSaleListbool = false

const getPreSale = async () => {
  const obj = {
    limit: 10
  }
  const { data: res } = await preSaleApi(obj)
  preSaleList.value = res
}

const clickGetPreList = () => {
  showMovieInfo.value = 'pre'
  if (preSaleListbool) return

  preSaleListbool = true
  getPreSale()
}

const currentList = computed(() => {
  if (showMovieInfo.value == 'hot') return hotSaleList.value
  return preSaleList.value
})
</script>
<template>
  <div class="banner">
    <div class="container">
      <h3>推荐电影</h3>
      <div class="content">
        <div v-for="item in recommendFilmList" :key="item._id">
          <div class="poster">
            <img :src="item.pictureUrl" alt="" />
          </div>
          <div class="score-content">
            <div>{{ item.filmTitle }}</div>
            <div class="score">
              <img v-for="(xing, index) of item.score" :key="index" src="@/assets/images/score-r.png" alt="" />
              <img v-for="(xing, index) of 5 - item.score" :key="index" src="@/assets/images/score-v.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hot">
    <div class="container">
      <div class="hot-selling">
        <div class="hot-tabs">
          <div class="text" :class="{ active: showMovieInfo == 'hot' }" @click="showMovieInfo = 'hot'">正在热映</div>
          <div class="text" :class="{ active: showMovieInfo == 'pre' }" @click="clickGetPreList">即將上映</div>
          <div class="current-bar"></div>
        </div>
        <div class="all-hot" @click="$router.push('/hotsell')">全部 ></div>
      </div>

      <div class="content-neirong">
        <!-- 热售 -->
        <div class="box" v-for="item in currentList" :key="item._id">
          <router-link :to="{ path: '/cinema', query: { _fid: item._id } }">
            <div class="img">
              <img :src="item.pictureUrl" alt="" />
              <div class="mask">
                <span class="text">{{ item.filmTitle }}</span>
              </div>
            </div>
            <div class="booking">
              <span>{{ showMovieInfo === 'hot' ? '訂票' : '预售' }}</span>
            </div>
          </router-link>
        </div>

        <!-- 即将上映 -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  padding-top: 50px;
  width: 100%;
  background: rgba(37, 38, 44, 1);

  .container {
    > h3 {
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 0px;
      line-height: 25px;
      color: rgba(255, 255, 255, 1);
    }

    .content {
      padding-top: 30px;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(585px, 1fr));

      & > div {
        position: relative;
        // height: 250px;
        background-color: red;

        & > div {
          height: 100%;
        }

        .poster {
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .score-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 50px;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: space-between;
          padding: 15px 20px;

          & > div {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0px;
            line-height: 20px;
            color: rgba(255, 255, 255, 1);
            text-align: left;
          }

          .score {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 80px;

            img {
              width: 9px;
              height: 9px;
            }
          }
        }
      }

      & > div:first-of-type {
        grid-row: 1 / 3;
        height: 100%;
      }
    }
  }
}

.hot {
  padding: 50px 0;
  width: 100%;
  background: rgba(37, 38, 44, 1);

  .hot-selling {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0px;

    .hot-tabs {
      position: relative;
      display: flex;
      color: rgba(139, 139, 152, 1);

      .text {
        padding: 15px 15px;
        text-align: center;
        line-height: 22px;

        &:hover {
          background: rgba(139, 139, 152, 0.2);
        }
      }

      & .active {
        color: rgba(255, 255, 255, 1);
      }

      .current-bar {
        position: absolute;
        left: 0;
        bottom: 0px;
        width: 52px;
        margin: 0 25px;
        height: 4px;
        border-radius: 3px;
        background: linear-gradient(142.64deg, rgb(255, 109, 83) 0%, rgb(255, 83, 83) 100%);
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
        transition: all 0.3s;
      }
      & > div:nth-child(1) {
        &.active ~ .current-bar {
          left: 0px;
        }
      }
      & > div:nth-child(2) {
        &.active ~ .current-bar {
          left: 102px;
        }
      }
    }

    .all-hot {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.6);
    }
  }

  .content-neirong {
    padding-top: 30px;
    display: grid;
    min-height: 270px;
    gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));

    .box {
      .img {
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .mask {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 50px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          @include flex-center;

          .text {
            font-size: 14px;
            font-weight: 400;
            height: 20px;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }

    .booking {
      height: 36px;
      background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
      box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
      @include flex-center;

      span {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
