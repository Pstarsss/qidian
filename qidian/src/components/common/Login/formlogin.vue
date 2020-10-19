<template>
<div>
  <form class="">
     <div class="form1">
       <input type="text" placeholder="手机/邮箱/起点账号" class="input1">
       <button :disabled="disabled" class="getma">获取验证码</button>
     </div>
     <div class="form1">
       <input type="password" placeholder="密码" class="input1">
     </div>
     <div class="deal">
         <el-radio v-model="issure" class="radio"> </el-radio>
       <span>我已阅读并接受<strong>《阅文用户服务协议》</strong>及<strong>《隐私协议》</strong></span>
     </div>
     <div class="form1">
       <input type="submit" @click.prevent="ddd" value="登录" class="login">
     </div>
     <div class="L-pp">
       <div>忘记密码?</div>
       <div>注册新账号</div>
     </div>
  </form>
  <div class="third">
    
  </div>
</div>
   
  
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      input3: '',
      input4: '',
      disabled:false,
      issure:false
    };
  },

}
</script>
<style  scoped>
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
</style>