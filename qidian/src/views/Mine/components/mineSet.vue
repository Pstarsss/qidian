<template>
	<div class="mineSet">
		<div class="title">
			<i class="el-icon-arrow-left icon-left" @click="back"></i>
			设置
		</div>
		<scroll :probeType="3" class="wrapper" ref="scroll" @pullingDown="pullingDown">
		<div class="list1">
			推送通知
			<i class="el-icon-arrow-right icon-right"></i>
		</div>
		<div class="list1">
			自动订阅管理
			<i class="el-icon-arrow-right icon-right"></i>
		</div>
		<div class="list2" v-for="(item,index) in list2" :key="index">
			<span>{{item.title}}</span>
			<i class="el-icon-arrow-right icon-right"></i>
			<span class="text">{{item.text}}</span>
		</div>
		<div class="list3"  @click="go">
			隐私设置
			<i class="el-icon-arrow-right icon-right"></i>
		</div>
		<div class="list1" @click="hobby">
			偏好设置
			<i class="el-icon-arrow-right icon-right"></i>
		</div>
		<div class="list2">
			自动订阅管理
			<el-switch
			  v-model="value1"
			  active-color="gainsboro"
			  inactive-color="#ff4949" class="switch">
			</el-switch>
		</div>
		<div class="list2">
			仅用移动网络听书
			<el-switch
			  v-model="value2"
			  active-color="gainsboro"
			  inactive-color="#ff4949" class="switch">
			</el-switch>
		</div>
		<div class="list1">
			清除缓存
			<i class="el-icon-arrow-right icon-right"></i>
		</div>
		<div class="list2" v-for="(item,index) in lists" :key="index + '-only'">
			<span>{{item.title}}</span>
			<i class="el-icon-arrow-right icon-right"></i>
			<span class="text">{{item.text}}</span>
		</div>
		<div class="list2">
			修改密码
			<el-switch
			  v-model="value2"
			  active-color="gainsboro"
			  inactive-color="#ff4949" class="switch"
				@change="tochangepassword">
			</el-switch>
		</div>
		</scroll>
		<div class="foot">
			切换账号
		</div>
	</div>
</template>

<script>
	import scroll from '@/components/common/Scroll/scroll.vue'
	export default{
		data(){
			return{
				list2:[
					{ title:'自动订阅管理',text:'已关闭'},
					{ title:'字体设置',text:'汉仪旗黑'},
					{ title:'阅读设置'}
				],
				 value1: true,
				 value2: true, 
				 value3: true,
				 lists:[
					 { title:'安全中心'},
					 { title:'青少年模式',text:'未开启'},
					 { title:'吐个槽'},
					 { title:'客服与帮助'},
					 { title:'给我们评分'},
					 { title:'隐私协议'},
					 { title:'关于起点读书'} 
				 ]
			}
		},
		methods:{
			pullingDown(){
				console.log(12);
				this.$refs.scroll.finishPullDown();
			},
			back(){
				this.$router.go(-1);
			},
			go(){
				this.$router.push('/privacySet');
			},	
			hobby(){
				this.$router.push('/hobbySet');
			},
			tochangepassword(){
				this.$router.push('/changepassword');
			}
		},
		components:{
			scroll
		}
		
	}
</script>

<style scoped>
	.mineSet{
		background-color: whitesmoke;
	}
	.title{
		width: 100%;
		height: 0.7rem;
		line-height: 0.5rem;
		background-color: white;
		position: relative;
		padding: 0.08rem;
		z-index: 120;
		text-align: center;
		font-size: 0.3rem;
	}
	.icon-left{
		float: left;
		font-size: 0.35rem;
		margin-top: 0.05rem;
		margin-left: 0.1rem;
	}
	.list1{
		width: 100%;
		height: 0.7rem;
		line-height: 0.5rem;
		background-color: white;
		padding: 0.08rem;
		text-align: left;
		font-size: 0.25rem;
		margin-bottom: 0.1rem;
	}
	.icon-right{
		float: right;
		font-size: 0.25rem;
		margin-top: 0.18rem;
		margin-right: 0.1rem;
		color: gainsboro;
	}
	.list2{
		width: 100%;
		height: 0.7rem;
		line-height: 0.5rem;
		background-color: white;
		padding: 0.08rem;
		text-align: left;
		font-size: 0.25rem;
	}
	.list2 .text{
		color: gainsboro;
		font-size: 0.2rem;
		float: right;
		margin-top: 0.05rem;
	}
	.list3{
		width: 100%;
		height: 0.7rem;
		line-height: 0.5rem;
		background-color: white;
		padding: 0.08rem;
		text-align: left;
		font-size: 0.25rem;
		margin-top: 0.1rem;
	}
	.switch{
		float: right;
		margin-right: 0.1rem;
		margin-top: 0.1rem;
	}
	.foot{
		width: 100%;
		height: 0.7rem;
		line-height: 0.5rem;
		background-color: white;
		padding: 0.08rem;
		text-align: center;
		font-size: 0.25rem;
		color:#ff4949;
	}
</style>
