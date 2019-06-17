<template>
	<div>
	<div class="title">当季热门度假</div>
	<ul>
		<li class="item" 
		v-for="item of list"
		:key="item.id"
		>  
			<img class="item-img" :src="item.imgUrl"/>
			<div class="item-info">
			<p class="item-title">{{item.title}}</p>
			<p class="item-desc">{{item.desc}}</p>
			</div>
		</li>
	</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props: {
			list: Array
		}
}
</script>

<style lang="stylus" scoped>
	@import '~style/mixins.styl'
	@import '~style/varibles.styl'
	
	.title {
		font-size:.4rem
		line-height: .7rem
		background: $bgcolor
		text-indent: .2rem
		color: white
	}
	.item-img{
		margin-top:.1rem
		overflow:hidden
		height: 154px
		width: 375px
	}
	.item-info{
		width:355px
		height:62px
		
	}
	.item-title{
		margin-top:0.02rem
		line-height:.54rem
		font-size:.4rem
		margin:8px
	}
	.item-desc{
		margin-top:.03rem
		line-height:.4rem
		color: #48D1CC
		display:inline
		margin:10px
		ellipsis()
	}
</style>