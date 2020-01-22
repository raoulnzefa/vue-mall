<template>
  <!-- 订单 -->
  <div class="us-order" :style="getStyle()"></div>
</template>

<script>
/**
 * Props
 *
 * :order-id Number,  order ID optional，
 * :order-ifno Object, order information, optional, 
 */
export default {
  name: 'Order',
  data() {
    return {
    }
  },
  props: {
    orderId: Number,
    orderInfo: Object,
  },
  methods: {
    getStyle() {
      var style = "";
      if (!this.emptyString(this.image)) {
        style = this.appendStyle(style, "background-image", 'url("' + this.image + '")');
        style = this.appendStyle(style, "background-size", "100%");
        style = this.appendStyle(style, "background-repeat", "no-repeat");
      }
      if (!this.emptyString(this.background)) {
        style = this.appendStyle(style, "background-color", this.background);
      } else {
        if (this.emptyString(this.image)) {
          style = this.appendStyle(style, "background-color", "#f2f2f2");
        }
      }
      style = this.appendStyle(style, "z-index", this.zIndex);
      return style;
    }
  }
}
</script>    

<style type="text/css">
  .us-under-layer {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
</style>>                                          
