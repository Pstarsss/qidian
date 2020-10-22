<template>
  <!-- 帖子详情底部 -->
  <div class="findDetailsBottom">
    <div class="content">
      <div class="review">
        <input type="text" class="" :placeholder="icon" />
        <!-- <p>服服服服服服</p> -->
      </div>
      <div class="interact">
        <i class="iconfont icon-fenxiang"></i>
        <i class="iconfont icon-shoucang"></i>
        <i class="iconfont icon-dianzan"></i>
      </div>
    </div>
  </div>
</template>

<script>
import '../iconfont/iconfont'
export default {
  data() {
    return {
      icon: '终于来啦，聊聊吧...',
    }
  },
}
</script>

<style lang="scss"></style>
<style scoped>
.findDetailsBottom {
  background: #fff;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  position: fixed;
  height: 1rem;
  z-index: 98;
  width: 100%;
  bottom: 0;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* align-content: center; */
  height: 100%;
}
.review {
  display: inline-block;
  height: 0.7rem;
  flex-grow: 1;
  padding: 0.1rem 0.1rem 0.1rem 0.2rem;
}
.review input {
  display: block;
  background-color: #eee;
  height: 100%;
  width: 100%;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.1rem 0.3rem;
}
.interact {
  height: 100%;
  /* flex-grow: 0.3; */
  padding: 0.1rem 0.2rem 0.1rem 0.1rem;
}
.interact i {
  display: block;
  /* width: 0.5rem; */
  font-size: 0.4rem;
  font-weight: bold;
  height: 100%;
  margin: 0 0.2rem;
  line-height: 0.8rem;
  float: left;
}
</style>
