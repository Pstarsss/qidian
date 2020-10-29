<template>
   <div class='bookset'>
     <div class="bookset-top">
       <div class="bookset-top-img">
         <img :src="image" alt="">
       </div>
        <div class="bookset-top-center">
          <p class="top-center-bookname">{{bookname}}</p>
          <p class="top-center-author">{{author}}</p>
       </div>
        <div class="bookset-top-right" @click="toDetail">
          <el-button round>详情</el-button>
       </div>
     </div>
     <div class="bookset-center">
       <div class="bookset-center-left">
         <p>我的粉丝值</p><span>见习</span>
       </div>
       <div class="bookset-center-right">
         <span>暂无粉丝值</span>
         <span class='el-icon-arrow-right'></span>
       </div>
     </div>
     <div class="bookset-bottom">
        <div class="bottom-level1">
          <div>
           <el-switch v-model="value1" active-color="#f40" inactive-color="#e5e5e5" :width="50"></el-switch>
           <span>置顶</span>
          </div>
          <div>
            <el-switch v-model="value2" active-color="#f40" inactive-color="#e5e5e5" :width="50"></el-switch>
            <span>更新提醒</span>
          </div>
          <div> 
            <el-switch v-model="value3" active-color="#f40" inactive-color="#e5e5e5" :width="50"></el-switch>
            <span>自动订阅</span>
          </div>
          <div class="level1-shuyou">
            <el-badge class="el-icon-chat-dot-square"></el-badge>
            <span>书友圈</span>
          </div>
        </div>
        <div class="bottom-level1">
          <div>
           <img :src="imgs[0].src">
           <span>批量订阅</span>
          </div>
          <div>
            <img :src="imgs[1].src">
            <span>移到分组</span>
          </div>
          <div> 
           <img :src="imgs[2].src">
            <span>分享本书</span>
          </div>
          <div class="level1-shuyou" @click="deleteBook">
            <el-badge  class="el-icon-delete"></el-badge>
            <span>删除</span>
          </div>
        </div>
        <div class="bottom-level1">
          <div>
           <img :src="imgs[3].src">
           <span>投推荐票</span>
          </div>
          <div>
           <img :src="imgs[4].src">
            <span>投月票</span>
          </div>
          <div> 
           <img :src="imgs[5].src">
            <span>打赏</span>
          </div>
          <div class="level1-shuyou" @click="toHB">
            <img :src="imgs[6].src">
            <span>红包</span>
          </div>
        </div>
     </div>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value1:false,
      value2:false,
      value3:false,
      value4:true,
      imgs:[
        {src:require('../booksetimage/xiazai.png')},
        {src:require('../booksetimage/wenjian.png')},
        {src:require('../booksetimage/fenxiang.png')},
        {src:require('../booksetimage/tuijian.png')},
        {src:require('../booksetimage/yue.png')},
        {src:require('../booksetimage/dashang.png')},
        {src:require('../booksetimage/huabanx.png')}
      ]
    };
  },
  props:{
    image:{
      type:[String],
      default:''
    },
    bookname:{
      type:[String],
      default:'',
    },
    author:{
      type:[String],
      default:''
    }
  },
  methods:{
    toDetail(){
      this.$emit('toDetail');
    },
    deleteBook(){
      this.$emit('deleteBook');
    },
    toHB(){
      this.$emit('toHB');
    }
  }
}
</script>
<style  scoped>
.bookset{
  font-size:0.2rem;
}
.bookset-top {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #b1b1b12e;
    padding-bottom: 0.1rem;
}
.bookset-top > div{
  padding:0.1rem;
}
.bookset-top-img img{
  width:0.8rem;
  border-radius: 5px;
}
.bookset-top-center{
  display: flex;
  flex-direction:column;
  justify-content: center;
  flex:1;
}
.top-center-bookname{
  font-size: 0.32rem;
  font-weight: 500;
  font-family: cursive;
  padding: 0.1rem;
}
.top-center-author{
  font-size: 0.2rem;
  padding: 0.1rem;
}
.bookset-top-right button{
  padding: 0.12rem 0.24rem;
    color: black;
}

.bookset-center{
  display: flex;
  align-items: center;
  padding: 0.06rem 0;
  border-bottom: 1px solid #b1b1b12e;
  font-size: 0.25rem;
    font-weight: 500;
}
.bookset-center >div{
  flex:1;
  font-family: cursive;
  padding: 0.1rem;

}
.bookset-center-left {
    display: flex;
    align-items: center;
}
.bookset-center-left span{
  margin-left: 0.2rem;
    padding: 0.04rem 0.1rem;
    background-color: #ffa50033;
    border-radius: 10px;
    color: orange;
}
.bookset-center-right{
  text-align:right;
}
.bookset-bottom {
    padding-top: 0.16rem;
}
.bottom-level1{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.1rem;
}
.bottom-level1 img{
      width: 0.36rem;
    max-width: 30px;
}
.bottom-level1 > div{
  display:flex;
  flex-direction: column;
  align-items: center;
  flex:1;
}
.bottom-level1 > div span{
        padding: 0.1rem 0;
    font-size: 0.20rem;
}
.el-badge{
  font-size: 0.43rem;
}

</style>