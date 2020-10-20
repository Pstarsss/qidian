<template>
  <div>
    <div class='input-group' :class="{'isvalid':error}">
      <input 
          :type="type"
          :placeholder="pacleholder"
          :value="value"
          :name="name"
          @input="isright">
          <button v-if="btnTitle" @click="btnclick1" :disabled="disabled">{{btnTitle}}</button>
    </div>
    <button v-if="error" class="invalid-feeback">{{error}}</button>
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
    type:{
      type:String,
      default:'text'
    },
    placeholder:String,
    value:String,
    disabled:Boolean,
    btnTitle:String,//input框中的文字
    error:String //验证不正确提示；
  },
computed: {
},
methods: {
  isright(){
    this.$emit('input',$event.target.value);
  },
  btnclick1(){
    this.$emit('btnclick1');
  }
 },
created() {
 },
}
</script>
<style  scoped>
.isvalid{
  border-color: red;
}
</style>