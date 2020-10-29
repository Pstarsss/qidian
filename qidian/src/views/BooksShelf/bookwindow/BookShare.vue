<template>
  <div>
   
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
  },
};
</script>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12;
}
</style>