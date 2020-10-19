<template>
  <!-- 发现 -->
  <div class="find">
    <router-link to="/findFollow">关注</router-link>
    <router-link to="/findSquares">广场</router-link>
    <router-view />
  </div>
</template>

<script>
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'find',
  components: {},
 
}
</script>

<style scoped>
/* a {
  font-size: 15px;
} */
</style>
