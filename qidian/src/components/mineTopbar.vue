<template>
	<div class="mineTopbar">
		<span class="left"><slot name="left"></slot></span>
		<span class="center"><slot name="center"></slot></span>
		<span class="right"><slot name="right"></slot></span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.mineTopbar{
		width: 100%;
		height: 0.7rem;
		line-height: 0.6rem;
		background-color: white;
		position: relative;
		padding: 0.08rem;
		z-index: 120;
	}
	.left{
		float: left;
		font-size: 0.35rem;
		margin-left: 0.1rem;
	}
	.center{
	/* 	text-align: center; */
		font-size: 0.3rem;
		position: absolute;
		top:0.08rem;
		left: 42%;
	}
	.right{
		float: right;
		font-size: 0.35rem;
		margin-right: 0.1rem;
	}
	
</style>
