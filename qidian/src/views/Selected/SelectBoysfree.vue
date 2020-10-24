<template>
  <div>
    <afree :list="freetype"></afree>
    <div class="block">
      <el-carousel style="height: 2.6rem; margin-top: 0.2rem">
        <el-carousel-item v-for="(item, index) in arrs" :key="index">
          <img class="top-img-scroll" :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import afree from "../../components/SelectBoysKinds/free";
export default {
  components: {
    afree,
  },
  data() {
    return {
      freetype: { type: "免费" },
      arrs: [
        { src: require("../../assets/img/SelectBoys/lb1.png") },
        { src: require("../../assets/img/SelectBoys/lb2.png") },
        { src: require("../../assets/img/SelectBoys/lb3.png") },
        { src: require("../../assets/img/SelectBoys/lb4.png") },
      ],
    };
  },
};
</script>
<style lang="">
</style>