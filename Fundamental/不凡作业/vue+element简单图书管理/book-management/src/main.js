import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 这里创建vue实例的方式，就是默认选择runtime-only方式（只有render没有template），而不是runtime+compiler方式
new Vue({
  router,
  store,
  /* 
  当使用render函数描述虚拟DOM时，vue提供一个函数，这个函数是就构建虚拟DOM所需要的工具。
  官网上给他起了个名字叫createElement。还有约定它的简写叫h 
  */
  render: h => h(App)
}).$mount('#app')

// 上面的写法等效于：
// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })
// 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。
// 可以使用 vm.$mount() 手动地挂载一个未挂载的实例。