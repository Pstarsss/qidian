<template>
  <div class="">
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
      <div class="scroll-wrap">
        <ul class="scroll-content" :style="{ top }">
          <li v-for="(item, index) in prizeList" :key="index">
            <span>{{ item.type }}</span>
            <small> {{ item.name }}</small>
            <span class="scroll-content-more">
              <i class="el-icon-arrow-right"></i>
            </span>
          </li>
        </ul>
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
        <div class="wellsell-container">
          <div class="wellsell-container-left">
            <img
              src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
              alt=""
            />
          </div>
          <div class="wellsell-container-right">
            <span class="wellsell-container-right-title">从商二十年</span>
            <p class="wellsell-desc1">连载 323万字</p>
            <p class="wellsell-desc2">我不是天生强者，我只是天生要强</p>
          </div>
          <hr />
        </div>
      </div>

      <!-- 主编力荐 -->
      <div class="wellsell">
        <div class="wellsell-title">
          <h2>主编力荐</h2>
          <span>
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>
        <div class="wellsell-container">
          <div class="wellsell-container-left">
            <img
              src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
              alt=""
            />
          </div>
          <div class="wellsell-container-right">
            <span class="wellsell-container-right-title">从商二十年</span>
            <p class="wellsell-desc1">连载 323万字</p>
            <p class="wellsell-desc2">我不是天生强者，我只是天生要强</p>
          </div>
          <hr />
        </div>
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
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-free">免费</span>
            </div>
          </div>
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-free">免费</span>
            </div>
          </div>
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-free">免费</span>
            </div>
          </div>
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-free">免费</span>
            </div>
          </div>
        </div>

        <div class="time-free-change">
          <i class="el-icon-refresh"></i> 换一批
        </div>
        <hr />
      </div>

      <!-- 新书强推 -->
      <div class="wellsell">
        <div class="wellsell-title">
          <h2>新书强推</h2>
          <span>
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>

        <div class="wellsell-container">
          <div class="wellsell-container-left">
            <img
              src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
              alt=""
            />
          </div>
          <div class="wellsell-container-right">
            <span class="wellsell-container-right-title">从商二十年</span>
            <p class="wellsell-desc1">连载 323万字</p>
            <span class="wellsell-desc2">我不是天生强者，我只是天生要强</span>
          </div>
          <hr />
        </div>
      </div>

      <!-- 经典完本 -->
      <div class="wellsell">
        <div class="wellsell-title">
          <h2>畅销精选</h2>
          <span>
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>

        <div class="wellsell-container">
          <div class="wellsell-container-left">
            <img
              src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
              alt=""
            />
          </div>
          <div class="wellsell-container-right">
            <span class="wellsell-container-right-title">从商二十年</span>
            <p class="wellsell-desc1">连载 323万字</p>
            <span class="wellsell-desc2">我不是天生强者，我只是天生要强</span>
          </div>
          <hr />
        </div>
      </div>

      <!-- 潜力新书和优质精品 -->
      <div class="qianli-youzhi">
        <img src="../../assets/img/SelectBoys/1.png" alt="" />
        <img
          class="qianli-youzhi-img2"
          src="../../assets/img/SelectBoys/2.png"
          alt=""
        />
      </div>

      <!-- 二次元精品 -->
      <div class="wellsell">
        <div class="wellsell-title">
          <h2>二次元精品</h2>
          <span>
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>

        <div class="wellsell-container">
          <div class="wellsell-container-left">
            <img
              src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
              alt=""
            />
          </div>
          <div class="wellsell-container-right">
            <span class="wellsell-container-right-title">从商二十年</span>
            <p class="wellsell-desc1">连载 323万字</p>
            <span class="wellsell-desc2">我不是天生强者，我只是天生要强</span>
          </div>
          <hr />
        </div>
      </div>

      <!-- 军事精品 -->
      <div class="wellsell">
        <div class="wellsell-title">
          <h2>军事精品</h2>
          <span>
            更多
            <i class="el-icon-arrow-right"></i>
          </span>
        </div>

        <div class="wellsell-container">
          <div class="wellsell-container-left">
            <img
              src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
              alt=""
            />
          </div>
          <div class="wellsell-container-right">
            <span class="wellsell-container-right-title">从商二十年</span>
            <p class="wellsell-desc1">连载 323万字</p>
            <span class="wellsell-desc2">我不是天生强者，我只是天生要强</span>
          </div>
          <hr />
        </div>
      </div>

      <!-- 出版力荐 -->
      <div class="time-free">
        <h2>出版力荐</h2>
        <span class="for-more">
          更多
          <i class="el-icon-arrow-right"></i>
        </span>

        <div class="time-free-container">
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-author">王小枪</span>
            </div>
          </div>
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-author">王小枪</span>
            </div>
          </div>
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-author">王小枪</span>
            </div>
          </div>
          <div class="time-free-items">
            <div class="time-free-item">
              <img
                src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
                alt=""
              />
              <p>从骷髅岛开始横推万界</p>
              <span class="time-free-author">王小枪</span>
            </div>
          </div>
        </div>

        <div class="time-free-change">
          <i class="el-icon-refresh"></i> 换一批
        </div>
        <hr />
      </div>

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
          <el-carousel-item v-for="item in carouseData" :key="item.id">
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
      <div class="wellsell">
        <div class="wellsell-title">
          <h3>你可能感兴趣的好书</h3>
          <span>
            <i class="el-icon-circle-close"></i>
          </span>
        </div>
        <div class="wellsell-container">
          <div class="wellsell-container-left">
            <img
              src="http://www.zwdu.com/files/article/image/23/23488/23488s.jpg"
              alt=""
            />
          </div>
          <div class="wellsell-container-right">
            <span class="wellsell-container-right-title">从商二十年</span>
            <p class="wellsell-desc1">连载 323万字</p>
            <p class="wellsell-desc2">我不是天生强者，我只是天生要强</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import bnavs from "../../components/navs";
export default {
  name: "selectboys",
  components: {
    bnavs,
  },
  computed: {
    top() {
      return -this.activeIndex * 0.5 + "rem";
    },
  },
  created() {
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    this.overtime = "2021-11-01 00:00:00";
    this.inittime();
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
      prizeList: [
        { type: "考古", name: "保护性挖掘" },
        { type: "谍影", name: "张晨你就是个傻狗" },
        { type: "冒险", name: "张晨你就是个傻狗" },
        { type: "侦探", name: "张晨你就是个傻狗" },
        { type: "历史", name: "张晨你就是个傻狗" },
      ],
      activeIndex: 0,
      carouseData: [
        { src: require("../../assets/img/SelectBoys/sp1.png") },
        { src: require("../../assets/img/SelectBoys/sp2.png") },
        { src: require("../../assets/img/SelectBoys/sp3.png") },
        { src: require("../../assets/img/SelectBoys/sp4.png") },
      ],
      navlist: [
        { name: "分类", src: require("../../assets/img/SelectBoys/item1.png") },
        { name: "排行", src: require("../../assets/img/SelectBoys/item2.png") },
        { name: "三江", src: require("../../assets/img/SelectBoys/item3.png") },
        { name: "免费", src: require("../../assets/img/SelectBoys/item4.png") },
        { name: "完本", src: require("../../assets/img/SelectBoys/item5.png") },
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
    setInterval((_) => {
      if (this.activeIndex < this.prizeList.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 2000);
  },
};
</script>
<style scoped>
.el-carousel__item,
.el-carousel__mask {
  height: 2.4rem !important;
}
.el-carousel_item {
  height: 10rem !important;
}
.block .top-img-scroll {
  height: 3rem !important;
}
.scroll-wrap .scroll-content-more {
  position: absolute;
  right: 0;
  background: #ffffff;
  color: #a2a2a2;
}
.scroll-wrap {
  margin-left: 0.3rem;
  width: 92%;
  height: 0.5rem;
  overflow: hidden;
}
small {
  padding-left: 0.1rem;
  font-size: 0.2rem;
}

.scroll-content {
  position: relative;
  transition: top 2s;
}

.scroll-content > li {
  text-align: left;
  font-size: 0.22rem;
  line-height: 0.5rem;
}
.scroll-content > li > span {
  font-size: 0.2rem;
  background: #e2353b;
  color: white;
  padding: 0.05rem 0.08rem;

  border-radius: 0.06rem;
}
#news {
  width: 300px;
  height: 100px;
  margin: 20px auto;
  background-color: #ccc;
  border: #039 solid 1px;
  overflow: hidden; /*这里必须设置哦，否则滚动会消失的，如果设置为scroll，更容易明白原理*/
}
#news li {
  line-height: 30px;
}
.bar {
  font-size: 10px;
}
li {
  list-style-type: none;
}
.el-carousel__item img {
  height: 2.3rem !important;
}
.wellsell-title > h3 {
  font-size: 0.22rem;
}
.element-img {
  padding-top: 0.3rem;
  width: 80%;
}

.el-carousel__item img {
  width: 100%;

  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

hr {
  border-color: #fefefe;
  margin-block-end: 0.2em;
  margin-block-start: 0.3rem;
  margin-inline-end: 0.3rem;
  margin-inline-start: 0.3rem;
}
.recommend-list {
  margin-left: 0.3rem;
  font-size: 18px;
}
.recommend-list-right {
  padding-left: 0.3rem;
  font-size: 0.22rem;
  font-weight: 500;
}
.recommend-list-left {
  border-radius: 0.08rem;
  font-size: 0.2rem;
  padding: 0.02rem 0.04rem;
  background: #e6353e;
  color: white;
  text-align: center;
}
.recommend-list > i {
  font-size: 0.25rem;
  float: right;
  margin-right: 0.3rem;
}
.wellsell {
  font-size: 18px;
  margin-top: 0.4rem;
  margin-left: 0.3rem;
}
.wellsell-title > h2 {
  font-size: 0.3rem;
  display: inline-block;
}
.wellsell-title > span {
  float: right;
  margin-right: 0.3rem;
  color: #a2a2a2;
}
.wellsell-title i {
  font-size: 0.2rem;
  color: #a2a2a2;
}
.wellsell-container {
  margin-top: 0.2rem;
}
.wellsell-container > div {
  display: inline-block;
}
.wellsell-container-left > img {
  border-radius: 0.1rem;
}
.wellsell-container-right {
  vertical-align: top;

  margin-left: 0.2rem;
}
.wellsell-container-right-title {
  font-size: 0.22rem;
  font-weight: 600;
}
.wellsell-desc1,
.wellsell-desc2 {
  margin-top: 0.1rem;
  color: #a2a2a2;
}
.time-free {
  font-size: 18px;
  margin-left: 0.3rem;
  margin-top: 0.5rem;
}
.time-free > h2 {
  display: inline-block;
  font-size: 0.3rem;
}
.time-free > .for-more {
  float: right;
  margin-right: 0.3rem;
  color: #a2a2a2;
}
.time-free-items {
  margin-top: 0.2rem;
}
.free-hour,
.free-sec,
.free-minu {
  font-size: 0.16rem;
  padding: 0.05rem;
  border-radius: 0.05rem;
  background-color: red;
  color: white;
}
.free-sec,
.free-minu {
  background-color: black;
}
.free-hour {
  margin-left: 0.2rem;
}
.time-free-item {
  float: left;
  width: 23%;
  margin-right: 0.05rem;
}
.time-free-item > p {
  display: inline-block;
  width: 90%;
  font-size: 0.2rem;
  margin-top: 0.1rem;
}
.time-free-item > img {
  border-radius: 0.1rem;
  width: 80%;
}
.time-free-free {
  display: inline-block;
  margin-top: 0.15rem;
  font-size: 0.15rem;
  padding: 0.06rem 0.1rem;
  border: 1px solid red;
  border-radius: 0.04rem;
  color: red;
}
.time-free-change {
  color: lightseagreen;
  font-size: 0.18rem;
  margin-top: 3.4rem;
  display: block;
  text-align: center;
}
.qianli-youzhi > img {
  display: inline-block;
  width: 43%;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.qianli-youzhi > .qianli-youzhi-img2 {
  display: inline-block;
  margin-left: 0.2rem;
  width: 43%;
}
.time-free-author {
  color: #a2a2a2;
  display: inline-block;
  font-size: 0.18rem;
  margin-top: 0.08rem;
}
.special-list {
  margin-top: 0.2rem;
  margin-bottom: 0rem;
}
.special-list > ul {
  white-space: nowrap;
}
.el-carousel__indicators--outside {
  display: none !important;
}
.special-list > ul > li {
  width: 90%;
  margin-left: 0.2rem;
  display: inline-block;
}
.special-list > ul > li > img {
  float: left;
  width: 100%;
}
.el-carousel__container {
  height: 1.8rem !important;
}
.el-carousel__item img {
  height: 1.5rem !important;
}
.special-for {
  padding-left: 0.3rem;
  font-size: 18px;
  height: 1.2rem;
  width: 100%;
  background: #e4343e;
}
.special-for > h2 {
  font-size: 0.3rem;
  color: white;
  padding-top: 0.2rem;
}
.special-for > span {
  display: inline-block;
  font-size: 0.2rem;
  color: white;
  padding-top: 0.08rem;
}
</style>