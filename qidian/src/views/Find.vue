<template>
  <!-- 发现 -->
  <div class="find">
    <router-link to="/findFollow">关注</router-link>
    <router-link to="/findSquares">广场</router-link>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'find',
  components: {},
 created(){
    this.$http.get('/api/booklist/1').then(res=>{
      console.log(res);
    })
  }
}
</script>

<style scoped>
/* a {
  font-size: 15px;
} */
</style>
