<template>
  <div id="app">
    <div class="foot" >
      <div class="bottom">
        <div class="a" @click="open('/bookshelf')" :class="{ 'active': isActive('/bookshelf') }">
          <i class="el-icon-reading"></i>
          <span>书架</span>
        </div>
        <div class="a" @click="open('/selected')" :class="{ 'active': isActive('/selected') }">
          <i class="el-icon-s-operation"></i>
          <span>精选</span>
        </div>
        <div class="a"  @click="open('/find')" :class="{ 'active': isActive('/find') }">
          <i class="el-icon-view"></i>
          <span>发现</span>
	
        </div>
        <div class="a"  @click="open('/mine')" :class="{ 'active': isActive('/mine') }">
          <i class="el-icon-user"></i>
          <span>我的</span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'App',
  data() {
    return {
  	  nowUrl: '/bookshelf'
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
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
.foot {
  border-top: 1px solid #cccccc;
  position: fixed;
  height: 1rem;
  z-index: 97;
  width: 100%;
  bottom: 0;
}
.bottom {
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-around;
  background: #fff;
}
.a {
  height: 1rem;
  position: relative;
  text-decoration: none;
  font-size: 0.2rem;
}
.bottom i {
  width: 0.44rem;
  height: 0.44rem;
  display: block;
  margin-top: .12rem;
  font-size: 0.44rem;
  margin-left: auto;
  margin-right: auto;
}
.bottom span {
  text-align: center;
  margin-bottom: .2rem;
  font-size: .25rem;
}
li {
  list-style: none;
}
.num1 {
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  line-height: 0.4rem;
  text-align: center;
  background-color: #f95c52;
  color: #fff;
  right: -0.25rem;
  top: 0rem;
}
.a.active{
	color:#ff6700;
}
.full{
	font-size: 0.28rem;
}
</style>
