<script setup>
defineProps(['movieInfo', 'tags'])
</script>

<template>
  <div class="box">
    <div class="img">
      <img v-lazy-img="movieInfo.pictureUrl" :title="movieInfo.filmTitle" />
    </div>
    <div class="details-content">
      <p class="title">
        <span class="title-text">{{ movieInfo.filmTitle }}</span>
        <span class="title-state">{{ movieInfo.currentState ? '热售中' : '预告片' }}</span>
      </p>
      <p class="daoyan">
        <span class="text">导演：{{ movieInfo.director }}</span>
      </p>
      <p class="score">
        <img v-for="(xing, index) of movieInfo.score" :key="index" src="@/assets/images/score-r.png" alt="" />
        <img v-for="(xing, index) of 5 - movieInfo.score" :key="index" src="@/assets/images/score-v.png" alt="" />
      </p>
      <p class="tabs">
        <span class="tab" v-for="item in movieInfo.tag" :key="item._id">{{ tags[item]?.name }}</span>
      </p>
      <p class="describe ellipsis-multiline">{{ movieInfo.describe }}</p>
      <p class="books">
        <button class="btn">{{ movieInfo.currentState ? '订票' : '预定' }}</button>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  .img {
    width: 175px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .details-content {
    flex: 1;
    padding: 20px;
    border: 1px solid rgba(128, 128, 128, 0.2);
    border-left: none;

    .title {
      display: flex;
      justify-content: space-between;

      .title-text {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: rgba(255, 255, 255, 1);
      }
    }

    .title-state {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      color: rgba(255, 109, 83, 1);
    }

    .daoyan {
      margin-bottom: 5px;

      .text {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 17px;
        color: rgba(139, 139, 152, 1);
      }
    }
    .score {
      display: flex;
      gap: 8px;
    }
    .tabs {
      margin-top: 5px;

      .tab {
        padding: 2px 3px;
        border-radius: 5px;
        background: rgba(128, 128, 128, 1);
        font-size: 10px;
        font-weight: 500;
        margin-right: 8px;
        color: rgba(255, 255, 255, 1);
      }
    }

    .describe {
      margin-top: 15px;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 17px;
      color: rgba(255, 255, 255, 1);
    }

    .books {
      margin-top: 15px;
      text-align: right;

      .btn {
        width: 175px;
        height: 36px;
        opacity: 1;
        background: linear-gradient(142.64deg, rgba(255, 109, 83, 1) 0%, rgba(255, 83, 83, 1) 100%);
        box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.09);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        vertical-align: top;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>
