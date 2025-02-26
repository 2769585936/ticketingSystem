<template>
  <div class="main">
    <div class="container">
      <div class="choose-day">
        <el-tabs class="demo-tabs" v-model="dateIndex">
          <el-tab-pane v-for="(item, index) in 7" :key="item" :label="getdateFormat(index)" :name="item"></el-tab-pane>
        </el-tabs>

        <div class="piao">
          <div class="box" v-for="item in CinemasTimeList" :key="item">
            <div class="left">
              <p class="title-box">
                {{ item.startTime }}<span class="banquan">（數位版）</span><br />
                <span class="text">{{ item._cid[0].hall[item.hall] }} {{ item._fid[0].duration }}分钟</span>
              </p>
            </div>
            <div class="right">
              <button
                @click="
                  $router.push({
                    path: '/ticketpurchasestage',
                    query: {
                      _id: item._id
                    }
                  })
                "
              >
                订票
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCinemasTimeApi } from '@/api/cinemas'
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const dateIndex = ref(1)

const getDateTime = date => {
  return dayjs(date).format('MM月DD日')
}

const route = useRoute()
const CinemasTimeList = ref([])

const getCinemasTime = async () => {
  const { _cid, _fid } = route.query
  const { data: res } = await getCinemasTimeApi({ _cid, _fid })
  CinemasTimeList.value = res
}

onMounted(() => getCinemasTime())

const getdateFormat = index => {
  let str = getDateTime(Date.now() + 1000 * 60 * 60 * 24 * index)
  if (index == 0) {
    str = '今天' + str
  }
  if (index == 1) {
    str = '明天' + str
  }
  return str
}
</script>

<style lang="scss" scoped>
.main {
  background: rgba(37, 38, 44, 1);
  .container {
    background: rgba(37, 38, 44, 1);
    padding: 0px 0 50px 0;
    .choose-day {
      .demo-tabs {
        padding-top: 20px;
        background: rgba(37, 38, 44, 1);
        position: sticky;
        top: 480px;
        :deep(.el-tabs__item.is-active) {
          color: white;
        }
        :deep(.el-tabs__active-bar) {
          border-radius: 2px;
          background: rgba(255, 83, 83, 1);
        }
        :deep(.el-tabs__item) {
          color: #ccc;
        }
        // 下面长横条伪元素
        :deep(.el-tabs__nav-wrap:after) {
          background: none;
        }
      }

      .piao {
        padding: 10px 0;
        display: grid;
        gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
        .box {
          display: flex;
          .left {
            flex: 1;
            background: white;
            padding: 10px 20px;
            .title-box {
              font-size: 22px;
              font-weight: 600;
              color: rgba(51, 51, 51, 1);
              .banquan {
                font-size: 18px;
                font-weight: 400;
                line-height: 25px;
                color: rgba(51, 51, 51, 1);
              }
              .text {
                font-size: 12px;
                font-weight: 400;
                line-height: 17px;
                color: rgba(51, 51, 51, 1);
              }
            }
          }
          .right {
            button {
              width: 76px;
              height: 80px;
              color: white;
              background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
            }
          }
        }
      }
    }
  }
}
</style>
