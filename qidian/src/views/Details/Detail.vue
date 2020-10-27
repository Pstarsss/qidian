<template>
  <div class="all" :class="'dark'">
      <div class="detail-top" :class="{topcolor,topwhite}">
        <div class="detail-top-left">
          <div class="detail-top-left-icon" @click="back">
            <i class="el-icon-arrow-left"></i>
          </div>         
           <div class="detail-top-middle" v-show="leavetop">
              <div class="detail-top-img"><img :src="info.images" alt="" class="detail-top-imgs"></div>            
              <div class="detail-top-content">
                <div class="detail-top-content-title"><span >{{info.name}}</span></div>
                <div class="detail-top-content-kind"><span >{{info.type}}</span></div>                 
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
                <img :src="info.images" alt="" class="detail-header-top-img">
              </div>
              <div class="detail-header-top-title">
                  <h3 class="title-one">{{info.name}}</h3>
                  <p class="title-two">{{info.author}}<i class="el-icon-arrow-right"></i></p>                 
                  <p class="title-three">{{info.type}}</p>
              </div>
           </div>
           <div class="detail-header-bottom">
                <div class="detail-header-bottom-left">
                    <span>出圈指数 </span>
                    <span class="tm">™</span>
                </div>
                <div class="detail-header-bottom-right">
                    <span class="tm">Lv{{info.ratings}} 后起之秀 </span>
                    <span class="rank"> 999 <i class="el-icon-arrow-right"></i></span>
                </div>
           </div>
      </div>

      <div class="detail-content">
         <div class="detail-content-body">
            <div class="detail-content-top"></div>
            <div class="detail-content-tops">
                  <div class="detail-content-tops-left">
                       <div class="detail-content-tops-left-img">
                           <img src="../../assets/img/Detail/ss.png" alt="" class="detail-content-tops-left-imgs">
                       </div>
                       <div>
                          <p class="detail-content-tops-right-top">五十万收藏</p>
                          <p class="detail-content-tops-right-bottom">46里程碑 <i class="el-icon-arrow-right"></i></p>
                       </div>
                  </div>
                  <div class="detail-content-tops-right">
                    <p class="detail-content-tops-right-top"><span>{{info.wordcount}}</span>万字</p>
                    <p class="detail-content-tops-right-bottom">{{info.serialize}}</p>
                  </div>
                  <div class="detail-content-tops-right">
                    <p class="detail-content-tops-right-top">1593</p>
                   <p class="detail-content-tops-right-bottom">推荐票</p>
                  </div>
                  <div class="detail-content-tops-right">
                    <p class="detail-content-tops-right-top">135</p>
                    <p class="detail-content-tops-right-bottom">月票</p>
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
                    {{info.intro}}
                    </div>                
                </el-collapse-item> 
            </el-collapse>
            </div> 
            <div class="detail-role">
                 <div class="detail-role-left">
                      <div class="detail-role-left-top">
                           <div class="detail-role-left-top-imgs"><img src="../../assets/img/Detail/1.jpg"  alt="" class="detail-role-left-top-img"></div>
                           <div class="detail-role-left-top-name">
                             <p class="detail-role-left-top-names">徐有容</p>
                             <p class="detail-role-left-top-role">女主</p>
                           </div>
                      </div>
                      <div class="detail-role-left-bottom">
                           <span>可爱，盟，机智怜悯</span>
                           <span  @click="addin">
                             <p><i class="el-icon-star-off" :class="{active1}"></i></p>
                             <span class="detail-role-left-bottom-num">{{msg1}}</span>
                           </span>
                      </div>
                 </div>

                 <div class="detail-role-right">
                       <div class="detail-role-left-top">
                           <div class="detail-role-left-top-imgs"><img src="../../assets/img/Detail/gy.jpg"  alt="" class="detail-role-left-top-img"></div>
                           <div class="detail-role-left-top-name">
                             <p class="detail-role-left-top-names">陈长生</p>
                             <p class="detail-role-left-top-role">男主</p>
                           </div>
                      </div>
                      <div class="detail-role-left-bottom">
                           <span>傲娇，口嫌体正直，专一</span>
                           <span @click="addin1">
                             <p><i class="el-icon-star-off" :class="{active2}"></i></p>
                             <span class="detail-role-left-bottom-num">{{msg2}}</span>
                           </span>
                      </div>
                 </div>
            </div>         
         </div>
         <div class="detail-catalog">
           <span class="common-title">目录</span>
           <span class="detail-catalog-right" @click="chapter">连载至{{info3.length}}章·15小时前更新 <i class="el-icon-arrow-right"></i></span>
         </div>

         <div class="space"></div>

         <div class="detail-catalog">
           <span class="common-title">书友圈</span>
           <span class="detail-catalog-right" @click="opendiscuss">运营团队 (招募中) | 讨论贴({{info6.length}}) <i class="el-icon-arrow-right"></i></span>
         </div>
         <div class="detail-comment">
              <div class="detail-comment-content">
                <div class="detail-comment-contentss">
                      
                </div>
                <span class="detail-comment-contents" >
                    {{info5.content}}
                </span>
              </div>
              <div class="detail-comment-author">
                   <div class="detail-comment-author-left" >
                        <div class="author-photo"><img :src="info5.headimg" alt=""></div>
                        <span class="author-name">{{info5.name}}</span>
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
                <p class="common-title">{{info.author}} <span class="btn-primary">Lv{{info.ratings}}</span></p>
                <p class="about-author-details">现为阅读集团Lv{{info.ratings}}作家，著有<span :key="index" v-for="(item,index) in info1">《{{item.name}}》</span>等作品</p>
              </div>
              <div class="about-author-zp">
                <ul class="about-author-zps">
                  <li :key="index" v-for="(item,index) in info2"><img :src="item.images" alt=""></li>
                  <li><img src="../../assets/img/Detail/six.png" alt=""></li>
                </ul>
              </div>
         </div>
         <div class="space"></div>
         <div class="detail-fans">
           <div class="fans-rank">
                <div class="fans-nums">
                   <p class="common-title">粉丝榜</p>
                   <p class="fens-num">1035</p>
                </div>
                <div><img src="../../assets/img/Detail/fens.png" alt="" class="fenstop"></div>
           </div>
           <div class="fans-top">
               <div class="fans-nums">
                   <p class="common-title">月票金主</p>
                   <p class="fens-num">月太聚米糖</p>
               </div>
               <div><img src="../../assets/img/Detail/fenstop.png" alt="" class="fenstop"></div>
           </div>
         </div>
         <div class="space"></div>

          <div class="detail-catalog">
           <span class="common-title">同类作品推荐</span>
           <span class="detail-catalog-right">更多 <i class="el-icon-arrow-right"></i></span>
         </div>
         <div class="detail-lookmore">
              <div class="lookmore-detail" :key="index" v-for="(item,index) in info4">
                 <div><img :src="item.images" alt="" class="lookmore-detail-imgs" @click="openDetail1(index)"></div>
                 <div class="lookmore-detail-title">
                   <p class="lookmore-name">{{item.name}}</p>
                   <p class="lookmore-tj">{{item.wordcount}}万字</p>
                 </div>
              </div>
         </div>
         <div class="space"></div>
         <div class="detail-catalog">
           <span class="common-title">看过此书的人还看过</span>
           <span class="detail-catalog-right">更多 <i class="el-icon-arrow-right"></i></span>
         </div>
         <div class="detail-lookmore">
              <div class="lookmore-detail" :key="index" v-for="(item,index) in info1">
                 <div><img :src="item.images" alt="" class="lookmore-detail-imgs" @click="openDetail2(index)"></div>
                 <div class="lookmore-detail-title">
                   <p class="lookmore-name">{{item.name}}</p>
                   <p class="lookmore-tj">80%还看过</p>
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
        <div class="detail-add" @click="addCollections">
            <img src="../../assets/img/Detail/6.png" alt="">
            <span>加入书架</span>
        </div>
        <div class="free-read" @click="read">
            <p class="free-read1">免费阅读</p>
            <p class="free-read2">4天14小时31分41秒</p>
        </div>
      </div>  
      <div class="tologin" v-if="isshow">
        <div>
          <h2>您需要登录才能加入书架</h2>
        </div>
        <div>
            <span @click="tologin" class="dl">登录</span>
            <span @click="cancel" class="jkk">就看看</span>
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
        activeNames: ['0'],
        msg1:3274,
        msg2:2287,
        active1:false,
        active2:false,
        info:{},     
        info1:{},
        info2:{},
        info3:[],
        info4:[],
        info5:{},
        info6:{},
        pp:'',
        isshow:false,
        leavetop:false,
        topcolor:true,
        topwhite:false
      };
    },
    
    created(){
    let id = this.$router.currentRoute.params.id;
    this.$http.get('/api/detail/'+id).then(res=>{
      this.info=res.data[0];
    });
    this.$http.get('/api/booklist/'+8).then(res=>{
      this.info1=res.data.slice(0,4);
    })
    this.$http.get('/api/booklist/'+11).then(res=>{
      this.info2=res.data.slice(1,3);
    })
     this.$http.get('/api/read/'+id).then(res=>{
      this.info3=res.data.slice(0,1000);

    })
    this.$http.get('/api/booklist/'+12).then(res=>{
      this.info4=res.data.slice(0,4);
    })
    this.$http.get('/api/detaildiscuss/').then(res=>{
      if(id<61){
          this.info5=res.data[id];
      }else{
         this.info5=res.data[id%3];
      }   
      this.info6=res.data;
    });
  },
  mounted() {
  　　// 此处true需要加上，不加滚动事件可能绑定不成功
      window.addEventListener("scroll", this.handleScroll, true);
    },
  methods: {
    handleScroll() {
	       let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        scrolltop > 200 ? (this.leavetop = true) : (this.leavetop = false);
        scrolltop > 200 ? (this.topcolor = true) : (this.topcolor = false);
         scrolltop > 200 ? (this.topwhite = true) : (this.topwhite = false);
	    },
     openDetail1(index) {
      this.$http.get("/api/booklist/12").then((res) => {
        this.msg = res;
        let a = this.msg.data[index].id;
        this.$router.push("/detail/" + a);
      });
    },
     openDetail2(index) {
      this.$http.get("/api/booklist/8").then((res) => {
        this.msg = res;
        let a = this.msg.data[index].id;
        this.$router.push("/detail/" + a);
      });
    },
      handleChange(val) {
        console.log(val);
    },
      back(){
        this.$router.go(-1);
    },
      addin(){
        if(this.msg1=3274){
           this.msg1++;
           setTimeout(() => {
           this.active1=true;
        }, 200);         
        }else{
          this.msg1=this.msg1;
        }        
      },
      addin1(){
          if(this.msg2=2287){
           this.msg2++;
          setTimeout(() => {
           this.active2=true;
        }, 200);  
        }else{
          this.msg2=this.msg2;
        } 
      },
      chapter(){
        let id = this.$router.currentRoute.params.id;
        this.$router.push('/chapter/'+id)
      },
      read(){
        let id = this.$router.currentRoute.params.id;
        this.$router.push('/read/'+id+"/chapter/"+1);
      },
      opendiscuss(){
         let id = this.$router.currentRoute.params.id;
         this.$router.push('/detaildiscuss/'+id);
      },
      addCollections(){
        if(sessionStorage.getItem('userbasic')){
          this.isshow = false;
          let userid = JSON.parse(sessionStorage.getItem('userbasic')).userid;
          let collections = this.$router.currentRoute.params.id;
          let Chapter = 1;
          let image = this.info.images;
          let bookname = this.info.name;
          let author = this.info.author;
          this.$http.post('/api/getchaptertitle',{
            userid,
            collections,
            Chapter
          }).then((res)=>{
            let flag = res.data.has;
            let booktitle = res.data.title;
            let temp = {
                userid,
                collections,
                Chapter,
                image,
                bookname,
                author,
                booktitle
            };
            if(!flag){
                
                this.$http.post('/api/adduserbook',{
                  temp
                }).then(res1=>{
                  console.log(res1);
                });
                console.log(JSON.parse(sessionStorage.getItem('userbookinfo')));
                let aa = JSON.parse(sessionStorage.getItem('userbookinfo'));
                aa.push(temp);
                sessionStorage.setItem('userbookinfo',JSON.stringify(aa));
           
                // this.$store.dispatch('add',temp).then(res3=>{
                //     console.log(res3);
                // });
            }else{
                let temp1 = {
                  userid,
                  collections,
                  Chapter,
                  booktitle
               };
                this.$http.post('/api/updateuserbook',{
                  userid,
                  collections,
                  Chapter,
                  booktitle
                }).then(res1=>{
                });
                let aa = JSON.parse(sessionStorage.getItem('userbookinfo'));
                 let temp = aa.find((i)=>{
                   return i.collections == collections;
                 });
                temp.Chapter = Chapter+"";
                temp.booktitle = booktitle;
                sessionStorage.setItem('userbookinfo',JSON.stringify(aa));
                
                 
                 
                 
                 
                //  this.$store.dispatch('change',temp1).then(res3=>{
                //     console.log(res3);
                // });
            }
            
          });
        }else{
          this.isshow = true;
        }
      },
      tologin(){
        setTimeout(()=>{
          this.isshow = false;
          this.$router.push('/login');
        },800);
      },
      cancel(){
        this.isshow = false;
      }
    }
}
</script>

<style>
@import url("../../assets/css/Detail/detail.css");
</style>