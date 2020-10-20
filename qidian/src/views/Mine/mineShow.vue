<template>
	<div class="mineShow">
		<!-- 顶部 -->
		<div class="title">
			<i class="el-icon-set-up icon-set"></i>
			<i class="el-icon-message icon-msg"></i>
			<div class="change">
				<i class="el-icon-moon icon-moon"></i>夜间
			</div>
		</div>
		<div class="null"></div>
		<!-- 个人信息板块 -->
		<div class="people">
			<div class="details">
				<div class="details1">
					<img src="./mine-imgs/05.jpg" />
				</div>
				<div class="details2">
					<p class="details2-p1">star_8</p>
					<p class="details2-p2">
						<span><i class="el-icon-s-opportunity icon-op"></i></span>Lv.0
						<span><i class="el-icon-star-on icon-star"></i></span>普通用户
					</p>
				</div>
				<div class="details3">
				   <i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="others">
				<div class="others-list">
					<span><b>0</b><br />推荐票</span>
					<span><b>0</b><br />推荐票</span>
					<span><b>0点</b><br />推荐票</span>
				</div>
				<span class="charge">
					充值
				</span>
			</div>
		</div>
		<!-- 开通畅享卡板块 -->
		<div class="dredge">
			<div></div>
			<div></div>
		</div>
		<!-- 分类板块 -->
		<div id="nav" class="msg-plate">
			<navs :list="navlist1" class="nav1"></navs>
			<navs :list="navlist2" class="nav2"></navs>
		</div>
		<!-- 轮播板块 -->
		<div></div>
		<!-- 列表板块 -->
		<div></div>
		
	</div>
</template>

<script>
	import navs from '../../components/navs'
	export default{
		data(){
			return{
				navlist1:[
					{ name: '我发布的', src: require('./mine-imgs/p1.png') },
					{ name: '关注/收藏', src: require('./mine-imgs/p2.png') },
					{ name: '活动中心', src: require('./mine-imgs/p3.png') },
					{ name: '阅读时长', src: require('./mine-imgs/p4.png') },
				],
				navlist2:[
					{ name: '我的装扮', src: require('./mine-imgs/p5.png') },
					{ name: '我的卡牌 ', src: require('./mine-imgs/p6.png') },
					{ name: '徽章/称号', src: require('./mine-imgs/p7.png') },
					{ name: '浏览记录', src: require('./mine-imgs/p8.png') },
				],
			}
		},
		methods:{
			
		},
		components: {
		  navs,
		},
		
	}
	
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.mineShow{
		background-color: whitesmoke;
	}
	/* 顶部 */
	.title{
		width: 100%;
		height: 0.7rem;
		line-height: 0.7rem;
		/* background-color: whitesmoke; */
		position: fixed;
		padding: 0.08rem 0.08rem 0.08rem 0.08rem;
	}
	.icon-set{
		float: left;
		font-size: 0.4rem;
		margin-top: 0.05rem;
		margin-left: 0.1rem;
	}
	.icon-moon{
		font-size: 0.3rem;
	}
	.change{
		width: 1rem;
		height: 0.35rem;
		display: inline-block;
		border-radius: 0.15rem;
		float: right;
		background-color: gainsboro;
		font-size: 0.22rem;
		margin-top: 0.06rem;
		line-height: 0.35rem;
		margin-right: 0.15rem;
		padding-left: 0.1rem;
	}
	.icon-msg{
		float: right;
		font-size: 0.4rem;
		margin-top: 0.05rem;
		margin-right: 0.1rem;
	}
	.null{
		width: 100%;
		height: 0.7rem;
	}
	/* 个人信息 */
	.people{
		width: 94%;
		height: 2.5rem;
		margin-left: 3%;
		background-color: #fff;
		border-radius: 0.15rem;
		padding: 0.08rem 0.08rem 0.08rem 0.08rem;
	}
	.details{
		height:1.2rem ;
		background-color: #fff;
		font-size: 0.3rem;
		padding: 0.05rem 0.05rem 0.05rem 0.05rem;
		position: relative;
	}
	.details1{
		width: 18%;
	}
	.details1 img{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		/* border: 1px solid black; */
	}
	.details2{
		display: inline;
		width: 50%;
		background-color: #fff;
		position: absolute;
		top: 0.1px;
		left: 20%;
	}
	.details2-p1{
		font-size: 0.4rem;
	}
	.details2-p2{
		font-size: 0.2rem;
	}
	.details2-p2 span:first-child{
		width: 0.33rem;
		height: 0.33rem;
		border-radius: 50%;
		background-color: #13CE66;
		display: inline-block;
		line-height: 0.33rem;
		text-align: center;
		margin-right: 0.05rem;
	}
	.icon-op{
		color: white;	
	}
	.details2-p2 span:last-child{
		width: 0.33rem;
		height: 0.33rem;
		border-radius: 50%;
		background-color: coral;
		display: inline-block;
		line-height: 0.33rem;
		text-align: center;
		margin-right: 0.05rem;
		margin-left: 0.15rem;
	}
	.icon-star{
		color: white;	
	}
	.details3{
		width: 5%;
		background-color: #fff;
		position: absolute;
		top: 0.24rem;
		right: 3%;
		color:gainsboro;
	}
	.others{
		height:0.5rem ;
		padding: 0.05rem 0.05rem 0.05rem 0.05rem;
		background-color: #fff;
	}
	.others-list{
		display: flex;
		justify-content: space-around;
		font-size: 0.2rem;
		width: 50%;
	}
	.others span b{
		font-size: 0.28rem;
	}
	.charge{
		width: 1rem;
		height: 0.45rem;
		line-height: 0.45rem;
		background-color: red;
		color: white;
		font-size: 0.2rem;
		display: inline-block;
		float: right;
		margin-top: -0.5rem;
		border-radius: 0.2rem;
		text-align: center;
	}
	/* 开通畅享卡板块 */
	.dredge{
		width: 94%;        height: 2.2rem;
		margin-left: 3%;
		margin-top: -4%;
		border-radius: 0.15rem;
		padding: 0.08rem 0.08rem 0.08rem 0.08rem;
		background-color: coral;
		
	}
	/* 分类板块 */
	#nav .nav1{
		margin-bottom:0.28rem ;
	}
	#nav .nav2{
		margin-bottom:0.3rem ;
	}
	
	
</style>
