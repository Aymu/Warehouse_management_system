<template>
	<view class="content">
		<view class="btn-row">
			<block  v-for="(item, index) in list" :key="index"><u-list :item="item"></u-list></block>
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
		</view>
	</view>
</template>

<script>
	import uList from '../../components/common/u-list.vue';
	
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components: { uList },
		data() {
			return {
				list: [
					{ title: '打卡记录', clicktype: 'navigateTo', url: '../day_list/day_list' },
					{ title: '操作记录', clicktype: 'navigateTo', url: '../settings_list/settings_list' },
					{ title: '绑定邮箱', clicktype: 'navigateTo', url: '' },
					{ title: '查看权限', clicktype: 'navigateTo', url: '' }
				]
			};
		},
		provide() {
			return {
				
				list: this
			};
		},
		created() {
			this.firstChildAppend = false;
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		methods: {
			...mapMutations(['logout']),
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
			},	
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			}
		}
	}
</script>

<style>
</style>
