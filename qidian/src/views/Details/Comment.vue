<template>
  <div class="comment">
        <top-nav-bar class="detail-tops">
        <div slot="left" @click="$router.go(-1)"><i class="el-icon-close"></i></div>
        <div slot="center" class="detaildiscuss-top-imgs" ></div>
        <div slot="right" class="fb"  >
           <el-button :plain="true"  @click="submits" class="fb1">发布</el-button>
        </div>
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
  inject:['reload'],
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
      submits() {       
      let value = {}
      let aa = JSON.parse(sessionStorage.getItem('userbasic'));
      value.headimg = "http://inews.gtimg.com/newsapp_bt/0/5711390577/1000/0";
      value.name = aa.username;
      value.content = this.info.content;
      value.tag = '盟主';
      value.image = '';
      value.time = this.getTime();
      value.likes = 0;
      value.reviews = 0;
       if(this.info.content == null){
          this.$message({
          message: '请输入你要发表的内容',
          type: 'warning'
        });
        }else{
          this.$http.post('/api/adddiscuss', {
              value,
            }).then((ree) => {
              console.log(ree);        
            });
          this.$router.go(-1);
          this.$message({
          message: '卧槽，发表成功',
          type: 'success'
        });
        this.info.content = '';
        }     
    },
    getTime() {
      let dd = new Date();
      let h1 = dd.getHours();
      h1 = h1>=10 ? h1 : '0' + h1;
      let m1 = dd.getMinutes();
      m1 = m1>=10 ? m1 : '0' + m1;
      return `${dd.getMonth() + 1}月${dd.getDate() + 1}日 ${h1}:${m1}`;
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
.fb1{
  border: none;
  font-size: .2rem;
  margin-left: -.1rem;
}
</style>


