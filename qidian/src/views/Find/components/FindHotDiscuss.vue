<template>
  <div class="findHotDiscuss">
    <div class="" v-for="(i, index) in hotDiscussion" :key="index">
      <!-- 点点圈(类似发朋友圈动态) -->
      <!-- 书单(给别人推荐书) -->
      <p class="type">点点圈</p>
      <!-- 标题 -->
      <p class="title">{{ i.title }}</p>
      <!-- 内容预览 -->
      <p class="content">{{ i.content }}</p>
      <!-- 图片 -->
      <img :src="i.imgSrc" alt="" />
      <!-- 左下角Tag -->
      <p class="tag">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huaban"></use>
        </svg>
        {{ i.tag }}
      </p>
      <!-- 底部 -->
      <p class="findHotDiscuss-bottom">
        <!-- 左侧时间 -->
        <span class="time">{{ i.time }}</span>
        <span class="bottom-right">
          <!-- 评论 -->
          <span class="reviews">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
            {{ i.reviews }}
          </span>
          <!-- 点赞 -->
          <span class="likes">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use>
            </svg>
            {{ parseInt(i.likes) }}
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import '../iconfont/iconfont.css'
export default {
  data() {
    return {}
  },
  props: {
    hotDiscussion: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.findHotDiscuss > div {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-bottom: 0.2rem;
  background-color: #fff;
  padding: 0.2rem;
  /* display: inline-block; */
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
  vertical-align: -0.05rem;
  fill: currentColor;
  overflow: hidden;
}
.type {
  font-size: 0.25rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
}
.title {
  font-size: 0.35rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 0.1rem;
}
.content {
  font-size: 0.3rem;
  margin-bottom: 0.2rem;
  text-overflow: ellipsis;
  /* overflow: hidden;
  max-height: 1.2rem; */
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
img {
  margin-bottom: 0.2rem;
}
.tag {
  display: inline-block;
  padding: 0 0.1rem;
  color: #000;
  font-size: 0.25rem;
  font-weight: bold;
  background-color: #eee;
  text-align: center;
  height: 0.7rem;
  line-height: 0.6rem;
  border-radius: 5px;
  position: relative;
  top: -0.5rem;
}
.tag .icon {
  width: 0.5rem;
  height: 0.5rem;
  position: relative;
  top: 0.1rem;
}
.findHotDiscuss-bottom {
  font-size: 0.2rem;
  top: 1rem;
}
.bottom-right {
  float: right;
  margin-right: 0.2rem;
}
.reviews,
.likes {
  color: #999;
  line-height: 0.2rem;
  margin-left: 0.1rem;
}
</style>
