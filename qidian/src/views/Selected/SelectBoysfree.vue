<template>
  <div>
    <afree :list="freetype"></afree>
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel style="height: 2.6rem; margin-top: 0.2rem">
        <el-carousel-item v-for="(item, index) in arrs" :key="index">
          <img class="top-img-scroll" :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 限时免费 -->
    <div class="time-free">
      <h2>限时免费</h2>
      <span class="free-hour">{{ this.hour }}</span> :
      <span class="free-minu">{{ this.min }}</span> :
      <span class="free-sec">{{ this.sec }}</span>

      <span class="for-more">
        更多
        <i class="el-icon-arrow-right"></i>
      </span>

      <div class="time-free-container">
        <div
          @click="openDetail(index, 4)"
          class="time-free-items"
          v-for="(item, index) in msg.data.slice(0, 8)"
          :key="index"
        >
          <div class="time-free-item">
            <img :src="item.images" alt="" />
            <p>{{ item.name }}</p>
            <span class="time-free-free">免费</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import afree from "../../components/SelectBoysKinds/free";
export default {
  components: {
    afree,
  },

  created() {
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    this.overtime = "2009-11-11 21:21:21";
    this.inittime();
    this.$http.get("/api/booklist").then((res) => {
      this.msg = res;
    });
  },
  data() {
    return {
      msg: {},
      freetype: { type: "免费" },
      arrs: [
        { src: require("../../assets/img/SelectBoys/freelb1.png") },
        { src: require("../../assets/img/SelectBoys/freelb2.png") },
        { src: require("../../assets/img/SelectBoys/freelb3.png") },
      ],
    };
  },
  methods: {
    inittime() {
      var timer = setInterval(() => {
        var offset = Math.floor(
          (Date.parse(this.overtime) - Date.now()) / 1000
        );
        if (offset <= 0) {
          clearInterval(timer);
        }
        var secLeft = offset % 60;
        var minLeft = Math.floor(offset / 60) % 60;
        var hourLeft = Math.floor(offset / 60 / 60) % 24;
        var day = Math.floor(offset / 60 / 60 / 24);

        // 补0操作
        secLeft = (secLeft < 10 ? "0" : "") + secLeft;
        minLeft = (minLeft < 10 ? "0" : "") + minLeft;
        hourLeft = (hourLeft < 10 ? "0" : "") + hourLeft;

        // 4）拼接时间格式，写入timehtml
        this.hour = parseInt(hourLeft);
        this.min = parseInt(minLeft);
        this.sec = parseInt(secLeft);
      }, 1000);
    },
  },
};
</script>
<style>
.time-free-item {
  margin-top: 0.1rem;
}
.block .top-img-scroll {
  height: 2.6rem !important;
}
</style>