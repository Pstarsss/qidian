<template>
  <!-- 回复单元 -->
  <div class="findDetailsReviews">
    <div class="review" v-for="i in reviews" :key="i.id">
      <h1>你好</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviews: {
      type: Array,
      defaultL: () => {},
    },
  },
}
</script>

<style scoped></style>
