<template>
    <view>
        <view class="content1"></view>
        <view class="search-block">
            <view class="search-ico-wapper">
                <image src="../../static/img/search.png" class="search-ico" mode=""></image>
            </view>
            <input type="text" value="" placeholder="点击输入搜索内容" class="search-text" maxlength="10" focus/>
            <view class="search-ico-wapper1">
                <image src="../../static/img/saoyisao.png" class="search-ico-1" mode=""></image>
            </view>
        </view>
        <view class="shadow">
        </view>
		<view class="content">
			<view class="btn-row">
				<block  v-for="(item, index) in list" :key="index"><u-list :item="item"></u-list></block>
			</view>
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
        			{ title: '打卡记录', clicktype: 'navigateTo', url: '' },
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
        }
    }
</script>

<style>
.content1{
    height: 100upx;
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
    font-size: 14px;
    background-color: #FFFFFF;
    height: 60upx;
    width: 580upx;
}
.search-block{
    display: flex;
    flex-direction: row;
    padding-left: 60upx;
    position: relative;
    top: -32upx;
}
.search-ico-wapper{
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
    width: 738upx;
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