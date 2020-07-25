<template>
	<view class="content">
		<view class="day-img">
			<image src="../../static/img/day.png" mode="center"></image>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="day">每日打卡</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			day() {
				var date = new Date(),
				year = date.getFullYear(),
				month = date.getMonth() + 1,
				day = date.getDate(),
				hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
				minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
				second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
				var db = openDatabase('myTel','1.0','test db',1024*100);
				db.transaction(function (tx){
					tx.executeSql('insert into Day values(?,?)',["Aymu",timer],function(tx,rs){
						alert('打卡成功');
						},
						function (tx,err){
						    alert(err.source +'===='+err.message);
						})
				})
				uni.switchTab({
					url:"../main/main"
					}) 
			}
		}	
	}
</script>

<style>
	.day-img{
		position: relative;
		float: left;
		left: 50%;
		margin-left: -150px;
	}
	
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
