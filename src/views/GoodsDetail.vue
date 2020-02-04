<template>
  <div class="us-goods-detail us-body">
    <van-nav-bar
	  title="商品详情"
	  left-text="返回"
	  left-arrow
	  @click-left="goBack"
	  @click-right="goCarts"
	>
	  <van-icon name="cart-o" slot="right" size="24"/>
	</van-nav-bar>

	<goods-detail-image-list :imageList="imageList"/>

	<div class="us-padding-large us-text-left">
	  <span class="us-color-red us-font-h2">¥588</span>
	  <blank-span width="5" />
	  <span class="us-line-delete us-color-gray">¥1098</span>
	</div>

	<div class="us-goods-coupon us-padding-large-i-top">
		<van-tag round type="warning" size="medium">店铺券满400减100</van-tag>
		<van-tag round type="warning" size="medium">满200减40</van-tag>
		<span class="us-coupon-get">
			领券<van-icon name="arrow" size="12"/>
		</span>
		<div class="us-clearfix"></div>
	</div>

	<div class="us-goods-description us-padding-large-i-top">
		<div class="van-multi-ellipsis--l2 us-col us-col-9 us-text-left">
			<van-tag round type="danger" size="medium">极有家</van-tag>
			 俄罗斯进口紫皮趟KDV巧克力糖果100g起婚庆喜糖零食小吃
		</div>
		<div class="us-clearfix"></div>
	</div>
	<van-row class="us-padding-large-i-top us-font-14 us-color-gray">
	  <van-col class="us-text-left" span="8">家装物流：免运费</van-col>
	  <van-col span="8">月销1054</van-col>
	  <van-col class="us-text-right" span="8">广东佛山</van-col>
	</van-row>

	<blank-row />

	<div class="us-goods-service" @click="serviceInfoShow = true">
		<goods-detail-cell title="服务" desc="七天无理由退货 包邮" />
	</div>
	<goods-detail-service-info :show.sync="serviceInfoShow"/>

	<blank-row />

	<goods-detail-cell 
		class="us-goods-specification" 
		title="规格" 
		desc="请选家具择结 颜色 尺寸分类"
	/>
	<goods-detail-cell 
		class="us-goods-param" 
		title="参数" 
		desc="品牌 型号..."
	/>

	<blank-row />

	<goods-detail-comment
		:productId="productId"
	/>

	<div class="us-padding-h-large">
		<van-divider />
	</div>

	<goods-detail-question />
	
	<bottom-line />

	<van-goods-action>
	  <van-goods-action-icon icon="shop-o" text="店铺"/>
	  <van-goods-action-icon icon="chat-o" text="客服" />
	  <van-goods-action-icon icon="star" text="已收藏" :color="storeColor" />
	  <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
	  <van-goods-action-button type="danger" text="立即购买" @click="goOrderSubmit" />
  	</van-goods-action>
  </div>
</template>
<script>
import GoodsDetailImageList from '@/components/GoodsDetailImageList.vue'
import GoodsDetailServiceInfo from '@/components/GoodsDetailServiceInfo.vue'
import GoodsDetailCell from '@/components/GoodsDetailCell.vue'
import GoodsDetailComment from '@/components/GoodsDetailComment.vue'
import GoodsDetailQuestion from '@/components/GoodsDetailQuestion.vue'
import BottomLine from '@/components/BottomLine.vue'
import BlankRow from '@/components/BlankRow.vue'
import BlankSpan from '@/components/BlankSpan.vue'

export default {
  name: 'goodsDetail',
  components: {
  	GoodsDetailImageList, 
  	GoodsDetailServiceInfo,
  	GoodsDetailCell,
  	GoodsDetailComment,
  	GoodsDetailQuestion,
  	BottomLine,
  	BlankRow,
  	BlankSpan,
  },
  data() {
  	return {
  		productId: 100,
  		store: true,
  		serviceInfoShow: false,
  		imageList: [
  			'https://img.alicdn.com/imgextra/i1/2468513451/TB27R9ugsbI8KJjy1zdXXbe1VXa_!!2468513451.png_640x640q80_.webp',
        	'https://img.alicdn.com/imgextra/i3/2468513451/TB2J0ipgxrI8KJjy0FpXXb5hVXa_!!2468513451.jpg_640x640q80_.webp',
        	'https://img.alicdn.com/imgextra/i4/2468513451/TB2b3EpqC3PL1JjSZFxXXcBBVXa_!!2468513451.jpg_640x640q80_.webp',
        	'https://img.alicdn.com/imgextra/i3/2468513451/TB2WbCCgvDH8KJjy1XcXXcpdXXa_!!2468513451.jpg_640x640q80_.webp'
  		],
  	}
  },
  computed: {
  	storeColor: function(){
  		return this.store ? '#ff5000' : ''
  	}
  }, 	
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goCarts() {
      this.$router.push("/carts");
    },
    addCart() {

    },
    goOrderSubmit() {
    	this.$router.push("/orders/submit");
    },
  }
}
</script>

<style lang="less">
.us-goods-detail {
	background-color:#fff;

	.us-goods-coupon {
		.van-tag {
			float:left;
			margin-right:15px;
		}

		.us-coupon-get {
			cursor:pointer;
			float: right;
			color:#ff976a;
			font-size: 13px;
		}
	}

	.van-nav-bar .van-nav-bar__right .van-icon {
		color:#ff976a;
	}
}
</style>