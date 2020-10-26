<template>
	<div>
		<div class="choices">
			<span v-for="(item,index) in lists" :key="index" :class="{active:index===number}" @click="boys(index)">
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
					{text:'玄幻'},
					{text:'奇幻'},
					{text:'武侠'},
					{text:'仙侠'},
					{text:'都市'},
					{text:'现实'},
					{text:'历史'},
					{text:'军事'},
					{text:'游戏'},
					{text:'体育'},	
					{text:'科幻'},
					{text:'灵异'},
					{text:'二次元'},
					{text:'短篇'},
				],
				number:0,
			}
		},	
		methods:{
			boys(index){
				this.number = index;
				let finish = document.querySelector(".finish");
				finish.style.opacity = '1';
			}
		},
	}
</script>

<style scoped>
	.choices{
		width: 94%;
		margin-left: 3%;
		/* background-color: pink; */
		height: 6rem;
		margin-top: 0.6rem;
		font-size: 0.25rem;
		padding-left: 0.2rem;
	}
	.choices span{
		width: 1.8rem;
		height: 0.8rem;
		line-height: 0.8rem;
		background-color: #fff;
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
