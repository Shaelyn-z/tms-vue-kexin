import {Menu,Button, Icon, Layout, Tabs, Tag, Dropdown, message, FormModel, Input, Select} from 'ant-design-vue'

export default {
  install(Vue) {
    Vue.use(Menu)
    Vue.use(Button)
    Vue.use(Icon)
    Vue.use(Layout)
    Vue.use(Tabs)
    Vue.use(Tag)
    Vue.use(Dropdown)
    Vue.use(FormModel)
    Vue.use(Input)
    Vue.use(Select)
    Vue.prototype.$message = message
  }
}
