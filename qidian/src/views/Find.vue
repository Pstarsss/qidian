<template>
  <!-- 发现 -->

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
    return {}
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
</style>
