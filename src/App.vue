<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
