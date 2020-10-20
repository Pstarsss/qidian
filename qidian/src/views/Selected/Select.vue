<template>
<div>
  <div class="select_nav">
        <div class="navbar-top">
           <div slot="left" class="select_top_left" @click="open('/selecthome')" :class="{ 'active': isActive('selecthome') }">
           新人必读
          </div>
       <div slot="center">
         <ul class="select_top_center">
           <li><span @click="open('/selectboys')" :class="{ 'active': isActive('selectboys') }">男生</span></li>
           <li><span @click="open('/selectgirls')" :class="{ 'active': isActive('selectgirls') }">女生</span></li>
           <li><span @click="open('/selectcartoon')" :class="{ 'active': isActive('selectcartoon') }">漫画</span></li>
           <li><span>听书</span></li>
           <li><span>对话</span></li>
         </ul>
       </div>
       <div slot="right" class="select_top_right">
           <i class="el-icon-search"></i>
       </div>     
        </div>
         <router-view/>
  </div>
</div>
</template>

<script>
import { request } from '@/network/request.js'
import navs from '../../components/navs.vue'
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue'
import axios from 'axios'
export default {
  name: 'selected',
  data() {
    return {
  	  nowUrl: '/selecthome'
    };
  },
   watch: {
    '$route' (to, from) {      
      this.nowUrl = to.fullPath//全称路径
    }
  },
  methods: {
    open(a) {
     if(this.$route.path == a){
		 return ''
     }else{
		 this.$router.push(a);
     }
    },
	isActive(name) {
	    return this.nowUrl.indexOf(name) != -1
	},	
  },
  created(){
    axios.get('/api/booklist/6').then(res=>{
      console.log('sss');
      console.log(res);
    })
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.navbar-top{
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-around;
  background-color: red;
  color: white;
}
.select_nav{
display: inline;
}
.select_top_left{
  font-size: .22rem;
  font-weight: 700;
}
.select_top_center{
  font-size: .20rem;
  color: #ccc;
}
.select_top_right{
 font-size: .20rem;
}
ul{
  margin: 0;
}
li{
  float: left;
  font-size: 0.22rem;
  height: .5rem;
  line-height: .5rem;
} 
li span{
  margin: .1rem;
  padding: .1rem;
}
.active{
	color:white;
}
</style>
