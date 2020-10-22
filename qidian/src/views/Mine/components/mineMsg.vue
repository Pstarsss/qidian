<template>
	<div class="mineMsg">
		<mine-topbar>
			<i slot="left" class="el-icon-arrow-left" @click="back"></i>
			<span slot="center">消息中心</span>
			<i slot="right" class="el-icon-more"></i>
		</mine-topbar>
		<div id="nav" class="msg-plate">
			<navs :list="navlist1" class="nav1"></navs>
			<navs :list="navlist2" class="nav2"></navs>
		</div>
		<div class="content">
			<div class="photo"><img src="../mine-imgs/01.jpg"/></div>
			<div class="text">
				<span class="text-title">大额打赏</span>
				<span class="text-date">昨天13:38</span>
				<span class="text-msg">mmbnb挪亚方舟打赏《三寸人间》100万点</span>
			</div>
		</div>
		<div class="content2">
			<div class="photo"><img src="../mine-imgs/05.jpg"/></div>
			<div class="text">
				<span class="text-title">起点中文网</span>
				<span class="text-date">2020-10-12 11:00</span>
				<span class="text-msg2">老鹰吃小鸡上周下笔如有神，高质量爆发更文，点击收获新书一本</span>
			</div>
		</div>
		<div class="footer">总得有个结尾吧</div>
	</div>
</template>

<script>
	import mineTopbar from '@/components/mineTopbar.vue'
	import navs from '@/components/navs'
	export default{
		data(){
			return{
				navlist1:[
					{ name: '点赞', src: require('@/views/Mine/mine-imgs/s1.png') },
					{ name: '评论和回复', src: require('@/views/Mine/mine-imgs/s2.png') },
					{ name: '@我的', src: require('@/views/Mine/mine-imgs/s3.png') },
				],
				navlist2:[
					{ name: '收藏', src: require('@/views/Mine/mine-imgs/s4.png') },
					{ name: '献花 ', src: require('@/views/Mine/mine-imgs/s5.png') },
					{ name: '关注', src: require('@/views/Mine/mine-imgs/s6.png') },
				],
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		},
		components:{
			mineTopbar,
			navs
		},
	}
</script>

<style scoped>
	.mineMsg{
		background-color: whitesmoke;
	}
	#nav .nav1{
		margin-bottom:0.4rem;
	}
	#nav .nav2{
		margin-bottom:0.4rem;
	}
	.content{
		background-color: white;
		width: 100%;
		height: 1.3rem;
		padding: 0.08rem;
		margin-top: 0.6rem;
		position: relative;
	}
	 .photo{
		width: 15%;
		height: 1rem;
		/* background-color: gainsboro; */
		display: inline-block;
		padding: 0.08rem;
	} 
	 .photo img{
		width: 0.85rem;
		height: 0.85rem;
		border-radius: 50%;
	} 
	 .text{
		width: 80%;
		/* background-color: blueviolet; */
        font-size: 0.2rem;
		display: inline-block;
		height: 1rem;
		position: absolute;
		top: 0.15rem;
		right: 0.2rem;
		padding: 0.1rem;
	}
	.text-title{
		display: inline-block;
		font-size: 0.3rem;
		float: left;
	} 
	.text-date{
		display: inline-block;
		float: right;
		color: gainsboro;
		margin-top: 0.05rem;
	}
	.text-msg{
		float: left;
		display: inline-block;
		margin-top: 0.1rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.1rem;
		color: gainsboro;
	}
	.content2{
		background-color: white;
		width: 100%;
		height: 1.3rem;
		padding: 0.08rem;
		position: relative;
	}
	.text-msg2{
		float: left;
		display: inline-block;
		margin-top: 0.1rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.1rem;
		color: gainsboro;
		overflow:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 95%;
	}
	.footer{
		text-align: center;
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		font-size: 0.2rem;
		color: gainsboro;
		background-color: #fff;
	}
</style>
