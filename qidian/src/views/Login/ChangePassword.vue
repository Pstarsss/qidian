<template>
   <div class='Lbox'>
     <top-nav-bar>
       <div slot="left" class="Lleft" @click="backto"><img :src="srcs" alt=""></div>
       <div slot="center"><h2>密码修改</h2></div>
     </top-nav-bar>
      <form class="">
     <div class="form1">
       <input type="password" placeholder="旧密码" class="input1" name="password" :value="passowordvalue1" @input="ispassword1">
     </div>
     <div class="form1">
       <input type="password" placeholder="新密码" class="input1" name="password" :value="passowordvalue2" @input="ispassword2">
     </div>
     <div class="form1">
       <input type="submit" @click.prevent="rush" value="确认" class="login1" >
     </div>
  </form>
   </div>
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue'
import Scroll from '@/components/common/Scroll/scroll.vue'
export default {
  components: {
    TopNavBar,
    Scroll,
  },
  data() {
   return {
      srcs:require('@/assets/img/loginimg/shangyibu.png'),
      passowordvalue1:'',
      passowordvalue2:''
   };
  },
  methods:{
    backto(){
      this.$router.go('-1');
    },
    ispassword1(){
      this.passowordvalue1 = event.target.value;
    },
    ispassword2(){
      this.passowordvalue2 = event.target.value;
    },
    rush(){
      if(this.issure&&this.phonevalue&&this.passowordvalue){
        this.$http.post('/api/changepassword',{
          password1:this.passowordvalue1,
          password2:this.passowordvalue2
        }).then(res=>{
          this.$router.push('/mineShow');
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
.login1{
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
.errorinfo{
  font-size:0.23rem;
  color:red;
  text-align: center;
}
</style>