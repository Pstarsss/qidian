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
         <div class="space-white"></div>
         <div class="space"></div>
         <div class="about-author">
              <div class="about-author-detail">
                <p class="common-title">星影仙子 <span class="btn-primary">Lv5</span></p>
                <p class="about-author-details">现为阅读集团Lv5作家，著有《皇上非要我废除六宫》《穿书后我成了王爷的掌心娇》《听说王妃要离家出走》等作品</p>
              </div>
              <div class="about-author-zp">
                <ul class="about-author-zps">
                  <li><img src="../../assets/logo.png" alt=""></li>
                  <li><img src="../../assets/logo.png" alt=""></li>
                  <li><img src="../../assets/img/Detail/six.png" alt=""></li>
                </ul>
              </div>
         </div>
         <div class="space"></div>
         <div class="detail-fans">
           <div class="fans-rank">
                <div class="fans-nums">
                   <p class="common-title">粉丝榜</p>
                   <p class="fens-num">1035 <i class="el-icon-arrow-right"></i></p>
                </div>
                <div><img src="../../assets/img/Detail/fens.png" alt="" class="fenstop"></div>
           </div>
           <div class="fans-top">
               <div class="fans-nums">
                   <p class="common-title">月票金主</p>
                   <p class="fens-num">月太聚米糖 <i class="el-icon-arrow-right"></i></p>
               </div>
               <div><img src="../../assets/img/Detail/fenstop.png" alt="" class="fenstop"></div>
           </div>
         </div>
         <div class="space"></div>
         <div class="detail-catalog">
           <span class="common-title">看过此书的人还看过</span>
           <span class="detail-catalog-right">更多 <i class="el-icon-arrow-right"></i></span>
         </div>
         <div class="detail-lookmore">
              <div class="lookmore-detail">
                 <div><img src="../../assets/img/Detail/1.png" alt="" class="lookmore-detail-imgs"></div>
                 <div class="lookmore-detail-title">
                   <p class="lookmore-name">他从地狱来</p>
                   <p class="lookmore-tj">81%还看过</p>
                 </div>
              </div>
              <div class="lookmore-detail">
                 <div><img src="../../assets/img/Detail/2.png" alt="" class="lookmore-detail-imgs"></div>
                 <div class="lookmore-detail-title">
                   <p class="lookmore-name">我的世界圈你入怀</p>
                   <p class="lookmore-tj">80%还看过</p>
                 </div>
              </div>
              <div class="lookmore-detail">
                 <div><img src="../../assets/img/Detail/3.png" alt="" class="lookmore-detail-imgs"></div>
                 <div class="lookmore-detail-title">
                   <p class="lookmore-name">一代女王柳炊烟</p>
                   <p class="lookmore-tj">80%还看过</p>
                 </div>
              </div>
              <div class="lookmore-detail">
                 <div><img src="../../assets/img/Detail/4.png" alt="" class="lookmore-detail-imgs"></div>
                 <div class="lookmore-detail-title">
                   <p class="lookmore-name">沐沐你别闹</p>
                   <p class="lookmore-tj">85%还看过</p>
                 </div>
              </div>
         </div>
         <div class="space-white"></div>
         <div class="detail-updates">
             <hr>
         </div>
         
         <div class="space-white"></div>
         <div class="detail-updates">
              <h3 class="detail-updade">2020年6月22日上架</h3>
              <h3 class="detail-updade">本作品由起点女生网进行电子制作与发行</h3>
         </div>
         <div class="space-whites"></div>
      </div>
      <div class="detail-bottom">
        <div class="detail-listen">
            <img src="../../assets/img/Detail/5.png" alt="">
            <span>听书</span>
        </div>
        <div class="detail-add">
            <img src="../../assets/img/Detail/6.png" alt="">
            <span>加入书架</span>
        </div>
        <div class="free-read">
            <p class="free-read1">免费阅读</p>
            <p class="free-read2">4天14小时31分41秒</p>
        </div>
      </div>      
  </div>
</template>

<script>

export default {
  name: 'Detail',
  components: {   
  },
  data() {
      return {
        activeNames: ['0']
      };
    },
  methods: {
      handleChange(val) {
        console.log(val);
    },
      back(){
        this.$router.go(-1)
    },
    }
}
</script>

<style>
@import url("../../assets/css/Detail/detail.css");
</style>