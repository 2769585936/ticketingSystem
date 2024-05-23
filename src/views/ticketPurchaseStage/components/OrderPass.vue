<script setup></script>
<template>
  <div class="content">
    <div class="movie-information">
      <div class="img">
        <img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" />
      </div>
      <div class="zhong">
        <p class="move-title">湄公河行動</p>
        <p>1張-總價：$450</p>
        <p>今天10-07 22:50（國語3D）</p>
        <p>今萬達影城-A聽 3排15座</p>
      </div>
      <div class="right">
        <p class="xinxi">請到戲院櫃台支付完成交易</p>
        <p class="wxzhifu">
          <img src="https://img.js.design/assets/img/643d1646097d676c83ee616b.png" alt="" />
        </p>
        <p class="xinxi">8834787309134</p>
      </div>
    </div>
    <div class="rule-content">
      <h4>規則說明</h4>
      <ul>
        <li>（1）提前30分鐘取票，否則失效</li>
        <li>（1）提前30分鐘取票，否則失效</li>
        <li>（1）提前30分鐘取票，否則失效</li>
        <li>（1）提前30分鐘取票，否則失效</li>
        <li>（1）提前30分鐘取票，否則失效</li>
      </ul>
    </div>
    <div class="btn-zuihou">
      <button>确定我的订单</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  padding: 50px 175px;
  width: 820px;
  margin: 50px auto;
  background: white;
  .movie-information {
    width: 100%;
    display: flex;
    // gap: 15px;
    justify-content: space-between;
    .img {
      img {
        width: 107px;
        height: auto;
      }
    }
    .zhong {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      & > * {
        text-align: left;
        color: #000;
      }

      .move-title {
        font-size: 26px;
        font-weight: 600;
        line-height: 36px;
        color: rgba(51, 51, 51, 1);
      }
      & > p:nth-child(n + 2) {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(153, 153, 153, 1);
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-between;
      & > p {
        text-align: center;
        color: #000;
      }
      .xinxi {
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        color: rgba(51, 51, 51, 1);
      }
      .wxzhifu {
        padding: 10px 0;
        @include flex-center;
        img {
          width: 105px;
          height: auto;
        }
      }
    }
  }

  .rule-content {
    & * {
      color: rgba(51, 51, 51, 1);
    }
    h4 {
      margin-top: 10px;
      padding: 5px 0;
    }
    ul li {
      margin-top: 5px;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .btn-zuihou {
    margin-top: 50px;
    button {
      color: white;
      width: 100%;
      height: 47px;
      background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
      box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
    }
  }
}
</style>
