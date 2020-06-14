import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import shoppingcar from '../views/shoppingcar.vue'
import info from '@/views/goodsInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Home"
    },
    component: Home
  },
  {
    path: '/info/:id',
    name: 'info',
    meta: {
      title: "商品详情",
      hideBottomBar: true
    },
    component: info
  },
  {
    path: '/car',
    name: 'shoppingcar',
    meta: {
      title: "购物车"
    },
    // 路由懒加载方式引入shoppingcar模块
    component: () => import("@/views/shoppingcar.vue"),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      } else {
        alert("需要登录");
        next("/about");
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "个人信息"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
