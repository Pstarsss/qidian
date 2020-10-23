<template>
<<<<<<< HEAD
  <div>
    <div class="read">
      <div class="read-content">
        <div class="read-book-imgs">
          <img :src="info.images" alt="" class="read-book-img" />
        </div>
        <h3 class="read-book-name">{{ infor.bookName }}</h3>

        <div class="read-book-detail">
          <div>
            <p class="read-book-detail-top">{{ info.type }}</p>
            <p class="read-book-detail-bottom">类型</p>
          </div>
          <div>
            <p class="read-book-detail-top">2019.12.07</p>
            <p class="read-book-detail-bottom">上架</p>
          </div>
          <div>
            <p class="read-book-detail-top">{{ info.wordcount }}</p>
            <p class="read-book-detail-bottom">万字/连载</p>
          </div>
        </div>

        <div class="read-author-speak">
          <p>希望大家喜欢这本书，并支持正版阅读！</p>
          <p class="read-author-name">—— 张晨</p>
        </div>
        <p class="read-book-bottom">[盟主]迪迪卡卡俱乐部[盟主]Cz丶</p>
        <p class="read-book-bottom">- 本作品由起点中文网进行电子制作与发行 -</p>
        <p class="read-book-bottom1">版权所有·侵权必究</p>
      </div>

      <div class="read-content">
        <p class="book-content-icon"><i class="el-icon-magic-stick"></i></p>
        <p class="book-content-name">{{ infor.bookName }}</p>
        <h1 class="book-content-content">正文卷</h1>
        <div :key="index" v-for="(item, index) in infor" id="index">
          <h1 class="book-content-title">{{ item.title }}</h1>
          <p class="book-content-contents">{{ item.content }}</p>
        </div>
      </div>
      <p class="read-book-bottom">[盟主]迪迪卡卡俱乐部[盟主]Cz丶</p>
      <p class="read-book-bottom">- 本作品由起点中文网进行电子制作与发行 -</p>
      <p class="read-book-bottom1">版权所有·侵权必究</p>
    </div>

    <div class="read-content">
      <p class="book-content-icon"><i class="el-icon-magic-stick"></i></p>
      <p class="book-content-name">{{ infor.bookName }}</p>
      <h1 class="book-content-content">正文卷</h1>
      <div :key="index" v-for="(item, index) in infor" id="index">
        <h1 class="book-content-title">{{ item.title }}</h1>
        <p class="book-content-contents">{{ item.content }}</p>
=======
  <div class="read">
      <scroll class="wrapper" :probeType="3" ref="scroll" @pullingUp="pullingUp">
            <div class="read-content">
                <div class="read-book-imgs">
                    <img :src="info.images" alt="" class="read-book-img">
                </div>
                <h3 class="read-book-name">{{infor.bookName}}</h3>

                <div class="read-book-detail">
                    <div>
                        <p class="read-book-detail-top">{{info.type}}</p>
                        <p class="read-book-detail-bottom">类型</p>
                    </div>
                    <div>
                        <p class="read-book-detail-top">2019.12.07</p>
                        <p class="read-book-detail-bottom">上架</p>
                    </div>
                    <div>
                        <p class="read-book-detail-top">{{info.wordcount}}</p>
                        <p class="read-book-detail-bottom">万字/连载</p>
                    </div>
                </div>

                <div class="read-author-speak">
                        <p>希望大家喜欢这本书，并支持正版阅读！</p>
                        <p class="read-author-name">—— {{info.author}}</p>
                </div>
                <p class="read-book-bottom">[盟主]迪迪卡卡俱乐部[盟主]Cz丶</p>
                <p class="read-book-bottom">- 本作品由起点中文网进行电子制作与发行 -</p>
                <p class="read-book-bottom1">版权所有·侵权必究</p>
            </div>
            
            <div class="read-content1">
                <p class="book-content-icon"> <i class="el-icon-magic-stick"></i></p>   
                <p class="book-content-name">{{infor.bookName}}</p>
                <h1 class="book-content-content">正文卷</h1> 
                
                        <div :key="index" v-for="(item,index) in infor" id="index">
                            <h1 class="book-content-title">{{item.title}}</h1>
                            <p class="book-content-contents">{{item.content}}</p> 
                        </div>  
                
            </div>
      </scroll>
      <div class="read-space"></div>
      <div class="read-bottom">
          —— · 起点读书 · ——
>>>>>>> 68f81f462c4678d2c318185ec38dd85a0bc8b155
      </div>
    </div>
    <div class="read-space"></div>
    <div class="read-bottom">—— · 起点读书 · ——</div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "Read",
  data() {
    return {
      infor: {},
      info: {},
    };
  },
  components: {},
  created() {
    let id = this.$router.currentRoute.params.id;
    this.$http.get("/api/read/" + id).then((res) => {
      this.infor = res.data.slice(0, 2000);
      console.log("sss");
      console.log(res.data.slice(0, 2000));
    });
    this.$http.get("/api/detail/" + id).then((res) => {
      this.info = res.data[0];
      console.log("sss");
      console.log(res.data);
    });
  },
};
</script>

<style>
.read {
  width: 100%;
}
.read-content {
  width: 6.6rem;
  margin: 0.1rem auto;
  border: 1px solid #ccc;
}
.read-book-imgs {
  width: 2rem;
  height: 2.6rem;
  margin: 0.5rem auto;
  border: 1px solid #ccc;
}
.read-book-img {
  width: 1.9rem;
  height: 2.5rem;
  margin: 0.05rem auto;
}
.read-book-name {
  text-align: center;
  font-size: 0.26rem;
  margin-top: -0.4rem;
  letter-spacing: 0.04rem;
}
.read-book-detail {
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  display: flex;
  width: 4.8rem;
  margin: 0.3rem auto;
}
.read-book-detail-top {
  font-size: 0.2rem;
  text-align: center;
}
.read-book-detail-bottom {
  font-size: 0.16rem;
  color: #a2a2a2;
  margin-top: 0.1rem;
  text-align: center;
}
.read-author-speak {
  font-size: 0.2rem;
  padding: 0.1rem;
  border-top: 1px dashed #ccc;
  border-bottom: 1px dashed #ccc;
  width: 4.8rem;
  margin: 0.2rem auto;
}
.read-author-name {
  text-align: right;
}
.read-book-bottom {
  font-size: 0.16rem;
  color: #a2a2a2;
  margin: 0.3rem auto;
  text-align: center;
}
.read-book-bottom1 {
  font-size: 0.16rem;
  color: #a2a2a2;
  text-align: center;
  margin: -0.2rem auto 0.2rem auto;
}
.read-space {
  height: 0.6rem;
  z-index: 100;
  background-color: #fff;
}
.book-content-icon {
  font-size: 0.25rem;
  text-align: center;
  margin-top: 0.5rem;
}
.book-content-name {
  font-size: 0.2rem;
  text-align: center;
  margin-top: 0.1rem;
}
.book-content-content {
  font-size: 0.28rem;
  color: black;
  text-align: center;
  margin-top: 0.2rem;
}
.book-content-title {
  font-size: 0.28rem;
  color: black;
  margin-top: 0.4rem;
  margin-left: 0.2rem;
}
.book-content-contents {
  font-size: 0.2rem;
  margin: 0.1rem 0.2rem;
}
.read-bottom {
  height: 0.7rem;
  width: 100%;
  text-align: center;
  font-size: 0.16rem;
  position: fixed;
  background-color: #fff;
  z-index: 99;
  bottom: 0;
  line-height: 0.7rem;
  border-top: none;
=======
import scroll from "@/components/common/Scroll/scroll.vue";
export default {
  name: 'Read',
  data(){
      return{
         infor:{},
         info:{},
         pp:'',
         id:''
      }      
  },
  components: {
    scroll ,
  },
   created(){
    this.id = this.$router.currentRoute.params.id;
    this.pp = this.$router.currentRoute.params.pp;  
    this.$http.get('/api/read/'+this.id+'/'+this.pp).then(res=>{
        let temp = res.data[0].content.split('-');
        this.infor=res.data;
        // this.infor.content = temp;
    });
    this.$http.get('/api/detail/'+this.id).then(res=>{
      this.info=res.data[0];
      console.log(res.data);
    });
  },
  updated(){
      this.rrr();
  },
  methods:{
      rrr(){
          this.$refs.scroll.refresh();
      },
      pullingUp(){
        this.$http.get('/api/read/'+this.id+'/'+(++this.pp)).then(res=>{
            this.infor = [...this.infor,...res.data];
            console.log(this.infor);
        })
        this.$refs.scroll.finishPullup();
      },
  }
  
}
</script>

<style scoped>
.wrapper{
    height: calc(100vh - 0.55rem);
}
.read{
    width: 100%;
}
.read-content{
    width: 98vw;
    margin: .1rem auto;
    border: 1px solid #ccc;
    height: 100vh;
}
.read-content{
    width: 98vw;
    margin: .1rem auto;
    border: 1px solid #ccc;
    
}
.read-book-imgs{
    width: 2rem;
    height: 2.6rem;
    margin: .5rem auto;
    border: 1px solid #ccc;
}
.read-book-img{
    width: 1.9rem;
    height: 2.5rem;
    margin: .05rem auto;
}
.read-book-name{
    text-align: center;
    font-size: .26rem;
    margin-top: -.4rem;
    letter-spacing: .04rem;
}
.read-book-detail{
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    display: flex;
    width: 4.8rem;
    margin: .3rem auto
}
.read-book-detail-top{
font-size: .2rem;
text-align: center;
}
.read-book-detail-bottom{
font-size: .16rem;
color: #a2a2a2;
margin-top: .1rem;
text-align: center;
}
.read-author-speak{
font-size: .2rem;
padding: .1rem;
border-top: 1px dashed #ccc;
border-bottom: 1px dashed #ccc;
width: 4.8rem;
margin: .2rem auto;
}
.read-author-name{
   text-align: right;
}
.read-book-bottom{
    font-size: .16rem;
    color: #a2a2a2;
    margin: .3rem auto;
    text-align: center;
}
.read-book-bottom1{
    font-size: .16rem;
    color: #a2a2a2;
    text-align: center;
    margin: -.2rem auto .2rem auto;
}
.book-content-icon{
    font-size: .25rem;
    text-align: center;
    margin-top: .3rem;
}
.book-content-name{
    font-size: .2rem;
    text-align: center;
    margin-top: .1rem;
}.book-content-content{
    font-size: .28rem;
    color: black;
    text-align: center;
    margin-top: .2rem;
}
.book-content-title{
    font-size: .28rem;
    color: black;
    margin-top: .4rem;
    margin-left: .2rem;
}
.book-content-contents{
    font-size: .2rem;
    margin: .1rem .2rem;
    text-indent: .4rem;
    padding-bottom: .7rem;
}
.read-bottom{
    height: .7rem;
    width: 100%;
    text-align: center;
    font-size: .16rem;
    position: fixed;
    background-color: #fff;
    z-index: 99;
    bottom: 0;
    line-height: .7rem;
    border-top: none;
>>>>>>> 68f81f462c4678d2c318185ec38dd85a0bc8b155
}
</style>
