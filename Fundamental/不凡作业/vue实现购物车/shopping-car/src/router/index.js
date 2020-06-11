import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import shoppingcar from '../views/shoppingcar.vue'
import info from '@/views/goodsInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info/:id',
    name: 'info',
    component: info
  },
  {
    path: '/car',
    name: 'shoppingcar',
    component: shoppingcar,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next();
      }else{
        alert("需要登录");
        next("/about");
      }
    }
  },
  {
    path: '/about',
    name: 'About',
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
