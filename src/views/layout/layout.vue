<script setup>
import { useUserInfo } from '@/stores/userInfo'
import { useRouter } from 'vue-router'

const userInfoStore = useUserInfo()
const router = useRouter()

const clickUserLogoBtn = key => {
  if (key == 'exit') {
    userInfoStore.exitUser()
  }
  if (key == 'userdata') {
    router.push('/myprofile/personal')
  }
}
</script>
<template>
  <div class="layout">
    <header>
      <div class="container">
        <div class="left">
          <img src="@/assets/images/logo.png" />
          <span class="text">KERTES CINEMA</span>
        </div>
        <div class="content">
          <router-link :class="{ active: $route.href == '/index' }" to="/index">
            <div class="text">首页</div>
          </router-link>
          <router-link :class="{ active: $route.href == '/movietheatre' }" to="/movietheatre">
            <div class="text">选择剧院</div>
          </router-link>
          <router-link :class="{ active: $route.href.includes('/hotsell') }" to="/hotsell">
            <div class="text">热售中</div>
          </router-link>
          <router-link :class="{ active: $route.href.includes('/presell') }" to="/presell">
            <div class="text">即將上映</div>
          </router-link>
          <router-link :class="{ active: $route.href.includes('/myprofile') }" to="/myprofile/personal">
            <div class="text">我的資料</div>
          </router-link>
          <div class="header-bar"></div>
        </div>
        <div class="right">
          <div v-if="!userInfoStore.userInfo" @click="$router.push('/login')">登录</div>
          <div v-else>
            <el-dropdown @command="clickUserLogoBtn">
              <el-avatar class="user-logo" :src="userInfoStore.userInfo.userPicture" />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="userdata">查看个人资料</el-dropdown-item>
                  <el-dropdown-item command="exit">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="container">
        <p>KERTES CINEMA</p>
        <p>官网连接 | 连接1 | 连接2 | 连接3</p>
        <p>订购隐私条款与协议<span>联络方式：xxxxx-xxxxx</span></p>
        <p><a href="http://beian.miit.gov.cn" target="_blank">鄂ICP备2024071313号</a></p>
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
      max-width: 192px;
      color: rgba(255, 109, 83, 1);
      @include flex-center;
      justify-content: space-between;

      img {
        width: 15px;
        height: 24px;
      }

      .text {
        margin-left: 10px;
        width: 167px;
      }

      @media (max-width: 840px) {
        .text {
          display: none;
        }
      }
    }

    .content {
      position: relative;
      height: 100%;
      flex: 1;
      gap: 10px;
      display: flex;
      color: rgba(255, 255, 255, 1);
      & .active {
        color: rgba(255, 109, 83, 1);
      }
      & .text {
        padding: 0 15px;
        height: 100%;
        @include flex-center;
        &:hover {
          background: rgba(122, 122, 122, 0.2);
        }
      }
      .header-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 36px;
        margin: 0 15px;
        height: 4px;
        border-radius: 3px;
        background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
        transition: all 0.3s;
      }

      & .active:nth-child(1) ~ .header-bar {
        left: 0;
        width: 36px;
      }
      & .active:nth-child(2) ~ .header-bar {
        left: 76px;
        width: 72px;
      }
      & .active:nth-child(3) ~ .header-bar {
        left: 188px;
        width: 54px;
      }
      & .active:nth-child(4) ~ .header-bar {
        left: 282px;
        width: 72px;
      }
      & .active:nth-child(5) ~ .header-bar {
        left: 394px;
        width: 72px;
      }
    }

    .right {
      width: 105px;
      @include flex-center;
      justify-content: space-between;

      .user-logo {
        outline: none;
      }
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
