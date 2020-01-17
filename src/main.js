import Vue from 'vue'
import App from './App'
import router from './router'
//ant-design-vue  前端框架的引入
import '@/plugins/ant'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
