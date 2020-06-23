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
    path: '/cinema',
    name: "cinema",
    component: () => import('../views/cinema/Cinema.vue')
  },
  {
    path: '/movie',
    name: "movie",
    component: () => import('../views/movie/Movie.vue')
  },
  {
    path: '/profile',
    name: "profile",
    component: () => import('../views/profile/Profile.vue')
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: () => import('../views/ticket/Ticket.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
