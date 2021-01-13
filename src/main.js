import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import base from './base'
import './assets/css/base.less'
import './assets/css/order.less'
import './assets/css/goods.less'
import './assets/css/cart.less'

import {
	Search,
	Swipe,
	SwipeItem,
	Image,
	Lazyload,
	Grid,
	GridItem,
	Tab,
	Tabs,
	Tabbar,
	TabbarItem,
	Row,
	Col,
	Tag,
	Icon,
	NavBar,
	Toast,
	GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Cell,
    CellGroup,
    ActionSheet,
    Divider,
    AddressList,
    AddressEdit,
    Area,
    Panel,
    Button,
    Checkbox,
    CheckboxGroup,
    Stepper,
    SubmitBar,
} from 'vant';

Vue.config.productionTip = false

Vue.use(base)

Vue.use(Search)
	.use(Swipe)
	.use(SwipeItem)
	.use(Image)
	.use(Lazyload)
	.use(Grid)
	.use(GridItem)
	.use(Tab)
	.use(Tabs)
	.use(Tabbar)
	.use(TabbarItem)
	.use(Row)
	.use(Col)
	.use(Tag)
	.use(Icon)
	.use(NavBar)
	.use(Toast)
	.use(GoodsAction)
	.use(GoodsActionIcon)
	.use(GoodsActionButton)
	.use(Cell)
	.use(CellGroup)
	.use(ActionSheet)
	.use(Divider)
	.use(AddressList)
	.use(AddressEdit)
	.use(Area)
	.use(Panel)
	.use(Button)
	.use(Checkbox)
	.use(CheckboxGroup)
	.use(Stepper)
	.use(SubmitBar)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
