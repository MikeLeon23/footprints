import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// normalize.css的作用类似于reset.css, 现在还不了解，为什么连使用了之后ul里面还有padding: 40px
// import '@/assets/css/normalize.css' 
import '@/assets/css/reset.css'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

// 使用了vant之后，直接用vant内置的swiper就行了，没必要再引入swiper
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// Vue.use(VueAwesomeSwiper)

// 每次路由跳转之前，执行守卫函数，改写页面title
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
