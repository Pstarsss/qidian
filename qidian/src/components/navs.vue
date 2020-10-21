<template>
  <div>
    <div class="foot1">
      <div class="bottom1">
        <div class="a1" v-for="(item, index) in list" :key="index">
          <img :src="item.src" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navs",
  data() {
    return {};
  },
  props: {
    //返回数组默认值
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style>
img {
  width: 0.9rem;
  height: 0.9rem;
}
.foot1 {
  height: 1rem;
  z-index: 97;
  width: 100%;
  bottom: 0;
}
.bottom1 {
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-around;
  background: #fff;
}
.a1 {
  height: 1.5rem;
  position: relative;
  text-decoration: none;
  font-size: 0.2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 0.1rem;
}
.bottom1 i {
  width: 0.44rem;
  height: 0.44rem;
  display: block;
  margin-top: 0.12rem;
  font-size: 0.44rem;
  margin-left: auto;
  margin-right: auto;
}
.bottom1 span {
  display: block;
  text-align: center;
  margin-bottom: 0.2rem;
  font-size: 0.25rem;
}
</style>
