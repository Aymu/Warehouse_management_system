<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">产品编号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="id" placeholder="请输入产品编号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">生产批次：</text>
				<m-input class="m-input" type="text" clearable focus v-model="prpc" placeholder="请输入产品批次"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">合格等级：</text>
				<m-input class="m-input" type="text" clearable focus v-model="prdj" placeholder="请输入产品质量等级"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">入库仓库：</text>
				<m-input class="m-input" type="text" clearable focus v-model="prck" placeholder="请输入成品入库仓库编号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">检 验 员：</text>
				<m-input class="m-input" type="text" clearable focus v-model="prxm" placeholder="请输入检验员姓名"></m-input>
			</view>
		</view>
		<view class="content">
			<view class="btn-row">
				<button type="primary" class="primary" @tap="next">下一项</button>
			</view>
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
				prpc: '',
				prdj: '',
				prck: '',
				prxm: ''
			}
		},
		methods: {
			enter() {
				let id 	= this.id;
				let prpc= this.prpc;
				let prdj= this.prdj;
				let prck= this.prck;
				let prxm= this.prxm;
				if(id != '' && prpc != '' && pcdj != '' && prck != '' && prxm != ''){
					var db = openDatabase('myTel','1.0','test db',1024*100);//数据库名 版本 数据库描述 大小
					db.transaction(function(tx){
						tx.executeSql('insert into Products values(?,?,?,?,?)',[id,prpc,prdj,prck,prxm],function(tx,rs){
							alert('检验完成');
						},
						function (tx,err){
							alert(err.source +'===='+err.message);
						})
					})
					return this.id	='',this.prpc='',this.prdj='',this.prck='',this.prxm='';
				}
				uni.switchTab({
					url:"../main/main"
					})
			},
			next() {
				let id 	= this.id;
				let prpc= this.prpc;
				let prdj= this.prdj;
				let prck= this.prck;
				let prxm= this.prxm;
				if(id != '' && prpc != '' && pcdj != '' && prck != '' && prxm != ''){
					var db = openDatabase('myTel','1.0','test db',1024*100);//数据库名 版本 数据库描述 大小
					db.transaction(function(tx){
						tx.executeSql('insert into Products values(?,?,?,?,?)',[id,prpc,prdj,prck,prxm],function(tx,rs){
							alert('检验完成');
						},
						function (tx,err){
							alert(err.source +'===='+err.message);
						})
					})
					return this.id	='',this.prpc='',this.prdj='',this.prck='',this.prxm='';
				}
			}
		}
	}
</script>

<style>

</style>
