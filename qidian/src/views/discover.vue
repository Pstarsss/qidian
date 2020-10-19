<template>
  <!-- 发现 -->
  <div class="discover">
    <router-link to="/discoverFollow">关注</router-link>
    <router-link to="/discoverSquares">广场</router-link>
    <router-view />
  </div>
</template>

<script>
import discoverFollow from './discover/discover-follow'
export default {}
</script>

<style scoped></style>
