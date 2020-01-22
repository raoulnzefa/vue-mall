<template>
  <van-grid 
    class="us-home-goods-list" 
    :border="false" 
    :column-num="2" 
    :gutter="12" 
  >
    <van-grid-item @click="goDetail(3)" v-for="(goods, index) in goodsList" :key="index">
      <div class="us-img-box">
        <img :src="goods.image" />
      </div>
      <div class="us-text us-padding-h-midium">
         <div class="us-text-caption van-multi-ellipsis--l2">{{ goods.caption }}</div>
         <div class="us-text-price us-padding-v-large">
          <span class="us-color-red">¥ {{ goods.price }}</span>
          <span class="us-color-gray us-font-12" style="margin-left:5px;">{{ goods.orderCount }} 人已购买</span>
        </div>
      </div>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  name: 'homeGoodsList',
  data() {
    return {
      goodsList : [
        {
          id: 3,
          image: "https://gw.alicdn.com/bao/uploaded/i1/1723390247/TB2q5k6nxPI8KJjSspfXXcCFXXa_!!1723390247.jpg_500x500q90.jpg_.webp",
          caption: "天屿磁悬浮地球仪发光自转办公室装饰摆件创意生日礼品男生礼物",
          price: 56,
          orderCount: 9,
        },
        {
          id: 4,
          image: "https://gw.alicdn.com/bao/uploaded/i4/2470503866/O1CN01mYXetP1eQflfx4u8V_!!2470503866.jpg_500x500q90.jpg_.webp",
          caption: "新中式相思木实木长方形圆形茶盘面包板原木质托盘餐盘茶托民宿用",
          price: 2888,
          orderCount: 56,
        },
        {
          id: 1,
          image: "https://gw.alicdn.com/bao/uploaded/i2/1657614521/O1CN0132ILC21jGfC5MVO5j_!!0-item_pic.jpg_500x500q90.jpg_.webp",
          caption: "北欧日式黑胡桃木穿衣镜落地镜实木框试衣镜壁挂全身卧室家具良年",
          price: 2800,
          orderCount: 100,
        },
        {
          id: 2,
          image: "//gw.alicdn.com/bao/uploaded/i4/56528085/TB2yns.uRyWBuNkSmFPXXXguVXa_!!56528085.jpg_500x500q90.jpg_.webp",
          caption: "北欧简约全棉四件套 小猫字母刺绣水洗棉床上用品纯棉床笠式4件套",
          price: 1900,
          orderCount: 1754,
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

<style type="text/css">
.us-home-goods-list .van-grid-item__content {
  padding: 0;
  background-color:#f2f2f2;
}

.us-home-goods-list .us-img-box {
  height: 190px;
  width:100%;
}

.us-home-goods-list .us-img-box img {
  height: 100%;
  width: 100%;
  border-radius:10px 10px 0 0;
}

.us-home-goods-list .us-text {
  background-color: #fff;
  text-align:left;
  border-radius:0 0 10px 10px;
}

.us-text-caption {
  padding-top:15px;
  font-size:14px;
}
</style>