<template>
	<div class="pushSet">
		<mineTopbar>
			<i class="el-icon-arrow-left" slot="left" @click="back"></i>
			<span slot="center">推送通知</span>
		</mineTopbar>
		<div class="set1">
			<div class="set1-left">
				<p>社交通知</p>
			</div>
			<div class="set1-right">
				<el-switch v-model="value1" active-color="gainsboro" inactive-color="#ff4949">
				</el-switch>
			</div>
		</div>
		<div class="set1">
			<div class="set1-left">
				<p>系统通知</p>
			</div>
			<div class="set1-right">
				<el-switch v-model="value2" active-color="gainsboro" inactive-color="#ff4949">
				</el-switch>
			</div>
		</div>
		<div class="set1">
			<div class="set1-left">
				<p>作品更新通知</p>
			</div>
			<div class="set1-right">
				 <span>已开启</span>
			</div>
		</div>
		<div class="set2" v-for="(item,index) in lists" :key="index">
			<div class="set2-left">
				<p>{{item.p1}}</p>
				<p>{{item.p2}}</p>
			</div>
			<div class="set2-right">
				<el-switch v-model="value=item.flag" active-color="gainsboro" inactive-color="#ff4949">
				</el-switch>
			</div>
		</div>
		<p style="font-size: 0.2rem;text-align: center;margin-top: 0.1rem;">依然收不到消息？查看帮助></p>
	</div>
</template>

<script>
	import mineTopbar from '@/components/mineTopbar.vue'
    export default{
		data(){
			return{
				value1:false,
				value2:false,
				// value:false,
				lists:[
					{p1:'每日阅读提醒',p2:'若当天未阅读,20点提醒我',flag:true},
					{p1:'每日签到提醒',p2:'若当日未签到,21点提醒我',flag:true},
					{p1:'每日红包提醒',p2:'若当日未领取红包,22点提醒我',flag:true}
				]
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
			
		},
		components:{
			mineTopbar
		}
		
	}
</script>

<style scoped>
	.pushSet{
		background-color: whitesmoke;
		height: 16rem;
	}
	.set1{
		width: 100%;
		height: 1.2rem;
		background-color: #fff;
		padding-top: 0.15rem;
	}
	.set1-left{
		width: 80%;
		height: 0.9rem;
		/* background-color: #fff; */
		display: inline-block;
		display: flex;
		flex-direction: column;
		float: left;
		padding: 0.15rem;
	}
	.set1-left p{
		font-size: 0.25rem;
		margin-top: 0.15rem;
	}
	.set1-right{
		width: 20%;
		height: 0.9rem;
		/* background-color: pink; */
		float: right;
		line-height: 0.7rem;
		padding-left: 6%;
		position: relative;
	}
	.set1-right span{
		font-size: 0.22rem;
		position: absolute;
		bottom: 0.08rem;
	}
	
	.set2{
		width: 100%;
		height: 1.2rem;
		background-color: #fff;
		padding-top: 0.15rem;
	}
	.set2-left{
		width: 80%;
		height: 0.9rem;
		/* background-color: #13CE66; */
		display: inline-block;
		display: flex;
		flex-direction: column;
		float: left;
		padding: 0.15rem;
	}
	.set2-left p:first-child{
		font-size: 0.25rem;
	}
	.set2-left p:last-child{
		font-size: 0.2rem;
		color: lightgrey;
	}
	.set2-right{
		width: 20%;
		height: 0.9rem;
		/* background-color: pink; */
		float: right;
		line-height: 0.7rem;
		padding-left: 6%;
	}
	
</style>
