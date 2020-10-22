<template>
	
	<div class="mineShow">
		<!-- 顶部 -->
		<div class="title">
			<i class="el-icon-set-up icon-set" @click="set"></i>
			<i class="el-icon-message icon-msg" @click="Msg"></i>
			<div class="change">
				<i class="el-icon-moon icon-moon"></i>夜间
			</div>
		</div>
		<!-- 个人信息板块 -->
		<scroll :probeType="3" class="wrapper" ref="scroll" @pullingDown="pullingUp">
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
					<span><b>0</b><br />月票</span>
					<span><b>0点</b><br />我的账户</span>
				</div>
				<span class="charge">
					充值
				</span>
			</div>
		</div>
		<!-- 开通畅享卡板块 -->
		<div class="dredge">
			<div class="dredge-top">
			    <i class="el-icon-sunrise-1 icon-sunrise"></i>
				<span class="span1">开通畅享卡</span>
				<span>享免费书库等10项福利<i class="el-icon-arrow-right"></i></span>
			</div>
			<div class="dredge-bottom">
				<div v-for="(item,index) in drLists" :key="index">
					<i :class='item.icon' class="icon-drlists"></i>{{item.title}}
				</div>
			</div>
		</div>
		<!-- 分类板块 -->
		<div id="nav" class="msg-plate">
			<navs :list="navlist1" class="nav1"></navs>
			<navs :list="navlist2" class="nav2"></navs>
		</div>
		<!-- 轮播板块 -->
		<div class="lunbo">
			<el-carousel trigger="click"  height="0.9rem" class="lunbo-content" indicator-position="none">
				 <el-carousel-item>
				    <img src="./mine-imgs/01.jpg" />
				    <span>猜你喜欢|《无限之从写轮眼到轮回眼》少年出英雄 著</span>
					<i class="el-icon-arrow-right"></i>
				 </el-carousel-item>
				 <el-carousel-item>
					<img src="./mine-imgs/02.jpg" />
					<span>猜你喜欢|《惊雷》只爱煞英雄 著 军事 谍战特工</span>
					<i class="el-icon-arrow-right"></i>
				 </el-carousel-item>
			</el-carousel>
		</div>
		<!-- 列表板块 -->
		<div class="foot-list">
			<div v-for="(item,index) in bottomLists" :key="index" class="lists">
				<i :class="item.icon1"></i>
				<span>{{item.content}}</span>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		</scroll>
	</div>
</template>

<script>
	import scroll from '@/components/common/Scroll/scroll.vue'
	import navs from '@/components/navs'
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
				drLists:[
					{ title:'免费书库', icon:'el-icon-notebook-1'},
					{ title:'票券福利', icon:'el-icon-postcard'},
					{ title:'签到特权', icon:'el-icon-map-location'},
					{ title:'专属任务', icon:'el-icon-news'},
					{ title:'头像挂件', icon:'el-icon-present'},
					{ title:'阅读页主题', icon:'el-icon-magic-stick'},
					{ title:'专属表情包', icon:'el-icon-pie-chart'},
					{ title:'专属徽章', icon:'el-icon-medal-1'},
				],
				bottomLists:[
					{ icon1:'el-icon-tickets', content:'新书投资'},
					{ icon1:'el-icon-position', content:'我的游戏'},
					{ icon1:'el-icon-bangzhu', content:'领币'},
					{ icon1:'el-icon-coin', content:'积分商城'},
					{ icon1:'el-icon-edit', content:'成为作家'},
					{ icon1:'el-icon-date', content:'起点星专属卡'},
				],
			}
		},
		methods:{
			set(){
				this.$router.push('/mineSet')
			},
			Msg(){
				this.$router.push('/mineMsg')
			},
			pullingUp(){
				//console.log(12);
				this.$refs.scroll.finishPullDown();
			}
		},
		components: {
		  navs,
		  scroll
		},
		
	}
	
</script>

<style scoped>
	.mineShow{
		background-color: whitesmoke;
	}
	/* 顶部 */
	.title{
		width: 100%;
		height: 0.7rem;
		line-height: 0.7rem;
		background-color: whitesmoke;
		position: relative;
		padding: 0.08rem 0.08rem 0.08rem 0.08rem;
		z-index: 120;
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
		color:gainsboro;
	}
	.others span b{
		font-size: 0.28rem;
		color: #000000;
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
	.dredge-top{
		height: 40%;
		padding: 0.08rem;
		color: #FED9AB;
		border-bottom: 1px solid #FED9AB;
	}
	.dredge-top .icon-sunrise{
		font-size: 0.4rem;
		float: left;
		margin-right: 0.2rem;
		margin-top: 0.08rem;
	}
	.dredge-top .span1{
		font-size: 0.32rem;
		font-weight: 540;
		display: inline-block;
		float: left;
		margin-top: 0.08rem;
		font-family: "楷体","楷体_GB2312";
	}
	.dredge-top span:last-child{
		font-size: 0.23rem;
		float: right;
		margin-top: 0.1rem;
	}
	.dredge-bottom{
		height: 60%;
		padding: 0.1rem;
		color: #FED9AB;
		font-size: 0.2rem;
		display: flex;
	    justify-content: space-around;
		flex-wrap: wrap;
		margin-top: 0.1rem;
	}
	.dredge-bottom>div{
		margin-right: 0.1rem;
	}
	.dredge-bottom .icon-drlists{
		margin-right: 0.1rem;
		font-size: 0.25rem;
	}
	/* 分类板块 */
	#nav .nav1{
		margin-bottom:0.4rem;
	}
	#nav .nav2{
		margin-bottom:0.3rem;
	}
	/* 轮播图板块 */
	.lunbo{
		width:100%;
		height: 1.4rem;
		background-color: #fff;
		margin-top: 0.6rem;
		padding-top: 0.3rem;
	}
	.lunbo-content{
		width: 94%;
		height: 0.9rem;
		margin-left: 3%;
		background-color: whitesmoke;
		border-radius: 0.6rem;
		position: relative;
	} 
	.lunbo .el-carousel__item img{
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 50%;
		line-height: 0.7rem;
		margin-top: 0.1rem;
		margin-left: 0.2rem;
	}
	.lunbo .el-carousel__item span{
		font-size:0.25rem;
		font-weight: 500;
		display: inline-block;
		position: absolute;
		top: 0.3rem;
		left: 1.2rem;
		width:70%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.lunbo .el-carousel__item i{
		font-size: 0.25rem;
		color: gainsboro;
		position: absolute;
		top:0.35rem;
		right: 0.3rem;
		font-weight: 500;
	}
	.el-carousel__item:nth-child(n){
	     background-color: whitesmoke;
	  }
	/* 底部列表板块 */
	.foot-list{
		list-style: none;	
		width: 100%;
		background-color: #fff;
	}
	.lists{
		width: 94%;
		margin-left: 3%;
		height: 0.65rem;
		line-height: 0.65rem;
	}
	.lists i:first-child{
		font-size: 0.3rem;
		float: left;
		margin-top: 0.2rem;
	}
	.lists span{
		margin-left:0.2rem;
		font-size: 0.25rem;
		float: left;
	}
	.lists i:last-child{
		font-size: 0.3rem;
		float: right;
		margin-top: 0.2rem;
	}
	
	
	
</style>
