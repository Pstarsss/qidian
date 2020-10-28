<template>
  <div>
    <div class="ph">本月作品排行</div>
    <hr />
    <div class="yp">月票</div>
    <div
      class="ph-items"
      v-bind="number"
      v-for="(item, index) in msg[0]"
      :key="index"
    >
      <div class="ph-items-left">
        <img :src="item.images" alt="" />
      </div>
      <div class="ph-items-right">
        <h4>{{ item.name }}</h4>
        <span class="descr"
          >{{ item.author }} · {{ item.type }} · {{ item.wordcount }}万字</span
        >
        <span class="yuepiao">{{ item.like }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forpaihang",
  props: {
    number: {
      type: Number,
    },
  },
  data() {
    return {
      msg: [{}],
    };
  },
  created() {
    this.$http.get("/api/booklist").then((res) => {
      this.msg[0] = res.data;
      console.log(this.msg[number]);
    });
  },
};
</script>
<style scoped>
.yp {
  font-size: 0.2rem;
  position: relative;
  top: 0.8rem;
  right: -6rem;
}
.ph-items-right > span {
  color: #8f8f8f;
}
.ph-items-right .yuepiao {
  position: relative;
  right: -2rem;
}
.ph-items-right > h4 {
  position: relative;
  top: 0.2rem;
  font-size: 0.25rem;
}
.ph-items-right .descr,
.ph-items-right .yuepiao {
  position: relative;
  top: -0.33rem;
  font-size: 0.18rem;
}
.ph-items-right .yuepiao {
  font-size: 0.18rem;
}
.ph-items-right {
  margin-left: 0.3rem;
}
.ph-items-left,
.ph-items-right {
  display: inline-block;
}
.ph-items-left > img {
  border-radius: 0.1rem;
}
.ph-items {
  margin-right: 0.6rem;
  margin-left: 0.6rem;
}
.ph {
  text-align: center;
  font-size: 0.25rem;
}
</style>