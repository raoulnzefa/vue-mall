<template>
  <div class="goods-detail-image-list">
    <!-- swipe -->
    <van-swipe :autoplay="3000" :height="280">
      <van-swipe-item v-for="(image, index) in imageList" :key="index">
        <van-image 
          fit="contain"
          :src="image" 
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetailImageList',
  data() {
    return {
    }
  },
  props: {
    imageList: Array
  }
}
</script>