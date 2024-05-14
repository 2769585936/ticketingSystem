<template>
  <div class="main">
    <div class="container">
      <ul class="nav-nar">
        <li class="active"><span class="text">選擇場次</span></li>
        <li class="active">選擇座位</li>
        <li>確認</li>
        <li>成功</li>
      </ul>

      <div class="choose-seat">
        <div class="left">
          <div class="icons">
            <div class="icon-item">
              <div class="zuowei icon-bg-can"></div>
              <span>普通</span>
            </div>
            <div class="icon-item">
              <div class="zuowei icon-bg-none"></div>
              <span>售出</span>
            </div>
            <div class="icon-item">
              <div class="zuowei icon-bg-my-can"></div>
              <span>已选</span>
            </div>
          </div>
          <!-- 荧幕 -->
          <div class="screen"></div>
          <!-- 座位列表 -->
          <div class="seating-area">
            <div class="column">
              <div class="col-index" v-for="list in 10">{{ list }}</div>
            </div>
            <div class="seating-area-zuowei">
              <div class="zuowei-content row" v-for="list in 10" :key="list">
                <div class="zuowei" v-for="item in 16" :key="item">
                  <div class="zuowei icon-bg-can" v-if="item != 1 || list == 10"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="buy-seat">
            <div class="buy-box">
              <span class="del-zuo">×</span>
              <span class="zuo">2排9座</span>
              <span class="jine">$200</span>
            </div>
            <div class="buy-box">
              <span class="del-zuo">×</span>
              <span class="zuo">2排9座</span>
              <span class="jine">$200</span>
            </div>
            <div class="buy-box">
              <span class="del-zuo">×</span>
              <span class="zuo">2排9座</span>
              <span class="jine">$200</span>
            </div>
            <div class="buy-box">
              <span class="del-zuo">×</span>
              <span class="zuo">2排9座</span>
              <span class="jine">$200</span>
            </div>
          </div>
          <button class="queren-buy">確認</button>
        </div>
        <div class="right">
          <div class="title-top">
            <div class="img">
              <img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" />
            </div>
            <div class="details">
              <p class="title">湄公河行動</p>
              <p class="history">2019年-10-01大陸上映片長222分鍾</p>
            </div>
          </div>

          <div class="introduce">
            <h3 class="jieshao">影片介紹</h3>
            <p class="miaoshu">
              《姜子牙》是由霍爾果斯彩條屋影業有限公司、中傳合道文化發展有限公司出品的神話動作動畫電影，由程騰、李炜執導，鄭希、楊凝、圖特哈蒙、閻麽麽等擔任主要配音演員。該片講述了封神大戰之後，姜子牙因壹時之過被貶下凡間，失去神力，被世人唾棄。爲重回昆侖，姜子牙踏上旅途尋回自我的故事。該電影于2020年10月1日在中國內地、北美同步上映。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  padding: 50px 0;
  background: #25262c;
  .container {
    .nav-nar {
      width: 820px;
      margin: auto;
      display: flex;
      align-items: center;
      height: 60px;
      overflow: hidden;
      border-radius: 39px;
      background: rgba(211, 211, 211, 0.2);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

      li {
        flex: 1;
        height: 100%;
        text-align: center;
        // padding: 0 20px;
        line-height: 1;
        @include flex-center;
        .text {
          font-size: 16px;
          font-weight: 500;
          line-height: 22px;
        }
        &.active {
          background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
          box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
        }
      }
    }

    .choose-seat {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      .left {
        flex: 1;
        // 座位样式
        .zuowei {
          width: 26px;
          height: 23px;
          border-radius: 10px 10px 0 0;
        }

        // 可选
        .icon-bg-can {
          background: #fff;
        }

        // 售出
        .icon-bg-none {
          background: #999;
        }

        // 已选
        .icon-bg-my-can {
          background: rgba(255, 109, 83, 1);
        }
        .icons {
          width: 200px;
          margin: auto;
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
        }
        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .screen {
          position: relative;
          margin: 20px auto 70px auto;
          width: 560px;
          height: 10px;
          border-radius: 10px;
          background: rgba(255, 109, 83, 1);
          &::after {
            content: '銀幕';
            position: absolute;
            bottom: -30px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(255, 109, 83, 1);
          }
        }

        // 座位列表
        .seating-area {
          position: relative;
          .column {
            position: absolute;
            width: 26px;
            height: 100%;
            border-radius: 10px;
            background: rgba(211, 211, 211, 0.2);
            display: grid;
            gap: 15px;
            text-align: center;
          }
          .seating-area-zuowei {
            width: 80%;
            margin: auto;
            display: grid;
            gap: 15px;
            .zuowei-content {
              width: 100%;
              height: 26px;
              display: flex;
              justify-content: space-between;
            }
          }
        }

        .buy-seat {
          margin: 40px auto;
          width: 70%;
          display: grid;
          gap: 15px;
          grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
          .buy-box {
            position: relative;
            width: 78px;
            height: 52px;
            background: rgba(255, 255, 255, 1);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .zuo {
              color: rgba(51, 51, 51, 1);
              font-size: 12px;
              font-weight: 400;
              line-height: 17px;
            }
            .jine {
              color: rgba(255, 99, 83, 1);
              font-size: 12px;
              font-weight: 600;
              line-height: 17px;
            }

            .del-zuo {
              position: absolute;
              top: 0;
              right: 0;
              transform: translate(50%, -50%);
              width: 14px;
              height: 14px;
              line-height: 14px;
              border-radius: 50%;
              background: rgba(153, 153, 153, 1);
            }
          }
        }
        .queren-buy {
          display: block;
          margin: 20px auto;
          width: 336px;
          height: 47px;
          background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
        }
      }
      .right {
        background: rgba(211, 211, 211, 0.2);
        padding: 30px;
        width: 380px;
        .title-top {
          display: flex;
          .img {
            width: 150px;
            img {
              width: 100%;
            }
          }
          .details {
            padding-left: 30px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .title {
              font-size: 26px;
              font-weight: 500;
              line-height: 36px;
            }
            .history {
              margin-top: 10px;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
        .introduce {
          .jieshao {
            padding: 25px 0 15px 0;
            font-size: 18px;
            font-weight: 500;
            line-height: 25px;
          }
          .miaoshu {
            font-size: 12px;
            line-height: 17px;
          }
        }
      }
    }
  }
}
</style>
