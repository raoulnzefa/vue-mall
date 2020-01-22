<template>
  <div class="goods-detail-cell us-padding-large us-font-14">
    <div class="us-col us-col-2 us-text-left">{{ title }}</div>
    <div class="us-col us-col-9 us-text-left">{{ desc }}</div>
    <div class="us-col us-col-1 us-text-right"> <van-icon name="arrow" size="16" /></div>
    <div class="us-clearfix"></div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetailCell',
  data() {
    return {
    }
  },
  props: {
    title: String,
    desc: String,
  }
}
</script>
