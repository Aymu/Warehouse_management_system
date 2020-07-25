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
		list1:'1',
		components: { uList },
		onLoad(options) {
			var data = JSON.parse(options.index); // 字符串转对象
			console.log(data);
			var list1 = [];
			var db = openDatabase('myTel','1.0','test db',1024*100);
			db.transaction(function (tx){
				tx.executeSql('select prpc from Products',[data],function(tx,result){
					for(var i = 0 ;i<result.rows.length;i++){
						var map = {}
						map.title = "  " + (result.rows.item(i)).id + "     " + (result.rows.item(i)).prpc + "     " + (result.rows.item(i)).prdj + "  " + (result.rows.item(i)).prck + "  " + (result.rows.item(i)).prxm;
						map.clicktype = "navigateTo";
						map.url = '';
						list1.push(map);	
					}
				})
			})
		},
		data() {
			return {
				list: list1
			};
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
