<template>
	<div class="mineGames">
		<mineTopbar>
			<i slot="left" class="el-icon-arrow-left" @click="back"></i>
<!-- 			<i class="el-icon-close" slot="left"></i> -->
			<span slot="center">最近玩过</span>
			<i slot="right" class="el-icon-more"></i>
		</mineTopbar>
		<scroll :probeType="3" class="wrapper" ref="scroll" @pullingDown="pullingDown">
		<div class="game">
			<p style="font-size: 0.25rem;">最近玩过</p>
			<div class="game1">
				<img src="../mine-imgs/game1.jpg"/>
				<div class="game1-text">
					<p>苍之女武神</p>
					<p>2天前玩过</p>
				</div>
				<span class="game1-span">点击即玩</span>
			</div>
			<div class="game1">
				<img src="../mine-imgs/game2.jpg"/>
				<div class="game1-text">
					<p>傲剑情缘</p>
					<p>2天前玩过</p>
				</div>
				<span class="game1-span">点击即玩</span>
			</div>
		</div>
		<img src="../mine-imgs/pic1.jpg" class="img"/>
		<div class="games">
			<p style="font-size: 0.25rem;">您可能感兴趣</p>
			<div class="game2" v-for="(item,index) in gameLists" :key="index">
				<img :src='item.imgSrc' />
				<p>{{item.name}}</p>
				<span class="game2-span" :style="item.color">{{item.play}}</span>
			</div>
		</div>
		<div class="footer">领取更多福利</div>
		</scroll>
	</div>
</template>

<script>
	import scroll from '@/components/common/Scroll/scroll.vue'
	import mineTopbar from '@/components/mineTopbar.vue'
	export default{
		data(){
			return{
				gameLists:[
					{imgSrc:require('../mine-imgs/game3.jpg'),name:'沙巴克传奇',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game4.jpg'),name:'建党江湖',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game5.jpg'),name:'永恒纪元',play:'下载',color:'backgroundColor:#FF2A00'},
					{imgSrc:require('../mine-imgs/game6.jpg'),name:'妖怪宝可萌',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game1.jpg'),name:'侠客行',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game2.jpg'),name:'传奇世界',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game3.jpg'),name:'梦道',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game4.jpg'),name:'斗罗大陆',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game5.jpg'),name:'一刀传世',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game6.jpg'),name:'我的帝国',play:'点击即玩'},
					{imgSrc:require('../mine-imgs/game1.jpg'),name:'航海霸业',play:'下载',color:'backgroundColor:#FF2A00'},
					{imgSrc:require('../mine-imgs/game2.jpg'),name:'三国计',play:'点击即玩'},
				]
			}
		},
		methods:{
			pullingDown(){
				//console.log(12);
				this.$refs.scroll.finishPullDown();
			},
			back(){
				this.$router.go(-1);
			}
		},
		components:{
			mineTopbar,
			scroll
		}
		
	}
</script>

<style scoped>
	/* .mineGames{
		background-color: whitesmoke;
		height: 16rem;
	} */
	.game{
		width: 100%;
		background-color: #fff;
		height: 3.3rem;
		padding: 0.2rem;
	}
	.game1{
		width: 100%;
		height: 1.3rem;
		/* background-color: #00FF00; */
		padding: 0.05rem;
	}
	.game1 img{
		width:1rem;
		height: 1rem;
		margin-top: 0.1rem;
		float: left;
		display: inline-block;
	}
	.game1 .game1-text{
		width: 40%;
		float: left;
		height: 1rem;
		/* background-color: #0000FF; */
		margin-top: 0.1rem;
		padding: 0.15rem;
	}
	.game1-text p:first-child{
		font-size: 0.25rem;
	}
	.game1-text p:last-child{
		font-size: 0.2rem;
		margin-top: 0.05rem;
		color: grey;
	}
	.game1-span{
		width: 20%;
		float: right;
		height: 0.5rem;
		line-height: 0.5rem;
		background-color: #72C51F;
		font-size: 0.2rem;
		color: white;
		text-align: center;
		border-radius: 0.05rem;
		margin-top: 0.35rem;
	}
	.img{
		width: 94%;
		height: 2.3rem;
		margin-left: 3%;
		background-color: #fff;
	}
	.games{
		width: 100%;
		/* background-color: pink; */
		height: 7rem;
		padding: 0.2rem;
	}
	.games .game2{
		width: 20%;
		/* background-color: #20B2AA; */
		height: 2rem;
		display: inline-block;
		margin-left: 0.25rem;
		margin-bottom: 0.1rem;
	}
	.game2 img{
		width: 1rem;
		height: 1rem;
		margin-left: 0.13rem;
	}
	.game2 p{
		font-size: 0.24rem;
		margin-left: 0.05rem;
		text-align: center;
	}
	.game2-span{
		width: 90%;
		margin-left: 5%;
		float: left;
		height: 0.5rem;
		line-height: 0.5rem;
		background-color: #72C51F;
		font-size: 0.2rem;
		color: white;
		text-align: center;
		border-radius: 0.05rem;
	    margin-top: 0.05rem; 
	}
	.footer{
		width: 100%;
		height: 0.6rem;
		line-height: 0.6rem;
		color: #FF2A00;        font-size:0.25rem;
		text-align: center;	
	}
</style>
