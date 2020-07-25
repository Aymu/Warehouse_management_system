<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">设备编号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="id" placeholder="请输入设备编号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">加工数量：</text>
				<m-input class="m-input" type="text" clearable focus v-model="num" placeholder="请输入加工数量"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">开始时间：</text>
				<m-input class="m-input" type="text" clearable focus v-model="sttime" placeholder="请输入开始时间"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">操 作 员：</text>
				<m-input class="m-input" type="text" clearable focus v-model="stxm" placeholder="请输入操作员姓名"></m-input>
			</view>
		</view>
		<view class="content">
			<view class="btn-row">
				<button type="primary" class="primary" @tap="enter">确认</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'
	export default {
		components: {
			mInput
		},
		data() {
			return {
				id: '',
				num: '',
				sttime: '',
				stxm: ''
			}
		},
		methods: {
			enter() {
				let id 	= this.id;
				let num	= this.num;
				let sttime	= this.sttime;
				let stxm= this.stxm;
				if(id != '' && num != '' && sttime != '' && stxm != ''){
					var db = openDatabase('myTel','1.0','test db',1024*100);//数据库名 版本 数据库描述 大小
					db.transaction(function(tx){
						tx.executeSql('insert into Settings values(?,?,?,?)',[id,num,sttime,stxm],function(tx,rs){
							alert('设置成功');
						},
						function (tx,err){
							alert(err.source +'===='+err.message);
						})
					})
				}
				uni.navigateTo({
					url:"../settings/settings"
					})
			},
		}
	}
</script>

<style>

</style>
