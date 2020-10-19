<template>
  <div class="home">
    精选内容
  </div>
</template>

<script>
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'selected',
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

