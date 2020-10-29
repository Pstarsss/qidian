<template>
  <!-- 帖子详情底部 -->
  <div class="findDetailsBottom">
    <div class="content" @click.prevent="changedialog">
      <div class="review" @click="opendrawer">
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
      :modal="false"
      :append-to-body="false"
    >
      <form action="submitReview" method="POST">
        <p>
          <span>发表评论</span>
          <button type="submit" @click.prevent="submits">发布</button>
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
          <i class="el-icon-picture-outline" @click="chosePicSheet"></i>
        </span>
        <span class="centerImgs">
          <img :src="i.src" alt="" v-for="i in reviewImgs" :key="i.id" />
        </span>
        <span>{{ publishReview.length }}/200</span>
      </p>
    </el-drawer>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"> </mt-actionsheet>
    <!-- <input type="file" id="inputFile" accept=".png,.jpg" /> -->
  </div>
</template>

<script>
import '../iconfont/iconfont'
// import '../css/FindDetailsBottom.css'
// import { Actionsheet } from 'mint-ui'
// Vue.component(Actionsheet.name, Actionsheet)
export default {
  data() {
    return {
      drawerSize: '50%',
      drawer: false,
      dialog: false,
      publishReview: '',
      // isshow:false
      showNologin: true,
      actions: [
        { name: '拍照', methods: '' },
        { name: '从相册中选择', methods: 'chosePic' },
      ],
      sheetVisible: false,
      reviewImgs: [
        { src: require('../img/海王星.png') },
        // { src: require('../img/海王星.png') },
        // { src: require('../img/海王星.png') },
      ],
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
    opendrawer() {
      this.drawer = !this.drawer
    },
    changedialog() {
      if (sessionStorage.getItem('userbasic')) {
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
    chosePicSheet() {
      this.sheetVisible = true
    },
    chosePic() {},
    submits() {
      let temp = {}
      let aa = JSON.parse(sessionStorage.getItem('userbasic'))
      temp.headimg = aa.userhead
      temp.name = aa.username
      temp.content = this.publishReview
      temp.tag = '见习'
      temp.image = ''
      temp.time = this.getTime()
      temp.likes = 0
      temp.reviews = 0
      this.$emit('submits', temp, this.publishReview)
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
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;
  padding: 0.2rem;
}
.el-drawer__wrapper {
  z-index: 2000 !important;
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
  height: 80%;
  /* padding-bottom: 2rem; */
}
textarea {
  resize: none;
  height: 90%;
  width: 100%;
  padding: 0.05rem;
  font-size: 0.3rem;
  border-bottom: 1px #db3b3b solid;
}
.submitReviewBottom {
  display: flex;
  justify-content: space-between;
  height: 0.6rem;
  align-items: center;
  font-size: 0.25rem;
  top: 0.55rem;
  position: relative;
}
.submitReviewBottom > span:first-of-type > i {
  margin-right: 0.2rem;
  font-size: 0.4rem;
  line-height: 0.35rem;
}
.centerImgs img {
  float: left;
}
#inputFile {
  position: fixed;
  bottom: 1rem;
  /* background-color: #000; */
}
</style>
