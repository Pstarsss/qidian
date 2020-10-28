<template>
  <div>
    <div class="paihangtopfixed">
      <div class="backrouter">
        <i class="el-icon-arrow-left bk" @click="backup()"></i>
      </div>
      <div class="paihangtype">
        <el-tabs v-model="activeName">
          <el-tab-pane label="全部" name="first">
            <fp :number="1"></fp>
          </el-tab-pane>
          <el-tab-pane label="玄幻">
            <fp :number="2"></fp>
          </el-tab-pane>
          <el-tab-pane label="奇幻">
            <fp :number="3"></fp>
          </el-tab-pane>
          <el-tab-pane label="武侠">
            <fp :number="4"></fp>
          </el-tab-pane>
          <el-tab-pane label="仙侠">
            <fp :number="5"></fp>
          </el-tab-pane>
          <el-tab-pane label="都市">
            <fp :number="6"></fp>
          </el-tab-pane>
          <el-tab-pane label="现实">
            <fp :number="7"></fp>
          </el-tab-pane>

          <el-tab-pane label="历史">
            <fp :number="8"></fp>
          </el-tab-pane>
          <el-tab-pane label="军事">
            <fp :number="9"></fp>
          </el-tab-pane>
          <el-tab-pane label="游戏">
            <fp :number="10"></fp>
          </el-tab-pane>
          <el-tab-pane label="体育">
            <fp :number="11"></fp>
          </el-tab-pane>
          <el-tab-pane label="科幻">
            <fp :number="12"></fp>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import fp from "../../components/SelectBoysKinds/forpaihang";
export default {
  components: {
    fp,
  },
  data() {
    return {
      aa: 0,
      name: ["first", "second"],
      activeName: "first",
    };
  },
  methods: {
    backup() {
      this.$router.go(-1);
    },
    tabclick() {
      console.log(111);
    },
  },
};
</script>
<style>
.bk {
  position: relative;
  z-index: 999;
  font-size: 0.5rem;
}
.paihangtype .el-tabs__nav-wrap::after {
  background-color: white;
}
.paihangtype .el-tabs__nav::-webkit-scrollbar {
  display: none;
}
.paihangtype .el-tabs__nav {
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
}
.paihangtype .el-tabs__item {
  font-size: 0.25rem;
  color: #848484;
}
.paihangtype .el-tabs__active-bar {
  background-color: #e5353f;
  left: 0.15rem;
  height: 0.05rem;
  border-radius: 0.2rem;
  width: 0.25rem !important;
}
.paihangtype .el-tabs__nav {
  height: 0.8rem;
}
.paihangtype .el-tabs__item {
  top: -0.55rem;
}
.paihangtype .el-tabs__item.is-active {
  color: #e5353f;
  font-size: 0.28rem;
}
</style>