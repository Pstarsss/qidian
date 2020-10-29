<template>
  <div>
    <!-- <scroll :probeType="3" ref="scroll" @pullingUp="pullingUp"> -->
    <book-crack class="bookcolor"></book-crack>
    <div v-if="temp">
        <book-list v-for="(item) in temp" :key="item.collections" :data="item"
        @toread.native='toread'
        @deleteBook='deleteBook' ></book-list>
    </div>
    <div></div>
    <div class="b-findmore" @click="openmore">
          <button>查找更多精彩作品</button>
    </div>
    <div class="placeholder"></div>
    <!-- </scroll> -->
  </div>
   
</template>

<script>
import BookCrack from './bookcrack/BookCrack.vue'
import BookList from './bookcrack/Bookposition.vue'
import Scroll from '@/components/common/Scroll/scroll.vue'
import BookType from './bookcrack/BookType'
export default {
  inject:['reload'],
  name: 'bookshelf',
  components: {
    BookCrack,
    BookList,
    BookType,
    Scroll
  },
  data(){
    return{
      temp:'',
      image:'',
      temp1:''
    }
  },
  watch:{
    $route:{
      handler(){
         this.temp = JSON.parse(sessionStorage.getItem('userbookinfo'));
      },
      deep:true,  
      immediate:true,
    },
    // sessionStorage:{
    //   handler(){
    //     console.log('111');
    //   },
    //   deep:true,
    //   immediate:true
    // }
  },
  // updated(){
  //   this.temp = JSON.parse(sessionStorage.getItem('userbookinfo'));     
  // },
  created(){
       this.temp = JSON.parse(sessionStorage.getItem('userbookinfo'));     
  },
  methods:{
    toread(a,b){
        // console.log(a,b);
        this.$router.push('/read/'+a+"/chapter/"+b);
    },
    openmore(){

    },
    openset(){

    },
    deleteBook(userid,collections){
      let tt = JSON.parse(sessionStorage.getItem('userbookinfo'));
      let index = tt.findIndex(i=>{
        return ((i.userid == userid)&&(i.collections == collections));
      })
      tt.splice(index,1);
      sessionStorage.setItem('userbookinfo',JSON.stringify(tt));
      this.temp.splice(index,1);
      this.reload();
      this.$http.post('/api/delete/book',{
          userid,
          collections
      }).then(res=>{
        console.log(res);
      })
    }
    // pullingUp(){
    //   this.$refs.scroll.refresh();
    // },
    // getSessionStorage(){
      
    //   if(sessionStorage.getItem('userid')){
    //     this.image = sessionStorage.getItem('image').split('-');
    //     let bookname = sessionStorage.getItem('bookname').split('-');
    //     let author = sessionStorage.getItem('author').split('-');
    //     let chapter = sessionStorage.getItem('chapter').split('-');
    //     let booktitle = sessionStorage.getItem('booktitle').split('-');
    //     let collections = sessionStorage.getItem('collections').split('-');



    //     return this.temp1 = booktitle.map((i,j)=>{
    //       return {
    //         bookname:bookname[j],
    //         author:author[j],
    //         booktitle:booktitle[j],
    //         chapter:chapter[j],
    //         collections:collections[j]
    //       };
    //     });
    //     // console.log(this.temp1);
    //     // console.log(this.$store.state.bookrecords);

    //     // this.temp = this.$store.state.bookrecords[0];
       
    //   }else{
    //     return ''
    //   };
    // }
  },
}
</script>
<style scoped>

.wrapper{
    height: calc(100vh - 0.68rem);
}
.placeholder {
    width: 100vw;
    height: 40vh;
}
.b-findmore{
      width: 100vw;
    justify-content: center;
    padding: 0.3rem;
    display: inline-flex;
}
.b-findmore button{
      border: 1px solid #f00;
    padding: 0.1rem 0.14rem;
    border-radius: 0.25rem;
    background-color: #fff;
    color: #f00;
    font-size: 0.2rem;
}
</style>
