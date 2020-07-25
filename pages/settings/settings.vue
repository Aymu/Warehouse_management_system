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
				tx.executeSql('select * from Div',[],function(tx,result){
					for(var i = 0 ;i<result.rows.length;i++){
						var map = {}
						map.title = (result.rows.item(i)).div;
						map.clicktype = "navigateTo";
						map.url = '../sebsettings/sebsettings';
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
