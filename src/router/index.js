import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GoodsDetail from '../views/GoodsDetail.vue'
import UserHome from '../views/UserHome.vue'
import AddressList from '../views/AddressList.vue'
import AddressEdit from '../views/AddressEdit.vue'
import OrderList from '../views/OrderList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  //goods
  {
    path: '/goods/:id',
    name: 'goodsDetail',
    component: GoodsDetail
  },

  //user
  {
    path: '/users/home',
    name: 'UserHome',
    component: UserHome
  },

  //address
  {
    path: '/addresses',
    name: 'addressList',
    component: AddressList
  },
  {
    path: '/addresses/:id',
    name: 'addressEdit',
    component: AddressEdit
  },

  //order
  {
    path: '/orders',
    name: 'orderList',
    component: OrderList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
