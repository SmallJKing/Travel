<template>
	<div>
	<div class="title">热销推荐</div>
	<ul> 
		<router-link 
		tag="li"
		class="item border-bottom" 
		v-for="item of list"
		:key="item.id"
		:to="'/detail/' + item.id"
		>
			<img class="item-img" :src="item.imgUrl"/>
			<div class="item-info">
			<p class="item-title">{{item.title}}</p>
			<p class="item-desc">{{item.desc}}</p>
			<button class="item-button"><span class="item-price">{{item.price}}</span>起</button>
			</div>
	</router-link>	
	</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props:{
			list: Array
		}
}
</script>

<style lang="stylus" scoped>
	@import '~style/mixins.styl'
	@import '~style/varibles.styl'
	
	.title {
		font-size: .4rem
		line-height: .7rem
		background: $bgcolor
		text-indent: .2rem
		color: white
	}
	.item{
		border-bottom:1px #eee solid
		overflow:hidden
		display:flex
	    height: 1.9rem
		
	}
	.item-img{
		width:1.7rem
		height:1.7rem
		padding:.1rem
	}
	.item-info{
		flex:1
		padding:.1rem
		min-width: 0
	}
	.item-title{
		margin-top:0.03rem
		line-height:.54rem
		font-size:.3rem
	}
	.item-desc{
		margin-top:.03rem
		line-height:.4rem
		color: #ccc
		ellipsis()
	}
	.item-button{
		background-color:transparent
		line-height: .8rem
		margin-top: .02rem
		padding: 0 .1rem
		
	}
	.item-price{
		font-size:.4rem
		color:#ff9300
	}
</style>
