<script setup></script>
<template>
  <div class="layout">
    <header>
      <div class="container">
        <div class="left">
          <img src="@/assets/images/logo.png" />
          <span class="text">KERTES CINEMA</span>
        </div>
        <div class="content">
          <router-link to="index">
            <div class="text active">
              <div>首页</div>
            </div>
          </router-link>
          <router-link to="index">
            <div class="text">选择剧院</div>
          </router-link>
          <router-link to="hotsell">
            <div class="text">熱售中</div>
          </router-link>
          <div class="text">即將上映</div>
          <div class="text">訂單隱私條款與服協議</div>
          <div class="text">我的資料</div>
        </div>
        <div class="right">
          <span>登录</span>
          <span>注销</span>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="container">
        <p>KERTES CINEMA</p>
        <p>官網連結 | 連結1 | 連結2 | 連結3</p>
        <p>訂單隱私條款與服協議 <span>聯絡方式：0755-8324181</span></p>
        <p>版權所有©KERTESCINEMA</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
header {
  position: sticky;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 80px;
  background: rgba(34, 28, 28, 1);

  .container {
    height: 100%;
    @include flex-center;
    justify-content: space-between;
    color: rgba(255, 255, 255, 1);
    line-height: 25px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;

    .left {
      width: 192px;
      color: rgba(255, 109, 83, 1);
      @include flex-center;
      justify-content: space-between;

      img {
        width: 15px;
        height: 24px;
      }

      .text {
        width: 167px;
      }
    }

    .content {
      height: 100%;
      margin-left: 20px;
      flex: 1;
      display: flex;

      & .text {
        color: rgba(255, 255, 255, 1);
        margin-right: 43px;
        height: 100%;
        @include flex-center;

        &.active {
          color: rgba(255, 109, 83, 1);
          position: relative;

          &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            border-radius: 3px;
            background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
            box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
          }
        }
      }
    }

    .right {
      width: 105px;
      @include flex-center;
      justify-content: space-between;
    }
  }
}

footer {
  width: 100%;
  height: 175px;
  background: rgba(34, 28, 28, 1);

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(255, 255, 255, 1);

    & > p {
      & > span {
        margin-left: 28px;
      }
    }

    & > p:first-of-type {
      text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.09);
      /** 文本1 */
      font-size: 18px;
      line-height: 25px;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
