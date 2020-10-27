<template>
	<div>
		<router-link tag="div" to="/hobbySet/hobbyGirls" class="girls">
			<img src="../mine-imgs/book1.png" />
			<span class="girlsText">女生小说</span>
			<span class="girlsNow">当前</span>
			<i class="el-icon-arrow-right"></i>
		</router-link>
		
		<div class="boys" @click="hobbyBoys">
			<img src="../mine-imgs/book2.png" />
			<span class="boysText">男生小说</span>
			<i class="el-icon-arrow-right"></i>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			// hobbyGirls(){
			// 	this.$router.push('/hobbySet/hobbyGirls');
			// },
			hobbyBoys(){
				this.$router.push('/hobbySet/hobbyBoys');
			}
		},
		components:{
			
		}
	}
</script>

<style scoped>
	.girls{
		width: 94%;
		margin-left: 3%;
	    background-color: #fff;
		height: 1.6rem;
		line-height: 1.6rem;
		border-radius: 0.2rem;
		border: 1px solid rgba(255,0,0,0.4);
		margin-top: 0.6rem;
	}
	.girls img{
		width: 1.2rem;
		height: 1.2rem;
		margin:0.2rem ;
		float: left;
	}
	.girlsText{
		font-size: 0.3rem;
		float: left;
	}
	.girlsNow{
		font-size: 0.2rem;
		width: 0.6rem;
		height: 0.4rem;
		background-color: red;
		color: white;
		float: left;
		margin-top: 0.6rem;
		margin-left: 0.15rem;
		line-height: 0.4rem;
		text-align: center;
		border-radius: 0.08rem;
	}
	.girls i{
		float: right;
		font-size: 0.25rem;
		margin: 0.65rem 0.3rem;
		font-weight:600 ;
	}
	.boys{
		width: 94%;
		margin-left: 3%;
		background-color: #fff;
		height: 1.6rem;
		line-height: 1.6rem;
		border-radius: 0.2rem;
		margin-top: 0.4rem;
	}
	.boys img{
		width: 1.2rem;
		height: 1.2rem;
		margin:0.2rem ;
		float: left;
	}
	.boysText{
		font-size: 0.3rem;
		float: left;
	}
	.boys i{
		float: right;
		font-size: 0.25rem;
		margin: 0.65rem 0.3rem;
		font-weight:600 ;
	}
</style>
