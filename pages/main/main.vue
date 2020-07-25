<template>
	<view class="content">
		<view class="btn-row">
			<button type="primary" class="primary" @tap="day">每日打卡</button>
		</view>
		<view class="menu-img">
			<image src="../../static/img/prod.png" @tap="settings" mode="center"></image>
			<text>-----------------------上机设置------------------------</text>
			<image src="../../static/img/mana.png" @tap="prod" mode="center"></image>
			<text>------------------------产品检验-----------------------</text>
			<image src="../../static/img/list.png" @tap="prod_list" mode="center"></image>
			<text>------------------------产品列表-----------------------</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		},
		methods: {
			day() {
				uni.navigateTo({
					url:"../day/day"
					}) 
			},
			settings(){
				uni.navigateTo({
					url:"../settings/settings"
					}) 
			},
			prod(){
				uni.navigateTo({
					url:"../prod/prod"
					})
			},
			prod_list(){
				uni.navigateTo({
					url:"../prod_list/prod_list"
					})
			}
			
		}
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
</style>
