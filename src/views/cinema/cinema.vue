<script setup></script>
<template>
  <div class="main">
    <div class="wallpaper">
      <img src="@/assets/images/wallpaper.png" alt="" />

      <div class="top-title">
        <div class="content container">
          <div class="left">
            <img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" />
          </div>
          <div class="right">
            <div class="title">
              <span>湄公河行動</span><span class="star"><img src="@/assets/images/score-r.png" /><img src="@/assets/images/score-r.png" /><img src="@/assets/images/score-r.png" /><img src="@/assets/images/score-r.png" /><img src="@/assets/images/score-r.png" /></span
              ><span class="score-count">6.6分</span>
            </div>
            <div class="description">壹戰成神、壹觸即發</div>
            <div class="tabs">
              <div class="tab">动作</div>
              <div class="tab">爱情</div>
              <div class="tab">喜剧</div>
            </div>
            <div class="date-time">2019年-10-01大陸上映 片長222分鍾</div>
            <div class="des">影片介紹</div>
            <div class="details">
              《姜子牙》是由霍爾果斯彩條屋影業有限公司、中傳合道文化發展有限公司出品的神話動作動畫電影，由程騰、李炜執導，鄭希、楊凝、圖特哈蒙、閻麽麽等擔任主要配音演員。該片講述了封神大戰之後，姜子牙因壹時之過被貶下凡間，失去神力，被世人唾棄。爲重回昆侖，姜子牙踏上旅途尋回自我的故事。該電影于2020年10月1日在中國內地、北美同步上映。
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
