<template>
	<div class="search">
		<el-input  v-model="keyword"  class="search-input"  placeholder="请输入城市名或拼音" size="small" clearable>
		</el-input>
		<div class="search-content" 
		ref='search'
		v-show="keyword"
		>
			<ul>
				<li
				 class="search-item border-bottom"
				 v-for="item of list"
				 :key='item.id'
				 @click="handleCityClick(item.name)"
				 >
				 {{item.name}}
				 </li>
				 <li
				  class="search-item border-bottom"
				  v-show="hasNoData"
				 >
					 没有找到哦
				 </li>
			</ul>
		</div>
	</div>
</template>

<script>
	 import Bscroll from 'better-scroll'
	 import {mapMutations} from 'vuex'
	export default {
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data() {
			return {
				keyword: '',
				list: [],
				timer:null
			}
		},
		computed: {
			hasNoData () {
				return !this.list.length 
			}
		},
		methods: {
			  handleCityClick (city) {
			     this.changeCity(city)
			     this.$router.push('/')
			  },
			  ...mapMutations(['changeCity'])
		},
		watch: {
			keyword() {
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword) {
					this.list = []
					return
				}
				this.timer = setTimeout(() => {
					const result = []
					for (let i in this.cities) {
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
								result.push(value)
							}
						})
					}
					this.list = result
				},100)
			}
		},
		mounted () {
			this.scroll = new Bscroll(this.$refs.search)
		}
	}
</script>

<style lang="stylus" scoped>
	
	@import '~style/varibles.styl'

	.search {
		height: .72rem 
		padding: 0 .15rem 
		background: $bgcolor
	}
	.search-input {
		box-sizing: border-box
		height:0.5rem
		padding:0 .1rem
		text-align:center
		color:#666
		font-size: 15px
	}
	.search-content{
		z-index: 1
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		background: #eee
	}
	.search-item{
		line-height: .6rem
		padding-left: .2rem
	    color: #666
		background: #fff
	}
</style>
