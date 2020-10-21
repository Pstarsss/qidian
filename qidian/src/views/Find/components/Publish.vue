<template>
  <div class="publish">
    <button
      @click="
        trans()
        show = !show
      "
      :class="[rotate ? 'out' : 'in']"
    >
      <i class="iconfont icon-jia1"></i>
    </button>
    <transition class="publishContents" name="el-zoom-in-bottom">
      <div v-show="show" class="transition-box publishContents">
        <p><i class="iconfont icon-pinglun" /> 文字</p>
        <p><i class="iconfont icon-tupian" /> 图片</p>
        <p><i class="iconfont icon-shu" /> 推书</p>
        <p><i class="iconfont icon-shu1" /> 专栏</p>
      </div>
    </transition>
  </div>
</template>

<script>
import '../iconfont/iconfont.css'
import '../iconfont/iconfont.css'
export default {
  data: () => ({
    show: true,
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
}
button {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: #db3b3b;
  color: #fff;
  position: fixed;
  bottom: 2rem;
  right: 0.1rem;
  z-index: 999;
}
.in {
  transform: rotate(45deg);
  background: #333;
  transition: all 0.4s;
}
.out {
  /* transform: rotate(-90deg); */
  transition: all 0.4s;
}
.publishContents {
  position: fixed;
  z-index: 998;
  bottom: 2.7rem;
  right: 0.1rem;
}
.publishContents p {
  background: #db3b3b;
  border-radius: 0.4rem;
  margin-bottom: 0.3rem;
  padding: 0.23rem 0.3rem;
  font-size: 0.22rem;
  font-weight: bold;
  color: #fff;
}
</style>
