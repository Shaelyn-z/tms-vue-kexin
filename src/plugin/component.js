/*
 * @Author: wyz
 * @Date: 2021-12-03 11:21:10
 * @LastEditors: wyz
 * @Description: 注册部分全局可用的通用组件
*/
import CommonDictSelect from '@/components/common/CommonDictSelect'
import CommonDrawer from '@/components/common/CommonDrawer'

export default {
  install(Vue) {
    Vue.component('common-dict-select', CommonDictSelect)
    Vue.component('common-drawer', CommonDrawer)
  }
}