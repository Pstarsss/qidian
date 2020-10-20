<template>
  <div class="publish">
    <button
      @click="
        show = !show
        trans()
      "
      :class="[rotate ? 'out' : 'in']"
    >
      <i class="iconfont icon-jia1"></i>
    </button>
    <div style="margin-top: 20px;">
      <el-collapse-transition>
        <div v-show="show">
          <div class="transition-box">
            <i class="iconfont icon-pinglun"></i>
            文字
          </div>
          <div class="transition-box">
            <i class="iconfont icon-tupian"></i>
            图片
          </div>
          <div class="transition-box">
            <i class="iconfont icon-shu"></i>
            推书
          </div>
          <div class="transition-box">
            <i class="iconfont icon-shu1"></i>
            专栏
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import '../iconfont/iconfont.css'
export default {
  data: () => ({
    show: false,
    rotate: false,
  }),
  methods: {
    trans() {
      this.rotate = !this.rotate
    },
  },
}
</script>

<style scoped>
.publish {
  position: fixed;
  z-index: 999;
  top: 2rem;
  /* right: 2rem; */
}
button {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: #db3b3b;
  color: #fff;
}
.in {
  transition: all 0.5s;
}
.out {
  transform: rotate(90deg);
  transition: all 0.5s;
}
.transition-box {
  display: block;
  margin-bottom: 0.1rem;
  /* width: 0.8rem;
  height: 0.4rem; */
  border-radius: 0.5rem;
  background-color: #db3b3b;
  text-align: center;
  color: #fff;
  padding: 0.2rem 0.3rem;
  /* box-sizing: border-box; */
  font-size: 0.2rem;
}
</style>
