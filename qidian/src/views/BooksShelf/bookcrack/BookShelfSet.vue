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
        <div class="bookset-top-right">
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
       
     </div>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

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
  font-size: 0.28rem;
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

</style>