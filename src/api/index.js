import axios from '../axios'
import api from './api'
import {message} from 'ant-design-vue'

export default {
  install(Vue) {
    Vue.prototype.$api = (apiName, data) => {
      if (!api[apiName]) {
        message.error('接口未定义，请检查')
        return
      }
      const {url, method} = api[apiName]
      return axios({
        url,
        method,
        [method === 'GET' ? 'params' : 'data']: data
      })
    }
  }
}
