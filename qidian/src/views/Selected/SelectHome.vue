<template>
  <div class="selecthome-top">
      <div class="selecthome-toper">
        <span>排行榜</span>
        <a href="">查看完整榜单 <i class="el-icon-arrow-right"></i></a>
      </div>
  </div>
</template>

<script>

export default {
  name: 'selecthome',
  components: {
    
  },

}
</script>
<style>
.selecthome-top{
  margin-top: 0rem;
}
.selecthome-toper{
  line-height: .5rem;
  display: inline;
}
.selecthome-toper span{
  font-size: .3rem;
  float: left;
  color: black;
  font-weight: 600;
  margin-left: .3rem;
}
.selecthome-toper a{
font-size: .2rem;
color: #ccc;
float: right;
margin-right: .2rem;
}
</style>