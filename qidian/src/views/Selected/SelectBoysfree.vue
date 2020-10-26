<template>
  <div>
    <afree :list="freetype"></afree>
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel style="height: 2.6rem">
        <el-carousel-item v-for="(item, index) in arrs" :key="index">
          <img class="top-img-scroll" :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 限时免费 -->
    <div class="time-free" v-if="msgArr">
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
          @click="openDetail(index)"
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

    <!-- 名家新作 -->
    <div class="wellsell" v-if="msgArr">
      <div class="wellsell-title">
        <h2>名家新作</h2>
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

    <!-- 新书推荐 -->
    <div class="wellsell" v-if="msgArr">
      <div class="wellsell-title">
        <h2>新书推荐</h2>
        <span>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>

      <div
        @click="openDetail(index, 5)"
        class="wellsell-container"
        v-for="(item, index) in msg.data.slice(9, 12)"
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

    <!-- 体育专场 -->
    <div class="wellsell" v-if="msgArr">
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

    <!-- 二次元专场 -->
    <div class="wellsell" v-if="msgArr">
      <div class="wellsell-title">
        <h2>二次元专场</h2>
        <span>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>

      <div
        @click="openDetail(index, 5)"
        class="wellsell-container"
        v-for="(item, index) in msg.data.slice(18, 21)"
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

    <!-- 二次元专场 -->
    <div class="wellsell" v-if="msgArr">
      <div class="wellsell-title">
        <h2>周末福利</h2>
      </div>

      <div
        @click="openDetail(index, 5)"
        class="wellsell-container"
        v-for="(item, index) in msg.data.slice(89, 90)"
        :key="index"
      >
        <div class="wellsell-container-left">
          <img :src="item.images" alt="" />
        </div>
        <div class="wellsell-container-right">
          <span class="wellsell-container-right-title">{{ item.name }}</span
          ><span class="weekendfree">本周末免费</span>
          <p class="wellsell-desc1">
            {{ item.serialize }} {{ item.wordcount }}万字
          </p>
          <p class="wellsell-desc2">{{ item.intro }}</p>
        </div>
      </div>
    </div>

    <!-- 下周免费任你选 -->
    <div class="nextweekfree">
      <p class="nwftitle">· 下周免费任你选 ·</p>
      <div
        class="freechoice"
        v-for="(item, index) in msg.data.slice(100, 101)"
        :key="index"
        @click="getindex(index)"
      >
        <h4 class="freename">{{ item.name }}</h4>
        <span class="freedesc"
          >{{ item.type }}·{{ item.serialize }}·{{ item.wordcount }}万字</span
        >
        <span class="goodcount">
          <i class="el-icon-caret-top"></i>
        </span>

        <div class="jindutiao">
          <el-progress
            :percentage="percentage"
            :color="customColor"
          ></el-progress>
        </div>
      </div>
    </div>
    <div class="nextweekfree">
      <div
        class="freechoice"
        v-for="(item, index) in msg.data.slice(101, 102)"
        :key="index"
        @click="getindex2(index)"
      >
        <h4 class="freename">{{ item.name }}</h4>
        <span class="freedesc"
          >{{ item.type }}·{{ item.serialize }}·{{ item.wordcount }}万字</span
        >
        <span class="goodcount">
          <i class="el-icon-caret-top"></i>
        </span>

        <div class="jindutiao">
          <el-progress
            :percentage="percentage2"
            :color="customColor"
          ></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import afree from "../../components/SelectBoysKinds/free";
export default {
  name: "selectboys",
  components: {
    afree,
  },
  computed: {
    top() {
      return -this.activeIndex * 0.55 + "rem";
    },
  },

  created() {
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    this.overtime = "2021-11-01 00:00:00";
    this.inittime();
    this.$http.get("/api/booklist").then((res) => {
      this.msg = res;
      console.log(res);
    });
  },

  methods: {
    getindex(index) {
      if (index == 0) {
        this.percentage = this.percentage + 1;
      }
    },
    getindex2(index) {
      this.percentage2 = this.percentage2 + 1;
    },

    open1() {
      const showConfirmButton = false;
      const h = this.$createElement;
      this.$msgbox({
        title: "对内容不感兴趣",
        message: h("p", null, [
          h(
            "span",
            { style: "color: gray;padding-left:.1rem;font-size:.18rem" },
            "选择下方理由，优化推荐 "
          ),
          h(
            "span",
            {
              style:
                "border-radius: 1rem;color: black;font-size: .22rem;background: #f5f5f5;padding: .1rem;    width: 2.5rem;position: absolute;text-align: center;left: 0;top: .45rem;",
            },
            "已读过 "
          ),
          h(
            "span",
            {
              style:
                "border-radius: 1rem;color: black;font-size: .22rem;background: #f5f5f5;padding: .1rem;    width: 2.5rem;position: absolute;text-align: center;left: 3rem;top: .45rem;",
            },
            "书质量差 "
          ),
          h(
            "span",
            {
              style:
                "border-radius: 1rem;color: black;font-size: .22rem;background: #f5f5f5;padding: .1rem;    width: 2.5rem;position: absolute;text-align: center;left: 0rem;top: 1rem;",
            },
            "书不喜欢 "
          ),
          h(
            "span",
            {
              style:
                "margin-top: -.5rem;border-radius: 1rem;color:white;float:right;font-size:.18rem;background:#e4343e;padding:.06rem .1rem",
            },
            "不感兴趣"
          ),
        ]),
        // showCancelButton: true,
        // confirmButtonText: "确定",
        // cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "info",
          message: "删除成功",
        });
      });
    },
    open(a) {
      if (this.$route.path == a) {
        return "";
      } else {
        this.$router.push(a);
      }
    },

    openDetail(index) {
      let a = this.msg.data[index].id;
      this.$router.push("/detail/" + a);
    },
    pullingUp() {
      this.endline += 4;
      this.$refs.scroll.finishPullup();
      this.$refs.scroll.refresh();
      // console.log(this.startline, this.endline);
    },
    deleteItem(index) {
      this.item.splice(index, 1);
    },
    hide() {
      this.display = 0;
    },
    change1() {
      if (this.changeend1 < 10) {
        this.changestar1 += 4;
        this.changeend1 += 4;
      }
    },
    change() {
      if (this.changeend < 10) {
        this.changestar += 4;
        this.changeend += 4;
      }
    },
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
    function() {
      function slideBanner() {
        //选中item的盒子
        var box = document.querySelector(".el-carousel__container");
        //手指起点X坐标
        var startPoint = 0;
        //手指滑动重点X坐标
        var stopPoint = 0;
        //重置坐标
        var resetPoint = function () {
          startPoint = 0;
          stopPoint = 0;
        };
        //手指按下
        box.addEventListener("touchstart", function (e) {
          //手指按下的时候停止自动轮播
          vm.stopAuto();
          //手指点击位置的X坐标
          startPoint = e.changedTouches[0].pageX;
        });
        //手指滑动
        box.addEventListener("touchmove", function (e) {
          //手指滑动后终点位置X的坐标
          stopPoint = e.changedTouches[0].pageX;
        });
        //当手指抬起的时候，判断图片滚动离左右的距离
        box.addEventListener("touchend", function (e) {
          console.log("1：" + startPoint);
          console.log("2：" + stopPoint);
          if (stopPoint == 0 || startPoint - stopPoint == 0) {
            resetPoint();
            return;
          }
          if (startPoint - stopPoint > 0) {
            resetPoint();
            vm.$refs.carousel.next();
            return;
          }
          if (startPoint - stopPoint < 0) {
            resetPoint();
            vm.$refs.carousel.prev();
            return;
          }
        });
      }
    },
  },

  data() {
    return {
      click: "",
      percentage: 54,
      percentage2: 66,
      customColor: "#e6343c",
      freetype: { type: "免费" },
      startline: 0,
      endline: 1,
      item: [],
      display: 1,
      data: {},
      changestar: 0,
      changeend: 4,
      changestar1: 0,
      changeend1: 4,
      msg: {},
      msgArr: [],
      activeIndex: 0,
      carouseData: [
        { src: require("../../assets/img/SelectBoys/sp1.png") },
        { src: require("../../assets/img/SelectBoys/sp2.png") },
        { src: require("../../assets/img/SelectBoys/sp3.png") },
        { src: require("../../assets/img/SelectBoys/sp4.png") },
      ],
      navlist: [
        {
          index: 1,
          name: "分类",
          src: require("../../assets/img/SelectBoys/item1.png"),
        },
        {
          index: 2,
          name: "排行",
          src: require("../../assets/img/SelectBoys/item2.png"),
        },
        {
          index: 3,
          name: "三江",
          src: require("../../assets/img/SelectBoys/item3.png"),
        },
        {
          index: 4,
          name: "免费",
          src: require("../../assets/img/SelectBoys/item4.png"),
        },
        {
          index: 5,
          name: "完本",
          src: require("../../assets/img/SelectBoys/item5.png"),
        },
      ],
      arrs: [
        { src: require("../../assets/img/SelectBoys/lb1.png") },
        { src: require("../../assets/img/SelectBoys/lb2.png") },
        { src: require("../../assets/img/SelectBoys/lb3.png") },
        { src: require("../../assets/img/SelectBoys/lb4.png") },
      ],
    };
  },
  mounted() {
    // console.log(this.$children);
    setInterval((_) => {
      if (this.activeIndex < 8) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 2000);
  },
};
</script>
<style scoped>
@import url("../../assets/css/SelectBoys/selectboys.css");
.weekendfree {
  color: #e3363c;
  font-size: 0.16rem;
  margin-left: 0.2rem;
  border: 1px solid #e3363c;
  padding: 0.05rem 0.1rem;
  border-radius: 0.1rem;
}
.el-progress {
  top: -0.5rem !important;
}
.el-progress-bar {
  width: 1rem !important;
}
.el-progress__text {
  display: none !important;
}
.goodcount {
  margin-left: 2rem;
  font-size: 0.18rem;
  color: #b0afaf;
}
.freename {
  display: inline-block;
  font-size: 0.22rem;
  font-weight: 600;
}
.freedesc {
  padding-left: 0.2rem;
  font-size: 0.18rem;
  color: #b0afaf;
}
.freechoice {
  height: 1rem;
  position: relative;
  top: -0.5rem;
  padding-left: 0.3rem;
}
.time-free-container {
  margin-top: 0.2rem;
}

.block {
  margin-top: 0.2rem;
}
.nextweekfree .nwftitle {
  padding-top: 0.2rem;
  text-align: center;
  font-size: 0.19rem;
  color: #b0afaf;
}
.nextweekfree {
  clear: both;
}
.wellsell {
  margin-top: 1rem;
}
</style>