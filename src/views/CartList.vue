<template>
  <div class="us-cart-list us-body">
    <div class="us-cart-list_header us-background-theme us-padding-large">
      <van-row class="us-padding-v-large">
        <van-col class="us-text-left us-font-h4 us-font-bold" span="12">购物车({{ count }})</van-col>
        <van-col class="us-text-right" span="12">管理</van-col>
      </van-row>
      <div class="us-text-left us-font-h6 us-margin-bottom-large">共{{ goodsCount }}件宝贝</div>
      <van-image
        fit="contain"
        lazy-load
        :src="image" 
      />
    </div>
    <div class="us-cart-list_body us-padding-large">
      <cart 
        v-for="(cartInfo, index) in cartList" :key="index" :cart-info="cartInfo"
      />
    </div>

    <van-submit-bar
      :price="3050"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>

    <br/>
    <br/>
    <bottom-tab-bar active="2" />

    <under-layer />
  </div>
</template>
<script>
import BottomTabBar from '@/components/BottomTabBar.vue'
import UnderLayer from '@/components/UnderLayer.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'CartList',
  components: {
    BottomTabBar,
    UnderLayer,
    Cart,
  },
  data() {
  	return {
      count: 2,
      goodsCount: 5,
      image: "https://gw.alicdn.com/tfs/TB120euuxD1gK0jSZFKXXcJrVXa-1071-216.png",
      checkAll: false,
      cartList: [
        {
          id: 1,
          shop: {
            id: 301,
            name: "也丽旗舰店"
          },
          goodsList: [
            {
              id: 21,
              caption: "纯色棉麻墙布无缝壁布家用现代简约客厅卧室高档壁纸电视背景墙纸",
              image: "https://img.alicdn.com/imgextra/i2/2201287159014/O1CN017y6sFL2GSSh8G4W0J_!!2201287159014.jpg_200x200.jpg",
              price: 660,
              amount: 1,
              attributes: "卡其色-L码",
              feature: "七天无理由退换",
            }
          ]  
        },
        {
          id: 2,
          shop: {
            id: 302,
            name: "小鱼儿的店"
          },
          goodsList: [
            {
              id: 22,
              caption: "车载手机支架无线充电器汽车导航出风口自动感应通用苹果华为车用",
              image: "https://img.alicdn.com/imgextra/i2/725108714/O1CN01NphujP2EF3tEnoUva_!!0-item_pic.jpg_200x200.jpg",
              price: 5.90,
              amount: 2,
              attributes: "极速发货",
              feature: "公益捐赠0.01元",
            },
            {
              id: 23,
              caption: "欧式真皮沙发组合客厅 小户型123轻奢黑檀色实木雕花整装奢华家具",
              image: "https://img.alicdn.com/imgextra/i4/2790824257/O1CN01694vAg1hJkbTYuvSB_!!2790824257.jpg_200x200.jpg",
              price: 80,
              amount: 1,
              attributes: "定制款;组合",
              feature: "公益捐赠0.02元",
            }
          ]  
        },
      ],
  	}
  },
  watch: {
    checkAll: function(newCheckAll, oldCheckAll) {
      if (newCheckAll == true) {

      }
    },
  },
  methods: {
    onSubmit() {

    },
    onCheck(cartId, productId, status) {

    },
  }
}
</script>