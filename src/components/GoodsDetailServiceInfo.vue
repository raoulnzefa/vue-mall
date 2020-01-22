<template>
  <van-action-sheet 
    v-model="cShow" 
    title="基础服务" 
    style="padding-top:12px;color:gray;"
  >
    <ul class="us-service-info-list">
      <li class="us-service-info">
        <div class="us-col us-col-1">
          <van-icon name="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" size="18" />
        </div>
        <div class="us-col us-col-11 us-text-left">
          <div class="info-title">付款后20天内发货</div>
          <div class="info-desc"></div>
        </div>
        <div class="us-clearfix"></div>
      </li>
      <li class="us-service-info">
        <div class="us-col us-col-1">
          <van-icon name="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" size="18" />
        </div>
        <div class="us-col us-col-11 us-text-left">
          <div class="info-title">15天退货</div>
          <div class="info-desc">15天退货，退货邮费卖家承担</div>
        </div>
        <div class="us-clearfix"></div>
      </li>
      <li class="us-service-info">
        <div class="us-col us-col-1">
          <van-icon name="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" size="18" />
        </div>
        <div class="us-col us-col-11 us-text-left">
          <div class="info-title">1次破损补寄</div>
          <div class="info-desc">商品在运输途中出现破损的，消费者可向卖家提出补寄申请，可补寄1次，补寄邮费由卖家承担</div>
        </div>
        <div class="us-clearfix"></div>
      </li>
      <li class="us-service-info">
        <div class="us-col us-col-1">
          <van-icon name="//gw.alicdn.com/tfs/TB1O4sFQpXXXXb3apXXXXXXXXXX-200-200.png" size="18" />
        </div>
        <div class="us-col us-col-11 us-text-left">
          <div class="info-title">破损包退</div>
          <div class="info-desc">所售商品在签收时如有商品破损、变形等情形，且在签收后24小时内提供凭证申请退货的，商家承诺进行退货退款处理。
          </div>
        </div>
        <div class="us-clearfix"></div>
      </li>
    </ul>
  </van-action-sheet>
</template>

<script>
export default {
  name: 'GoodsDetailServiceInfo',
  data() {
    return {
    }
  },
  props: {
    show: Boolean
  },
  computed: {
      cShow: {
        get() {
          return this.show;
        },
        set(val) {
          //grants_改变由父组件控制
          this.$emit("update:show", val);
        }
      }
  }
}
</script>

<style lang="less">
.us-service-info-list .us-service-info {
  padding:8px 10px;
}

.us-service-info .info-desc {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 13px;
}
</style>