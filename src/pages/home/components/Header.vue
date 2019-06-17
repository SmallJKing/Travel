<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe622;</div>
		</div>
		<div class="header-input"><span class="iconfont">&#xe601;</span>输入城市/景点/游玩主题</div>
		<router-link to='/city'>
		<div class="header-right">{{this.city}}<span class="iconfont donw-icon">&#xe616;</span></div>
		</router-link>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	
	 export default {
		 name: 'HomeHeader',
		 computed: {
		  ...mapState(['city'])	
		 }
	 }
</script>

<style lang="stylus" scoped>
    
	@import '~style/varibles.styl'
	
	.header{
		display: flex
		line-height: .86rem
		background: $bgcolor
		color:#fff
	}
	
	.header-left{
		width: .45rem
		float: left
		margin-left:10px;
	}
	.back-icon{
		text-align:center
		font-size:.3rem
	}
	
	.header-input{
		flex:1
		height:.64rem
		line-height:.64rem
		margin-top:.12rem
		margin-left:.2rem
		padding-left:.2rem
		background:#fff
		color:#ccc
		border-radius: .1rem
	}
	.header-right{
		min-width:1.04rem
		padding:0 .1rem
		float:right
		text-align:center
		color:#fff
	}
	.donw-icon{
		margin-left:.06rem
		
	}
</style>
