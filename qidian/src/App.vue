<template>
  <div id="app">
    <div class="foot" v-if="footShow">
      <div class="bottom">
        <div
          class="a"
          @click="open('/bookshelf')"
          :class="{ active: isActive('bookshelf') }"
        >
          <i class="el-icon-reading"></i>
          <span>书架</span>
        </div>
        <div
          class="a"
          @click="open('/selecthome')"
          :class="{ active: isActive('select') }"
        >
          <i class="el-icon-s-operation"></i>
          <span>精选</span>
        </div>
        <div
          class="a"
          @click="open('/findSquares')"
          :class="{ active: isActive('find') }"
        >
          <i class="el-icon-view"></i>
          <span>发现</span>
        </div>
        <div
          class="a"
          @click="open('/mine')"
          :class="{ active: isActive('mine') }"
        >
          <i class="el-icon-user"></i>
          <span>我的</span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      footShow: true,
      nowUrl: "/bookshelf",
    };
  },

  watch: {
    $route(to, from) {
      if (this.$route.path == "/selectboysfree") {
        this.footShow = false;
      }
      this.nowUrl = to.fullPath; //全称路径
    },
  },
  methods: {
    open(a) {
      if (this.$route.path == a) {
        return "";
      } else {
        this.$router.push(a);
      }
    },
    isActive(name) {
      return this.nowUrl.indexOf(name) != -1;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}
body {
  background-color: #8080800f;
}
.foot {
  border-top: 1px solid #cccccc;
  position: fixed;
  height: 0.7rem;
  z-index: 97;
  width: 100%;
  bottom: 0;
}
.bottom {
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-around;
  background: #fff;
}
.a {
  height: 0.7rem;
  position: relative;
  text-decoration: none;
  font-size: 0.2rem;
}
.bottom i {
  width: 0.33rem;
  height: 0.33rem;
  display: block;
  margin-top: 0.06rem;
  font-size: 0.33rem;
  margin-left: auto;
  margin-right: auto;
}
.bottom span {
  text-align: center;
  margin-bottom: 0.02rem;
  font-size: 0.18rem;
}
li {
  list-style: none;
}
.active {
  color: #ff6700;
}
.full {
  font-size: 0.28rem;
}
</style>
