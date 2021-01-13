<template>
  <panel class="us-cart">
    <van-row slot="header">
      <van-col span="2">
        <van-checkbox v-model="checkedAll"></van-checkbox>
      </van-col>
      <van-col span="22">
        <van-cell
          class="us-cart_cell"
          icon="https://gw.alicdn.com/tfs/TB1LmH7SXXXXXXYXFXXXXXXXXXX-63-63.png_50x50_.webp"
          :title="info.shop.name" 
          value="领券"
          size="large"
          title-class="us-cart_title"
          value-class="us-cart_value"
        />
      </van-col>
    </van-row>

    <van-row>
      <van-col span="2" style="margin-top:2.2rem;">
        <van-checkbox v-model="checked"></van-checkbox>
      </van-col>
      <van-col span="22">
        <div class="us-cart_goods-list">
          <van-row class="us-cart_goods" v-for="(goods, goodsIndex) in info.goodsList" :key="goodsIndex">
            <van-col span="7" class="us-text-left">
              <van-image width="4.5rem" height="4.5rem" radius="5px":src="goods.image"/>
            </van-col>

            <van-col span="17" class="us-cart_goods-desc us-text-left us-font-h5">
              <div class="van-multi-ellipsis--l2">{{ goods.caption }}</div>
              <div class="us-color-gray">{{ goods.attributes }}</div>

              <van-row class="us-color-orange">
                <van-col span="10">
                  ¥ {{ goods.price }}
                </van-col>

                <van-col span="14" class="us-text-right">
                  <van-stepper
                    v-model="goods.amount"
                    min="1" 
                    max="9999"
                    :integer="true"
                    button-size="20px"
                  />
                </van-col>
              </van-row>
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
  </panel>
</template>

<script>
/**
 * Props
 *
 * :cart-ifno Object, order information, optional, 
 */
import Panel from '@/components/Panel.vue'

export default {
  name: 'Cart',
  components: {
    Panel,
  },
  data() {
    return {
      info: this.cartInfo,
      checkedAll: false,
      checked: false,
    }
  },
  props: {
    cartInfo: Object,
  },
  methods: {
  }
}
</script>                                          
