import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import {getStore} from '@/assets/js/utils'
import {message} from 'ant-design-vue'
import {constantRouterMap} from './router.config'

const routerPush = Router.prototype.push
Router.prototype.push = function (location) {
  routerPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const router = new Router({mode: 'hash', routes: constantRouterMap})

router.beforeEach((to, from, next) => {
  const currMenu = getStore('currMenu', 'object')
  if (to.path.startsWith('/login')) {
    next()
  } else if (!Cookies.get('cookie')) {
    message.error('请先登录...')
    next('/login')
  } else if (currMenu.path && currMenu.path !== to.path) {
    // 如果从浏览器输入，
    message.error('输入路径无效...')
    next(currMenu.path)
  } else {
    next()
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

export default router
