<template>
    <div>
        <h6>分类</h6>
        <div class="classify">
            <div class="left">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            <div class="center">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            <div class="right">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            
        </div>
        <div class="classify">
            <div class="left">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            <div class="center">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            <div class="right">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            
        </div>
        <div class="classify">
            <div class="left">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            <div class="center">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            <div class="right">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>
            
        </div>
         <div class="classify">
            <div class="lefts">
                <span id="left">s</span>
                <span id="right">h</span>
            </div>   
        </div>
        
    </div>
    
</template>
<script>
export default {
    name:'BookModel'
}
</script>
<style scoped>
.classify {
  margin: 0 auto;
  font-size: 0.25rem;
  line-height: 0.6rem;
  display: flex;
  width: 90%;
  border-radius: 3%;
  height: 0.6rem;
  margin-top: 0.2rem;
  background-attachment: fixed;
  align-items: center;
}
/* .classify div{
    flex: 1;
} */
.left{
    width: 33%;
    margin-right: 2%;
    background-color: #E6E6E6;
    border-radius: 10%;
}
.center{
    width: 33%;
    margin-right: 2%;
    background-color: #E6E6E6;
    border-radius: 10%;
}
.right{
    width: 33%;
    /* margin-right: 2%; */
    background-color:#E6E6E6;
    border-radius: 10%;
}
#left{
    float: left;
    margin-left: .1rem;
}
#right{
    float: right;
     margin-right: .15rem;
}
h6{
   margin-top: .3rem;
    margin-left: .3rem;
    font-size: .4rem;
    margin-bottom: .2rem;
}
.lefts{
    width: 1.95rem;
    background-color: #E6E6E6;
    border-radius: 10%;
}
</style>