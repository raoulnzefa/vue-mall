<template>
  <!-- personal center page -->
  <div class="us-user-home us-body">
    <div class="us-top">
      <div>
        <div class="us-col us-col-2">
          <van-image
            round
            width="3.5rem"
            height="3.5rem"
            src="https://user-gold-cdn.xitu.io/2020/1/13/16f9cac8b47cbf0a?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1"
            style="margin-top:0.5rem;"
          />
        </div>
        <div class="us-col us-col-6 us-text-left">
          <span class="us-user-name">大圣乌蒙</span>
        </div>
        <div class="us-col us-col-4 us-text-right">
            <van-icon name="user-o" size="1.5rem" style="margin-right:1.5rem;"/>
            <van-icon name="setting-o" size="1.5rem" />
        </div>
        <div class="us-clearfix"></div>
      </div>
      <van-row class="us-top-tab us-padding-v-large us-font-14">
        <van-col span="6">
          <div class="us-top-tab-count">0</div>
          <div class="us-top-tab-name">收藏夹</div>
        </van-col>
        <van-col span="6">
          <div class="us-top-tab-count">5</div>
          <div class="us-top-tab-name">关注店铺</div>
        </van-col>
        <van-col span="6">
          <div class="us-top-tab-count">2</div>
          <div class="us-top-tab-name">足迹</div>
        </van-col>
        <van-col span="6">
          <div class="us-top-tab-count">10</div>
          <div class="us-top-tab-name">红包卡券</div>
        </van-col>
      </van-row>
    </div>

    <div class="us-middle us-padding-large">
      <panel>
        <div slot="header">
          <van-cell
            class="us-cell"
            title="我的订单" 
            value="查看全部订单"
            is-link
            size="large"
            title-class="us-title"
            value-class="us-value"
            @click="gotoOrderPage"
          />
        </div>
        <div class="us-order us-padding-v-large">
         <div class="us-order-status-span" v-for="(orderStatus, index) in orderStatusList" :key="index">
          <div>
            <van-icon 
              :name="orderStatus.icon" 
              size="30"
              :info="orderStatus.info"
            />
          </div>  
          <div>{{ orderStatus.title }}</div>
         </div>
         <div class="us-clearfix"></div>
        </div>
      </panel>

      <panel>
        <div slot="header">
          <van-cell
            class="us-cell"
            title="必备工具" 
            value="查看全部工具"
            is-link
            size="large"
            title-class="us-title"
            value-class="us-value"
            @click="gotoToolPage"
          />
        </div>
        <div class="us-tool">
         <div class="us-tool-span" v-for="tool in toolList">
          <div>
            <van-icon 
              :name="tool.icon" 
              size="30"
            />
          </div>  
          <div>{{ tool.title }}</div>
         </div>
         <div class="us-clearfix"></div>
        </div>
      </panel>
    </div>

     <bottom-tab-bar active="3" />

     <under-layer />
  </div>
</template>

<script>
import Panel from '@/components/Panel.vue'
import BottomTabBar from '@/components/BottomTabBar.vue'
import UnderLayer from '@/components/UnderLayer.vue'

export default {
  name: 'UserHome',
  components: {
    Panel,
    BottomTabBar,
    UnderLayer,
  },
  data() {
  	return {
        orderStatusList: [
          {
            "icon": "https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp",
            "title": "待付款",
            "count": 1,
            "info": "1",
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp",
            "title": "待发货",
            "count": 102,
            "info": "99+",
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp",
            "title": "待收货",
            "count": 5,
            "info": "5",
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp",
            "title": "评价",
            "count": 1,
            "info": "1",
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp",
            "title": "退款/售后",
            "count": 0,
            "info": "",
          },
        ],
        toolList: [
          {
            "icon": "https://gw.alicdn.com/tfs/TB1Jcbkj4D1gK0jSZFsXXbldVXa-96-96.png_70x70q90_.webp",
            "title": "每日返现",
            "link": "/", 
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB1zT0hkkT2gK0jSZPcXXcKkpXa-96-96.png_70x70q90_.webp",
            "title": "领券中心",
            "link": "/", 
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB14QMupYj1gK0jSZFuXXcrHpXa-96-96.png_70x70q90_.webp",
            "title": "闲置换钱",
            "link": "/", 
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB1csUri13tHKVjSZSgXXX4QFXa-96-96.png_70x70q90_.webp",
            "title": "客服小蜜",
            "link": "/", 
          },
          {
            "icon": "https://gw.alicdn.com/tps/TB1rhCFPXXXXXa1XVXXXXXXXXXX-96-96.png_70x70q90_.webp",
            "title": "花呗",
            "link": "/", 
          },
          {
            "icon": "https://img.alicdn.com/tfs/TB1oNN1bBv0gK0jSZKbXXbK2FXa-96-96.png_70x70q90_.webp",
            "title": "菜鸟驿站",
            "link": "/", 
          },
          {
            "icon": "https://img.alicdn.com/tfs/TB1zVfpj2b2gK0jSZK9XXaEgFXa-96-96.png_70x70q90_.webp",
            "title": "天猫农场",
            "link": "/", 
          },
          {
            "icon": "https://gw.alicdn.com/tfs/TB1q0T8mpOWBuNjy0FiXXXFxVXa-96-96.png_70x70q90_.webp",
            "title": "主题换肤",
            "link": "/", 
          },
        ]
  	}
  },
  methods: {
     gotoOrderPage() {
      this.$router.push("/orders");
     },
     gotoToolPage() {
      this.$router.push("/tools");
     }
  }
}
</script>


<style lang="less">
.us-user-home .us-user-name {
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 5px;
}

.us-user-home .us-top-tab .us-top-tab-count {
  padding:5px 0;
}

.us-user-home .us-top {
  color:white;
  padding:25px 12px 18px 12px;
  background-color: rgb(251, 85, 31);
}

.us-user-home {
  background-color: #f2f2f2;
}

.us-user-home .us-order {
  text-align: center;
  padding-top:10px;
}

.us-user-home .us-order-status-span {
  float:left;
  font-size: 14px;
  width:20%;
}

.us-user-home .us-order-status-span .van-info {
  background-color:rgb(251, 85, 31);
}

.us-user-home .us-tool {
  .us-user-home .us-order;
}

.us-user-home .us-tool-span {
  .us-user-home .us-order-status-span;
  width : 25%;
  margin-bottom:15px;
}

.us-user-home .us-middle .us-cell {
  padding:0;
}

.us-user-home .us-middle .us-title {
  text-align:left;
  font-weight:bold;
}

.us-user-home .us-middle .us-value {
  font-size:13px;
}
</style>>