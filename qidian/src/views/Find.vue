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
          <!-- 搜索 -->
        </template>
      </navBar>
    </div>
    <router-view />
  </div>
</template>

<script>
import navBar from '../components/common/TopNavBar/NavBar'
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'find',
  components: {
    navBar,
  },
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
  height: 1rem;
}
.findTop a {
  font-size: 0.35rem;
  color: #fff;
  margin: 0 10px;
  line-height: 1rem;
}
</style>
