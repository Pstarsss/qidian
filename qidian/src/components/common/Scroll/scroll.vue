<template>
   <div class='wrapper' ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
import BS from 'better-scroll'
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
  },
  computed: {
  },
  methods: {
    finishPullup(){
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      this.scroll? this.scroll.y : 0;
    },
    finishPullDown(){
      this.scroll.finishPullDown();
    }
  },
  mounted(){
    // 实例滚动实例并，添加一些配置项；
    this.scroll = new BS(this.$refs.wrapper,{
      zoom:true,
      click:true,
      taps:true,
      dblclick:true,
      probeType:this.probeType,
      pullUpLoad:{

      },
      pullDownRefresh: {
          threshold: 0,
          stop:0
      },
    });
    if(this.probeType>=2){
      this.scroll.on('scroll',({y})=>{
        this.$emit('scrolly',y);
      })
    };
    this.scroll.on('pullingDown',()=>{
        this.$emit('pullingDown');
    });
    this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp');
    });
  }
}
</script>
<style  scoped>
.wrapper{
  height:calc(100vh - 1.4rem);
  overflow: hidden;
}
</style>