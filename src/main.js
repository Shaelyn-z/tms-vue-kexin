import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ant from './plugin/ant';
import common from './plugin/common';
import api from './api'
import 'ant-design-vue/dist/antd.less';
import '@/assets/css/common.less';
import 'amfe-flexible'

Vue.config.productionTip = false

Vue.use(Ant)
Vue.use(api)
Vue.use(common)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
