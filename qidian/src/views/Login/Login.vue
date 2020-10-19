<template>
   <div class='Lbox'>
     <top-nav-bar>
       <div slot="left" class="Lleft"><img :src="srcs" alt=""></div>
       <div slot="center"><h2>起点账号登录</h2></div>
     </top-nav-bar>
      <formlogin></formlogin>
   </div>
</template>

<script>
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue'
import Scroll from '@/components/common/Scroll/scroll.vue'
import formlogin from '@/components/common/Login/formlogin.vue'

export default {
  components: {
    TopNavBar,
    Scroll,
    formlogin
  },
  data() {
   return {
     srcs:require('@/assets/img/loginimg/guanbi.png')
   };
},

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
</style>