<template>
  <div>
    <afree :list="a"></afree>

    <div class="topimgs">
      <img src="../../assets/img/SelectBoys/detail1.png" alt="" />
      <img src="../../assets/img/SelectBoys/detail2.png" alt="" />
      <img src="../../assets/img/SelectBoys/detail3.png" alt="" />
    </div>
    <div class="detailcontent">
      <div class="qiangtui">
        <div class="topdesc">
          <h3>本周强推</h3>
          <span>更多<i class="el-icon-arrow-right"></i></span>
        </div>
        <div
          class="meiyiben"
          @click="openDetail(item.id)"
          v-for="(item, index) in arr"
          :key="index"
        >
          <div class="leftimg">
            <img :src="item.images" alt="" />
          </div>
          <div class="rightdesc">
            <h4>{{ item.name }}</h4>
            <span>{{ item.author }}</span>
            <span class="span2"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import afree from "../../components/SelectBoysKinds/free";
export default {
  inject: ["reload"],
  data() {
    return {
      id: "",
      a: { type: "" },
      arr: [],
      zz: "",
    };
  },

  //  详情公用一个模板，在第二次点击的时候，组件时已经生成了的，组件
  // 的生命周期函数并不会再次被调用，添加watch监控route的变化，有变化的话就赋值
  created() {
    this.a.type = this.$router.currentRoute.params.id;
    this.$http.get("/api/booklist").then((res) => {
      let temp = res.data;
      this.arr = temp.filter((i) => {
        return i.type == this.$router.currentRoute.params.id;
      });
      this.zz = this.arr[0].type;
      console.log(this.zz);
    });
  },
  watch: {
    $route() {
      if (this.zz !== this.$router.currentRoute.params.id) {
        this.$http.get("/api/booklist").then((res) => {
          let temp = res.data;
          this.arr = temp.filter((i) => {
            return i.type == this.$router.currentRoute.params.id;
          });
        });
      }
      this.a.type = this.$router.currentRoute.params.id;
    },
  },
  mounted() {
    this.reload();
  },
  components: {
    afree,
  },
  methods: {
    openDetail(id) {
      this.$router.push("/detail/" + id);
    },
  },
};
</script>
<style scoped>
.rightdesc {
  display: inline-block;
  margin-left: 0.2rem;
}
.rightdesc > .span2 {
  left: -1.3rem;
  top: -0.1rem;
  position: relative;
  font-size: 0.2rem;
}
.rightdesc > h4 {
  position: relative;
  top: 0.2rem;
  font-size: 0.25rem;
}
.rightdesc > span {
  position: relative;
  top: -0.5rem;
  font-size: 0.2rem;
}
.leftimg {
  display: inline-block;
}
.leftimg > img {
  border-radius: 0.1rem;
}
@import url("../../assets/css/SelectBoys/selectboys.css");
.qiangtui {
  margin-left: 0.4rem;
}
.topdesc > span {
  margin-left: 4.3rem;
  color: #808080;
  font-size: 0.2rem;
}
.topdesc > h3 {
  display: inline-block;
  font-size: 0.3rem;
}
.topimgs {
  position: relative;
  top: 0.3rem;
  left: -0.3rem;
}
.topimgs > img {
  margin-left: 0.2rem;
  width: 1.9rem;
  display: inline-block;
}
</style>