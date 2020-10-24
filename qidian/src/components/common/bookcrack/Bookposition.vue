<template>
   <div class='bookposition' @click="aa">
      <div class="bp-left" v-show='image'>
          <img :src="image" alt="">
      </div>
      <div class="bp-center">
         <div class="bp-title">
                {{data.bookname}}
         </div>
         <div class="author">
                {{data.author}}
         </div>
         <div class="bp-intro">
                {{data.booktitle}}
         </div>
      </div>
      <div class="bp-right" @click.stop="bb">
         <i class="el-icon-more"></i>
      </div>
   </div>
</template>

<script>
export default {
  components: {},
  props:{
     data:{
        type:[Object,Array],
        default:null
     },
     image:{
        type:[String,Object],
        default:''
     }
  },
  data() {
   return {
      
   }
 },
 methods:{
    aa(){
       this.$emit('toread',this.data.chapter,this.data.collections);
    },
    bb(){
      console.log('ss111s');
    }
 }

}
</script>
<style  scoped>
.bookposition{
   box-sizing: content-box;
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0.1rem;
}
.bookposition > div{
   padding: 0.1rem;
}
.bp-center{
   font-size: 0.25rem;
   flex: 1;
}
.bp-center > div{
   padding: 0.02rem;
   color: #626262;
}
.bp-center .bp-intro{
   white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 5.2rem;
}
.bp-left img{
   width: 1rem;
    border-radius: 5px;
}
.bp-title{
    font-weight: bold;
    font-size: 0.4rem;
    font-family: fangsong;
    color: black !important;
}
.bp-right{
   font-size: 0.35rem;
   position: absolute;
    right: 0.5%;

}
</style>