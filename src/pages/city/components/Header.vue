<template>
	<div class="header">
		<div>
		 <el-radio-group class="header-title" v-model="radio1" size="mini">
             <el-radio-button label="境内"></el-radio-button>
             <el-radio-button label="国际/地区"></el-radio-button>
         </el-radio-group>
		 </div>
		 <router-link to="/">
		 <div class="iconfont header-back">&#xe622;</div>
		 </router-link>
	</div>
</template>

<script>
	export default{
		name: 'CityHeader',
		data() {
			return {
				radio1: '境内'
			}
		},
	}
</script>

<style lang="stylus" scoped>
	@import '~style/varibles.styl'
	.header{
		height:.86rem
		overflow: hidden
		line-height:.86rem
		text-align: center
		color: #fff
		background: $bgcolor
		font-size:.32rem
	}
	.header-back{
		position:absolute
		top: 0
		left: 0
		width: .64rem
		text-align:cemter
		font-size:.3rem
		color:#fff
	}
	
</style>
