<template>
   <div class='Lbox'>
     <top-nav-bar>
       <div slot="left" class="Lleft" @click="tomineshow"><img :src="srcs" alt=""></div>
       <div slot="center"><h2>起点账号登录</h2></div>
     </top-nav-bar>
      <form class="">
     <div class="form1">
       <input type="text" placeholder="手机/邮箱/起点账号" class="input1" name="phone" :value="phonevalue" @input="isphone">
       <!-- <button :disabled="disabled" class="getma">获取验证码</button> -->
     </div>
      <div v-if="error" class="errorinfo">
          {{error}}
      </div>
     <div class="form1">
       <input type="password" placeholder="密码" class="input1" name="password" :value="passowordvalue" autocomplete @input="ispassword">
     </div>
     <div class="deal">
         <el-radio v-model="issure" class="radio" @change="isradio"> </el-radio>
       <span>我已阅读并接受<strong>《阅文用户服务协议》</strong>及<strong>《隐私协议》</strong></span>
     </div>
     <div class="form1">
       <input type="submit" @click.prevent="rush" value="登录" :class="[issure?'login1red':'login1']" >
     </div>
     <div class="L-pp">
       <div @click="toregister">注册新账号</div>
       <div @click="tovalidate">手机验证码登录</div>
     </div>
  </form>
   </div>
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue'

export default {
  components: {
    TopNavBar,
  },
  data() {
   return {
      input3: '',
      input4: '',
      disabled:false,
      issure:false,
      srcs:require('@/assets/img/loginimg/guanbi.png'),
      phonevalue:'',
      error:'',
      passowordvalue:'',
   };
  },
  methods:{
    tomineshow(){
      this.$router.push('/mineShow');
    },
    toregister(){
      this.$router.push('/register');
    },
    tovalidate(){
      this.$router.push('/validatelogin');
    },
    isphone(){
      this.phonevalue = event.target.value;
      if(this.phonevalue){
        this.error = '';
        if(!/^1[345678]\d{9}$/.test(this.phonevalue)) {
          this.error = "请输入正确是手机号";
        }else{
          this.error = "";
        }
      }
      else{
        this.error = '手机号不能为空';
      }
    },
    ispassword(){
      this.passowordvalue = event.target.value;
    },
    isradio(){
      this.issure =true;
    },
    rush(){
      if(this.issure&&this.phonevalue&&this.passowordvalue){

        this.$http.post('/api/login',{
          iphone:this.phonevalue,
          password:this.passowordvalue
        }).then(res=>{
          let {iphone,password,userid,username,userhead} = res.data[0];
          // sessionStorage.setItem('userinfo',iphone);
          // sessionStorage.setItem('password',password);
          // sessionStorage.setItem('userid',userid);
          // sessionStorage.setItem('username',username);
          // sessionStorage.setItem('userhead',userhead);
          sessionStorage.setItem('userbasic',JSON.stringify(res.data[0]));
          this.$http.post('/api/userbasic',{
              userid,
          }).then((res1)=>{
             let temp = res1.data;
             sessionStorage.setItem('userbookinfo',JSON.stringify(temp));
            //  let image = (temp.map(i=>i.image)).join('-');
            //  let bookname = (temp.map(i=>i.bookname)).join('-');
            //  let author = (temp.map(i=>i.author)).join('-');
            //  let chapter = (temp.map(i=>i.Chapter)).join('-');
            //  let bookid = (temp.map(i=>i.collections)).join('-');
            //  let booktitle = (temp.map(i=>i.booktitle)).join('-');
            //  sessionStorage.setItem('image',image);
            //  sessionStorage.setItem('bookname',bookname);
            //  sessionStorage.setItem('author',author);
            //  sessionStorage.setItem('chapter',chapter);
            //  sessionStorage.setItem('collections',bookid);
            //  sessionStorage.setItem('booktitle',booktitle);
             this.$store.dispatch('add',temp).then(res2=>{
                
             });
             this.$router.push('/mineShow');
          }).catch(()=>{
              console.log('fffail ');
             this.$router.push('/mineShow');
          })
          
        }).catch(()=>{
          this.issure = false;
          console.log('账号或者密码错误');
        })
      }
    }
   }

}
</script>
<style  scoped>
.Lbox{
    height: 100vh;
    position: absolute;
    width: 100%;
    background-color: antiquewhite;
    z-index: 100;
    overflow: hidden;
}
.Lleft{
  text-align: center;
}
.Lleft img{
  width: 0.2rem;
}

form{
  margin-top:0.8rem;
}
.form1{
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  position: relative;

}
.form1 input{
  box-sizing: content-box;
  border: 1px solid #fff;
  border-radius: 25px;
  width: 86vw;
  margin: 0.1rem 0;
  height: 0.6rem;
  text-indent: 25px;
  font-size: 0.2rem;
}
.getma{
  position: absolute;
  right: 15%;
  background-color: #fff;
  font-size: 0.16rem;
  font-weight: 300;
}
.radio{
  margin-right: 0;
}
.deal{
  font-size: 0.16rem;
  text-align: center;
  padding: 0.1rem;
}
strong{
  font-weight:600;
}
.login1{
  color: #fff;
    background-color: #80808033;
    outline: none;
    border: none !important;
}
.login1red{
  background-color: red;
}
.L-pp{
    font-size: 0.2rem;
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    padding:0.1rem 0;
}
.L-pp div:nth-of-type(2){
  font-weight: 400;
  color:black;
}
.errorinfo{
  font-size:0.23rem;
  color:red;
  text-align: center;
}
</style>