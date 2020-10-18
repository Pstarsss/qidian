<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    
  },
  created(){
    axios.get('/api/books').then(res=>{
      console.log('sss');
      console.log(res);
    })
  }
}
</script>
