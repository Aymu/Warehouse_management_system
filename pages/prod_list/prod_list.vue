<template>
    <view>
        <view class="content1"></view>
        <view class="search-block">
            <view class="search-ico-wapper">
                <image src="../../static/img/search.png" class="search-ico" @tap="search" mode=""></image>
            </view>
            <input type="text" v-model="searchtext" controlled="true" placeholder="点击输入搜索内容" class="search-text" @input="getinput" />
            <view class="search-ico-wapper1">
                <image src="../../static/img/saoyisao.png" class="search-ico-1" @tap="saoyisao" mode=""></image>
            </view>
        </view>
        <view class="shadow">
        </view>
		<view class="btn-row">
			<block v-if="isRouterShow" v-for="(item, index) in list" :key="index"><u-list :item="item"></u-list></block>
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
		provide () {
		    return {
		      reload: this.reload
		    }
		},
        data() {
			var list1 = [];
			var db = openDatabase('myTel','1.0','test db',1024*100);
			db.transaction(function (tx){
				tx.executeSql('select * from Products',[],function(tx,result){
					for(var i = 0 ;i<result.rows.length;i++){
						var map = {}
						map.title = "  " + (result.rows.item(i)).prid + "     " + (result.rows.item(i)).prpc + "     " + (result.rows.item(i)).prdj + "  " + (result.rows.item(i)).prck + "  " + (result.rows.item(i)).account;
						map.clicktype = "navigateTo";
						map.url = '../out/out';
						list1.push(map);	
					}
				})
			})
        	return {
				isRouterShow: true,
				searchtext:'',
        		list: list1
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
			async reload () {
				this.isRouterShow = false
				await this.$nextTick()
				this.isRouterShow = true
			},
			getinput: function(event) {  
                this.sarechtext = event.target.value;	
            }, 
			search(){
				let searcht = this.searchtext;
				var list1 = [];
				var item = 0;
				var map = {};
				var change = ""
				var db = openDatabase('myTel','1.0','test db',1024*100);
				db.transaction(function (tx){
					tx.executeSql('select * from Products',[],function(tx,result){
						for(var i = 0 ;i<result.rows.length;i++){
							if((result.rows.item(i)).id == searcht || (result.rows.item(i)).prpc == searcht|| (result.rows.item(i)).prck == searcht|| (result.rows.item(i)).prxm == searcht || (result.rows.item(i)).prck == searcht){
								change =(result.rows.item(i)).id + "  " + (result.rows.item(i)).prpc + "  " + (result.rows.item(i)).prdj + "  " + (result.rows.item(i)).prck + "  " + (result.rows.item(i)).prxm;
								map.title = " " + (result.rows.item(i)).id + " " + (result.rows.item(i)).prpc + " " + (result.rows.item(i)).prdj + " " + (result.rows.item(i)).prck + "  " + (result.rows.item(i)).prxm;
								map.clicktype = "navigateTo";

								map.url = '';
								console.log(change)
								list1.push(map);
							}
						}
					})
				})
				console.log(change)
				uni.showModal({
				    title: '提示',
				    content: change,
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				//this.$set(this.list,"title", change);
				//map.remove("__ob__")
				
				//this.$set(this.list, "title", map);
				/*
				uni.navigateTo({
					url:"../result/result?index=" + search
					})
				*/
			}
        }
    }
</script>

<style>
.content1{
    height: 50upx;
}

page{
    background-color: #FFFFFF;
}
/* 搜索框 */
.search-ico, .search-ico-1{
    width: 40upx;
    height: 40upx;
}
.search-text{
	z-index: 100;
    font-size: 20px;
    background-color: #FFFFFF;
    height: 60upx;
    width: 520upx;
}
.search-block{
    display: flex;
    flex-direction: row;
    padding-left: 60upx;
    position: relative;
    top: -32upx;
}
.search-ico-wapper{
	z-index: 50;
    background-color: #FFFFFF;
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0upx 0upx 0upx 40upx;
    border-bottom-left-radius:18px;
    border-top-left-radius: 18px;
}
.search-ico-wapper1{
    background-color: #FFFFFF;
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 0upx 40upx 0upx 0upx;
    border-bottom-right-radius:18px;
    border-top-right-radius: 18px;
}
.shadow{
    width: 670upx;
    height: 60upx;
    border-radius:18px;
    -moz-box-shadow:0 0 10px #e6e6e6;
    -webkit-box-shadow:0 0 10px #e6e6e6;
    box-shadow:0 0 10px #e6e6e6;
    position: relative;
    top: -90upx;
    left: 60upx;
}
</style>