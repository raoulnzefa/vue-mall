<template>
  <div class="us-order-submit us-body us-padding-large">
    <order-address :address="address" :remark="remark"></order-address>

	<panel class="us-order-sumit_order" v-for="(info, index) in orderList" :key="index" :border="false">
	    <van-cell
	      slot="header"
	      class="us-order-submit_cell"
	      icon="https://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_50x50_.webp"
	      :title="info.shop.name" 
	      size="large"
	      title-class="us-order-submit_title"
	      value-class="us-order-submit_value"
	    />
	    <div class="us-order-submit_goods-list us-font-h6">
	      <van-row class="us-order-submit_goods" v-for="(goods, goodsIndex) in info.goodsList" :key="goodsIndex">
	        <van-col span="6" class="us-text-left">
	          <van-image width="6rem" height="6rem" radius="5px":src="goods.image"/>
	        </van-col>
	        <van-col span="14" class="us-order-submit_goods-desc us-text-left us-padding-h-large">
	          <div class="van-multi-ellipsis--l2">{{ goods.caption }}</div>
	          <div class="us-color-gray">{{ goods.attributes }}</div>
	          <div class="us-color-orange">{{ goods.feature }}</div>
	        </van-col>
	        <van-col span="4" class="us-text-right">
	          <div>¥ {{ goods.price }}</div>
	          <div class="us-color-gray">x1</div>
	        </van-col>
	      </van-row>
	    </div>
	    <div class="us-font-13" slot="footer">
	    	<van-row class="us-order-submit_row" :border="false">
				<van-col span="6" class="us-text-right">配送方式</van-col>
				<van-col span="12" class="us-order-submit_middle">普通方式</van-col>
				<van-col span="6" class="us-text-right">
					快递 免邮
					<van-icon name="arrow" size="14px" color="gray" />
				</van-col>
		  	</van-row>
	    	<van-row class="us-order-submit_row" :border="false">
				<van-col span="6" class="us-text-right">运费险</van-col>
				<van-col span="16" class="us-order-submit_middle">卖家赠送，退换货可赔</van-col>
				<van-col span="2" class="us-text-right">
					<van-icon name="arrow" size="14px" color="gray" />
				</van-col>
		  	</van-row>
	    	<van-row class="us-order-submit_row" :border="false">
				<van-col span="6" class="us-text-right">订单备注</van-col>
				<van-col span="18" class="us-order-submit_middle">选填，请与卖家协商一致</van-col>
		  	</van-row>
		  	<div class="us-text-right">
		    	<span class="us-margin-right-small us-color-gray">共{{ info.amount }}件</span>
		        <span>小计：<span class="us-color-price">¥ {{ info.total }}</span></span>
		  	</div>
	    </div>
	</panel>

	<van-cell 
		class="us-order-submit_discount"
		clickable
		@click="toggle()"
	>
	   	<div slot="title">
	    	<van-image 
		        src="https://gw.alicdn.com/tfs/TB1UapAn7voK1RjSZFwXXciCFXa-72-72.png" 
		        width="16"
		    />
		    <span class="us-margin-left-small">可用5淘金币抵用0.05元</span>
	   	</div>
	    <van-checkbox
        	v-model="discountChecked" 
        	icon-size="20px"
        	checked-color="#ff5000"
        	ref="checkbox"
	        slot="right-icon"
	    />
	</van-cell>

	<van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    >
    </van-submit-bar>

    <van-checkbox 
    	class="us-order-submit_anonymous us-padding-h-large" 
    	v-model="anonymous" 
    	icon-size="16px"
    >
    <span class="us-color-gray">匿名购买</span>
    </van-checkbox>

    <div class="us-order-submit_remark us-padding-large">
    	春节期间（1月17日-2月10日）付款的天猫、淘宝订单，发货时效较日常延长，特殊商品或定制、预售及其他特殊情形除外
    </div>
  </div>
</template>
<script>
import OrderAddress from '@/components/OrderAddress.vue'
import Panel from '@/components/Panel.vue'

export default {
  name: 'orderSubmit',
  components: {
  	OrderAddress,
  	Panel
  },
  data() {
  	return {
  		discountChecked: true,
  		anonymous: true,
  		address: {
  			name: "纹章",
  			mobile: "13739472943",
  			address: "广东省广州市黄浦区黄埔大道120号",
  		},
  		remark: "收货不便时,可选择免费暂存服务",
  		orderList: [
        {
          id: 2,
          shop: {
            id: 302,
            name: "小鱼儿的店"
          },
          amount:3,
          total:91.80,
          status: 2,
          goodsList: [
            {
              id: 22,
              caption: "车载手机支架无线充电器汽车导航出风口自动感应通用苹果华为车用",
              image: "https://img.alicdn.com/imgextra/i2/725108714/O1CN01NphujP2EF3tEnoUva_!!0-item_pic.jpg_200x200.jpg",
              price: 5.90,
              amount: 2,
              attributes: "极速发货",
              feature: "七天无理由退换",
            },
            {
              id: 23,
              caption: "欧式真皮沙发组合客厅 小户型123轻奢黑檀色实木雕花整装奢华家具",
              image: "https://img.alicdn.com/imgextra/i4/2790824257/O1CN01694vAg1hJkbTYuvSB_!!2790824257.jpg_200x200.jpg",
              price: 80,
              amount: 1,
              attributes: "定制款;组合",
              feature: "七天无理由退换",
            }
          ]  
        },
      ]
  	}
  },
  methods: {
  	onSubmit() {

    },
    toggle() {
    	this.$refs.checkbox.toggle();
    }
  }
}
</script>

<style lang="less">
	.us-order-submit {
		.us-order-address {
			margin-bottom:20px;
		}

		.us-order-submit_cell {
	    	padding:0;
	  	}
  
	  	.us-order-submit_title {
	    	text-align:left;
	    	font-size: 12px;
	  	}

	  	.us-order-submit_value {
	    	font-size:12px;
	   		color:#fd622f;
	  	}

	  	.us-order-submit_goods {
    		margin-bottom: 10px;
  		}

  		.us-order-submit_goods-desc > div {
      		padding:2px 0;
  		}

  		.us-order-submit_middle {
  			text-align:left;
  			color:gray;
  			padding-left:6px;
  		}

  		.us-order-submit_row {
  			margin-bottom: 15px;
  		}

  		.us-order-submit_discount {
  			background-color:#fff;
  			border-radius: 12px;
  			text-align:left;
  		}

  		.us-order-submit_anonymous {
  			margin-top:10px;
  			font-size:12px;
  		}

  		.us-order-submit_remark {
  			font-size:12px;
  			text-align:left;
  			color:gray;
  		}
	}
</style>