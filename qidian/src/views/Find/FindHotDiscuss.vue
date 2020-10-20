<template>
  <div class="FindHotDiscuss">
    <!-- 点点圈(类似发朋友圈动态) -->
    <!-- 书单(给别人推荐书) -->
    <p>点点圈</p>
    <!-- 标题 -->
    <p>求推荐几本三观正的书</p>
    <!-- 内容预览 -->
    <p>1.三观正.替天行道或者有原则有底线的的。单女主或者无女主3.所有...</p>
    <img src="" alt="" />
    <!-- 左下角Tag -->
    <span>书荒</span>
    <!-- 底部 -->
    <p>
      <!-- 左侧时间 -->
      <span>10月13日 12:42</span>
      <span>
        <!-- 评论 -->
        <span>367</span>
        <!-- 点赞 -->
        <span>274</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    hotDiscussion: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style></style>
