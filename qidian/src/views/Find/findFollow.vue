<template>
  <!-- 发现-关注 -->
  <div class="findFollow">
    <div class="login">
      <img src="./img/阅读.png" alt="" />
      <p>登录后才可以查看相关内容哦</p>
      <button @click="drawer = true" type="primary">登录</button>
    </div>
    <!-- 点击登录按钮下方弹出抽屉 -->
    <el-drawer
      title=""
      :visible.sync="drawer"
      :with-header="false"
      :direction="direction"
      :size="drawerSize"
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
        <a href="">
          <el-col :span="6">
            <div class="loginWay">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shoujishuma"></use>
              </svg>
              <p>手机号</p>
            </div>
          </el-col>
        </a>
        <a href="">
          <el-col :span="6">
            <div class="loginWay">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixindenglu"></use>
              </svg>
              <p>微信</p>
            </div>
          </el-col>
        </a>
        <a>
          <el-col :span="6">
            <div class="loginWay">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qq"></use>
              </svg>
              <p>QQ</p>
            </div>
          </el-col>
        </a>
        <a>
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
  </div>
</template>

<script>
import './iconfont/iconfont.css'
import './iconfont/iconfont.js'
export default {
  data() {
    return {
      drawer: false,
      direction: 'btt',
      drawerSize: '3.5rem',
    }
  },
  methods: {},
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
.icon {
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
.findFollow {
  padding-top: 1rem;
}
.login {
  margin-top: 30%;
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
