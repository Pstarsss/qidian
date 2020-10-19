<template>
  <!-- 发现 -->
  <div class="find">
    <div class="findTop">
      <router-link to="/findFollow">关注</router-link>
      <router-link to="/findSquares">广场</router-link>
      <!-- 搜索组件 -->
      <!-- <search/> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'find',
  components: {},
  created() {
    axios.get('/api/booklist/1').then((res) => {
      console.log('sss')
      console.log(res)
    })
  },
}
</script>

<style scoped>
.findTop {
  background-color: #f00;
  height: 1.3rem;
  display: block;
  margin: 0 auto;
  text-align: center;
}
.findTop > a {
  font-size: 0.35rem;
  color: #fff;
  margin: 0 10px;
}
</style>
