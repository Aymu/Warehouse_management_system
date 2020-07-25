<template>
	<view class="content">
		<view class="main-img">
			<image src="../../static/img/warnning.png" mode="center"></image>
		</view>
		<view class="btn-row">
			<block  v-for="(item, index) in list" :key="index"><u-list :item="item"></u-list></block>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">处理</button>
		</view>
	</view>
</template>

<script>
	import uList from '../../components/common/u-list.vue';
	import mInput from '../../components/m-input.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		components: { uList },
		data() {
			return {
				name: '',
				list: [
					{ title: '现在室内温度为：35℃', clicktype: 'navigateTo', url: '' },
					{ title: '现在室内湿度为：80%', clicktype: 'navigateTo', url: '' },
					{ title: '现在仓库有潜在火灾危险，请及时查看处理！', clicktype: 'navigateTo', url: '' },
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
		methods: {
			
		}
	}
</script>

<style>

</style>
