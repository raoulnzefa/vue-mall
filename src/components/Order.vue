<template>
  <panel class="us-order">
    <van-cell
      slot="header"
      class="us-order-cell"
      icon="https://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_50x50_.webp"
      :title="info.shop.name" 
      value="交易成功"
      size="large"
      title-class="us-order-title"
      value-class="us-order-value"
    />
    <div class="us-order-goods-list">
      <van-row class="us-order-goods" v-for="(goods, goodsIndex) in info.goodsList" :key="goodsIndex">
        <van-col span="6">
          <van-image width="6rem" height="6rem" radius="5px":src="goods.image"/>
        </van-col>
        <van-col span="14" class="us-order-goods-desc us-padding-h-large">
          <div class="us-font-h6 van-multi-ellipsis--l2">{{ goods.caption }}</div>
          <div class="us-font-h6 us-color-gray">{{ goods.attributes }}</div>
          <div class="us-font-h6 us-color-orange">{{ goods.feature }}</div>
        </van-col>
        <van-col span="4" class="us-text-right">
          <div class="us-font-h6">¥ {{ goods.price }}</div>
          <div class="us-font-h6 us-color-gray">x1</div>
        </van-col>
      </van-row>
      <div class="us-text-right us-font-h6">
        <span style="margin-right: 10px;">共{{ info.amount }}件商品</span>
        <span>合计：¥ {{ info.total }}</span>
      </div>
    </div>
    <div class="us-order-operation" slot="footer">
      <van-button round size="small">查看物流</van-button>
      <van-button round size="small">卖了换钱</van-button>
      <van-button round size="small">追加评价</van-button>
    </div>
  </panel>
</template>

<script>
/**
 * Props
 *
 * :order-id Number,  order ID optional，
 * :order-ifno Object, order information, optional, 
 */
import Panel from '@/components/Panel.vue'

export default {
  name: 'Order',
  components: {
    Panel,
  },
  data() {
    return {
      info: this.orderInfo
    }
  },
  props: {
    orderId: Number,
    orderInfo: Object,
  },
  methods: {
  }
}
</script>    

<style type="text/css">
.us-order .us-order-cell {
  padding:0;
}

.us-order .us-order-title {
  text-align:left;
  font-size: 12px;
}

.us-order .us-order-value {
  font-size:12px;
  color:#fd622f;
}

.us-order-operation {
  text-align: right;
}

.us-order-operation .van-button {
  line-height: 28px;
  height:30px;
  font-size:13px;
  padding-left:15px;
  padding-right: 15px;
  margin-left:10px;
}

.us-order-goods {
  margin-bottom: 10px;
}

.us-order-goods-desc {
  text-align: left;
}

.us-order-goods-desc > div {
  padding:1px 0;
}
</style>                                       
