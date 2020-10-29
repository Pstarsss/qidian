<template>
    <nav-bar class="booknav">
      <div slot="left" class="b-left">
        <i class="el-icon-menu" @click="itemclick"></i>
      </div>
      <div slot="center" class="bookcenter">
        <h1>书架</h1>
        <i class="el-icon-search b-search"></i>
      </div>
      <div slot="right" class="select_top_right">

  
    <el-row class="block-col-2">
  <el-col :span="12">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-more el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="pulldown">
        <el-dropdown-item><i class="el-icon-circle-check"></i>批量管理</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-sort"></i>时间阅读排序</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-circle-plus-outline"></i>图墙模式</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-cloudy"></i>本地书头云管理</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-full-screen"></i>扫一扫</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-document"></i>浏览记录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>
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
      show: false,
    rotate: false,
    };
  },
  methods:{
			itemclick(){
				// console.log(11)
				this.$router.push('/bookscreen')
      },
       trans() {
      this.rotate = !this.rotate;
    },
      
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
     top: 24%;
    right: 8%;
    color: #fff;
    font-size: 0.26rem;
}
.b-left{
  font-size: 0.4rem;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .el-icon-more{
    color:white;
  }
  .icon{
    font-size: .37rem;
  }
  .pulldown i{
    font-size: .4rem;
  }
</style>