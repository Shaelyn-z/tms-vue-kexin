import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import {message} from 'ant-design-vue'
import {constantRouterMap} from '@/config/router.config'

const routerPush = Router.prototype.push
Router.prototype.push = function (location) {
  routerPush.call(this, location).catch(err => err)
}
Vue.use(Router)

const router = new Router({mode: 'hash', routes: constantRouterMap})

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/login') || Cookies.get('cookie')) {
    next()
  } else {
    // TODO：需要判断token是否存在，假如不存在需要跳转到登录页面
    if (!Cookies.get('cookie')) {
      message.error('请先登录...')
      next('/login')
    }
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

export default router
