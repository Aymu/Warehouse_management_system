<template>
	<view class="content">
		<view class="btn-row">
			<block  v-for="(item, index) in list" :key="index"><u-list :item="item"></u-list></block>
		</view>
		<view class="input-group">
			<view class="input-row border">
				<text class="title">办理人：</text>
				<m-input class="m-input" type="text" clearable focus v-model="name" placeholder="请输入产品编号"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">出库</button>
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
					{ title: '产品编号：2006250001', clicktype: 'navigateTo', url: '' },
					{ title: '产品批次：200625001', clicktype: 'navigateTo', url: '' },
					{ title: '现处仓库：五金仓库', clicktype: 'navigateTo', url: '' },
					{ title: '入库办理人：Aymu', clicktype: 'navigateTo', url: '' }
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
