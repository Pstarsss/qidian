<template>
  <div class="container">
    <!-- 发现-广场  -->
    <div class="findSquares">
      <!-- 发布动态 -->
      <div class="issued"></div>
      <!-- 导航组件 -->
      <div id="nav" class="findSquareContent">
        <navs :list="navlist"></navs>
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
          <el-col
            :span="6"
            class="popularity-tag"
            v-for="i in popularityTags"
            :key="i.id"
          >
            <div>
              <p class="popularity-tag-title">{{ i.name }}</p>
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
          <el-col :span="12" v-for="i in 2" :key="i.id">
            <el-row :gutter="3">
              <el-col :span="8" v-for="i in 3" :key="i.id">
                <div class="book-list-content"></div>
              </el-col>
            </el-row>
            <p>主推新书精选</p>
          </el-col>
        </el-row>
      </div>
      <!-- 滚动公示 -->
      <div id="roll"></div>
      <!-- 游戏、活动、神创作、专栏精选、对话小说推荐 -->
      <div
        :id="i.id"
        class="findSquareContent findSquareContentTwo"
        v-for="i in contents"
        :key="i.id"
      >
        <!-- Title -->
        <a href="" class="titleMenu">
          <menuTitle>
            <template #title>{{ i.title }}</template>
          </menuTitle>
        </a>
        <!-- Content -->
        <el-row :gutter="20">
          <el-col :span="12" v-for="ii in i.content" :key="ii.id">
            <img :src="ii.src" alt="" />
            <p>{{ ii.msg }}</p>
          </el-col>
        </el-row>
      </div>
      <!-- 热门讨论 -->
      <div id="hot-discuss">
        <p>阿巴阿巴</p>
      </div>
    </div>
  </div>
</template>

<script>
let num = parseInt(Math.random() * 550000) + 50000
import menuTitle from './findMenuTitle'
import navs from '../../components/navs'
import './iconfont/iconfont.css'
export default {
  data() {
    return {
      //人气点点圈
      popularityTags: [
        { name: '新手' },
        { name: '创作' },
        { name: '催更' },
        { name: '历史' },
      ],
      // 人气点点圈 数字
      num,
      // 游戏、活动、神创作、专栏精选、对话小说推荐
      contents: [
        {
          id: 'games',
          title: '游戏',
          content: [
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '天天十连，福利爆仓',
            },
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '超强红侠哎，登录即领',
            },
          ],
        },
        {
          id: 'activity',
          title: '活动',
          content: [
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '10月优秀作品运营',
            },
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '同人创作赛来袭',
            },
          ],
        },
        {
          id: 'created',
          title: '神创作',
          content: [
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '实力不允许我低调',
            },
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '每周神章说',
            },
          ],
        },
        {
          id: 'choiceness',
          title: '神创作',
          content: [
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '挖掘错过的小众作品',
            },
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '掌握第一手热点资讯',
            },
          ],
        },
        {
          id: 'recommend',
          title: '对话小说推荐',
          content: [
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '我死去多年的兄弟穿越了',
            },
            {
              src:
                'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
              msg: '故事从美食开始...',
            },
          ],
        },
      ],
      num,
      navlist: [
        { name: '专栏', src: require('./img/zs_icon_bbjcj.png') },
        { name: '新书投资', src: require('./img/没有积分@3x.png') },
        { name: '点点圈', src: require('./img/海王星.png') },
        { name: '对话小说', src: require('./img/蓝紫色星空.png') },
        { name: '红包', src: require('./img/红包.png') },
      ],
    }
  },
  components: {
    menuTitle,
    navs,
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#nav {
  padding: 0.4em 0 0.6rem;
}
.findSquares {
  padding: 0 0.15rem 0.5rem;
}
.findSquareContent {
  border-bottom: 0.02rem solid #ccc;
  padding-bottom: 0.3rem;
}
.findSquareContent p {
  font-size: 0.3rem;
}
.findSquareContentTwo > .el-row {
  padding: 0;
}
.findSquareContentTwo .el-col-12 > p:last-of-type {
  padding-left: 0;
}
.findSquareContentTwo .el-col-12:first-of-type .el-row {
  padding-left: 0;
}
.findSquareContentTwo .el-col-12:last-of-type .el-row {
  padding-right: 0;
}
.findSquareContentTwo img {
  object-fit: cover;
  height: 1.5rem;
  width: 100%;
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
  padding: 0.1rem 0;
  margin: 0 0.05rem;
  border-radius: 0.1rem;
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
  bottom: 0.1rem;
}
.popularity-tag-num > span {
  background-color: #f00;
  border-radius: 0.1rem;
  padding: 0.1rem;
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
#book-list .el-col-12 > p {
  padding-left: 0.1rem;
}
#book-list .el-col-12:first-of-type .el-row {
  padding-left: 0;
}
#book-list .el-col-12:last-of-type .el-row {
  padding-right: 0;
}
</style>
