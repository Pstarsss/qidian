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
  },
  computed: {
  },
  methods: {
    finishPullup(){
      this.scroll.finishPullup();
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
    this.scroll = new BSscroll(this.$refs.wrapper,{
      zoom:true,
      click:true,
      probeType:this.probeType,
      pullUpload:true,
      pullDownRefresh: {
          threshold: 30,
      }
    });
    if(this.probeType>=2){
      this.scroll.on('scroll',({y})=>{
        this.$emit('scrolly',y);
      })
    };
    this.scroll.on('pullingDown',()=>{
        this.$emit('pullingDown');
    });
    
  }
}
</script>
<style  scoped>
.wrapper{
  height:calc(100vh - 130px);
  overflow: hidden;
}
</style>