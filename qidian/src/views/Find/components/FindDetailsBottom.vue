<template>
  <!-- 帖子详情底部 -->
  <div class="findDetailsBottom">
    <div class="content" @click.prevent="changedialog">
      <div class="review" @click="drawer = true">
        <p class="iconfont icon-bi">终于来啦，聊聊吧~</p>
      </div>
      <div class="interact">
        <i class="iconfont icon-fenxiang"></i>
        <i class="iconfont icon-shoucang"></i>
        <i class="iconfont icon-dianzan"></i>
      </div>
    </div>
    <el-drawer
      title=""
      :with-header="false"
      :visible.sync="dialog"
      direction="btt"
      :size="drawerSize"
      :modal="true"
      :append-to-body="true"
    >
      <form action="submitReview" method="POST">
        <p>
          <span>发表评论</span>
          <button type="submmit" @click.prevent="submits">发布</button>
        </p>
        <el-divider></el-divider>
        <textarea
          name="publishReviewContent"
          id=""
          v-model="publishReview"
          placeholder="说点什么吧~"
          maxlength="200"
        ></textarea>
      </form>
      <p class="submitReviewBottom">
        <span>
          <i class="el-icon-chicken"></i>
          <i class="el-icon-picture-outline"></i>
        </span>
        <span>{{ publishReview.length }}/200</span>
      </p>
    </el-drawer>
  </div>
</template>

<script>
import '../iconfont/iconfont'
// import '../css/FindDetailsBottom.css'
export default {
  data() {
    return {
      drawerSize: '30%',
      drawer: false,
      dialog: false,
      publishReview: '',
      // isshow:false
      showNologin: true,
    }
  },
  watch: {
    // drawer(e) {
    //   if (e == true) {
    //     this.$nextTick(() => {
    //       this.$refs.textarea.focus()
    //     })
    //   }
    // },
  },
  methods: {
    changedialog() {
      if (sessionStorage.getItem('userid')) {
        this.drawer = true
        this.dialog = true
        this.showNologin = false
      } else {
        this.drawer = false
        this.dialog = false
        this.showNologin = true
      }
      this.$emit('getShowNologin', this.showNologin)
    },
    // open(){
    //   this.drawer = false;
    //   this.dialog = true;
    // },
    submits() {
      let temp = {}
      temp.headimg = sessionStorage.getItem('headimg')
      temp.name = sessionStorage.getItem('username')
      temp.content = this.publishReview
      temp.tag = '见习'
      temp.image = ''
      temp.time = this.getTime()
      temp.likes = 0
      temp.reviews = 0
      this.$emit('submits', temp)
    },
    getTime() {
      let dd = new Date()
      let h1 = dd.getHours()
      h1 = h1.length > 1 ? h1 : '0' + h1
      let m1 = dd.getMinutes()
      m1 = m1.length > 1 ? m1 : '0' + m1
      return `${dd.getMonth() + 1}月${dd.getDate() + 1}日 ${h1}:${m1}`
    },
  },
}
</script>

<style>
.el-drawer {
  /* border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  padding: 0.2rem; */
}
/* .findDetailsBottom .el-drawer__body {
  margin: 0.2rem;
} */
</style>
<style scoped>
.tologin {
  position: absolute;
  top: 40%;
  right: 0;
  left: 0;
}
.findDetailsBottom {
  background: #fff;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  position: fixed;
  height: 1rem;
  z-index: 98;
  width: 100%;
  bottom: 0;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* align-content: center; */
  height: 100%;
}
.review {
  display: inline-block;
  height: 0.6rem;
  flex-grow: 1;
  padding: 0.1rem 0.2rem;
  background: #f5f5f5;
  margin-left: 0.2rem;
  border-radius: 0.2rem;
}
.review p {
  line-height: 0.4rem;
  font-size: 0.25rem;
  color: #aaa;
}
.interact {
  height: 100%;
  /* flex-grow: 0.3; */
  padding: 0.1rem 0.2rem 0.1rem 0.1rem;
}
.interact i {
  display: block;
  /* width: 0.5rem; */
  font-size: 0.4rem;
  font-weight: bold;
  height: 100%;
  margin: 0 0.2rem;
  line-height: 0.8rem;
  float: left;
}
section {
  /* padding: 0.2rem; */
}
section > form > p:first-of-type {
  line-height: 0.6rem;
  color: #000;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
}
form button {
  border-radius: 0.1rem;
  padding: 0.1rem 0.2rem;
  background-color: #db3b3b;
  color: #fff;
}
.el-divider {
  margin: 0.1rem 0;
}
form {
  height: 90%;
  /* padding-bottom: 2rem; */
}
textarea {
  resize: none;
  height: 75%;
  width: 100%;
  padding: 0.05rem;
  font-size: 0.3rem;
  border-bottom: 1px #db3b3b solid;
}
.submitReviewBottom {
  display: flex;
  justify-content: space-between;
}
.submitReviewBottom {
  font-size: 0.3rem;
  top: 0.1rem;
  position: relative;
}
.submitReviewBottom > span:first-of-type > i {
  margin-right: 0.2rem;
  font-size: 0.4rem;
  line-height: 0.35rem;
}
</style>
