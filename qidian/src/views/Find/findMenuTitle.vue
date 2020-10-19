<template>
  <div class="findMemuTitle">
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
.left {
  text-align: left;
  font-size: 25px;
  font-weight: bold;
}
.right {
  text-align: right;
  color: #999;
}
</style>
