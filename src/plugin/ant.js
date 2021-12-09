import {
  Menu,
  Button,
  Icon,
  Layout,
  Tabs,
  Tag,
  Dropdown,
  message,
  FormModel,
  Input,
  Select,
  Table,
  ConfigProvider,
  Radio,
  Popconfirm,
  Modal,
  Drawer,
  DatePicker,
  Switch,
  Popover,
  Upload,
  Result,
  Tooltip
} from 'ant-design-vue'

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
    Vue.use(Table)
    Vue.use(Radio)
    Vue.use(Popconfirm)
    Vue.use(ConfigProvider)
    Vue.use(Modal)
    Vue.use(Drawer)
    Vue.use(DatePicker)
    Vue.use(Switch)
    Vue.use(Popover)
    Vue.use(Upload)
    Vue.use(Result)
    Vue.use(Tooltip)
    Vue.prototype.$message = message
  }
}
