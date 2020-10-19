<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  created(){
    $http.get('/api/booklist/1').then(res=>{
      console.log(res);
    })
  }
}
</script>
