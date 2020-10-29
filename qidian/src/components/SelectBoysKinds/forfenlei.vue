<template>
  <div>
    <div class="itemscontent">
      <div class="count">共{{ length }}部</div>
      <div class="items">
        <div class="eachitem">
          <img
            src="http://qidian.qpic.cn/qdbimg/349573/1004608738/150"
            alt=""
          />
          <div class="eachitemdesc">
            <h4>玄幻</h4>
            <span>123部</span>
          </div>
        </div>
        <div class="eachitem">
          <img
            src="http://qidian.qpic.cn/qdbimg/349573/1004608738/150"
            alt=""
          />
          <div class="eachitemdesc">
            <h4>玄幻</h4>
            <span>123部</span>
          </div>
        </div>
        <div class="eachitem">
          <img
            src="http://qidian.qpic.cn/qdbimg/349573/1004608738/150"
            alt=""
          />
          <div class="eachitemdesc">
            <h4>玄幻</h4>
            <span>123部</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forfenlei",
  props: {
    type: {
      type: [Array],
    },
    arr: {
      type: [Array],
    },
    length: {
      type: [Number],
    },
  },
};
</script>
<style scoped>
.eachitem {
  position: relative;
  z-index: 999;
  display: inline-block;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
}
.eachitem .eachitemdesc > span {
  position: relative;
  top: 0.2rem;
}
.eachitem .eachitemdesc > h4 {
  font-size: 0.24rem;
}
.eachitem .eachitemdesc {
  position: relative;
  top: -0.6rem;
  left: 0.2rem;
  font-size: 0.2rem;
  display: inline-block;
}
.eachitem > img {
  display: inline-block;
  width: 1rem;
  border-radius: 0.1rem;
}
.itemscontent .count {
  font-size: 0.2rem;
}
.itemscontent {
  margin-left: 1rem;
}
</style>