<template>
  <div class="read">
    <top-nav-bar class="detail-topss">
      <div slot="left" @click="goback"><i class="el-icon-arrow-left"></i></div>
      <div slot="center"></div>
      <div slot="right">
        <el-row class="block-col-2">
          <el-col :span="12">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
              </span>
               <el-dropdown-menu slot="dropdown" v-show="menu">
                    <el-dropdown-item @click.native="xq">
                      <i class="el-icon-view" command="a"></i> 详情</el-dropdown-item
                    >
                    <el-dropdown-item @click.native="ss" divided command="b"
                      ><i class="el-icon-search sss"></i> 搜索</el-dropdown-item
                    >
                    <el-dropdown-item @click.native="ml" divided command="c"
                      ><i class="el-icon-tickets"></i> 目录</el-dropdown-item
                    >
                    <el-dropdown-item @click.native="syq" divided command="d"
                      ><i class="el-icon-chat-dot-round"></i> 书友圈</el-dropdown-item
                    >
                  </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
    </top-nav-bar>
    <scroll class="wrapper" :probeType="3" ref="scroll" @pullingUp="pullingUp">
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
                            <p class="book-content-contents" v-for="(m,n) in item.content" :key="n">{{m}}</p> 
                        </div>  
                </div>    
                <div class="read-space"></div>
      <div class="read-bottom" v-show="qidian">
          —— · 已经没有啦 · ——
      </div>   
      </scroll>
      <div class="tologin1" v-if="isshow">
        <div>
          <h2 class="read-dl">{{message}}</h2>
        </div>
        <div>
            <span @click="tologin" class="dl">{{message1}}</span>
            <span @click="cancel" class="jkk">就看看</span>
        </div>
        
      </div>    
  </div>
</template>

<script>
import scroll from "@/components/common/Scroll/scroll.vue";
import TopNavBar from "@/components/common/TopNavBar/NavBar.vue";
export default {
  name: 'Read',
  data(){
      return{
         infor:{},
         info:{},
         pp:'',
         id:'',
         qidian:'false',
         isshow:false,
         message:'喜欢这本书就加入书架吧?',
         message1:'加入',
         isshow2:false,
         menu:false,
      }      
  },
  components: {
    scroll,
    TopNavBar,
  },
  created() {
    this.id = this.$router.currentRoute.params.id;
    this.pp = this.$router.currentRoute.params.pp;
    this.$http.get("/api/read/" + this.id + "/" + this.pp).then((res) => {
      res.data[0].content = res.data[0].content.split("-");
      this.infor = res.data;
    });
    this.$http.get("/api/detail/" + this.id).then((res) => {
      this.info = res.data[0];
      // console.log(res.data);
    });
  },
  updated() {
    this.rrr();
  },
  methods: {
    goback() {
      this.isshow = true;
      if (sessionStorage.getItem("userbasic")) {
        this.message = "喜欢这本书就加入书架吧?";
        this.message1 = '加入';
        this.isshow2 = true;
      } else {
        this.message = "您需要登录才能加入书架!";
        this.message1 = '登录';
        this.isshow2 = false;
      }
    },
    tologin() {
      this.isshow = false;
      if (this.isshow2) {
        // 用户添加本书阅读记录
        let userid = JSON.parse(sessionStorage.getItem("userbasic")).userid;
        let collections = this.$router.currentRoute.params.id;
        let Chapter = this.pp;
        let image = this.info.images;
        let bookname = this.info.name;
        let author = this.info.author;
        this.$http
          .post("/api/getchaptertitle", {
            userid,
            collections,
            Chapter,
          })
          .then((res) => {
            let flag = res.data.has;
            let booktitle = res.data.title;
            if(res == '-1'){
              this.$message({
                message:'没有更多了',
                type:'error'
              })
              return ;
            }
            let temp = {
              userid,
              collections,
              Chapter,
              image,
              bookname,
              author,
              booktitle,
            };
            if (!flag) {
              this.$http
                .post("/api/adduserbook", {
                  temp
                })
                .then((res1) => {
                });
              // console.log('书籍添加');
              let aa = JSON.parse(sessionStorage.getItem('userbookinfo'));
              console.log(temp);
              aa.push(temp);
              sessionStorage.setItem('userbookinfo',JSON.stringify(aa));
              // this.$store.dispatch("add", temp).then((res3) => {
              //   console.log(res3);
              // });
        
              this.$router.go(-1);
            } else {
              let temp1 = {
                collections,
                Chapter,
                booktitle,
              };
              this.$http
                .post("/api/updateuserbook", {
                  userid,
                  collections,
                  Chapter,
                  booktitle,
                })
                .then((res1) => {
                  // console.log(res1);
                });
                //  console.log('书籍更新');
                 let aa = JSON.parse(sessionStorage.getItem('userbookinfo'));
                 let temp = aa.find((i)=>{
                   return i.collections == collections;
                 });
                 temp.Chapter = Chapter+"";
                 temp.booktitle = booktitle;
                 sessionStorage.setItem('userbookinfo',JSON.stringify(aa));
                 
                //  this.$store.dispatch("change", temp1).then((res3) => {
                //     console.log(this.$store.state);
                //  });
              this.$router.go(-1);
            }
          });
      } else {
        // 用户登录
        setTimeout(() => {
          this.$router.push("/login");
          this.isshow = false;
        }, 500);
      }
    },
    cancel() {
      this.$router.go(-1);
      this.isshow = false;
    },
    rrr() {
      this.$refs.scroll.refresh();
    },
    pullingUp() {
      this.$http
        .get("/api/read/" + this.id + "/" + ++this.pp)
        .then((res) => {
          res.data[0].content = res.data[0].content.split("-");
          this.infor = [...this.infor, ...res.data];
        })
        .catch((res) => {
          this.qidian = true;
        });
      this.$refs.scroll.finishPullup();
    },
    xq() { 
      this.$router.push("/detail/" + this.id);  
      this.menu = false;   
    },
    ss() {
      this.$router.push("/search");
    },
    ml() {
      this.$router.push("/chapter/" + this.id);
    },
    syq() {
      this.$router.push("/detaildiscuss/" + this.id);
    },
    //    handleCommand(command) {
    //      this.$router.push('/detail/'+command);

    //   }
  },
  beforeDestroy() {
    console.log("0000");
    console.log(this.$store);
  },
};
</script>

<style scoped>
.el-icon-more {
  color: #555;
}
.detail-topss {
  display: fiex;
  display: flex;
  font-size: 0.25rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0.1rem 0.1rem 0.15rem;
}
.read-space {
  height: 0.8rem;
}
.wrapper {
  height: calc(100vh);
  /* z-index: 100; */
  position: absolute;
  z-index: 120;
  width: 100vw;
  background-color: #fff;
}
.read {
  width: 100%;
}
.read-content {
  width: 98vw;
  margin: 0.1rem auto;
  border: 1px solid #ccc;
  height: 100vh;
}
.read-content {
  width: 98vw;
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
.book-content-icon {
  font-size: 0.25rem;
  text-align: center;
  margin-top: 0.3rem;
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
  margin: 0.01rem 0.2rem;
  text-indent: 0.4rem;
}
.read-bottom {
  height: 0.6rem;
  width: 100%;
  text-align: center;
  font-size: 0.16rem;
  position: fixed;
  background-color: #fff;
  z-index: 99;
  bottom: 0;
  line-height: 0.6rem;
  border-top: none;
}
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .tologin1{
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
  .tologin1 > div{
    padding-bottom: 0.2rem;
  }
  .tologin1 > div:last-child{
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
  .sss{
    font-size: .18rem;
  }
</style>
