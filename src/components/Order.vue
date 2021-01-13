<template>
  <panel class="us-order">
    <van-cell
      slot="header"
      class="us-order_cell"
      icon="https://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_50x50_.webp"
      :title="info.shop.name" 
      value="交易成功"
      size="large"
      title-class="us-order_title"
      value-class="us-order_value"
    />
    <div class="us-order_goods-list us-font-h6">
      <van-row class="us-order_goods" v-for="(goods, goodsIndex) in info.goodsList" :key="goodsIndex">
        <van-col span="6" class="us-text-left">
          <van-image width="4.7rem" height="4.7rem" radius="5px":src="goods.image"/>
        </van-col>
        <van-col span="14" class="us-order_goods-desc us-text-left us-padding-h-large">
          <div class="van-multi-ellipsis--l2">{{ goods.caption }}</div>
          <div class="us-color-gray">{{ goods.attributes }}</div>
          <div class="us-color-orange">{{ goods.feature }}</div>
        </van-col>
        <van-col span="4" class="us-text-right">
          <div>¥ {{ goods.price }}</div>
          <div class="us-color-gray">x1</div>
        </van-col>
      </van-row>
      <div class="us-text-right">
        <span class="us-margin-right-large">共{{ info.amount }}件商品</span>
        <span>合计：¥ {{ info.total }}</span>
      </div>
    </div>
    <div class="us-order_operation" slot="footer">
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

<style lang="less">
.us-order{
  .us-order_cell {
    padding:0;
  }
  
  .us-order_title {
    text-align:left;
    font-size: 12px;
  }

  .us-order_value {
    font-size:12px;
    color:#fd622f;
  }

  .us-order_operation {
    text-align: right;

    .van-button {
      line-height: 28px;
      height:30px;
      font-size:13px;
      padding-left:15px;
      padding-right: 15px;
      margin-left:10px;
    }
  }

  .us-order_goods {
    margin-bottom: 10px;
  }

  .us-order_goods-desc > div {
      padding:2px 0;
  }
}
</style>                                       
