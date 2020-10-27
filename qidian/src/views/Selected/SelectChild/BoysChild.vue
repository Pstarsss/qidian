<template>
   <div class="wellsell" v-if="lists">
    <div class="wellsell-title">
      <h2>{{title}}</h2>
      <span>
        更多
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
    <div
      class="wellsell-container"
      v-for="(item, index) in lists"
      :key="index"
      @click="openDetail(item.id)"
    >
      <div class="wellsell-container-left">
        <img :src="item.images" alt="" />
      </div>
      <div class="wellsell-container-right">
        <span class="wellsell-container-right-title">{{
          item.name
        }}</span>
        <p class="wellsell-desc1">
          {{ item.serialize }} {{ item.wordcount }}万字
        </p>
        <p class="wellsell-desc2">{{ item.intro }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  props:{
    title:{
      type:[String],
      default:''
    },
    lists:{
      type:[Array,String],
      default:[]
    }
  },
  methods:{
    openDetail(id){
      this.$emit('openDetail',id);
    }
  }

}
</script>
<style scoped>
@import url("../../../assets/css/SelectBoys/selectboys.css");
</style>