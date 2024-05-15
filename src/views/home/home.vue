<script setup></script>
<template>
  <div class="banner">
    <div class="container">
      <h3>推荐电影</h3>
      <div class="content">
        <div>
          <div class="poster">
            <img src="https://api.kertescinema.com.tw/storage/a1b2b4dcbc6edff21c4a0684a0ac7c1c.jpg" alt="" />
          </div>
          <div class="score-content">
            <div>复仇者联盟</div>
            <div class="score">
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div class="poster">
            <img src="https://api.kertescinema.com.tw/storage/a1b2b4dcbc6edff21c4a0684a0ac7c1c.jpg" alt="" />
          </div>
          <div class="score-content">
            <div>复仇者联盟</div>
            <div class="score">
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div class="poster">
            <img src="https://api.kertescinema.com.tw/storage/a1b2b4dcbc6edff21c4a0684a0ac7c1c.jpg" alt="" />
          </div>
          <div class="score-content">
            <div>复仇者联盟</div>
            <div class="score">
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
              <img src="@/assets/images/score-r.png" alt="" />
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
          <div class="text active">熱售中</div>
          <div class="text">即將上映</div>
        </div>
        <div class="all-hot">全部 ></div>
      </div>

      <div class="content-neirong">
        <div class="box" v-for="item in 10" :key="item">
          <router-link to="cinema">
            <div class="img">
              <img src="https://img.js.design/assets/img/643d16474274fef453c2cf41.png" alt="" />
              <div class="mask">
                <span class="text">这个杀手不太冷</span>
              </div>
            </div>

            <div class="booking"><span>訂票</span></div>
          </router-link>
        </div>
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
      display: flex;
      color: rgba(139, 139, 152, 1);

      .text {
        height: 30px;
        margin-right: 30px;
        line-height: 22px;
      }

      & .active {
        color: rgba(255, 255, 255, 1);
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
