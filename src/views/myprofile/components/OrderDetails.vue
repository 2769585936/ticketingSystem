<script setup></script>
<template>
  <div>
    <div class="title-box"><span>订单详情</span> <span>返回</span></div>
    <div class="order-content">
      <div class="rongqi">
        <div class="box">
          <svg width="68" style="color: rgba(255, 109, 83, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path>
          </svg>
          <span class="shengyushijian">已使用</span>
          <span class="shanchu">
            <img width="59" src="https://img.js.design/assets/img/643d1646097d676c83ee616b.png" alt="" />
          </span>
        </div>
        <div class="box bianhao">
          <span>訂單編號：{{ $route.params.id }}</span>
          <span class="shanchu">删除</span>
        </div>
        <div class="order-details">
          <dl>
            <div>
              <dt>影片</dt>
              <dd>湄公河</dd>
            </div>
            <div>
              <dt>開場時間</dt>
              <dd>2020-03-21 16:00-18:00（國語3D）</dd>
            </div>
            <div>
              <dt>影院</dt>
              <dd>萬達影城</dd>
            </div>
            <div>
              <dt>座位</dt>
              <dd>A聽5排（16號、17號）</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title-box {
  color: rgba(255, 109, 83, 1);
}

.order-content {
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid rgba(211, 211, 211, 0.2);

  .box {
    padding: 20px 30px;
    background: rgba(211, 211, 211, 0.2);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.09);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shengyushijian {
      flex: 1;
      text-align: left;
      margin-left: 15px;
      font-size: 22px;
      // height: fit-content;
    }
    .shanchu {
      text-align: right;
    }

    &.bianhao {
      margin-top: 30px;
    }
  }
  .order-details {
    padding: 20px 30px 35px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    dl {
      flex: 1;
      display: flex;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      justify-content: space-between;
      text-align: center;
      & > div {
        width: fit-content;
        & > dt {
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>
