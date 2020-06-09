import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home.vue'
import user from '@/views/user/index.vue'
import login from '@/views/login/index.vue'


import info from '@/views/info/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem("token")){
        next();
      }else{
        alert("暂未登录，1s后跳转到登录页");
        setTimeout(() => {
          next("/login");          
        }, 1000);
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/info/:id',
    name: info,
    component: info
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
