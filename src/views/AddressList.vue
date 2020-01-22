<template>
  <div class="us-address-list us-body">
    <van-nav-bar
      title="我的收货地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  name: 'AddressList',
  components: {

  },
  data() {
    return {
      chosenAddressId: '2',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
          isDefault: true
        }
      ],
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onAdd() {
      this.$router.push("/addresses/0");
    },
    onEdit(item, index) {
      this.$router.push("/addresses/" + index);
    }
  }
}
</script>