<template>
   <div class='wrapper' ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
  components: {},
  data() {
    return {
      scroll:null
    };
  },
  props:{
    probeType:{
      type:[Number],
      default:1
    },
    pullUpLoad:{
      type:[Boolean],
      default:false
    }
  },
  computed: {
  },
  methods: {
  },
  mounted(){
    // 实例滚动实例并，添加一些配置项；
    this.scroll = new BSscroll(this.$refs.wrapper,{
      zoom:true,
      click:true,
      probeType:this.probeType,
      pullUpload:this.pullUpload,
    })
  }
}
</script>
<style  scoped>
.wrapper{
  height:calc(100vh - 130px);
  overflow: hidden;
}
</style>