<template>
<div>
    <div class="chapter">
     <top-nav-bar class="chapter-fiex">
        <div slot="left" @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></div>
        <div slot="center">目录</div>
        <div slot="right"><i class="el-icon-sort" @click="overturn"></i></div>
     </top-nav-bar>
    <div class="chapter-top">
        <p class="chapter-top-content">正文卷</p>
    </div>
  </div>
  <ul class="chapter-titleall">
      <li class="chapter-title1" :key="index" v-for="(item,index) in info" @click="read(index)">{{item}}</li>
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
       num:0
    }
  },
   created(){
    let id = this.$router.currentRoute.params.id;
    this.$http.get('/api/booktitle/'+id).then(res=>{
      this.info=res.data[0].titles.split('-');
      console.log('sss');
      console.log(res.data[0].titles.split('-'));
    })
  },
  methods:{
     read(index){
      let id = this.$router.currentRoute.params.id; 
      this.$router.push('/read/'+id+"/chapter/"+(index+1));
     },
     overturn(){
       let id = this.$router.currentRoute.params.id;
       this.num++;
       if(this.num%2 == 1){
     this.$http.get('/api/booktitle/'+id).then(res=>{
      this.info=res.data[0].titles.split('-').reverse();
    })
       }else{
     this.$http.get('/api/booktitle/'+id).then(res=>{
      this.info=res.data[0].titles.split('-');
    })
       }    
     }
  },
}
</script>

<style  scoped>
.chapter-fiex{
  position: fixed;
  width: 100vw;
  background-color: #fff;
  z-index: 99;
  top: 0;
}
.chapter{
  width: 100%;
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
   margin-top: .6rem;
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
