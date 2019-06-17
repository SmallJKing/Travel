<template>
	<div>
		<div class="title">当季热门度假</div>
	<el-row>
		<el-col :span="12" v-for="(o, index) in 4" 
		:key="o" 
		:offset="index > 0 ? 4 : 0">
			<el-card :body-style="{ padding: '0px' }" :shadow="hover">
				<img src="https://imgs.qunarzz.com/p/p53/1809/59/a95e0544d16dc102.jpg_256x160_74bab347.jpg" class="image">
				<div style="padding: 14px;">
					<span>芜湖—杭州</span>
					<div class="bottom clearfix">
						<el-button type="text" class="button">操作按钮</el-button>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				currentDate: new Date()
			};
		}
	}
</script>


<style lang="stylus" scoped>
	@import '~style/varibles.styl'
	
	.title {
		font-size:.4rem
		line-height: .7rem
		background: $bgcolor
		text-indent: .2rem
		color: white
	}
	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		float: right;
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>


