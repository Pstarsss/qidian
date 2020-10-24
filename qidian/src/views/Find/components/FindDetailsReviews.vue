<template>
  <!-- 回复单元 -->
  <div class="findDetailsReviews">
    <div class="reviewsTitle">
      <p>全部评论 ({{ reviews.length }})</p>
      <div class="sorts" @click="sort">
        <i class="el-icon-sort-down" v-if="showSort"></i>
        <i class="el-icon-sort-up" v-else></i>
      </div>
    </div>
    <div class="review" v-for="i in reviews" :key="i.id">
      <div class="reviewLeft">
        <el-avatar :size="touSize" :src="i.headimg"></el-avatar>
      </div>
      <div class="reviewRight">
        <p class="reviewName">{{ i.name }}</p>
        <p class="reviewContnet">{{ i.content }}</p>
        <p class="timeAndLikes">
          <span>{{ i.time }}</span>
          <span class="detailLikes">
            <i class="iconfont icon-dianzan"></i>
            {{ i.likes }}
          </span>
        </p>
        <!-- <el-divider></el-divider> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      touSize: 'small',
      showSort: true,
    }
  },
  methods: {
    sort() {
      this.showSort = !this.showSort
    },
  },
  props: {
    reviews: {
      type: Array,
      defaultL: () => {},
    },
  },
}
</script>

<style scoped>
.findDetailsReviews {
  /* overflow: hidden; */
}
.reviewsTitle {
  margin: 0.2rem;
  font-size: 0.3rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  line-height: 0.3rem;
}
.sorts {
  position: relative;
  width: 0.25rem;
  height: 0.25rem;
}
.sorts i {
  position: absolute;
  right: 0rem;
}
.review {
  margin-bottom: 0.2rem;
  padding: 0rem 0.2rem;
  overflow: hidden;
  /* border-bottom: 1px solid #f5f5f5; */
  display: flex;
  justify-content: space-around;
  /* display: block; */
}
.reviewLeft {
  flex-grow: 0.05;
}
.reviewLeft span {
  position: relative;
  bottom: 0.4rem;
}
.reviewRight {
  flex-grow: 0.95;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
}
.reviewRight .el-divider {
  /* margin: 0;
  color: #f5f5f5; */
}
.reviewName {
  line-height: 0.5rem;
  color: #000;
  /* margin-left: 0.2rem; */
  font-weight: bold;
  font-size: 0.25rem;
}
.reviewContnet {
  font-size: 0.3rem;
  color: #000;
}
.timeAndLikes {
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  /* padding: 0 0.2rem; */
  margin: 0.3rem 0;
  line-height: 0.2rem;
}
.detailsLikes > i {
  font-weight: bold;
}
</style>
