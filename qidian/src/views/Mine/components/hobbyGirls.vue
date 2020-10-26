<template>
	<div>
		<div class="choices">
			<span v-for="(item,index) in lists" :key="index" @click="girls(index)" :class="{active:index===number}">
			     {{item.text}}
			</span>
		</div>
	     <div class="finish">
		     选好了
	     </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lists:[
					{text:'古代言情'},
					{text:'现代言情'},
					{text:'玄幻言情'},
					{text:'悬疑灵异'},
					{text:'浪漫青春'},
					{text:'仙侠奇缘'},
					{text:'科幻空间'},
					{text:'游戏竞技'},
					{text:'N次元'},
					{text:'纯爱小说'}	
				],
				number:0,
				
			}
		},
		methods:{
			girls(index){
				this.number = index;
				let finish = document.querySelector(".finish");
				//console.log(finish);
				finish.style.opacity = '1';
				// let spans = document.querySelectorAll(".choices span");
				// console.log(spans.length);
				// for(let i = 0;i<spans.length;i++){
				// 	this.spans[i].style.backgroundColor = "red";
				//}
			}
			
		}
	}
</script>

<style scoped>
	.choices{
		width: 94%;
		margin-left: 3%;
		/* background-color: pink; */
		height: 5rem;
		margin-top: 0.6rem;
		font-size: 0.25rem;
		padding-left: 0.2rem;
	}
	.choices span{
		width: 1.8rem;
		height: 0.8rem;
		line-height: 0.8rem;
	    background-color: white;
		display: inline-block;
		border-radius: 0.15rem;
		text-align: center;
		margin:0.1rem;
	}
	.finish{
		width: 90%;
		margin-left: 5%;
		background-color: red;
		font-size: 0.25rem;
		height: 0.8rem;
		border-radius: 0.4rem;
		line-height: 0.8rem;
		color: #fff;
		text-align: center;
		opacity: 0.25;
	}
	.active{
		/* background-color: indianred; */
		color: red;
		border: 1px solid rgba(255,0,0,0.5);
	}
</style>
