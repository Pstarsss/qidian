<template>
  <div>
    书架内容
  </div>
</template>

<script>
import { request } from '@/network/request.js'
import axios from 'axios'
export default {
  name: 'bookshelf',
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
