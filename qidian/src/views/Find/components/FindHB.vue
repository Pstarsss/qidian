<template>
  <div class="">
    <img src="../img/FindHB.png" alt="" />
    <img src="../img/FindHBpx.png" alt="" />
    <!-- <div class="back"> -->
    <button @click="back">.</button>
    <!-- </div> -->
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  methods: {
    back() {
      MessageBox({
        title: '😡',
        message: '想跑？',
        showCancelButton: true,
        confirmButtonText: '残忍离开',
        cancelButtonText: '我错了',
      }).then((action) => {
        if (action == 'confirm') this.$router.go(-1)
      })
    },
  },
}
</script>

<style scoped>
img {
  margin: 0 auto;
  width: 70%;
}
.back {
  /* margin: 0 auto; */
}
button {
  color: #fff;
  /* font-size: 0.2rem; */
  /* margin: 0 auto; */
  /* text-align: center; */
  background-color: #282a1e;
  /* padding: 0.1rem 0.2rem; */
  /* position: relative; */
  border-radius: 0.2rem;
  /* left: 5%; */
  position: fixed;
  z-index: 999;
  /* bottom: 0.18rem; */
  /* right: 50%; */
  top: 3.6rem;
  left: 51%;
  height: 5px;
}
</style>
