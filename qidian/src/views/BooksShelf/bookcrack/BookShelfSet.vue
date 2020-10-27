<template>
   <div class='bookset'>
     <div class="bookset-top">
       <div class="bookset-top-img">
         <img :src="image" alt="">
       </div>
        <div class="bookset-top-center">
          {{bookname}}
          {{author}}
       </div>
        <div class="bookset-top-right">
          <el-button round>详情</el-button>
       </div>
     </div>
     <div class="bookset-center">
       <div class="bookset-center-">

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
</style>