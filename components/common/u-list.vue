<template>
	<view class="u-list-item u-f-ac u-f-jsb" hover-class="list-hover" @tap="clickevent" :class="{ 'u-list-item-first': isFirstChild }">
		<view class="u-f-ac">
			<template v-if="item.icon">
				<view class="iconfont" :class="item.icon" :style="{ color: item.iconcolor, fontSize: iconsize + 'rpx' }"></view>
			</template>
			<view :style="{ fontWeight: fontweight, fontSize: fontsize + 'rpx' }">{{ item.title }}</view>
		</view>
		<view class="iconfont icon-you-"></view>
	</view>
</template>

<script>
export default {
	inject: ['list'],
	data() {
		return {
			isFirstChild: false
		};
	},
	mounted() {
		if (!this.list.firstChildAppend) {
			this.list.firstChildAppend = true;
			this.isFirstChild = true;
		}
		// console.log(this.list);
	},
	props: {
		item: Object,
		iconsize: {
			type: String,
			default: '36'
		},
		fontweight: {
			type: String,
			default: 'blod'
		},
		fontsize: {
			type: String,
			default: '30'
		}
	},
	methods: {
		clickevent() {
			switch (this.item.clicktype){
				case 'navigateTo':
				if(this.item.url) {
					uni.navigateTo({
						url:this.item.url
					})
				}
					break;
			}
		}
	}
};
</script>

<style scoped>
.u-list-item {
	padding: 20rpx;
	border-top: solid #c0c0c0;
	/* border-bottom: solid #f2f2f2; */
	border-width: thin;
}
.u-list-item > view > view {
	padding-right: 10rpx;
}
.u-list-item > view:first-child {
	color: #353535;
}
.u-list-item > view:last-child {
	color: #666;
}
.list-hover {
	background-color: #eeeeee;
}

/* 判断 */
.u-list-item-first {
	border-top: 0;
}
</style>