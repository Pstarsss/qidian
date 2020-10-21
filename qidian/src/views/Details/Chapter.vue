<template>
<div>
    <div class="chapter">
     <top-nav-bar>
        <div slot="left" @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></div>
        <div slot="center">目录</div>
        <div slot="right"><i class="el-icon-sort"></i></div>
     </top-nav-bar>
    <div class="chapter-top">
        <p class="chapter-top-content">正文卷</p>
    </div>
  </div>
  <ul class="chapter-titleall">
      <li class="chapter-title1" :key="index" v-for="(item,index) in info">{{item.title}}</li>
  </ul>
</div>
 
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue'
export default {
  name: 'Chapter',
  components: {
    TopNavBar,
  },
  data(){
    return{
       info:[],
    }
  },
   created(){
    let id = this.$router.currentRoute.params.id;
    this.$http.get('/api/read/'+id).then(res=>{
      this.info=res.data.slice(0,100);
      console.log('sss');
      console.log(res.data);
    })
  },
  
}
</script>

<style  scoped>
.chapter{
  width: 100%;
  position: fiex;
}
.chapter-top{
  font-size: .18rem;
  height: .4rem;
  line-height: .4rem;
  background-color: #a2a2a2;
  margin: 0 auto;
  width: 100%;
}
.chapter-top-content{
  margin-left: .1rem;
}
.chapter-title{
  float: left;
  font-size: .2rem;
  color: black;
  width: 6.6rem;
  margin: .1rem auto;
   font-weight: 520;
}
.chapter-title1{
  float: left;
  font-size: .2rem;
  color: black;
  width: 6.6rem;
  margin: .2rem .1rem .1rem .1rem;
  position: relative;
  font-weight: 540;
}
</style>
