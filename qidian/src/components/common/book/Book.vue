<template>
   <nav class="bookstate">
     <div class="n-left">
         <slot name="left"></slot>
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


.n-left
,.n-right{
  min-width: 0.4rem;
  max-width: 0.6rem;
}


</style>