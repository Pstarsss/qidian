<template>
  <div>
    <div class="itemscontent">
      <div class="count">共{{ length }}部</div>
      <div class="items">
        <div class="eachitems" v-for="(item, index) in arr" :key="index">
          <div class="eachitems-imgs">
            <img :src="item[0].images" alt="" />
            <div class="eachitems-desc">
              <h4>{{ item[0].type }}</h4>
              <span>{{}}部</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "forfenlei",
  props: {
    type: {
      type: [Array],
    },
    arr: {
      type: [Array],
    },
    length: {
      type: [Number],
    },
  },

  methods: {},
};
</script>
<style>
.eachitems {
  width: 2.5rem;
  display: inline-block;
}
.eachitems-desc > span {
  position: relative;
  top: 0.2rem;
}
.eachitems-desc {
  margin-left: 0.2rem;
  top: -0.4rem;
  position: relative;
  display: inline-block;
  font-size: 0.2rem;
}
.eachitems-imgs > img {
  display: inline-block;
}
.eachitems-imgs {
  display: inline-block;
  margin-top: 0.2rem;
}
.eachitems-imgs > img {
  border-radius: 0.1rem;
}
.itemscontent .count {
  font-size: 0.2rem;
}
.itemscontent {
  margin-left: 1rem;
}
</style>