<template>
	<div>
		<div class="choices">
			<span v-for="(item,index) in lists" :key="index" @click="girls(index)" :class="{active:item.flag}">
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
					{text:'古代言情',flag:false},
					{text:'现代言情',flag:false},
					{text:'玄幻言情',flag:false},
					{text:'悬疑灵异',flag:false},
					{text:'浪漫青春',flag:false},
					{text:'仙侠奇缘',flag:false},
					{text:'科幻空间',flag:false},
					{text:'游戏竞技',flag:false},
					{text:'N次元',flag:false},
					{text:'纯爱小说',flag:false}	
				],
				
			}
		},
		methods:{
			girls(index){
				this.lists[index].flag=!this.lists[index].flag;
				let finish = document.querySelector(".finish");
				finish.style.opacity = '1';
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
	.choices .active{
		background-color:#ffe7e7;
		color: red;
		border: 1px solid #f3bdbd;
	}
</style>
