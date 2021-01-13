<template>
  <div class="us-order-address us-border-radius">
    <van-row>
      <van-col span="3" class="us-order-address_icon">
        <van-icon 
          name="https://gw.alicdn.com/tfs/TB17gX2wYvpK1RjSZPiXXbmwXXa-128-128.png_70x70q90_.webp" 
          size="2rem"
        />
      </van-col>
      <van-col span="21" class="us-order-address_text">
        <van-cell :border="false">
          <span class="us-order-address_name">{{ info.name }}</span>
          <span class="us-order-address_mobile">{{ info.mobile }}</span>
        </van-cell>
        <van-cell class="us-order-address_address" is-link :border="false">
          {{ info.address }}
        </van-cell>
        <van-cell class="us-order-address_remark" :border="false">
          {{ remark }}
        </van-cell>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'OrderAddress',
  data() {
    return {
      info: this.address
    }
  },
  props: {
    address: Object,
    remark: String
  },
  methods: {

  }
}
</script>                                          
