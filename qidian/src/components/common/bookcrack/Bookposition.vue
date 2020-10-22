<template>
   <div class='bookposition'>
      <div class="bp-left">
         <img :src="src" alt="">
      </div>
      <div class="bp-center">
         <div class="bp-title">
            {{data.name}}
         </div>
         <div class="bp-intro">
            {{data.intro}}
         </div>

      </div>
      <div class="bp-right">
         <i class="el-icon-more"></i>
      </div>
   </div>
</template>

<script>
export default {
  components: {},
  data() {
   return {
      data:'',
      src :''
   };
 },
 created(){
    this.$http.get('/api/detail/1').then((res)=>{
       this.data = res.data[0];
       this.src =res.data[0].images;
       console.log(this.data);
    })
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
}
.bookposition > div{
   padding: 0.1rem;
}
.bp-center{
   font-size: 0.25rem;
   flex: 1;
   overflow:hidden; 
   text-overflow:ellipsis;
   display:-webkit-box; 
   -webkit-box-orient:vertical;
   -webkit-line-clamp:2; 
   
   
}
.bp-title{
   font-weight: bold;
   font-size: 0.4rem;
}
</style>