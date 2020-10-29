<template>
  <div>
    <afree :list="type"></afree>

    <div class="topimgs">
      <img src="../../assets/img/SelectBoys/detail1.png" alt="" />
      <img src="../../assets/img/SelectBoys/detail2.png" alt="" />
      <img src="../../assets/img/SelectBoys/detail3.png" alt="" />
    </div>
  </div>
</template>
<script>
import afree from "../../components/SelectBoysKinds/free";
export default {
  data() {
    return {
      type: { type: "玄幻" },
    };
  },
  components: {
    afree,
  },
};
</script>
<style scoped>
.topimgs {
  position: relative;
  top: 0.3rem;
  left: -0.3rem;
}
.topimgs > img {
  margin-left: 0.2rem;
  width: 1.9rem;
  display: inline-block;
}
</style>