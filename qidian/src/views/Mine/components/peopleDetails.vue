<template>
	<div>
		<mineTopbar>
			<i slot="left" class="el-icon-arrow-left"  @click="back"></i>
			<i slot="right" class="el-icon-brush icon-draw"></i>
			<i slot="right" class="el-icon-more"></i>
		</mineTopbar>
		<div class="main">
			    <div><img src="../mine-imgs/05.jpg"/></div>
				<div class="main-div1">star_8</div>
				<div class="main-div2">普通会员</div>
				<div class="main-div3">给自己写一个不一样的介绍吧</div>
				<div class="main-div4">编辑资料</div>
		</div>
		<div class="list">
			<div v-for="(item,index) in lists" :key="index" class="list-content">
				<span class="spanNum">{{item.num}}</span><span class="spanPeople">{{item.people}}</span>
				<p>{{item.text}}</p>
			</div>
		</div>
		<div class="show">
			<div>你的书单/专栏/本章说/书评/动态会显示在这里</div>
		</div>
		<div class="bottom">
			<div class="bottom1">
				<span>我的阅历</span>
				<span>来到起点已经13天了</span>
			</div>
			<div class="bottom2">
				<i class="el-icon-arrow-right icon-right"></i>
			</div>
		</div>
	</div>
</template>

<script>
	import mineTopbar from '@/components/mineTopbar.vue'
	export default{
		data(){
			return{
				lists:[
					{ num:0, text:'获得徽章'},
					{ num:0, text:'粉丝称号'},
					{ num:0, text:'获得花束'},
					{ num:0, text:'关注TA', people:'人'},
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
	.icon-draw{
		margin-right: 0.3rem;
	}
	.main{
		width: 100%;
		height: 3.3rem;
		text-align: center;
	}
	.main img{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		margin-top: 0.2rem;
	}
	.main div{
		display: flex;
		justify-content: center;
	}
	.main-div1{
		font-size: 0.3rem;
	}
	.main-div2{
		font-size:0.05rem;
		width: 0.9rem;
		height: 0.3rem;
		line-height: 0.3rem;
		background-color: wheat;
		color: burlywood;
		border-radius: 0.08rem;
		margin:0.1rem auto;
	}
	.main-div3{
		font-size: 0.25rem;
		margin-top: 0.15rem;
	}
	.main-div4{
		font-size: 0.15rem;
		width: 1.2rem;
		height: 0.4rem;
		line-height: 0.4rem;
		border: 1px solid rgba(0,0,0,0.3);
		border-radius: 0.08rem;	
		margin: 0.1rem auto;
	}
	.list{
		width: 94%;
		margin-left: 3%;
		height: 1.1rem;
		display: flex;
		justify-content: space-around;
		border-top: 1px solid rgba(0,0,0,0.1);
		border-bottom: 1px solid rgba(0,0,0,0.1);
	}
	.list-content{
		margin-bottom:1rem ;
		line-height: 0.3rem;
	}
	.list-content .spanNum{
		font-size: 0.3rem;
		font-weight: 600;
	}
	.list-content .spanPeople{
		font-size: 0.2rem;
		font-weight: 600;
	}
	.list-content p{
		font-size: 0.2rem;
		color: gainsboro;
	}
	.show{
		width: 100%;
		height: 5rem;
		position: relative;
	}
	.show div{
		font-size: 0.25rem;
		width: 60%;
		height: 1.2rem;
		padding:0.2rem;
		position: absolute;
		top: 35%;
		left: 21%;
	}
	.bottom{
		width: 94%;
		margin-left: 3%;
		background-color: grey;
		border-radius: 0.1rem;
		height: 1.1rem;
		/* padding: 0.1rem; */
		color: #fff;
	}
	.bottom1{
		width: 85%;
		height: 0.8rem;
		position: relative;
		background-color: grey;
		margin-left: 0.15rem;
	}
	.bottom1 span:first-child{
		font-size: 0.25rem;
		position: absolute;
		top: 0;
		width: 100%;
		height: 0.5rem;
		text-align: left;
		padding-top: 0.1rem;
		display: inline-block;
	}
	.bottom1 span:last-child{
		position: absolute;
		top: 0.5rem;
		display: inline-block;
		font-size: 0.2rem;
		width: 100%;
		height: 0.3rem;
		text-align: left;
	}
	.bottom2{
		width: 10%;
		height: 0.8rem;
	}
	.icon-right{
		font-size: 0.2rem;
		margin-top: 0.3rem;
		color: gainsboro;
	}
</style>
