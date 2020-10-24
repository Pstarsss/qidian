<template>
    <nav-bar class="booknav">
      <div slot="left" class="b-left">
        <i class="el-icon-menu"></i>
      </div>
      <div slot="center" class="bookcenter">
        <h1>书架</h1>
        <i class="el-icon-search b-search"></i>
      </div>
      <div slot="right" class="select_top_right">
           <i class="el-icon-more"></i>
      </div>
    </nav-bar>  
</template>

<script>
import NavBar from '@/components/common/TopNavBar/NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
    };
  },

}
</script>
<style scoped>
.booknav{
    color: #fff;
    font-size: 0.32rem;
    background-color: #f00;
}
.bookcenter{
  position: relative;
}
.bookcenter h1{
  font-size:0.3rem;
}
.b-search{
  position: absolute;
  top: 10%;
  right: 10%;
}
.b-left{
  font-size: 0.4rem;
}
</style>