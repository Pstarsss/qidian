<template>
  <!-- 发现-关注 -->
  <div class="findFollow">
    <div class="login">
      <img src="./img/阅读.png" alt="" />
      <p>登录后才可以查看相关内容哦</p>
      <el-button type="danger" round>登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.findFollow {
  padding-top: 1rem;
}
.login {
  margin-top: 40%;
  text-align: center;
}
.login > img {
  width: 50%;
  margin: 0 auto;
}
p {
  color: #555;
  font-size: 0.3rem;
  font-weight: bold;
}
</style>
