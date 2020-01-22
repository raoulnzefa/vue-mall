<template>
  <div class="us-order-list us-body">
    <!-- tab -->
    <van-tabs 
      v-model="tabActive" 
      :border="false" 
      :sticky="true"
      title-active-color="rgb(255, 80, 0)"
    >
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="待评价"></van-tab>
    </van-tabs>

    <van-search
      class="us-order-list-search"
      v-model="searchValue"
      placeholder="搜索全部订单"
      show-action
      clearable
      left-icon="search"
      shape="round"
      background="#f2f2f2"
      @search="onSearch"
      style="line-height: 18px;"
    >
      <van-button 
        slot="action" 
        round 
        type="warning" 
        size="small"
        @click="onSearch"
      >
      搜索
      </van-button>
    </van-search>

    <div class="us-order-list-box us-padding-h-large">
      <order class="us-order-box" v-for="(orderInfo, index) in orderList" :key="index" :order-info="orderInfo" />
    </div>

    <br/>
    <br/>

    <bottom-tab-bar active="1" />

    <under-layer />
  </div>
</template>
<script>
import BottomTabBar from '@/components/BottomTabBar.vue'
import UnderLayer from '@/components/UnderLayer.vue'
import Order from '@/components/Order.vue'


export default {
  name: 'OrderList',
  components: {
    BottomTabBar,
    UnderLayer,
    Order,
  },
  data() {
  	return {
      tabActive: 0,
      searchValue: "",
      orderList: [
        {
          id: 1,
          shop: {
            id: 301,
            name: "也丽旗舰店"
          },
          amount:5,
          total:3000,
          status: 1,
          goodsList: [
            {
              id: 21,
              caption: "纯色棉麻墙布无缝壁布家用现代简约客厅卧室高档壁纸电视背景墙纸",
              image: "https://img.alicdn.com/imgextra/i2/2201287159014/O1CN017y6sFL2GSSh8G4W0J_!!2201287159014.jpg_200x200.jpg",
              price: 660,
              amount: 5,
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
      ]
  	}
  },
  props: {
    status: {
      type: String,
      status: "-1",
    }
  },
  methods: {
    onSearch() {

    },
  }
}
</script>

<style type="text/css">
  .us-order-list {
    background-color: #f2f2f2;
  }
  .us-order-list-search .van-search__content {
    background-color: #fff;
  }

  .us-order-list-search .van-cell {
    line-height: 20px;
  }
</style>