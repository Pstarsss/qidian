<template>
  <div>
    <book-crack class="bookcolor"></book-crack>
    <book-list></book-list>
    <div class="b-findmore">
        <button>查找更多精彩作品</button>
    </div>
  </div>
  
</template>

<script>
import BookCrack from '@/components/common/bookcrack/BookCrack.vue'
import BookList from '@/components/common/bookcrack/Bookposition.vue'
export default {
  name: 'bookshelf',
  components: {
    BookCrack,
    BookList
  },
  
}
</script>
<style scoped>

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
