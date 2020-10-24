<template>
  <div class="search">
     <top-nav-bar >
        <div slot="left"><i class="el-icon-search"></i></div>
        <div slot="center"  class="search-content"><input type="search" placeholder="请输入你感兴趣的内容"></div>
        <div slot="right"  @click="$router.go(-1)" class="search-back">取消</div>
     </top-nav-bar>
     <div class="hot-search">
          <span>热门搜索</span>
          <span><i class="el-icon-refresh"></i></span>
     </div>
     <ul class="hot-search-content">
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>      
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
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>
         <li>郭勇傻狗</li>      
     </ul>

     <div class="hot-search">
          <span>为你推荐</span>
          <span></span>
      </div>
      <ul class="search-tj">
          <li>   
                <div class="search-tj-left">
                     <img src="../../assets/img/Detail/1.jpg" alt="">
                     <span class="search-tj-center">666</span>
                </div>                     
                <span><i class="el-icon-arrow-right"></i></span>
          </li>
          <li>   
                <div class="search-tj-left">
                     <img src="../../assets/img/Detail/1.jpg" alt="">
                     <span class="search-tj-center">666</span>
                </div>                     
                <span><i class="el-icon-arrow-right"></i></span>
          </li>
          <li>   
                <div class="search-tj-left">
                     <img src="../../assets/img/Detail/1.jpg" alt="">
                     <span class="search-tj-center">666</span>
                </div>                     
                <span><i class="el-icon-arrow-right"></i></span>
          </li>
      </ul>
  </div>
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue';
export default {
  name: 'Search',
  components: {
    TopNavBar,
  },
  
}
</script>

<style>
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
</style>