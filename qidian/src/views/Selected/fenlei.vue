<template>
  <div>
    <afree :list="freetype"></afree>

    <div class="fenleicontent">
      <el-tabs tab-position="left" style="height: 200px">
        <el-tab-pane label="男生"
          ><forfenlei :type="type" :length="length"></forfenlei>
        </el-tab-pane>
        <el-tab-pane label="女生"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import afree from "../../components/SelectBoysKinds/free";
import forfenlei from "../../components/SelectBoysKinds/forfenlei";
export default {
  components: {
    afree,
    forfenlei,
  },
  data() {
    return {
      type: ["玄幻", "奇幻", "都市", "历史", "其他"],
      arr: [],
      freetype: { type: "分类" },
      length: 0,
    };
  },
  created() {
    this.$http.get("/api/booklist").then((res) => {
      this.length = res.data.length;
      console.log(this.length);
    });

    this.$http.get("/api/booklist").then((res) => {
      let temp = res.data;
      for (let a = 0; a < 5; a++) {
        this.arr[a] = temp.filter((i) => {
          return i.type == this.type[a];
          temp.data.forEach((i) => console.log(i.type));
        });
      }
    });
  },
};
</script>
<style>
.fenleicontent .el-tabs__active-bar {
  background-color: #e5353f;
}
.fenleicontent .el-tabs__active-bar.is-left {
  width: 0.05rem !important;
  height: 0.3rem !important;
  border-radius: 0.2rem;
}
.fenleicontent .el-tabs__active-bar {
  color: #e5353f;
}
.fenleicontent .el-tabs__item.is-active {
  color: #e5353f;
}

.fenleicontent .el-tabs--left .el-tabs__item.is-left {
  text-align: center;
}
.fenleicontent .el-tabs--left .el-tabs__header.is-left {
  position: absolute;
  left: -0.1rem;
  padding-top: 0.3rem;
  width: 1.2rem;
}
.fenleicontent .el-tabs__item {
  font-size: 0.22rem !important;
  height: 0.6rem;
}
</style>