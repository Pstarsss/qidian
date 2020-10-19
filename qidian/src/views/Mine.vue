<template>
  <div class="home">
    我的内容
  </div>
</template>

<script>
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'mine',
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