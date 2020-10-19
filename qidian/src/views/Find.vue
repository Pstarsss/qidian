<template>
  <!-- 发现 -->
  <div class="find">
    <router-link to="/findFollow">关注</router-link>
    <router-link to="/findSquares">广场</router-link>
    <router-view />
  </div>
</template>

<script>
import findFollow from './Find/findFollow'
import findSquares from './Find/findSquares'
const routes = [
  { path: '/findFollow', component: findFollow },
  { path: './findSquares', component: findSquares },
]
const router = new VueRouter({
  routes,
})
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'find',
  router,
  components: {},
  created() {
    axios.get('/api/books').then((res) => {
      console.log('sss')
      console.log(res)
    })
  },
}
</script>
