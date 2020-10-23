<template>
	<div class="privacySet">
		<mineTopbar>
			<i class="el-icon-arrow-left" slot="left" @click="back"></i>
			<span slot="center">隐私设置</span>
		</mineTopbar>
		<scroll :probeType="3" class="wrapper" ref="scroll" @pullingDown="pullingDown">
		<div class="set1">
			<div class="set1-left">
				<p>社区信息仅对自己可见</p>
				<p>开启后将隐藏个人主页自己发布的内容和动态</p>
			</div>
			<div class="set1-right">
				<el-switch v-model="value1" active-color="gainsboro" inactive-color="#ff4949">
				</el-switch>
			</div>
		</div>
		<div class="set1">
			<div class="set1-left">
				<p>允许起点读书根据阅读行为推荐内容</p>
				<p>用于向你推荐相关度更高的优质内容</p>
			</div>
			<div class="set1-right">
				<el-switch v-model="value2" active-color="gainsboro" inactive-color="#ff4949"  @change="closeswitch">
				</el-switch>
				<el-dialog title="关闭个性化推荐" :visible.sync="centerDialogVisible" width="80%"center>
				  <span>关闭后你将无法获得与你相关度更高、更适合你的书籍内容，确定要关闭嘛</span>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="centerDialogVisible = false">确定关闭</el-button>
				    <el-button type="primary" @click="centerDialogVisible = false" >暂不关闭</el-button>
				  </span>
				</el-dialog>
			</div>
		</div>
		<div class="set2" v-for="(item,index) in lists" :key="index">
			<div class="set2-left">
				<p>{{item.p1}}</p>
				<p>{{item.p2}}</p>
			</div>
			<div class="set2-right">
				<span>去设置</span>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<p style="font-size: 0.2rem;text-align: center;margin-top: 0.1rem;">列表仅展示核心权限，如需要查看更多可查看<span style="color:#0086B3">《隐私政策》</span></p>
		</scroll>
	</div>
</template>

<script>
	import scroll from '@/components/common/Scroll/scroll.vue'
	import mineTopbar from '@/components/mineTopbar.vue'
	export default{
		data(){
			return{
				value1: true,
				value2: false,
				 centerDialogVisible: false,
				lists:[
					{p1:'允许起点读书访问存储权限',p2:'用于正常存储和读取图片及文档信息'},
					{p1:'允许起点读书访问相机权限',p2:'用于拍照上传和保存图片，扫描及直播功能'},
					{p1:'允许起点读书访问麦克风权限',p2:'用于角色配音功能'}
				]
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			closeswitch(){
				if(this.value2){
					this.centerDialogVisible=true
				}
			},
			pullingDown(){
				console.log(12);
				this.$refs.scroll.finishPullDown();
			},
		},
		components:{
			mineTopbar,
			scroll
		}
		
	}
</script>

<style scoped="scoped">
	.privacySet{
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
	.set1-left p:first-child{
		font-size: 0.25rem;
	}
	.set1-left p:last-child{
		font-size: 0.2rem;
	}
	.set1-right{
		width: 20%;
		height: 0.9rem;
		/* background-color: pink; */
		float: right;
		line-height: 0.7rem;
		padding-left: 6%;
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
	}
	.set2-right{
		width: 20%;
		height: 0.9rem;
		/* background-color: pink; */
		line-height: 0.35rem;
		float: right;
	}
	.set2-right span{
		font-size: 0.25rem;
		color: grey;
		margin-right: 0.15rem;
	}
	.set2-right i{
		font-size: 0.25rem;
		color: grey;
	}
</style>
