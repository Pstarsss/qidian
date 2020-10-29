<template>
  <div>
    <top-nav-bar class="navigaitionsss">
      <div slot="left" style=".4rem"><i class="el-icon-arrow-left" @click="itemclick"></i></div>
      <div slot="center" class="search-content">筛选</div>
    </top-nav-bar>

    <div class="all">
      <span class="item-left">全部</span>
      <span class="item-right">5</span>
    </div>
   <h6>状态</h6>
    <div class="state">
      <div class="state-left">
        <span class="left">全部</span>
        <span class="right">5</span>
      </div>
      <div class="state-right">
        <span class="left">连载</span>
        <span class="right">3</span>
      </div>
    </div>
    <div class="state">
      <div class="state-left">
        <span class="left">未完成</span>
        <span class="right">5</span>
      </div>
      <div class="state-right">
        <span class="left">以读完</span>
        <span class="right">3</span>
      </div>
    </div>
    <div class="state">
      <div class="state-left">
        <span class="left">超过100章未读</span>
        <span class="right">5</span>
      </div>
      <div class="state-right">
        <span class="left">超过50章未读</span>
        <span class="right">3</span>
      </div>
    </div>
    <div class="state">
      <div class="state-left">
        <span class="left">10天内有更新</span>
        <span class="right">5</span>
      </div>
      <div class="state-right">
        <span class="left">30天内有更新</span>
        <span class="right">3</span>
      </div> 
    </div>
    <BookModel></BookModel> 
    <h5>对筛选有意见？<a>请告诉我们:</a></h5>
  </div>
</template>

<script>
import TopNavBar from "@/components/common/TopNavBar/NavBar.vue";
import BookModel from './BookModel'
export default {
  name: "BookScreen",
  components: {
    TopNavBar,
    BookModel
  },
  data() {
    return {
    };
  },
    methods:{
			itemclick(){
				// console.log(11)
				this.$router.go(-1)
			}
		}
};
</script>

<style scoped>
.search-content {
  text-align: center;
  font-size: 0.4rem;
}
.all {
    margin-top: 2rem;
  display: flex;
  margin: 0 auto;
  margin-top: 1rem;
  width: 90%;
  background-color: pink;
  font-size: 0.25rem;
  line-height: 0.6rem;
  border-radius: 3%;
  color: red;
}
.all span {
  flex: 1;
  text-align: center;
  position: relative;
  width: 10rem;
}
.item-left {
  left: -1rem;
}
.item-right {
  right: -1rem;
}
h6{
    margin-top: .3rem;
    margin-left: .3rem;
    font-size: .4rem;
    margin-bottom: .2rem;
}
.state {
  margin: 0 auto;
  font-size: 0.25rem;
  line-height: 0.6rem;
  display: flex;
  width: 90%;
  border-radius: 3%;
  height: 0.6rem;
  margin-top: 0.2rem;
}
/* .state div{
        flex: 1;
    } */
.state-left {
  width: 45%;
  background:#E6E6E6;
  margin-right: 10%;
  border-radius: 5%;
}
.state-right {
  float: right;
  width: 45%;
  background-color: #E6E6E6;
  border-radius: 5%;
}
.right {
  float: right;
  margin-right: .2rem;
}
.left {
  float: left;
  margin-left: .2rem;
}
h5{
  margin-top: .4rem;
  font-size: .2rem ;
  text-align: center;
}
h5 a{
  color: blue;
}
</style>>

