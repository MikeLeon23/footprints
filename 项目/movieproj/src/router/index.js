import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: "home",
    component: Home
  },
  {
    path: '/category',
    name: "category",
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/shopcart',
    name: "shopcart",
    component: () => import('../views/shopcart/Shopcart.vue')
  },
  {
    path: '/profile',
    name: "profile",
    component: () => import('../views/profile/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
