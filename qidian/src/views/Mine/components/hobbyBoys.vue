<template>
	<div>
		<div class="choices">
			<span v-for="(item,index) in lists" :key="index" :class="{active:item.flag}" @click="boys(index)">
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
					{text:'玄幻',flag:false},
					{text:'奇幻',flag:false},
					{text:'武侠',flag:false},
					{text:'仙侠',flag:false},
					{text:'都市',flag:false},
					{text:'现实',flag:false},
					{text:'历史',flag:false},
					{text:'军事',flag:false},
					{text:'游戏',flag:false},
					{text:'体育',flag:false},	
					{text:'科幻',flag:false},
					{text:'灵异',flag:false},
					{text:'二次元',flag:false},
					{text:'短篇',flag:false},
				],
				number:0,
			}
		},	
		methods:{
			boys(index){
				//this.number = index;
				this.lists[index].flag=!this.lists[index].flag;
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
	.choices .active{
		background-color:#ffe7e7;
		color: red;
		border: 1px solid #f3bdbd;
	}
</style>
