<template>
  <div>
    <div class="kindhead">
      <i class="el-icon-arrow-left bk" @click="backup()"></i>
      <el-tabs v-model="activeName">
        <el-tab-pane label="三江推荐" name="first">
          <scroll
            class="wrapper"
            :probeType="3"
            ref="scroll"
            @pullingUp="pullingUp"
          >
            <div
              @click="openDetail(index)"
              class="sanjiangtuijian"
              :key="index"
              v-for="(item, index) in msg"
            >
              <div class="top">
                <img :src="item.images" alt="" />
                <div class="topright">
                  <h3>{{ item.name }}</h3>
                  <span
                    >{{ item.author }} · {{ item.type }} ·
                    {{ item.serialize }} · {{ item.wordcount }}万字</span
                  >
                </div>
              </div>
              <div class="bottom">
                <span class="desc">{{ item.intro }}</span>
              </div>
              <div class="fenge"></div>
            </div>
          </scroll>
        </el-tab-pane>

        <el-tab-pane label="新书强推" name="second">
          <scroll
            class="wrapper"
            :probeType="3"
            ref="scroll"
            @pullingUp="pullingUp"
          >
            <div
              @click="openDetail(index)"
              class="sanjiangtuijian"
              :key="index"
              v-for="(item, index) in msg"
            >
              <div class="top">
                <img :src="item.images" alt="" />
                <div class="topright">
                  <h3>{{ item.name }}</h3>
                  <span
                    >{{ item.author }} · {{ item.type }} ·
                    {{ item.serialize }} · {{ item.wordcount }}万字</span
                  >
                </div>
              </div>
              <div class="bottom">
                <span class="desc">{{ item.intro }}</span>
              </div>
              <div class="fenge"></div>
            </div>
          </scroll>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import scroll from "@/components/common/Scroll/scroll.vue";
export default {
  components: {
    scroll,
  },
  created() {
    this.$http.get(`/api/booklist/px/${8 * this.pxi}`).then((res) => {
      this.msg = res.data;
    });
  },
  data() {
    return {
      pxi: 1,

      msg: {},
      activeName: "first",
    };
  },
  methods: {
    pullingUp() {
      this.pxi++;
      this.$http.get(`/api/booklist/px/${8 * this.pxi}`).then((res) => {
        this.msg = res.data;
      });
    },
    openDetail(index) {
      let a = this.msg[index].id;
      this.$router.push("/detail/" + a);
    },
    backup() {
      this.$router.go(-1);
      console.log("sb");
    },
  },
};
</script>
<style>
.kindhead .bk {
  position: relative;
  z-index: 999;
}
.sanjiangtuijian .fenge {
  margin-top: 0.3rem;
  margin-left: -0.3rem;
  height: 0.15rem;
  width: 120%;
  background: #f5f5f5;
}
.bottom .desc {
  display: block;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.25rem;
}
.sanjiangtuijian .bottom {
  display: block;
}
.topright {
  margin-left: 0.2rem;
  display: inline-block;
  position: relative;
  top: -0.3rem;
}
.topright > span {
  font-size: 0.2rem;
  color: #808080;
}
.topright > h3 {
  font-weight: bold;
  font-size: 0.25rem;
}
.sanjiangtuijian {
  height: 2rem;
  margin-top: 0.1rem;
  margin-left: 0.3rem;
}
.sanjiangtuijian .top img {
  display: inline-block;
  width: 0.8rem;
  border-radius: 0.05rem;
}
.kindhead .el-tabs__active-bar {
  width: 0.3rem !important;
  background-color: #e5363e;
  left: 0.4rem;
  height: 0.05rem;
  border-radius: 1rem;
}
.kindhead .el-tabs__item {
  top: 25%;
  font-size: 0.18rem;
}
.kindhead .el-tabs__nav-wrap {
  height: 0.8rem;
}
.kindhead .el-tabs__item.is-active {
  color: black !important;
  font-weight: 500;
  font-size: 0.3rem;
}
.kindhead .el-tabs__nav {
  left: 30% !important;
  height: 0.8rem;
}
.kindhead {
  font-size: 30px;
}
.bk {
  float: left;
  margin-top: 0.2rem;
}
.typename {
  display: block;
  padding-top: 0.2rem;
  text-align: center;
}
</style>