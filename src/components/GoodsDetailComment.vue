<template>
  <div class="goods-detail-comment us-padding-h-large us-font-14" style="padding-top:5px;">
    <div class="us-info-title">
      <div class="us-col us-col-6 us-text-left">
        宝贝评价({{count}})
      </div>
      <div class="us-col us-col-6 us-text-right us-color-orange">
        查看全部 <van-icon name="arrow" size="12"/>
      </div>
      <div class="us-clearfix"></div>
    </div>
    <div class="us-info-desc">
       <div class="comment us-text-left us-padding-v-midium">
          <div class="us-comment-title">
            <div class="us-col us-col-1" style="width:auto;margin-right:3px;">
              <van-image
                round
                width="1.5rem"
                height="1.5rem"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
            <div class="us-col us-col-11" style="line-height: 1.7rem;">
              山猫Kate
            </div>
            <div class="us-clearfix"></div>
          </div>
          <div class="us-comment-desc van-multi-ellipsis--l2">
            简简单单的样式，灰色也是百搭耐脏，木头看着也蛮不错。可以选择不同颜色的四件套来变换搭配，卧室应该就很好看了。性价比我觉得还蛮不错的！ 
          </div>
          <div class="us-clearfix"></div>
       </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'GoodsDetailComment',
  data() {
    return {
      count: 80
    }
  },
  props: {
    productId: Number
  },
  methods: {

  }
}
</script>
