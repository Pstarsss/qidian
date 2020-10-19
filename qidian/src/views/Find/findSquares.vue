<template>
  <div class="container">
    <!-- 发现-广场  -->
    <div class="findSquares">
      <!-- 发布动态 -->
      <div class="issued"></div>
      <!-- 导航组件 -->
      <div class="nav">
        <p>NAV</p>
      </div>
      <!-- 人气点点圈 -->
      <div id="popularity" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>人气点点圈</template>
          </menuTitle>
        </a>
        <!-- Content -->
        <el-row :gutter="20">
          <el-col :span="6" class="popularity-tag">
            <div>
              <p class="popularity-tag-title">新手</p>
              <div class="popularity-tag-num">
                <!-- <i class="iconfont icon-icon-wo"></i> -->
                <span>{{ num }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6" class="popularity-tag">
            <div>
              <p class="popularity-tag-title">新手</p>
              <div class="popularity-tag-num">
                <!-- <i class="iconfont icon-icon-wo"></i> -->
                <span>{{ num }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6" class="popularity-tag">
            <div>
              <p class="popularity-tag-title">新手</p>
              <div class="popularity-tag-num">
                <!-- <i class="iconfont icon-icon-wo"></i> -->
                <span>{{ num }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6" class="popularity-tag">
            <div>
              <p class="popularity-tag-title">新手</p>
              <div class="popularity-tag-num">
                <!-- <i class="iconfont icon-icon-wo"></i> -->
                <span>{{ num }}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 书单 -->
      <div id="book-list" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>书单</template>
          </menuTitle>
        </a>
        <!-- Content -->
        <el-row :gutter="1">
          <el-col :span="12">
            <div>
              <el-row :gutter="3">
                <el-col :span="8">
                  <div class="book-list-content"></div>
                </el-col>
                <el-col :span="8">
                  <div class="book-list-content"></div>
                </el-col>
                <el-col :span="8">
                  <div class="book-list-content"></div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <el-row :gutter="3">
                <el-col :span="8">
                  <div class="book-list-content"></div>
                </el-col>
                <el-col :span="8">
                  <div class="book-list-content"></div>
                </el-col>
                <el-col :span="8">
                  <div class="book-list-content"></div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 游戏 -->
      <div id="games" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>游戏</template>
          </menuTitle>
        </a>
        <!-- Content -->
        <el-row :gutter="20">
          <el-col :span="12">
            <div></div>
          </el-col>
          <el-col :span="12">
            <div></div>
          </el-col>
        </el-row>
      </div>
      <!-- 活动 -->
      <div id="activity" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>活动</template>
          </menuTitle>
        </a>
      </div>
      <!-- 滚动公示 -->
      <!-- <div id="roll"></div> -->
      <!-- 神创作 -->
      <div id="created" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>神创作</template>
          </menuTitle>
        </a>
      </div>
      <!-- 专栏精选 -->
      <div id="choiceness" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>专栏精选</template>
          </menuTitle>
        </a>
      </div>
      <!-- 对话小说推荐 -->
      <div id="recommend" class="findSquareContent">
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>对话小说推荐</template>
          </menuTitle>
        </a>
      </div>
      <!-- 热门讨论 -->
      <!-- <div id="hot-discuss"></div> -->
    </div>
  </div>
</template>

<script>
let num = parseInt(Math.random() * 550000) + 50000
import menuTitle from './findMenuTitle'
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
.findSquares {
  padding: 0 10px 50px;
}
.findSquareContent {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.3rem;
}
</style>

// 人气点点圈
<style scoped>
.el-row {
  padding: 0 0.2rem;
}
.popularity-tag {
  background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
  background-size: cover;
  padding: 10px 0;
  margin: 0 0.05rem;
  border-radius: 10px;
  position: relative;
  height: 1.7rem;
  width: 1.5rem;
}
.popularity-tag > img {
  position: absolute;
  opacity: 0.5;
}
.popularity-tag-title {
  font-size: 0.25rem;
  color: #fff;
}
.popularity-tag-num {
  position: relative;
  bottom: 5px;
}
.popularity-tag-num > span {
  background-color: #f00;
  border-radius: 7px;
  padding: 3px 3px;
  font-size: 0.2rem;
  color: #fff;
}
</style>

// 书单
<style scpoed>
.book-list-content {
  height: 1.3rem;
  background-image: url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
  background-size: cover;
}
#book-list > .el-row {
  padding: 0;
}
#book-list .el-col-12:first-of-type .el-row {
  padding-left: 0;
}
#book-list .el-col-12:last-of-type .el-row {
  padding-right: 0;
}
</style>

//游戏
