<template>
  <div>
    <afree :list="freetype"></afree>
    <div class="topimg">
      <img src="../../assets/img/SelectBoys/wanben1.png" alt="" />
      <img src="../../assets/img/SelectBoys/wanben2.png" alt="" />
    </div>

    <!-- 畅销精选 -->
    <div class="wellsell">
      <div class="wellsell-title">
        <h2>畅销精选</h2>
        <span>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>

      <div
        @click="openDetail(index, 5)"
        class="wellsell-container"
        v-for="(item, index) in msg.data.slice(12, 15)"
        :key="index"
      >
        <div class="wellsell-container-left">
          <img :src="item.images" alt="" />
        </div>
        <div class="wellsell-container-right">
          <span class="wellsell-container-right-title">{{ item.name }}</span>
          <p class="wellsell-desc1">
            {{ item.serialize }} {{ item.wordcount }}万字
          </p>
          <p class="wellsell-desc2">{{ item.intro }}</p>
        </div>
        <hr />
      </div>
    </div>

    <!-- 小编力荐 -->
    <div class="wellsell">
      <div class="wellsell-title">
        <h2>小编力荐</h2>
        <span>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>

      <div
        @click="openDetail(index, 5)"
        class="wellsell-container"
        v-for="(item, index) in msg.data.slice(15, 18)"
        :key="index"
      >
        <div class="wellsell-container-left">
          <img :src="item.images" alt="" />
        </div>
        <div class="wellsell-container-right">
          <span class="wellsell-container-right-title">{{ item.name }}</span>
          <p class="wellsell-desc1">
            {{ item.serialize }} {{ item.wordcount }}万字
          </p>
          <p class="wellsell-desc2">{{ item.intro }}</p>
        </div>
        <hr />
      </div>
    </div>

    <!-- 最新完本 -->
    <div class="time-free">
      <h2>最新完本</h2>

      <span class="for-more">
        更多
        <i class="el-icon-arrow-right"></i>
      </span>

      <div class="time-free-container">
        <div
          @click="openDetail(index)"
          class="time-free-items"
          v-for="(item, index) in msg.data.slice(0, 4)"
          :key="index"
        >
          <div class="time-free-item">
            <img :src="item.images" alt="" />
            <p>{{ item.name }}</p>
            <span class="free-author">{{ item.author }}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <!-- 仙侠专场-->
    <div class="wellsell">
      <div class="wellsell-title">
        <h2>仙侠专场</h2>
        <span>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>

      <div
        @click="openDetail(index, 5)"
        class="wellsell-container"
        v-for="(item, index) in msg.data.slice(50, 53)"
        :key="index"
      >
        <div class="wellsell-container-left">
          <img :src="item.images" alt="" />
        </div>
        <div class="wellsell-container-right">
          <span class="wellsell-container-right-title">{{ item.name }}</span>
          <p class="wellsell-desc1">
            {{ item.serialize }} {{ item.wordcount }}万字
          </p>
          <p class="wellsell-desc2">{{ item.intro }}</p>
        </div>
        <hr />
      </div>
    </div>

    <!-- 体育专场-->
    <div class="wellsell">
      <div class="wellsell-title">
        <h2>体育专场</h2>
        <span>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>

      <div
        @click="openDetail(index, 5)"
        class="wellsell-container"
        v-for="(item, index) in msg.data.slice(60, 63)"
        :key="index"
      >
        <div class="wellsell-container-left">
          <img :src="item.images" alt="" />
        </div>
        <div class="wellsell-container-right">
          <span class="wellsell-container-right-title">{{ item.name }}</span>
          <p class="wellsell-desc1">
            {{ item.serialize }} {{ item.wordcount }}万字
          </p>
          <p class="wellsell-desc2">{{ item.intro }}</p>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>
<script>
import afree from "../../components/SelectBoysKinds/free";
export default {
  components: {
    afree,
  },
  methods: {
    openDetail(index) {
      let a = this.msg.data[index].id;
      this.$router.push("/detail/" + a);
    },
  },
  created() {
    this.$http.get("/api/booklist").then((res) => {
      this.msg = res;
      console.log(res);
    });
  },
  data() {
    return {
      msg: {},
      freetype: { type: "完本" },
    };
  },
};
</script>

<style scoped>
@import url("../../assets/css/SelectBoys/selectboys.css");
.time-free {
  margin-bottom: 3rem;
}
.free-author {
  font-size: 0.18rem;
  color: #838383;
}
.topimg {
  margin-top: 0.2rem;
}
.topimg > img {
  width: 45%;
  margin-left: 0.23rem;
  display: inline-block;
}
</style>