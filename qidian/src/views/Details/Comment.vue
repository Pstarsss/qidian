<template>
  <div class="comment">
        <top-nav-bar class="detail-tops">
        <div slot="left" @click="$router.go(-1)"><i class="el-icon-close"></i></div>
        <div slot="center" class="detaildiscuss-top-imgs" ></div>
        <div slot="right" class="fb"  @click="onComent">发布</div>
     </top-nav-bar>
     <div :model="info">
         <textarea type="text" cols="30" rows="10" 
         placeholder="写下你的想法吧，不管是推荐还是评论" 
         class="comment-content"
         v-model="info.content"
         >
         </textarea>
     </div>
  </div>
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue';
export default {
  name: 'Comment',
  components: {
     TopNavBar,
  },
  data(){
      return{
           info:{}
      }
     
  },
  methods:{
      onComent(){
          console.log(this.info);
          this.$http.post('/api/detaildiscuss', this.info).then(res=>{
              console.log(res,1);
          }).catch(err=>{
              console.log(err,2);
          });
                // .then(({
                //     data,
                //     config
                // }) => {
                //     console.log(data, config);
                //     if (data.code == 200) {
                //         this.$message({
                //             message: "评论成功",
                //             type: "success"
                //         });
                //     } else {
                //         this.$message({
                //             message: "评论失败",
                //             type: "error"
                //         });
                //     };
                // });
      },
  },
  
}
</script>

<style scoped>
@import url("../../assets/css/common.css");
.comment-content{
    width: 96vw;
    font-size: .2rem;
    margin: .1rem .2rem .1rem .2rem;
    position: absolute;
    max-width: 96vw;
    height: auto;
}
.comment{
    width: 100vw;
}
.fb{
    font-size: .2rem;
}
</style>


