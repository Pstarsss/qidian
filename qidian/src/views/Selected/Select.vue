<template>
  <div class="select_nav">
    <div class="navbar-top">
      <div
        slot="left"
        class="select_top_left"
        @click="open('/selecthome')"
        :class="{ active: isActive('selecthome') }"
      >
        新人必读
      </div>
      <div slot="center">
        <ul class="select_top_center">
          <li>
            <span
              @click="open('/selectboys')"
              :class="{ active: isActive('selectboys') }"
              >男生</span
            >
          </li>
          <li>
            <span
              @click="open('/selectgirls')"
              :class="{ active: isActive('selectgirls') }"
              >女生</span
            >
          </li>
          <li>
            <span
              @click="open('/selectcartoon')"
              :class="{ active: isActive('selectcartoon') }"
              >漫画</span
            >
          </li>
          <li><span>听书</span></li>
          <li><span>对话</span></li>
        </ul>
      </div>
      <div slot="right" class="select_top_right">
        <i class="el-icon-search"></i>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import navs from "../../components/navs.vue";
import TopNavBar from "@/components/common/TopNavBar/NavBar.vue";
export default {
  components: {},
  name: "selected",
  data() {
    return {
      nowUrl: "/selecthome",
    };
  },
  watch: {
    $route(to, from) {
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
  created() {
    this.$http.get("/api/booklist").then((res) => {
      console.log("sss");
      console.log(res);
    });
  },

  beforeUpdate() {
    // this.$refs.scroll.refresh();

  // updated(){
  //   this.$refs.scroll.refresh();
  // },
  },
  mounted() {
    setTimeout(() => {
      // this.$refs.scroll.refresh();
    }, 3000);
  },
};
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 1.2rem);
}
.navbar-top {
  align-items: center;
  display: flex;
  position: relative;
  justify-content: space-around;
  background-color: red;
  color: white;
}
.select_nav {
  display: inline;
}
.select_top_left {
  font-size: 0.22rem;
  font-weight: 700;
}
.select_top_center {
  font-size: 0.2rem;
  color: #ccc;
}
.select_top_right {
  font-size: 0.2rem;
}
ul {
  margin: 0;
}
li {
  float: left;
  font-size: 0.22rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
li span {
  margin: 0.1rem;
  padding: 0.1rem;
}
.active {
  color: white;
}
</style>
