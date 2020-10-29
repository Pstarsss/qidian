<template>
  <div>
    <div class="itemscontent">
      <div class="count">共{{ length }}部</div>
      <div class="items" v-if="arr">
        <div
          class="eachitems"
          v-for="(item, index) in arr"
          :key="index"
          @click="todetail()"
        >
          <div class="eachitems-imgs">
            <img :src="arr[index][1].images" alt="" />
            <div class="eachitems-desc">
              <h4>{{ arr[index][0].type }}</h4>
              <span>{{ item.length }}部</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.type);
    console.log(this.length);
    console.log(this.arr);
  },
  data() {
    return {};
  },
  name: "forfenlei",
  props: {
    type: {
      type: [Array],
    },
    arr: {
      type: [Object, Array],
      default: [],
    },
    length: {
      type: [Number],
    },
  },
  methods: {
    todetail() {
      this.$router.push("/fenleidetail");
      console.log("sb");
    },
  },
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