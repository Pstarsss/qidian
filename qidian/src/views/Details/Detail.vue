<template>
  <div class="all">
      <div class="detail-top">
        <div class="detail-top-left">
          <div class="detail-top-left-icon" @click="back">
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
      <div class="detail-header">
           <div class="detail-header-top">
              <div class="detail-header-top-imgs">
                <img src="../../assets/logo.png" alt="" class="detail-header-top-img">
              </div>
              <div class="detail-header-top-title">
                  <h3 class="title-one">皇上非要我废除六宫</h3>
                  <p class="title-two">星影仙子<i class="el-icon-arrow-right"></i></p>                 
                  <p class="title-three">古代言情 · 穿越奇情</p>
              </div>
           </div>
           <div class="detail-header-bottom">
                <div class="detail-header-bottom-left">
                    <span>出圈指数 </span>
                    <span class="tm">™</span>
                </div>
                <div class="detail-header-bottom-right">
                    <span class="tm">Lv1初出茅庐  </span>
                    <span class="rank"> 30 <i class="el-icon-arrow-right"></i></span>
                </div>
           </div>
      </div>

      <div class="detail-content">
         <div class="detail-content-body">
            <div class="detail-content-top"></div>
            <div class="detail-content-tops">
                  <div class="detail-content-tops-left">
                       <div class="detail-content-tops-left-img">
                           <img src="../../assets/logo.png" alt="" class="detail-content-tops-left-imgs">
                       </div>
                       <div>
                          <p class="detail-content-tops-right-top">三百收藏</p>
                          <p class="detail-content-tops-right-bottom">2里程碑 <i class="el-icon-arrow-right"></i></p>
                       </div>
                  </div>
                  <div class="detail-content-tops-right">
                    <p class="detail-content-tops-right-top"><span>52</span>万字</p>
                    <p class="detail-content-tops-right-bottom">连载</p>
                  </div>
                  <div class="detail-content-tops-right">
                    <p class="detail-content-tops-right-top">1593</p>
                   <p class="detail-content-tops-right-bottom">推荐票<i class="el-icon-arrow-right"></i></p>
                  </div>
                  <div class="detail-content-tops-right">
                    <p class="detail-content-tops-right-top">135</p>
                    <p class="detail-content-tops-right-bottom">月票<i class="el-icon-arrow-right"></i></p>
                  </div>
            </div>

            <ul class="detail-body-kind">
              <li>宫斗</li>
              <li>穿越</li>
              <li>架空</li>
              <li>虐渣</li>
              <li>甜宠</li>
              <li>浪漫</li>
              <li>轻松</li>
              <li>戏精</li>             
            </ul> 
            <div>
                 <el-collapse v-model="activeNames" @change="handleChange" class="detail-books-details">
                <el-collapse-item title="故事详情" name="1">
                   <div class="detail-books-detail"> 
                    王唏的母亲为给她说门体面的亲事，把她送到京城的永城侯府家镀金。可出身蜀中巨贾之家的王晞却觉得京城哪哪儿都不好，
                    只想着什么时候能早点回家。直到有一天，她偶然间发现自己住的后院假山上可以用千里镜看见隔壁长公主.府.....她顿时眼睛一亮一长 
                    公主之子陈珞可真英俊!永城侯府的表姐们可真有趣!京城好好玩!
                    </div>                
                </el-collapse-item> 
            </el-collapse>
            </div> 
            <div class="detail-role">
                 <div class="detail-role-left">
                      <div class="detail-role-left-top">
                           <div class="detail-role-left-top-imgs"><img src="../../assets/logo.png"  alt="" class="detail-role-left-top-img"></div>
                           <div class="detail-role-left-top-name">
                             <p class="detail-role-left-top-names">萧仙仙</p>
                             <p class="detail-role-left-top-role">女主</p>
                           </div>
                      </div>
                      <div class="detail-role-left-bottom">
                           <span>可爱，盟，机智怜悯</span>
                           <span>
                             <p><i class="el-icon-star-off"></i></p>
                             <span class="detail-role-left-bottom-num">100</span>
                           </span>
                      </div>
                 </div>

                 <div class="detail-role-right">
                       <div class="detail-role-left-top">
                           <div class="detail-role-left-top-imgs"><img src="../../assets/logo.png"  alt="" class="detail-role-left-top-img"></div>
                           <div class="detail-role-left-top-name">
                             <p class="detail-role-left-top-names">郭勇</p>
                             <p class="detail-role-left-top-role">男主</p>
                           </div>
                      </div>
                      <div class="detail-role-left-bottom">
                           <span>傲娇，口嫌体正直，专一</span>
                           <span>
                             <p><i class="el-icon-star-off"></i></p>
                             <span class="detail-role-left-bottom-num">100</span>
                           </span>
                      </div>
                 </div>
            </div>         
         </div>
         <div class="detail-catalog">
           <span class="common-title">目录</span>
           <span class="detail-catalog-right">连载至513章·15小时前更新 <i class="el-icon-arrow-right"></i></span>
         </div>

         <div class="space"></div>

         <div class="detail-catalog">
           <span class="common-title">书友圈</span>
           <span class="detail-catalog-right">运营团队 (招募中) | 讨论贴(17) <i class="el-icon-arrow-right"></i></span>
         </div>
         <div class="detail-comment">
              <div class="detail-comment-content">
                <div class="detail-comment-contentss">
                      
                </div>
                <span class="detail-comment-contents">
                    很有趣的女频文！本书存在一个及其尖锐的矛盾，目前我也只看了几十章，期待后面作者如何展开解决矛盾
                </span>
              </div>
              <div class="detail-comment-author">
                   <div class="detail-comment-author-left">
                        <div class="author-photo"><img src="../../assets/logo.png" alt=""></div>
                        <span class="author-name">萌萌朦丶懵</span>
                   </div>
                   <div class="detail-comment-author-right">
                       <i class="el-icon-more el-icon-more1"></i>
                   </div>
              </div>
         </div>
      </div>
      666
  </div>
</template>

<script>

export default {
  name: 'Detail',
  components: {   
  },
  data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      back(){
        this.$router.go(-1)
      }
    }
}
</script>

<style>
.all{
  width: 100%;
}
.detail-top{
  top: 0;
  width: 100%;
  height: .6rem;
  color:black;
  font-size: .26rem;
  line-height: .6rem;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  position: fixed;
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
  color: #a2a2a2;
  margin-top: -.38rem;
}
.detail-header{
  margin-left: auto;
  margin-right: auto;
  width: 6.8rem;
  height: 3.1rem;
  background-color:rgba(147, 121, 120, 0.76);
  z-index: 1;
}
.detail-header-top{
  display: flex;
  justify-content: space-between;
  widows: 6.8rem;
  height: 1.4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
}
.detail-header-top-imgs{
margin-top: .7rem;
margin-left: .2rem;
}
.detail-header-top-img{
  width: 1.2rem;
  height: 1.6rem;
}
.detail-header-top-title{
margin-top: 1rem;
margin-right: 3rem;
color: white;
height: 3rem;
}
.title-one{
  font-size: .24rem;
}
.title-two{
  font-size: .18rem;
  color: white;
  margin-top: .1rem;
}
.title-three{
  font-size: .18rem;
  color: rgba(255, 255, 255, 0.226);
  margin-top: .1rem;
}
.detail-header-bottom{
  background-color:rgba(101, 85, 85, 0.56);
  height: .45rem;
  font-size: .2rem;
  width: 6.4rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: .9rem;
  color: white;
  border-radius: .05rem;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  line-height: .45rem;
}
.tm{
  color: #a2a2a2;
  font-size: .18rem;
}
.detail-header-bottom-left{
  margin-left: .2rem;
}
.rank{
  font-size: .24rem;
  color: white;
}
.el-icon-arrow-right{
  font-size: 0.18rem;
}
.detail-content{
  width: 100%;
}
.detail-content-body{
  width: 6.8rem;
  background-color: #fff;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.15rem;
  margin-top: -.14rem;
}
.detail-content-top{
  height: .2rem;
}
.detail-body-kind{
  font-size: .18rem;
  height: .3rem;
}
.detail-body-kind li{
  float: left;
  width: .6rem;
  height: .3rem;
  background-color: #f5f5f5;
  border-radius: .1rem;
  text-align: center;
  align-items: center;
  margin: 0 .12rem;
}
.detail-content-tops{
  display: flex;
  justify-content: space-around;
  justify-items: center;
  height: .8rem;
}
.detail-content-tops-right-top{
  color: black;
  font-size: .2rem;
}
.detail-content-tops-right-bottom{
  color: #a2a2a2;
  font-size: .18rem;
  margin-top: .1rem;
}
.detail-content-tops-left{
  display: flex;
}
.detail-content-tops-left-imgs{
width: .6rem;
height: .6rem;
margin-right: .1rem;
}
.detail-books-details{
  width: 6.4rem;
  margin: .2rem auto;
  font-size: .2rem;
  color: black;
}
.detail-books-detail{
  width: 6.4rem;
  margin: 0 auto;
  font-size: .2rem;
  color: black;
}
.detail-role{
  display: flex;
  justify-content: space-between;
}
.detail-role-left{
  height: 1.6rem;
  width: 3.2rem;
  background-color: #f9f1ef;
  margin-left: .1rem;
  border-radius: 0.08rem;
}
.detail-role-right{
  height: 1.6rem;
  width: 3.2rem;
  background-color: #f9f1ef;
  margin-right: .1rem;
  border-radius: 0.08rem;
}
.detail-role-left-top{
  display: flex;
  justify-content: space-between;
}
.detail-role-left-top-imgs{
  margin: .1rem .1rem;
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  background-color: #fff;
}
.detail-role-left-top-img{
  width: .5rem;
  height: .5rem;
  margin-top: .15rem;
  margin-left: .1rem;
}
.detail-role-left-top-name{
  margin-right: 1.6rem;
  margin-top: .2rem;
}
.detail-role-left-top-names{
  font-size: .2rem;
  color: black;
}
.detail-role-left-top-role{
font-size: .18rem;
color: #a2a2a2;
}
.detail-role-left-bottom{
  font-size: .18rem;
  display: flex;
  justify-content: space-between;
  margin: .1rem 0 0 .2rem;
}
.detail-role-left-bottom-num{
  margin-right: .2rem;
}
.el-icon-star-off{
  margin-left: .08rem;
}
.detail-catalog{
display: flex;
justify-content: space-between;
height: .4rem;
justify-items: center;
margin: 0.1rem auto .1rem auto;
width: 6.8rem;
}
.common-title{
  font-size: .24rem;
  color: black;
  font-weight: 500;
  margin-left: .1rem;
}
.detail-catalog-right{
  font-size: .2rem;
  color: #a2a2a2;
  margin-right: .1rem;
}
.space{
  height: .1rem;
  background-color: #a2a2a2;
}
.detail-comment{
  background-color: #f5f5f5;
  width: 6.6rem;
  margin: 0 auto;
  border-radius: .08rem;
  height: 1.4rem;
}
.detail-comment-content{
  margin: .1rem .1rem .1rem .1rem;
  font-size: .2rem;
}
.detail-comment-author{
  display: flex;
  justify-content: space-between;
  height: .5rem;
}
.detail-comment-author-left{
  margin: .1rem 0 0 .1rem;
  font-size: .18rem;
  color: #a2a2a2;
  display: flex;
  justify-content: center;
}
.author-photo{
  width: .3rem;
  height: .3rem;
  border-radius: 50%;
}
.author-photo img{
width: .3rem;
height: .3rem;
border-radius: 50%;
}
.detail-comment-contentss{
  height: .2rem;
}
.detail-comment-author-right{
  font-size: .2rem;
}
.el-icon-more1{
  margin-top: .15rem;
  margin-right: .15rem;
}
</style>