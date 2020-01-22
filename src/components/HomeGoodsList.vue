<template>
  <div class="home-goods-list">
    <van-grid :border="false" :column-num="2" class="us-grid">
      <van-grid-item @click="goDetail(3)" v-for="(goods, index) in goodsList" :key="index">
        <div class="us-img-container">
          <img :src="goods.image" />
        </div>
        <div class="us-text-container">
          <div class="van-multi-ellipsis--l2 us-font-14">{{ goods.caption }}</div>
          <div class="van-ellipsis us-padding-v-large">
            <div class="us-col us-col-6 us-color-red">¥{{ goods.price }}</div>
            <div class="us-col us-col-6 us-cart">
              <van-icon name="shopping-cart-o" color="red" size="24"/>
            </div>
          </div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'homeGoodsList',
  data() {
    return {
      goodsList : [
        {
          id: 3,
          image: "https://img.yzcdn.cn/vant/apple-3.jpg",
          caption: "俄罗斯进口紫皮趟KDV巧克力糖果100g起婚庆喜糖零食小吃",
          price: 56,
        },
        {
          id: 4,
          image: "https://img.alicdn.com/imgextra/i1/2468513451/TB27R9ugsbI8KJjy1zdXXbe1VXa_!!2468513451.png_640x640q80_.webp",
          caption: "【亏本促销】带皮要过含罐250g炭烧越南腰果",
          price: 2888,
        },
        {
          id: 1,
          image: "https://img.yzcdn.cn/vant/apple-1.jpg",
          caption: "俄罗斯进口紫皮趟KDV巧克力糖果100g起婚庆喜糖零食小吃",
          price: 2800,
        },
        {
          id: 2,
          image: "https://img.yzcdn.cn/vant/apple-2.jpg",
          caption: "【亏本促销】带皮要过含罐250g炭烧越南腰果",
          price: 1900,
        },
      ]
    }
  },
  methods: {
    goDetail(id) {
      this.$router.push('/goods/' + id);
    }
  }
}
</script>

<style lang="less">
.us-grid .us-img-container {
  height: 150px;
  width:100%;
}

.us-grid .van-grid-item .van-grid-item__content {
  padding: 8px 8px;
}

.us-grid .us-img-container img {
  height: 100%;
  width:auto;
}

.us-grid .us-text-container {
  width:100%;
  padding: 6px 8px 0 8px;
  text-align:left;
}

.us-text-container .us-cart {
  text-align:right;
  padding-right:6px;
}
</style>