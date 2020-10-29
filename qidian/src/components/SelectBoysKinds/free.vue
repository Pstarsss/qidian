<template>
  <div>
    <div class="kindhead" v-bind="list">
      <i class="el-icon-arrow-left bk" @click="backup()"></i>
      <span class="typename">{{ list.type }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "free",
  data() {
    return {};
  },
  methods: {
    backup() {
      this.$router.go(-1);
    },
  },
  props: {
    list: {
      type: Object,
      default: function () {
        return "";
      },
    },
  },
};
</script>

<style>
.kindhead {
  font-size: 30px;
}
.bk {
  float: left;
  margin-top: 0.2rem;
}
.typename {
  display: block;
  padding-top: 0.2rem;
  text-align: center;
}
</style>