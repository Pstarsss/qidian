<template>
  <div class="findDetails">
    <div class="findTop">
      <!-- 顶部标题 -->
      <navBar>
        <template #left>
          <i class="el-icon-arrow-left" @click="findDetailsBack"></i>
        </template>
        <template #center>
          <span>帖子详情</span>
        </template>
        <template #right>
          <i class="el-icon-more" @click="drawer = true"></i>
        </template>
      </navBar>
    </div>
    <scroll :probeType="3" class="wrapper" ref="scroll" @pullingUp="pullingUp">
      <!-- 帖子内容 -->
      <div class="detail">
        <!-- 圈子 -->
        <div class="tag">
          <div class="tagLeft">
            <p>好</p>
          </div>
          <div class="tagCenter">
            <p>{{ e.tag }}圈</p>
            <p>999 成员 · 999 帖子</p>
          </div>
          <div class="tagRight">
            <p>进入圈子</p>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>
        <!-- 内容 -->
        <div class="content">
          <p>
            <span v-for="i in 2" :key="i.id">讨论</span>
          </p>
        </div>
      </div>
      <!-- 回复 -->
    </scroll>
    <!-- 底部组件 -->
    <findDetailsBottom />
    <el-drawer
      title=""
      :visible.sync="drawer"
      :with-header="false"
      :direction="direction"
      :size="drawerSize"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import navBar from '@/components/common/TopNavBar/NavBar'
import scroll from '@/components/common/Scroll/scroll.vue'
import findDetailsBottom from './components/FindDetailsBottom'
// import findDetailsContent from './components/FindDetailsContent'
import findDetailsReviews from './components/FindDetailsReviews'

export default {
  data() {
    return {
      drawer: false,
      direction: 'btt',
      drawerSize: '3.5rem',
      e: {},
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    pullingUp() {
      console.log('findDetails上拉')
      this.$refs.scroll.finishPullup()
    },
    findDetailsBack() {
      this.$router.go(-1)
    },
    getDetail() {
      // let that = this
      this.e = this.$route.query.e
      console.log(this.e)
    },
  },
  components: {
    navBar,
    scroll,
    // findDetailsContent,
    findDetailsReviews,
    findDetailsBottom,
  },
}
</script>

<style>
.findDetails .el-drawer__wrapper > div > div {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
}
</style>
// 顶部标题
<style scoped>
.findTop {
  /* background-color: #db3b3b; */
  height: 1rem;
  position: relative;
  width: 100%;
  z-index: 999;
}
.findTop span {
  color: #000;
  font-size: 0.3rem;
}
.findTop i {
  font-size: 0.3rem;
  color: #000;
  line-height: 1rem;
}
.wrapper {
  height: calc(100vh - 2rem);
}
</style>
// 帖子内容
<style lang="css" scoped>
.tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  padding: 0.2rem;
  /* border-bottom: 1px solid #ddd; */
}
.tagLeft {
  height: 0.6rem;
  width: 0.6rem;
  padding: 0.1rem;
  border: 1px solid #ddd;
  border-radius: 0.1rem;
}
.tagLeft p {
  font-size: 0.4rem;
  color: #db3b3b;
  line-height: 0.4rem;
  text-align: center;
}
.tagCenter {
  text-align: left;
  flex-grow: 1;
  padding: 0 0.2rem;
}
.tagCenter p:first-of-type {
  font-size: 0.3rem;
  font-weight: bold;
  color: #000;
}
.tagCenter p:last-of-type {
  font-size: 0.2rem;
  color: #777;
}
.tagRight {
  border: 1px solid #000;
  border-radius: 0.1rem;
  /* height: 0.4rem; */
  padding: 0.05rem 0.1rem;
}
.tagRight p {
  font-size: 0.15rem;
  color: #000;
}
.el-divider {
  margin: 0.2rem 0;
}
.content > p > span {
  font-size: 0.1rem;
  display: block;
  float: left;
  margin-left: 0.2rem;
  border: 1px solid #999;
  padding: 0.02rem 0.08rem;
  border-radius: 0.1rem;
}
</style>
