<template>
	<div class="hobbySet">
		<mineTopbar>
			<i  slot="left" class="el-icon-arrow-left" @click="back"></i>
			<span slot="center">阅读偏好</span>
		</mineTopbar>
		<p class="title">对那些作品类型感兴趣？</p>
		<p class="add">相关类型作品会优先推荐给你,可随时修改</p>
		<router-view></router-view>
	</div>
</template>
<script>
	import mineTopbar from '@/components/mineTopbar.vue'
	export default{
		data(){
			return{}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		components:{
			mineTopbar,
		}
		
	}
</script>

<style scoped>
	.hobbySet{
		background-color: whitesmoke;
		height: 12rem;
	}
	.title{
		font-size: 0.5rem;
		margin-top: 0.4rem;
		text-align: center;
	}
	.add{
		margin-top: 0.1rem;
		font-size: 0.3rem;
		color: gainsboro;
		text-align: center;
	}
</style>
