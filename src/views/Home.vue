<template>
  <div class="us-home us-body">
  	<!-- search bar -->
	<van-search
	  v-model="searchValue"
	  placeholder="小苹果"
	  show-action
	  clearable
	  left-icon="scan"
	  shape="round"
	  @search="onSearch"
	>
	  <div slot="action" @click="onSearch">搜索</div>
	</van-search>

	<!-- swipe -->
	<van-swipe :autoplay="3000" :height="120">
	  <van-swipe-item v-for="(image, index) in images" :key="index">
	    <van-image 
	    	fit="scale-down"
	    	lazy-load
	    	:src="image" 
	    />
	  </van-swipe-item>
	</van-swipe>

	<van-grid :gutter="12" style="margin: 10px 0;">
	  <van-grid-item
	    icon="photo-o"
	    dot
	    text="数码"
	  />
	  <van-grid-item
	    icon="photo-o"
	    text="服装"
	  />
	  <van-grid-item
	    icon="photo-o"
	    text="食品"
	  />
	  <van-grid-item
	    icon="photo-o"
	    text="玩具"
	  />
	  <van-grid-item
	    icon="photo-o"
	    text="母婴"
	  />
	  <van-grid-item
	    icon="photo-o"
	    text="零食"
	  />
	  <van-grid-item
	    icon="photo-o"
	    text="饮料"
	  />
	  <van-grid-item
	    icon="photo-o"
	    text="水果"
	  />
	</van-grid>

	<home-goods-list />

	<bottom-line />

	<bottom-tab-bar active="0" />
  </div>
</template>

<script>
import HomeGoodsList from '@/components/HomeGoodsList.vue'
import BottomLine from '@/components/BottomLine.vue'
import BottomTabBar from '@/components/BottomTabBar.vue'

export default {
  name: 'index',
  components: {
  	HomeGoodsList,
  	BottomLine,
  	BottomTabBar,
  },
  data() {
    return {
      images: [
        'https://img.alicdn.com/imgextra/i4/144/O1CN017u18at1CvzcHfjX50_!!144-0-luban.jpg',
        'https://img.alicdn.com/imgextra/i4/168/O1CN01txnE861D6z7dDQlgG_!!168-0-luban.jpg',
        'https://img.alicdn.com/simba/img/TB1xRt8uhD1gK0jSZFySuwiOVXa.jpg_q50.jpg',
        'https://gw.alicdn.com/imgextra/i3/104/O1CN01YeZyGj1Cdfm2Fk6MH_!!104-0-lubanu.jpg'
      ],
      tabActive: 0,
      searchValue: ""
    }
  },
  methods: {
    onSearch() {

    },
  }
}
</script>