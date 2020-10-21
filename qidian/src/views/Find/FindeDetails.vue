<template>
  <div class="findDetails">
    <div class="findTop">
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
      <findDetailsContent />
    </scroll>
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
import findDetailsContent from './components/FindDetailsContent'
import findDetailsReviews from './components/FindDetailsReviews'

export default {
  data() {
    return {
      drawer: false,
      direction: 'btt',
      drawerSize: '3.5rem',
    }
  },
  methods: {
    pullingUp() {
      console.log('findDetails上拉')
      // this.$refs.scroll.finishPullup()
    },
    findDetailsBack() {
      this.$router.go(-1)
    },
  },
  components: {
    navBar,
    scroll,
    findDetailsContent,
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

<style scoped>
.findTop {
  background-color: #db3b3b;
  height: 1rem;
  position: relative;
  width: 100%;
  z-index: 999;
}
.findTop span,
.findTop i {
  font-size: 0.35rem;
  color: #fff;
  line-height: 1rem;
}
.findTop i {
  color: #fff;
}
.wrapper {
  height: calc(100vh - 1.7rem);
}
</style>
