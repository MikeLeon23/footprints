import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/base.css'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
  // 将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例.
  // 下面这种书写方式和上面这行是等价的
  // render: function(createElement){
  //   return createElement(App)
  // }
}).$mount('#app')
