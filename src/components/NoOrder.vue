<template>
  <div class="us-no-order">
    <div class="us-no-order_img-box">
      <img src="https://img.alicdn.com/tfs/TB1vJ_.vTqWBKNjSZFxXXcpLpXa-330-330.png">
    </div>
    <div class="us-font-h4 us-margin-top-midium">您还没有相关的订单</div>
    <div class="us-font-h6 us-color-gray us-margin-top-midium">可以去看看有哪些想买的</div>
    <div class="us-no-order_button-box">
      <van-button round type="warning" size="small" to="/">随便逛逛</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoOrder',
  data() {
    return {
    }
  },
  props: {
    msg: String
  },
  methods: {

  }
}
</script>

<style lang="less">
  .us-no-order {
    text-align: center;
    padding-top:120px;

    > div {
      margin-left: auto;
      margin-right: auto;
    }

    .us-no-order_img-box {
      width:85px;

      img {
        width: 100%;
      }
    }

    .us-no-order_button-box {
      margin-top:40px;
    }

    .van-button--small {
      padding: 0 18px;
    }

  }
</style>>                                           
