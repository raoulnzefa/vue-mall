<template>
  <div class="us-address-edit us-body">
  	<van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
    />
	<van-address-edit
	  :area-list="areaList"
	  show-postal
	  show-delete
	  show-set-default
	  :area-columns-placeholder="['请选择', '请选择', '请选择']"
	  @save="onSave"
	  @delete="onDelete"
	/>
  </div>
</template>
<script>
import { Toast } from 'vant';
import areaList from '../assets/area/area.js'

export default {
  name: 'AddressEdit',
  components: {
  },
  data() {
    return {
      areaList,
      title: this.id > 0 ? '编辑收货地址' : '新增收货地址',
    }
  },
  props: ['id'],
  methods: {
  	onClickLeft() {
      this.$router.go(-1);
    },
    onSave() {
      this.$router.go(-1);
    },
    onDelete() {
      this.$router.go(-1);
    }
  }
}
</script>