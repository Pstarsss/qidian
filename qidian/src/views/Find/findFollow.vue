<template>
  <scroll :probeType="3" class="wrapper" ref="scroll">
    <!-- 发现-关注 -->
    <div class="findFollow">
      <div class="login" v-show="noLogin">
        <img src="./img/阅读.png" alt="" />
        <p>登录后才可以查看相关内容哦</p>
        <button @click="drawer = true">登录</button>
      </div>
      <!-- 点击登录按钮下方弹出抽屉 -->
      <el-drawer
        title=""
        :visible.sync="drawer"
        :with-header="false"
        :direction="direction"
        :size="drawerSize"
        :modal="false"
        :append-to-body="true"
      >
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gift"></use>
          </svg>
          新用户7天全场限免
        </p>
        <el-divider></el-divider>
        <!-- 登陆方式 -->
        <el-row :gutter="20">
          <a href="/login">
            <el-col :span="6">
              <div class="loginWay">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shoujishuma"></use>
                </svg>
                <p>手机号</p>
              </div>
            </el-col>
          </a>
          <a href="/login">
            <el-col :span="6">
              <div class="loginWay">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixindenglu"></use>
                </svg>
                <p>微信</p>
              </div>
            </el-col>
          </a>
          <a href="/login">
            <el-col :span="6">
              <div class="loginWay">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qq"></use>
                </svg>
                <p>QQ</p>
              </div>
            </el-col>
          </a>
          <a href="/login">
            <el-col :span="6">
              <div class="loginWay">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qita"></use>
                </svg>
                <p>其他</p>
              </div>
            </el-col>
          </a>
        </el-row>
      </el-drawer>
      <!-- 登陆后 -->
      <div class="afterLogin" v-show="!noLogin">
        <div class="hotFollow" v-for="i in 5" :key="i.id">
          <p class="hotFollowTitle">
            <span>热门关注</span>
            <span> > </span>
          </p>
          <!-- 作者 -->
          <div class="hotFollowAuthor">
            <div class="authorLeft">
              <el-avatar :size="touSize" :src="circleUrl"></el-avatar>
            </div>
            <div class="authorCenter">
              <p>艾儿天空</p>
              <p>为山九仞,功亏一篑</p>
            </div>
            <div class="authorRight">
              <i class="el-icon-plus"></i>
              <p>关注</p>
            </div>
          </div>
          <!-- 内容 -->
          <div class="hotFollowContent">
            <p>十月完结的是三本精品小说汇总...</p>
            <p>{{ nosense }}</p>
          </div>
          <!-- 转发、评论、点赞 -->
          <div class="interact">
            <span class="iconfont icon-fenxiang"> 1</span>
            <span class="iconfont icon-pinglun"> 13</span>
            <span class="iconfont icon-dianzan"> 17</span>
          </div>
          <el-divider></el-divider>
        </div>
        <p class="bottom">总得有个底吧~</p>
      </div>
    </div>
  </scroll>
</template>

<script>
// import './iconfont/iconfont.css'
// import './iconfont/iconfont.js'
import scroll from '@/components/common/Scroll/scroll.vue'
import './iconfont/iconfont'

export default {
  data() {
    return {
      noLogin: true,
      drawer: false,
      direction: 'btt',
      drawerSize: '3.5rem',
      touSize: 'small',
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      nosense:
        '十月即将过去，又到了每月一次的完结精品小说汇总，那么就让我们看看这个月都有哪些净瓶小说完结了吧！',
    }
  },
  methods: {},
  components: {
    scroll,
  },
}
</script>
<style>
.findFollow .el-drawer__wrapper > div > div {
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
}
</style>
// 未登录时各标签的样式
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.wrapper {
  height: calc(100vh - 1.7rem);
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
.findFollow {
  /* padding-top: 1rem; */
}
.login {
  margin-top: 50%;
  text-align: center;
}
.login > img {
  width: 50%;
  margin: 0 auto;
}
.login > p {
  margin-top: 0.5rem;
  color: #555;
  font-size: 0.3rem;
  font-weight: bold;
}
.login > button {
  width: 1rem;
  height: 0.6rem;
  color: #db3b3b;
  font-weight: bold;
  background-color: #fff;
  border: 0.02rem solid #db3b3b;
  border-radius: 0.3rem;
}
section > p {
  text-align: center;
  font-size: 0.35rem;
  font-weight: bold;
  line-height: 1rem;
  color: #000;
}
.el-divider {
  margin: 0 0 0.2rem;
}
.loginWay {
  margin-top: 0.2rem;
  font-size: 0.25rem;
  text-align: center;
  line-height: 0.5rem;
}
.loginWay .icon {
  width: 1rem;
  height: 1rem;
}
.el-row a {
  color: #000;
}
</style>
// 登陆后
<style scoped>
.hotFollow {
  padding: 0 0.2rem;
  overflow: hidden;
  position: relative;
}
.hotFollowTitle {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  border-bottom: 1px solid #f5f5f5;
}
.hotFollowTitle > span {
  font-size: 0.28rem;
  line-height: 0.3rem;
}
.hotFollowTitle > span:first-of-type {
  color: #000;
  font-weight: bold;
}
.hotFollowTitle > span:last-of-type {
  color: #999;
}
.hotFollowAuthor {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
  padding: 0.2rem;
}
.authorLeft span {
  display: block;
}
.authorCenter {
  text-align: left;
  flex-grow: 1;
  padding: 0 0.2rem;
}
.authorCenter p:first-of-type {
  font-size: 0.3rem;
  font-weight: bold;
  color: #000;
}
.authorCenter p:last-of-type {
  font-size: 0.2rem;
  color: #777;
}
.authorRight {
  display: flex;
  background-color: #db3b3b;
  border-radius: 0.5rem;
  padding: 0 0.15rem;
}
.authorRight i,
.authorRight p {
  font-size: 0.15rem;
  line-height: 0.5rem;
  margin: 0 0.05rem;
  color: #fff;
}
.hotFollowContent {
  padding: 0.2rem;
  background: #f5f5f5;
  border-radius: 0.1rem;
}
.hotFollowContent p:first-of-type {
  color: #000;
  font-size: 0.2rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
}
.hotFollowContent p:last-of-type {
  color: #999;
  font-size: 0.16rem;
  /* font-weight: bold; */
}
.interact {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #f5f5f5;
  margin-top: 0.2rem;
}
.interact span {
  padding: 0.2rem 0.2rem 0.3rem;
  font-size: 0.2rem;
  font-weight: bold;
}
.hotFollow .el-divider {
  margin: 0;
  height: 0.1rem;
  background-color: #f5f5f5;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.bottom {
  margin-top: 0.1rem;
  font-size: 0.15rem;
  color: #999;
  text-align: center;
}
</style>
