<template>
  <div class="findMenuTitle">
    <span class="left">
      <slot name="title">Title</slot>
    </span>
    <span class="right"> > </span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.findMenuTitle {
  padding-top: 0.4rem;
  height: 1.3rem;
}
.left {
  font-size: 0.4rem;
  font-weight: bold;
  color: #000;
  float: left;
}
.right {
  color: #999;
  font-size: 0.4rem;
  float: right;
}
</style>
