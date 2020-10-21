<template>
  <!-- 发现 -->
  <scroll :probeType="3" class="wrapper" ref="scroll">
  <div class="find">
    <div class="findTop">
      <navBar>
        <template #center>
          <router-link to="/findFollow">关注</router-link>
          <router-link to="/findSquares">广场</router-link>
        </template>
        <template #right>
          <a href="">
            <i class="el-icon-search"></i>
          </a>
        </template>
      </navBar>
    </div>
    <publish />
    <router-view />
  </div>
  </scroll>
</template>

<script>
import publish from './Find/components/Publish'
import navBar from '../components/common/TopNavBar/NavBar'
import scroll from '@/components/common/Scroll/scroll.vue'
export default {
  name: 'find',
  components: {
    navBar,
    publish,
    scroll
  },
  created() {
    this.$http.get('/api/booklist/1').then((res) => {
      console.log('sss')
      console.log(res)
    })
  },
}
</script>

<style scoped>
.wrapper{
  height: calc(100vh - 54px);
}
.findTop {
  background-color: #db3b3b;
  height: 1rem;
  position: fixed;
  width: 100%;
  z-index: 999;
}
.findTop a {
  font-size: 0.35rem;
  color: #fff;
  margin: 0 10px;
  line-height: 1rem;
}
</style>
