import vue from 'vue'
import {
  Button
} from 'ant-design-vue'
vue.use(Button)

Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error

