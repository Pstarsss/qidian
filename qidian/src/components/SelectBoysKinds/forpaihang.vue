<template>
  <div>
    <div class="ph">本月作品排行</div>
    <hr />
    <div class="yp">月票</div>
    <div class="ph-items" v-for="(item, index) in msg" :key="index">
      <div class="ph-items-left">
        <img :src="item.images" alt="" />
      </div>
      <div class="ph-items-right">
        <h4>{{ item.name }}</h4>
        <span class="descr"
          >{{ item.author }} · {{ item.type }} · {{ item.wordcount }}万字</span
        >
      </div>
      <span class="yuepiao">{{ item.like }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "forpaihang",
  props: {
    number: {
      type: [Number],
      default: 0,
    },
  },
  data() {
    return {
      msg: [],
      temp: "",
    };
  },
  created() {
    this.$http.get(`/api/booklist/${this.number}`).then((res) => {
      this.msg = res.data;
      this.msg.forEach((i) => {
        i.like = i.like.replace(/-/g, "");
      });
      this.msg.sort((a, b) => parseInt(b.like) - parseInt(a.like));
    });
  },
  computed: {
    count(f) {
      return 1;
      // return f.replace(/-/g, "");
    },
  },
};
</script>
<style scoped>
.yp {
  font-size: 0.2rem;
  position: relative;
  right: -5.8rem;
}
.ph-items-right > span {
  color: #8f8f8f;
}
.ph-items .yuepiao {
  margin-top: 1.2rem;
  float: right;
}
.ph-items-right > h4 {
  position: relative;
  top: 0.2rem;
  font-size: 0.25rem;
}
.ph-items-right .descr,
.ph-items .yuepiao {
  position: relative;
  top: -0.33rem;
  font-size: 0.18rem;
}
.ph-items .yuepiao {
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