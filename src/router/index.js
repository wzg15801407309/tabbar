import vue from 'vue'
import Router from 'vue-router'
import { routerMap } from './routes'

//处理点击当前路由报错
const routerPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}


vue.use(Router);
export default new Router({
  mode:history,
  base:process.env.BASE_URL,
  routes:routerMap
})
