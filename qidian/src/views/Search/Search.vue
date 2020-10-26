<template>
  <div class="search">
     <top-nav-bar >
        <div slot="left"><i class="el-icon-search"></i></div>
        <div slot="center"  class="search-content"><input type="search"  v-model="nowInput" placeholder="请输入你感兴趣的内容"></div>
        <div slot="right"  @click="$router.go(-1)" class="search-back">取消</div>
     </top-nav-bar>
     <ul class="resout">
        <li
          class="itemlie"
          v-for="(target, index) in getResoutItem"
          :key="index"
          @click="opendetail4(target.id)"
        >
          {{ target.name }}
        </li>
      </ul>
     <div class="hot-search">
          <span>热门搜索</span>
          <span><i class="el-icon-refresh" @click="hotsearch"></i></span>
     </div>
     <ul class="hot-search-content">
         <li :key="index" v-for="(item,index) in info1" @click="opendetail(index)" v-show="show1">{{item.name}}</li>  
         <li :key="'info2'+index" v-for="(item,index) in info2" @click="opendetail1(index)" v-show="show2">{{item.name}}</li>   
     </ul>
      <div class="hot-search">
          <span>搜索历史</span>
          <span><i class="el-icon-delete"></i></span>
      </div>
     <ul class="hot-search-content">
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>    
     </ul>

     <div class="hot-search">
          <span>为你推荐</span>
          <span></span>
      </div>
      <ul class="search-tj">
          <li v-for="(item,index) in info5" :key="'info5'+index" @click="opendetail3(index)">    
                <div class="search-tj-left">
                     <img :src="item.images" alt="">
                     <span class="search-tj-center">{{item.name}}</span>
                </div>                     
                <span><i class="el-icon-arrow-right"></i></span>
          </li>
      </ul>
      <div class="search-space"></div>
  </div>
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue';
export default {
  name: 'Search',
  components: {
    TopNavBar,
  },
  data(){
      return{
        info1:{},
        info2:{},
        info3:{},
        info4:{},
        info5:{},
        info6:{},
        show1:true,
        show2:false,
        nowInput: '',
        resout: [],
      }      
  },
  created(){
    this.$http.get('/api/booklist/'+1).then(res=>{
      this.info1=res.data;
      //console.log(res.data);
    })
    this.$http.get('/api/booklist/'+5).then(res=>{
       this.info2=res.data;
      //console.log(res.data);
    })
    this.$http.get('/api/booklist/'+2).then(res=>{
       this.info5=res.data;
      //console.log(res.data);
    })
     this.$http.get('/api/booklist').then(res=>{
      this.resout=res.data;
      //console.log(res.data);
    })
  },
  computed: {
    getResoutItem() {
      let callback = []
  
      if(this.nowInput == ''){
          return callback
      }  
      for(var i=0; i<this.resout.length; i++){
        if(this.resout[i].name.toLowerCase().indexOf(this.nowInput.toLowerCase()) != -1){
          callback.push(this.resout[i])
        }
      }
      return callback
    }
  },   
   methods:{
      opendetail(index){
      this.$http.get('/api/booklist/'+1).then(res=>{
      this.info3=res;
      let a = this.info3.data[index].id;
      //console.log(a)
      this.$router.push("/detail/" + a);
    })
      },
      opendetail1(index){
      this.$http.get('/api/booklist/'+5).then(res=>{
      this.info4=res;
      let a = this.info4.data[index].id;
     // console.log(a)
      this.$router.push("/detail/" + a);
    })
      },
       opendetail3(index){
      this.$http.get('/api/booklist/'+2).then(res=>{
      this.info6=res;
      let a = this.info6.data[index].id;
     // console.log(this.info6.data)
      this.$router.push("/detail/" + a);
    })
      },
      opendetail4(id){
      this.$http.get('/api/booklist').then(res=>{
      this.resout=res.data;
     // console.log(res.data);
      this.$router.push('/detail/'+id);
    })
      },
       hotsearch (){
        this.show1=!this.show1;
        this.show2=!this.show2;
      } 
    }, 
}
</script>

<style>
.search-space{
    height: 1rem;
    width: 100vw;
    margin-bottom: 1rem;
}
.search-content{
    text-align: left;
}
.search-content input{
    height: .3rem;
    line-height: .3rem;
    width: 80vw;
    font-size: .22rem;
}
.search-back{
    font-size: .16rem;
    color: #ccc;
}
.el-icon-search{
    font-size: .22rem;
    color: black;
    font-weight: 550;
}
.hot-search{
    font-size: .18rem;
    color: black;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: .1rem  .2rem;
    width: 100vw;
    font-weight: 540;
}
.hot-search-content{
    font-size: .2rem;
    margin: .1rem .1rem;
}
.hot-search-content li{
    float: left;
    background-color: #f5f5f5;
    height: .3rem;
    line-height: .3rem;
    padding: 0.01rem .2rem;
    border-radius: .5rem;
    margin: .1rem .1rem;
}
.search-tj{
    font-size: .2rem;
    margin: .1rem .1rem;
}
.search-tj li{
border-bottom: 1px solid #cccccc40;
display: flex;
justify-content: space-between;
justify-items: center;
align-items: center;
padding: .1rem .1rem;
margin: .1rem .1rem;
}
.search-tj li img{
width: .35rem;
height: .4rem;
}
.search-tj-left{
    display: flex;
    justify-items: center;
    align-items: center;
}
.search-tj-center{
    margin-left: .1rem;
}
.resout {
  background-color: #f5f5f5;
}

.itemlie {
  color: #3c3c3c;
  padding: 0 0.4rem;
  line-height: 0.6rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: .22rem;
}
.itemlie:first-child {
  border-top: 1px solid #e0e0e0;
}
</style>