<template>
  <!-- tabbar -->
  <van-tabbar
    class="us-bottom-tab-bar"
    v-model="activeIndex"
    inactive-color="gray"
    @change="onChange"
  >
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="todo-list-o">订单列表</van-tabbar-item>
    <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的淘宝</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Toast } from 'vant';

export default {
  name: 'BottomTabBar',
  data() {
    return {
      activeIndex: this.active !== undefined && this.active != "" ? Number.parseInt(this.active) : 0
    }
  },
  props: {
    active: String
  },
  methods: {
    onChange(index) {
      switch(index) {
        case 0:
          this.$router.push("/");
        break;
        case 1:
          this.$router.push("/orders");
        break;
        case 2:
          this.$router.push("/carts");
        break;
        case 3:
          this.$router.push("/users/home");
        break;
        default:
          Toast("Not Found");
        break;
      }
    }
  }
}
</script>


<style lang="less">
  .us-bottom-tab-bar {
    .van-tabbar {
      height:45px;
    }

    .van-tabbar-item__icon {
      margin-bottom:3px;
      font-size:20px;
    }
  }
</style>>