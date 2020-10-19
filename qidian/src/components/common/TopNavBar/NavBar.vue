<template>
   <nav class="navigaition">
     <div class="n-left">
         <slot name="left"></slot>
     </div>
     <div class="n-center">
        <slot name="center"></slot>
     </div>
     <div class="n-right">
        <slot name="right"></slot>
     </div>
   </nav>
</template>

<script>
export default {
  components: {},
  data() {
   return {
   };
},

}
</script>
<style  scoped>
.navigaition{
  display:flex;
  font-size: 0.25rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0.1rem 0.1rem 0;
}

.n-center{
    flex-grow:1;
}
.n-left
,.n-right{
  min-width: 0.4rem;
  max-width: 0.6rem;
}


</style>