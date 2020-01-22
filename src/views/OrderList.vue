<template>
  <div class="us-order-list us-body">
    <!-- tab -->
    <van-tabs 
      v-model="tabActive" 
      border="false" 
      sticky="true"
      title-active-color="rgb(255, 80, 0)"
    >
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="待评价"></van-tab>
    </van-tabs>

    <van-search
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

    <bottom-tab-bar active="1" />

    <under-layer />
  </div>
</template>
<script>
import BottomTabBar from '@/components/BottomTabBar.vue'
import UnderLayer from '@/components/UnderLayer.vue'

export default {
  name: 'OrderList',
  components: {
    BottomTabBar,
    UnderLayer,
  },
  data() {
  	return {
      tabActive: 0,
      searchValue: "",
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
  .us-order-list .van-search__content {
    background-color: #fff;
  }

  .us-order-list .van-search .van-cell {
    line-height: 20px;
  }
</style>