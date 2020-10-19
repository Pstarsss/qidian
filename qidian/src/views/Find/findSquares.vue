<template>
  <!-- 发现-广场  -->
  <div class="findSquares">
    <!-- 发布动态 -->
    <div class="issued"></div>
    <!-- 导航组件 -->
    <div class="nav"></div>
    <!-- 人气点点圈 -->
    <div class="popularity">
      <a href="" class="titleMenu">
        <menuTitle>
          <template #title>人气点点圈</template>
        </menuTitle>
      </a>
      <div class="content">
        <div class="popularity-menu">
          <p>新手</p>
          <div class="popularity-menu-num">
            <i class="iconfont icon-icon-wo"></i>
            <span>{{ num }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 书单 -->
    <div class="book-list"></div>
    <!-- 游戏 -->
    <div class="games"></div>
    <!-- 活动 -->
    <div class="activity"></div>
    <!-- 滚动公示 -->
    <div class="roll"></div>
    <!-- 神创作 -->
    <div class="created"></div>
    <!-- 专栏精选 -->
    <div class="choiceness"></div>
    <!-- 对话小说推荐 -->
    <div class="recommend"></div>
    <!-- 热门讨论 -->
    <div class="hot-discuss"></div>
  </div>
</template>

<script>
let num = parseInt(Math.random() * 550000) + 50000
import menuTitle from './find-menuTitle'
import './iconfont/iconfont.css'
export default {
  data() {
    return {
      num,
    }
  },
  components: {
    menuTitle,
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.discover-squares {
  padding: 0 15px 50px;
}
</style>
