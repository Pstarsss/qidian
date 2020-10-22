<template>
  <div class="Rbox">
    <top-nav-bar>
      <div slot="left" class="Lleft" @click="backlogin"><img :src="src" alt=""></div>
      <div slot="center"><h2>起点账号注册</h2></div>
    </top-nav-bar>
    <form class="">
      <div class="form1">
       <input type="text" placeholder="用户名" class="input1" name="username" :value="uservalue" autocomplete="off" @input="isuser">
     </div>
      <div class="form1">
        <input type="text" placeholder="手机号" class="input1" :value="phonevalue" autocomplete="off" @input="isphone"> 
        <button :disabled="disabled" class="getma" @click.prevent="btnclick1">{{message}}</button>
      </div>
      <div v-if="error" class="errorinfo">
          {{error}}
      </div>
      <div class="form1">
        <input type="text" placeholder="验证码" class="input1" autocomplete="off"  name="notify" :value="notifyvalue" @input="isnotify" >
      </div>
      <div class="form1">
       <input type="password" placeholder="密码" class="input1" name="password" :value="passowordvalue" autocomplete="off" @input="ispassword">
     </div>
      <div class="deal" >
          <el-radio v-model="issure" class="radio" @change="isradio"> </el-radio>
        <span>我已阅读并接受<strong>《阅文用户服务协议》</strong>及<strong>《隐私协议》</strong></span>
      </div>
      <div class="form1">
        <input type="submit" @click.prevent="ddd" value="注册" class="login" :class="{'Llogin':issure}">
      </div>
    </form>
  </div>
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue'
export default {
  components: {
    TopNavBar
  },
  data() {
    return {
      issure:false,
      src:require('@/assets/img/loginimg/shangyibu.png'),
      error:'',
      phonevalue:'',
      notifyvalue:'',
      message:'获取验证码',
      disabled:false,
      validation:'',
      uservalue:'',
      passowordvalue:'',
    };
  },
  watch:{

  },
  methods:{
    // 回到上一级;
    backlogin(){
      this.$router.go(-1);
    },

    // 获取验证码
    btnclick1(){
      console.log(this.phonevalue);
      this.$http.post('/api/validate',{
        iphone:this.phonevalue
      }).then((results=>{
        this.validation = results.data;
      })).catch(err=>{
        console.log(err);
      })
      let time = 60;
      this.disabled = true
      setInterval(()=>{
        if(time>0){
          this.message = `重试倒计时${time}`;
          time--;
        }else{
          this.message = '获取验证码';
          this.disabled = false;
          return ;
        }
      },1000);

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
    isnotify(){
      this.notifyvalue = event.target.value;
      this.issure = true;
    },
    ispassword(){
      this.passowordvalue = event.target.value;
    },
    isuser(){
      this.uservalue = event.target.value;
    },
    isradio(){
      this.issure =true;
    },
    ddd(){
      if(this.issure&&this.notifyvalue&&this.phonevalue){
        if(this.notifyvalue == this.validation){ 
          this.$http.post('/api/post',{
            iphone : this.phonevalue,
            password : this.passowordvalue,
            username: this.uservalue
          }).then(res=>{
            console.log(res);
             this.$notify({
                title: '成功',
                message: '这是一条成功的提示消息',
                type: 'success'
            });
            this.$router.push('/login');
          })
        }else{
          this.$notify.error({
            title: '错误',
            message: '这是一条错误的提示消息'
          });
          this.phonevalue = "";
          this.passowordvalue = "";
          this.uservalue = "";
        }
      }
    }
  }
}
</script>
<style  scoped>
.Rbox{
    height: 100vh;
    position: absolute;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background-color: antiquewhite;
}
form{
  margin-top:0.8rem;
}
.errorinfo{
  font-size:0.23rem;
  color:red;
  text-align: center;
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
  color:red;
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
.login{
  color: #fff;
    background-color: #80808033;
    outline: none;
    border: none !important;
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
.Lleft img{
  width: 0.2rem;
}
.Llogin{
  background-color:red;
}
</style>