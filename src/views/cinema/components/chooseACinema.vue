<template>
  <div class="footer">
    <div class="container">
      <div class="choose-title">
        <h3>選擇影院</h3>
      </div>
      <dir class="cineplexs">
        <div class="box" v-for="item in 10" :key="item">
          <div class="cinema-logo">
            <div class="img"></div>
          </div>
          <div class="yingcheng">
            <p class="title-nickname">華納兄弟影城</p>
            <p class="title-address">湖南省長沙市天心區凱德廣場</p>
          </div>
          <router-link to="/cinema/choosedate">
            <div class="right-btn">
              <button>選座購票</button>
            </div>
          </router-link>
        </div>
      </dir>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 20px;
  background: rgba(37, 38, 44, 1);
  .choose-title {
    position: sticky;
    background: rgba(37, 38, 44, 1);
    padding: 10px 0;
    top: 480px;
    h3 {
      position: relative;
      padding-left: 12px;
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: linear-gradient(
          142.64deg,
          rgba(255, 109, 83, 1) 0%,
          rgba(255, 83, 83, 1) 100%
        );
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
      }
    }
  }

  .cineplexs {
    .box {
      display: flex;
      align-items: center;
      justify-content: left;
      padding: 30px 0;
      border: 1px solid rgba(0, 0, 0, 0.1);
      .cinema-logo {
        width: 45px;
        height: 45px;
        background: #ccc;
        border-radius: 50%;
      }
      .yingcheng {
        padding-left: 12px;
        flex: 1;
        height: 45px;
        .title-nickname {
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
        }
        .title-address {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #ccc;
        }
      }
      .right-btn {
        width: 120px;
        height: 35px;
        justify-self: right;
        button {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: linear-gradient(
            142.64deg,
            rgba(255, 109, 83, 1) 0%,
            rgba(255, 83, 83, 1) 100%
          );
          box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
        }
      }
    }
  }
}
</style>