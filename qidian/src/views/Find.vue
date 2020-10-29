<template>
  <!-- 发现 -->
  <div class="find">
    <div class="findTop">
      <navBar>
        <template #center>
          <!-- <div class="choseMenu"></div> -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关注" name="first" />
            <el-tab-pane label="广场" name="second" />
          </el-tabs>
          <!-- <router-link to="/findFollow">关注</router-link>
          <router-link to="/findSquares">广场</router-link> -->
        </template>
        <template #right>
          <a href="/search">
            <i class="el-icon-search"></i>
          </a>
        </template>
      </navBar>
    </div>
    <publish />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import publish from './Find/components/Publish'
import navBar from '../components/common/TopNavBar/NavBar'
import { request } from '@/network/request.js'
import axios from 'axios'
// import $ from 'jquery'
// $(() => {})
export default {
  name: 'find',
  data() {
    return {
      activeName: 'second',
    }
  },
  methods: {
    handleClick(tab) {
      // console.log(tab)
      switch (tab.index) {
        case '0':
          this.$router.push('/findFollow')
          break
        case '1':
          this.$router.push('/findSquares')
          break

        default:
          break
      }
    },
  },
  components: {
    navBar,
    publish,
  },
  created() {
    // const that = this
    this.$http.get('/api/hotDiscuss').then((res) => {
      // console.log('sss')
      // console.log(res)
    })
  },
}
</script>

<style lang="css">
.find .el-tabs__header {
  margin-bottom: 0;
}
.find .el-tabs__nav-wrap::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #db3b3b;
  z-index: 1;
}
.find .el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}
.find #tab-first,
.find #tab-second {
  color: #fff;
  font-size: 0.3rem;
}
.find .el-tabs__active-bar {
  background-color: #fff;
  /* width: 0.2rem; */
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
.findTop a {
  font-size: 0.3rem;
  color: #fff;
  margin: 0 0.3rem;
  line-height: 1rem;
}
.el-icon-search {
  color: #fff;
  font-size: 0.3rem;
}
.choseMenu {
  /* position: relative;
  top: 0.8rem;
  width: 0.4rem;
  height: 0.05rem;
  border-radius: 0.1rem;
  background: #fff;
  left: 3.2rem;
  left: 2rem; */
}
</style>
