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

	<!-- tab -->
	<van-tabs v-model="tabActive" border="false">
	  <van-tab title="推荐"></van-tab>
	  <van-tab title="热卖"></van-tab>
	  <van-tab title="新品"></van-tab>
	  <van-tab title="网红"></van-tab>
	</van-tabs>

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

	<van-grid :gutter="10" style="margin: 10px 0;">
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
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg'
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