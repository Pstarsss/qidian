<template>
  <div >
      <div class="detail-top">
        <div class="detail-top-left">
          <div class="detail-top-left-icon">
            <i class="el-icon-arrow-left"></i>
          </div>         
           <div class="detail-top-middle">
              <div class="detail-top-img"><img src="../../assets/logo.png" alt="" class="detail-top-imgs"></div>            
              <div class="detail-top-content">
                <div class="detail-top-content-title"><span >皇上非要为我废除六宫</span></div>
                <div class="detail-top-content-kind"><span >古代言情</span></div>                 
              </div>
        </div>
        </div>
               
        <div class="detail-top-right">
           <i class="el-icon-more"></i>
        </div>      
      </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  components: {
    
  },

}
</script>

<style>
.detail-top{
  height: .6rem;
  color:black;
  font-size: .26rem;
  line-height: .6rem;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
}
.detail-top-left{
margin-left: .2rem;
display: flex;
justify-content: space-between;
line-height: .6rem;
}
.detail-top-middle{
  margin-left: .1rem;
  line-height: .6rem;
  height: .6rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
}
.detail-top-right{
margin-right: .2rem;
}
.detail-top-img{
margin-top: .1rem;
}
.detail-top-content{
margin-left: .1rem;
height: .6rem;
}
.detail-top-imgs{
  width: .35rem;
  height: .45rem;
}
.detail-top-content-title{
  font-size: .14rem;
  color: black;
  margin-top: -.08rem;
  font-weight: 500;
}
.detail-top-content-kind{
  font-size: .10rem;
  color: #ccc;
  margin-top: -.38rem;
}
</style>