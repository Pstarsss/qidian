<template>
   <div class='bookposition'>
      <div class="bp-left" v-show='data.image' @click="aa">
          <img :src="data.image">
      </div>
      <div class="bp-center" @click="aa">
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
      <div class="bp-right" @click.stop="drawer = true" type="primary">
         <i class="el-icon-more"></i>
      </div>
      <div class="bookshelf-drawer">
         <el-drawer
         :visible="drawer"
         direction="btt"
         :with-header="false"
         :before-close="handleClose"
         size="60%"  
         :append-to-body="false"
         :modal-append-to-body="false"
         >
         <bookshelfset
         :image="data.image"
         :bookname="data.bookname"
         :author="data.author"
         @toDetail="toDetail"
         @deleteBook="deleteBook"
         @toHB="toHB"
         >
         </bookshelfset>
         </el-drawer>
         
      </div>
   </div>
</template>

<script>
import bookshelfset from './BookShelfSet.vue'
export default {
  components: {
     bookshelfset
  },
  props:{
     data:{
        type:[Object,Array],
        default:null
     },
  },
  created(){
     
  },
  data() {
   return {
        drawer: false,
   }
 },
 methods:{
    aa(){
       this.$emit('toread',this.data.collections,this.data.Chapter);
    },
    bb(){
      // this.$emit('openset');
    },
    handleClose(done) {
         this.drawer = false;
         done();
    },
    toDetail(){
       this.drawer = false;
       this.$router.push('/read/'+this.data.collections+"/chapter/"+this.data.Chapter);
    },
    deleteBook(){
       this.drawer = false;
       this.$emit('deleteBook',this.data.userid,this.data.collections);
    },
    toHB(){
       this.drawer = false;
       this.$router.push('/findHB');
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
   width: 0.94rem;
   max-width: initial;
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
   z-index: 1000;
}
.bookshelf-drawer /deep/ .el-drawer{
   border-radius: 0;
   padding: 0.1rem 0.2rem;
}
.bookshelf-drawer /deep/ .v-modal{
   z-index: 2 !important;
}

</style>