import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage',
    name: 'Manage',
    redirect: '/manage/add',
    component: () => import('../views/Manage.vue'),
    children: [
      {
        path: 'add',
        component: () => import('../views/add.vue')
      },
      {
        path: 'edit',
        component: () => import('../views/edit.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
