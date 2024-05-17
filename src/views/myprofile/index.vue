<script setup></script>
<template>
  <div class="layout">
    <div class="container">
      <div class="left">
        <div class="subject">个人中心</div>
        <ul>
          <li class="active">个人资料</li>
          <li>所有訂單</li>
          <li>待使用訂單</li>
          <li>已使用訂單</li>
        </ul>
      </div>
      <div class="right">
        <div>所有订单</div>
        <div class="order-content">
          <div class="rongqi">
            <div class="box">
              <span>萬達影城A聽</span>
              <span class="shengyushijian">剩餘時間:10:10分</span>
              <span class="shanchu">删除</span>
            </div>
            <div class="order-details">
              <div class="img-content">
                <div class="img-logo"><img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" /></div>
                <div class="img-text">
                  <p class="title">湄公河</p>
                  <p class="shijian">10月10日22:50</p>
                  <p class="zuowei">A聽5排16號</p>
                </div>
              </div>
              <div class="qita">$490</div>
              <div class="qita">已付款</div>
              <div class="qita">查看詳情</div>
            </div>
          </div>
          <div class="rongqi">
            <div class="box">
              <span>萬達影城A聽</span>
              <span class="shengyushijian">剩餘時間:10:10分</span>
              <span class="shanchu">删除</span>
            </div>
            <div class="order-details">
              <div class="img-content">
                <div class="img-logo"><img src="https://img.js.design/assets/img/643d164b6c033db40079a2f0.png" alt="" /></div>
                <div class="img-text">
                  <p class="title">湄公河</p>
                  <p class="shijian">10月10日22:50</p>
                  <p class="zuowei">A聽5排16號</p>
                </div>
              </div>
              <div class="qita">$490</div>
              <div class="qita">已付款</div>
              <div class="qita">查看詳情</div>
            </div>
          </div>
        </div>

        <el-pagination class="fenye" background next-text="下一页" prev-text="上一页" layout="prev, pager, next, total, jumper" :total="50" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  padding: 30px 0;
  background: rgba(37, 38, 44, 1);
  .container {
    display: flex;
    height: 100%;
    border: 1px solid rgba(211, 211, 211, 0.2);
    .left {
      min-height: calc(100vh - 80px - 175px - 80px);
      width: 230px;
      text-align: center;
      background: rgba(211, 211, 211, 0.2);
      .subject {
        padding: 20px 0;
        font-size: 20px;
        line-height: 28px;
        color: #fff;
      }
      ul li {
        padding: 15px 0;
        font-size: 16px;
        line-height: 22px;
        color: rgba(255, 255, 255, 1);

        &.active {
          background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
        }
      }
    }
    .right {
      color: #fff;
      flex: 1;
      padding: 30px 20px 20px 45px;

      .order-content {
        margin-top: 20px;
        padding-top: 30px;
        border-top: 1px solid rgba(211, 211, 211, 0.2);
        .box {
          padding: 20px 30px;
          background: rgba(211, 211, 211, 0.2);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.09);
          display: flex;
          .shengyushijian {
            flex: 1;
            text-align: right;
            margin-right: 20px;
          }
          .shanchu {
            justify-self: end;
          }
        }
        .order-details {
          padding: 20px 30px 35px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .img-content {
            display: flex;
            gap: 20px;
            .img-logo {
              img {
                height: 130px;
              }
            }
            .img-text {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 15px;
              p {
                font-size: 14px;
                line-height: 20px;
                opacity: 0.6;
              }
              .title {
                font-size: 16px;
                letter-spacing: 0px;
                line-height: 22px;
                opacity: 1;
              }
            }
          }

          .qita {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(255, 255, 255, 1);
            opacity: 0.9;
          }
        }
      }
    }
  }
}

// 修改分页样式
.fenye {
  width: fit-content;
  margin: auto;
  & > :deep(span) {
    color: white;
  }
}
</style>
