import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antDesignVue from './components/antDesignVue';
import api from './api'
import 'ant-design-vue/dist/antd.less';
import 'amfe-flexible'

Vue.config.productionTip = false

Vue.use(antDesignVue)
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
