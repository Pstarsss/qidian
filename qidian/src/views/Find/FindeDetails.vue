<template>
  <div class="findDetails">
    <div class="findTop">
      <!-- 顶部标题 -->
      <navBar>
        <template #left>
          <i class="el-icon-arrow-left" @click="findDetailsBack"></i>
        </template>
        <template #center>
          <span>帖子详情</span>
        </template>
        <template #right>
          <i class="el-icon-more" @click="drawer = true"></i>
        </template>
      </navBar>
    </div>
    <scroll :probeType="3" class="wrapper" ref="scroll" @pullingUp="pullingUp">
      <!-- 帖子内容 -->
      <div class="detail">
        <!-- 圈子 -->
        <div class="tag" v-if="this.det">
          <div class="tagLeft">
            <p>好</p>
          </div>
          <div class="tagCenter">
            <p>{{ det.tag }}圈</p>
            <p>999 成员 · 999 帖子</p>
          </div>
          <div class="tagRight">
            <p>进入圈子</p>
          </div>
        </div>
        <!-- 分割线 -->
        <el-divider></el-divider>
        <!-- 帖子 -->
        <div class="content">
          <!-- 帖子tag -->
          <div class="contentTag">
            <span v-for="i in 2" :key="i.id">讨论</span>
          </div>
          <!-- 作者/标题 -->
          <div class="authorAndTitle">
            <div class="authorAndFollow">
              <div class="author">
                <el-avatar :size="touSize" :src="touSrc"></el-avatar>
                <p>蒋子明</p>
              </div>
              <div class="follow">
                <i class="el-icon-plus"></i>
                <p>关注</p>
              </div>
            </div>
            <div class="title">
              <p>{{ det.title }}</p>
            </div>
          </div>
          <el-divider></el-divider>
          <!-- 内容 -->
          <p class="detailContent">{{ det.content }}</p>
          <img :src="det.imgSrc" class="contentImg" />
          <!-- 时间,点赞 -->
          <p class="timeAndLikes">
            <!-- 时间 -->
            <span>{{ det.time }}</span>
            <span class="detailLikes">
              <i class="iconfont icon-dianzan"></i>
              {{ det.likes }}
            </span>
          </p>
        </div>
      </div>
      <!-- 分界线 -->
      <el-divider class="bigDivider"></el-divider>
      <!-- 回复 -->
      <div class="reviews">
        <reviews :reviews="revs" />
      </div>
    </scroll>
    <!-- 底部组件 -->
    <findDetailsBottom @submits="submits"></findDetailsBottom>
    <el-drawer
      title=""
      :visible.sync="drawer"
      :with-header="false"
      direction="btt"
      size="4.5rem"
    >
      <p>分享</p>
      <p>举报</p>
      <p>取消</p>
    </el-drawer>
  </div>
</template>

<script>
import navBar from '@/components/common/TopNavBar/NavBar'
import scroll from '@/components/common/Scroll/scroll.vue'
import findDetailsBottom from './components/FindDetailsBottom'
// import findDetailsContent from './components/FindDetailsContent'
// import findDetailsReviews from './components/FindDetailsReviews'
import './iconfont/iconfont'
import reviews from './components/FindDetailsReviews'
export default {
  data() {
    return {
      drawer: false,
      // direction: 'btt',
      // drawerSize: '4.5rem',
      det: {},
      revs: [],
      id: '',
      touSize: 'small',
      touSrc:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    }
  },
  // beforeCreate() {
  //   this.$refs.scroll.refresh()
  // },
  created() {
    this.getDetail();
    this.getReviews();
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    pullingUp() {
      console.log('findDetails上拉');
      this.$refs.scroll.finishPullup();
    },
    findDetailsBack() {
      this.$router.go(-1);
    },
    getDetail() {
      // let that = this
      this.id = this.$router.currentRoute.params.id;
      this.$http.get(`/api/finddetail/${this.id}`).then((res) => {
        this.det = res.data[0];
        console.log(this.det);
      })
    },
    getReviews() {
      this.$http.get('/api/detaildiscuss').then((res) => {
        this.revs = res.data.reverse();
        console.log(this.revs);
      })
    },
    submits(value){
      this.$http.post('/api/adddiscuss',{
        value
      }).then(ree=>{
        console.log(ree);
      })
    }
    // clsDrawer() {
    //   this.$emit('update:drawer', false)
    // },
  },
  components: {
    navBar,
    scroll,
    // findDetailsContent,
    findDetailsBottom,
    reviews,
  },
}
</script>

<style>
.findDetails .el-drawer__wrapper > div > div {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  padding: 0.2rem;
}
</style>
// 顶部标题
<style scoped>
.findTop {
  /* background-color: #db3b3b; */
  height: 1rem;
  position: relative;
  width: 100%;
  z-index: 999;
}
.findTop span {
  color: #000;
  font-size: 0.3rem;
}
.findTop i {
  font-size: 0.3rem;
  color: #000;
  line-height: 1rem;
}
.wrapper {
  height: calc(100vh - 2rem);
}
</style scoped>
// 帖子内容
<style lang="css" scoped>
.tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  padding: 0.2rem;
  /* border-bottom: 1px solid #ddd; */
}
.tagLeft {
  height: 0.6rem;
  width: 0.6rem;
  padding: 0.1rem;
  border: 1px solid #ddd;
  border-radius: 0.1rem;
}
.tagLeft p {
  font-size: 0.4rem;
  color: #db3b3b;
  line-height: 0.4rem;
  text-align: center;
}
.tagCenter {
  text-align: left;
  flex-grow: 1;
  padding: 0 0.2rem;
}
.tagCenter p:first-of-type {
  font-size: 0.3rem;
  font-weight: bold;
  color: #000;
}
.tagCenter p:last-of-type {
  font-size: 0.2rem;
  color: #777;
}
.tagRight {
  border: 1px solid #000;
  border-radius: 0.1rem;
  /* height: 0.4rem; */
  padding: 0.05rem 0.1rem;
}
.tagRight p {
  font-size: 0.15rem;
  color: #000;
}
.el-divider {
  margin: 0.2rem 0;
  /* overflow: hidden; */
}
.contentTag {
  height: 0.4rem;
}
.contentTag > span {
  font-size: 0.1rem;
  display: block;
  float: left;
  margin-left: 0.2rem;
  border: 1px solid #999;
  padding: 0.02rem 0.08rem;
  border-radius: 0.1rem;
}
.authorAndTitle {
  font-size: 0.2rem;
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
  /* height: 0.5rem; */
  margin: 0.3rem 0.2rem;
  /* line-height: 0.4rem ; */
}
.authorAndFollow {
  display: flex;
  justify-content: space-between;
}
.author {
  display: flex;
}
.author p {
  line-height: 0.5rem;
  color: #000;
  margin-left: 0.2rem;
  font-weight: bold;
  font-size: 0.25rem;
}
.follow {
  display: flex;
  background-color: #db3b3b;
  border-radius: 0.5rem;
  padding: 0 0.15rem;
}
.follow i,
.follow p {
  line-height: 0.5rem;
  margin: 0 0.05rem;
  color: #fff;
}
.title {
  font-size: 0.35rem;
  font-weight: bold;
  color: #000;
  margin: 0.2rem 0;
}
.detailContent {
  /* margin-top: 1.4rem; */
  display: block;
  font-size: 0.3rem;
  /* padding: 0 0.2rem; */
  margin: 0 0.2rem;
  color: #000;
}
.contentImg {
  margin: 0.2rem;
}
.timeAndLikes {
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  /* padding: 0 0.2rem; */
  margin: 0.3rem 0.2rem;
  line-height: 0.2rem;
}
.detailsLikes > i {
  font-weight: bold;
}
.bigDivider {
  margin: 0.3rem 0;
  height: 0.13rem;
  background-color: #f5f5f5;
}
</style>
// 回复
<style lang="css" scoped></style>
// 抽屉
<style lang="css" scoped>
.findDetails .el-drawer__wrapper > div > div {
  padding: 0.2rem;
}
.el-drawer p {
  font-size: 0.3rem;
  font-weight: 600;
  margin: 0.45rem 0;
}
.el-drawer p:last-of-type {
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  padding: 0.3rem;
  text-align: center;
  line-height: 0.35rem;
  color: #808080;
}
.reviewsTitle {
}
</style>
