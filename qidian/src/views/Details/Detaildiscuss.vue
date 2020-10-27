<template>
  <div class="detaildisccuss">
      
     <top-nav-bar class="detail-tops">
        <div slot="left" @click="$router.go(-1)"><i class="el-icon-arrow-left"></i></div>
        <div slot="center" class="detaildiscuss-top-imgs" ><div><img :src="info.images" alt="" class="detaildiscuss-top-img" v-show="topleave"></div></div>
        <div slot="right"><i class="el-icon-search" @click="search"></i></div>
     </top-nav-bar>
     <scroll class="wrapper" :probeType="3" ref="scroll" >
     <div class="detail-header1">
           <div class="detail-header-top">
              <div class="detail-header-top-imgss">
                <img :src="info.images" alt="" class="detail-header-top-img">
              </div>
              <div class="detail-header-top-title1">
                  <h3 class="title-one">{{info.name}}书友圈</h3>
                  <p class="title-two"><i class="el-icon-sugar"></i> 24万粉丝  <span class="tz"> #  {{info.author}}的帖子</span></p>                 
              </div>
           </div>   
      </div>
      <div class="detaildisccuss-content">
            <div class="detaildisccuss-content-top">评论</div>
            <div class="detaildisccuss-content-body" v-for="(item,index) in infor" :key="index">
                <div><img :src="item.headimg" alt="" class="detaildisccuss-content-body-left-img"></div>
                <div class="detaildisccuss-content-body-right">
                    <p class="speaker-name">{{item.name}}<span class="speaker-rank">{{item.tag}}</span></p>
                    <p class="speaker-content">{{item.content}}</p>
                    <div class="speaker-bottom">
                        <div class="speaker-bottom-left">{{item.time}}</div>
                        <div class="speaker-bottom-right">
                            <div class="reader-pl"><i class="el-icon-chat-dot-round"></i> 评论</div>
                             <div class="reader-dz">
                                <img src="../../assets/img/Detail/dz.png" alt="" class="dz-img" @click="dzs(index)" v-if="dz">
                                <img src="../../assets/img/Detail/dz1.png" alt="" class="dz-img" @click="dzs1(index)" v-else>
                                 <span class="disscuss-likes">{{item.likes}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
       </scroll>
    <div class="detaildiscuss-discuss">
        <div class="detaildiscuss-discuss-center" @click="comment"><i class="el-icon-edit"></i> 发帖</div>
    </div> 
    <div class="tologin2" v-if="isshow">
        <div>
          <h2 class="read-dl">你需要登录才能发表评论哦!</h2>
        </div>
        <div>
            <span @click="tologin" class="dl">登录</span>
            <span @click="cancel" class="jkk">下次一定</span>
        </div>       
      </div>

      <findDetailsBottom
        
    ></findDetailsBottom>        
  </div>
</template>

<script>
import scroll from "@/components/common/Scroll/scroll.vue";
import TopNavBar from '@/components/common/TopNavBar/NavBar.vue';
import findDetailsBottom from '../Find/components/FindDetailsBottom'
export default {
  name: 'Detaildisccuss',
  components: {
     TopNavBar,
     scroll,
     findDetailsBottom,
  },
   created(){
   let id = this.$router.currentRoute.params.id;
    this.$http.get('/api/detail/'+id).then(res=>{
      this.info=res.data[0];
    });
    this.$http.get('/api/detaildiscuss').then(res=>{
      this.infor=res.data.reverse();
      console.log(res.data);
    });
  },
  data(){
      return{
            info:{},
            infor:{},
            dz:true,
            topleave:true,
            dz1:{},
            isshow:false
      }
  },
   mounted() {
      window.addEventListener("scroll", this.handleScroll, true);
    },
   methods:{
      comment(){
        if(sessionStorage.getItem('userbasic')){
              this.$router.push('/comment');
        }else{
            this.isshow=true
        }       
      },
       search(){
          this.$router.push('/search') 
       },
      dzs(index){
      this.$http.get('/api/detaildiscuss').then(res=>{
      this.dz1=res.data[index].likes;
      console.log(res.data[index].likes);
    });
          this.dz=false;        
      },
       dzs1(index){
      this.$http.get('/api/detaildiscuss').then(res=>{
      this.dz1=res.data[index].likes;
      console.log(res.data[index].likes);
    });
          this.dz=true;        
      },
     handleScroll() {
	       let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
	      scrolltop > 300 ? (this.topleave = true) : (this.topleave = false);
      },
      tologin() {     
        // 用户登录
        setTimeout(() => {
          this.$router.push("/login");
        }, 500);
    },
    cancel() {
      this.isshow = false;
    },
  },
  
}
</script>

<style scoped>
.detail-tops{
    position: fixed;
    z-index: 110;
    width: 100vw;
    background-color:#fff;
}
.wrapper{
   height: calc(100vh);
    /* z-index: 100; */
    position: absolute;
    z-index: 100;
    width: 100VW;
}
.detaildisccuss{
    width: 100%;
}
.detail-header1{
    margin-left: auto;
    margin-right: auto;
    margin-top: .6rem;
    height: 2.6rem;
    background-color:rgba(89, 93, 92, 0.56);
    z-index: 1;
  }
  .detail-header-top{
    display: flex;
    widows: 6.8rem;
    height: 1.4rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0;
  }
  .detail-header-top-imgss{
    float: left;
  margin-top: .4rem;
  margin-left: .2rem;
  }
  .detail-header-top-img{
    width: 1.2rem;
    height: 1.4rem;
  }
  .detail-header-top-title1{
  margin-top: .65rem;
  margin-left: .5rem;
  color: white;
  height: 3rem;
  }
  .title-one{
    font-size: .24rem;
  }
  .title-two{
    font-size: .18rem;
    color: white;
    margin-top: .2rem;
  }
  .tz{
      margin-left: .2rem;
  }
  .detaildisccuss-content{
      border-radius: .2rem;
      background-color: #fff;
      margin: -.2rem auto 0 auto;
      z-index: 98;
      padding-bottom: .7rem;
  }
  .detaildisccuss-content-top{
     text-align: center;
     line-height: .5rem;
     height: .5rem;
     font-size: .24rem;
  }
  .detaildisccuss-content-body{
      background-color:whitesmoke;
      display: flex;
      border-bottom: 1px solid #ccc;
      
  }
  .detaildisccuss-content-body-left-img{
      width: .35rem;
      height: .8rem;
      margin: .1rem 0 0 .2rem;
      border-radius: 50%;
  }
  .detaildisccuss-content-body-right{
     margin-left: .1rem;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
  }
  .speaker-name{
     font-size: .18rem;
     padding-top:.1rem;
  }
  .speaker-content{
      font-size: .20rem;
      padding-top: .05rem;
  }
  .speaker-bottom{
       font-size: .16rem;
       padding-bottom: .1rem;
       padding-top: .05rem;     
  }
  .speaker-name{
      display: flex;
      color: black;
      text-align: center;
      justify-items: center;
  }
  .speaker-rank{
      background-color: orange;
      padding: 0 .03rem 0 .03rem;
      border-radius: .05rem;
      margin-left: .1rem;
      font-size: .14rem;
      margin-top: .02rem;
      color: white;
  }
  .speaker-bottom{
      display: flex;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      width:90vw;
      color: #a2a2a2;
      font-weight: 350;
  }
  .speaker-bottom-right{
      display: flex;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
      width: 1.4rem;
  }
  .el-icon-chat-dot-round{
      font-size: .18rem;
  }
  .dz-img{
      height: .2rem;
      width: .2rem;
  }
  .reader-dz{
       display: flex;
      justify-content: space-around;
      justify-items: center;
      align-items: center;
  }
  .detaildiscuss-discuss{
      position: absolute;
      height: .7rem;
      width:100%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      background-color:transparent;
      line-height: .7rem;
      bottom: 0;
      z-index: 103;
  }
  .detaildiscuss-discuss-center{
      font-size: .2rem;
      width: 1.5rem;
      height: .4rem;
      text-align: center;
      background: red;
      color: white;
      border-radius: .5rem;
      line-height: .4rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: .15rem;
  }
  .detaildiscuss-top-img{
      width: .3rem;
      height: .4rem;
      margin: 0 auto;
  }
  .disscuss-likes{
      margin-left: .1rem;
  }
  .tologin2{
    position: fixed;
    top: 40%;
    left: 26%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    z-index: 120;
    background-color: #e4e4e4d1;
    padding: .3rem .3rem 0 .3rem;
    border-radius: .1rem;
  }
  .tologin2 > div{
    padding-bottom: 0.2rem;
  }
  .tologin2 > div:last-child{
    display: flex;
  }
  .read-dl{
    font-size: 0.25rem;
    color: black;
}
  .dl{
    font-size: 0.2rem;
    padding:0.05rem .2rem;
    background-color: pink;
    color: red;
    border-radius: .5rem;
    margin: 0 .1rem;
  }
  .jkk{
    font-size: 0.2rem;
    padding:0.05rem .2rem;
    background-color: red;
    color: white;
    border-radius: .5rem;
    margin: 0 .1rem;
  }
</style>
    

