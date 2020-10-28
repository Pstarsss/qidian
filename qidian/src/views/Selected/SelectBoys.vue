<template>
  <div class="">
    <scroll class="wrapper" :probeType="3" ref="scroll" @pullingUp="pullingUp">
      <div class="container">
        <!-- 顶部轮播图 -->
        <div class="block">
          <el-carousel style="height: 2.6rem">
            <el-carousel-item v-for="(item, index) in arrs" :key="index">
              <img class="top-img-scroll" :src="item.src" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 分类图标 -->
        <bnavs :list="navlist"> </bnavs>
        <!-- 分割线奥 -->
        <hr style="margin-top: 0.3rem" />

        <!-- 推荐书籍 -->
        <div class="scroll-wrap" v-if="msg">
          <ul class="scroll-content" :style="{ top }">
            <li
              v-for="(item, index) in msg"
              :key="index"
              @click="openDetail1(index)"
            >
              <span style="margin-bottom=0.rem">{{ item.type }}</span>
              <small> {{ item.intro }}</small>
              <span class="scroll-content-more">
                <i class="el-icon-arrow-right"></i>
              </span>
            </li>
          </ul>
        </div>

        <!-- 畅销精选 -->
        <boys-child title="畅销精选" :lists="pxinfo1" @openDetail="openDetail"></boys-child>
        <boys-child title="主编力推" :lists="pxinfo2" @openDetail="openDetail"></boys-child>
        <!-- 限时免费 -->
        <!-- <div class="time-free" v-if="msgArr">
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
              v-for="(item, index) in msgArr[4].data.slice(
                this.changestar,
                this.changeend
              )"
              :key="index"
            >
              <div class="time-free-item">
                <img :src="item.images" alt="" />
                <p>{{ item.name }}</p>
                <span class="time-free-free">免费</span>
              </div>
            </div>
          </div>

          <div class="time-free-change" @click="change()">
            <i class="el-icon-refresh"></i> 换一批
          </div>
          <hr />
        </div> -->
        <boys-child title="新书强推" :lists="pxinfo3" @openDetail="openDetail"></boys-child>
        <boys-child title="经典完本" :lists="pxinfo4" @openDetail="openDetail"></boys-child>
        <!-- 潜力新书和优质精品 -->
        <div class="qianli-youzhi">
          <img src="../../assets/img/SelectBoys/1.png" alt="" />
          <img
            class="qianli-youzhi-img2"
            src="../../assets/img/SelectBoys/2.png"
            alt=""
          />
        </div>
        <boys-child title="二次元精品" :lists="pxinfo5" @openDetail="openDetail"></boys-child>
        <boys-child title="军事精品" :lists="pxinfo6" @openDetail="openDetail"></boys-child>
        <!-- 出版力荐 -->
        <!-- <div class="time-free" v-if="msgArr">
          <h2>出版力荐</h2>

          <span class="for-more">
            更多
            <i class="el-icon-arrow-right"></i>
          </span>

          <div class="time-free-container">
            <div
              @click="openDetail(index, 9)"
              class="time-free-items"
              v-for="(item, index) in msgArr[9].data.slice(
                this.changestar1,
                this.changeend1
              )"
              :key="index"
            >
              <div class="time-free-item">
                <img :src="item.images" alt="" />
                <p>{{ item.name }}</p>
                <span class="time-free-free">免费</span>
              </div>
            </div>
          </div>

          <div class="time-free-change" @click="change1()">
            <i class="el-icon-refresh"></i> 换一批
          </div>
          <hr />
        </div> -->

        <!-- 专题 -->
        <div class="wellsell">
          <div class="wellsell-title">
            <h2>专题</h2>
            <span>
              更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>

          <el-carousel
            style="height: 2rem"
            :interval="4000"
            type="card"
            arrow="never"
            ref="carousel"
          >
            <el-carousel-item
              @click="openDetail(index)"
              v-for="item in carouseData"
              :key="item.id"
            >
              <img class="element-img" alt="" :src="item.src" />
            </el-carousel-item>
          </el-carousel>
        </div>

        <!-- 个性化推荐 -->
        <div class="special-for">
          <h2>个性化推荐</h2>
          <span>根据你的阅读口味或自定义偏好生成</span>
          &nbsp;<span>设置偏好></span>
        </div>

        <!-- 个性化推荐分类 -->
        <div class="bottomtuijian" v-if="msg">
          <div
            class="wellsell"
            v-for="(item, index) in msg"
            :key="index"
          >
            <div v-show="display">
              <div class="wellsell-title">
                <h3>你可能感兴趣的好书</h3>
                <span>
                  <el-button class="ioi" type="text" @click="open1">
                    <i class="el-icon-circle-close"></i
                  ></el-button>
                </span>
              </div>
              <div class="wellsell-container">
                <div class="wellsell-container-left">
                  <img :src="item.images" alt="" @click="openDetail1(item.id)" />
                </div>
                <div class="wellsell-container-right">
                  <span class="wellsell-container-right-title">{{
                    item.name
                  }}</span>
                  <p class="wellsell-desc1">{{ item.wordcount }}万字</p>
                  <p class="wellsell-desc2">{{ item.intro }}</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import BoysChild from './SelectChild/BoysChild.vue'
import scroll from "@/components/common/Scroll/scroll.vue";
import $ from "jquery";
import bnavs from "../../components/navs";
export default {
  name: "selectboys",
  components: {
    bnavs,
    scroll,
    BoysChild
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
    this.$http.get('/api/booklist/px/18').then(res=>{
      this.pxinfo = res.data;
      this.pxinfo1 = this.pxinfo.slice(0,3);
      this.pxinfo2 = this.pxinfo.slice(3,6);
      this.pxinfo3 = this.pxinfo.slice(6,9);
      this.pxinfo4 = this.pxinfo.slice(9,12);
      this.pxinfo5 = this.pxinfo.slice(12,15);
      this.pxinfo6 = this.pxinfo.slice(15,18);
    })
    this.$http.get("/api/booklist/px/8").then((res) => {
      this.msg = res.data;
    });
  },

  methods: {
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
    // open(a) {
    //   if (this.$route.path == a) {
    //     return "";
    //   } else {
    //     this.$router.push(a);
    //   }
    // },
    openDetail(id) {
      this.$router.push("/detail/" + id);
    },
    openDetail1(id) {
      console.log(id);
      this.$router.push("/detail/" + id);
    },
    pullingUp() {
      this.pxi++;
      this.$http.get(`/api/booklist/px/${8*(this.pxi)}`).then(res=>{
        this.msg = res.data;
      })
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
      pxinfo:'',
      pxinfo1:'',
      pxinfo2:'',
      pxinfo3:'',
      pxinfo4:'',
      pxinfo5:'',
      pxinfo6:'',
      pxmsg:'',
      pxi:1,
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
</style>