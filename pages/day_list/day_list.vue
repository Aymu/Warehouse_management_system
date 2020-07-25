<template>
	<view class="content">
		<view class="btn-row">
			<block  v-for="(item, index) in list" :key="index"><u-list :item="item"></u-list></block>
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
			var list1 = []
			var db = openDatabase('myTel','1.0','test db',1024*100);
			db.transaction(function (tx){
				tx.executeSql('select * from Day',[],function(tx,result){
					for(var i = 0 ;i<result.rows.length;i++){
						var map = {}
						map.title = (result.rows.item(i)).account + "在" +(result.rows.item(i)).time + "打卡了";
						map.clicktype = "navigateTo";
						map.url = '';
						list1.push(map);	
					    }
					})
				})
			return {
				list : list1
			};
		},
		provide() {
			return {
				list: this
			};
		},
		created() {
			this.firstChildAppend = false;
		}
	}
</script>

<style>

</style>
