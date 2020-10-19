<template>
<div>
  <div class="home">
    精选内容
  <navs :list="navlist">
  </navs>
  </div>
</div>
</template>

<script>
import { request } from '@/network/request.js'
import navs from '../../components/navs.vue'
import axios from 'axios'
export default {
  name: 'selected',
  components: {
    navs,
  },
   data(){
    return{
      navlist:[
        {name:"one",src:""},
        {name:"two",src:""},
        {name:"three",src:""},
        {name:"four",src:""},
        {name:"five",src:""},      
        ]
    }
  },
  created(){
    axios.get('/api/books').then(res=>{
      console.log('sss');
      console.log(res);
    })
  }
}
</script>

<style>
.sps{
  height: 1rem;
}
</style>
