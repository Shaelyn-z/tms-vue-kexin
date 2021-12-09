import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ant from './plugin/ant';
import common from './plugin/common';
import component from './plugin/component';
import api from './api'
import 'ant-design-vue/dist/antd.less';
import '@/assets/css/common.less';
import 'amfe-flexible'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'


Vue.config.productionTip = false

Vue.use(api)
Vue.use(Ant)
Vue.use(common)
Vue.use(component)
Vue.use(VXETable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
