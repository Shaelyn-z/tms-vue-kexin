<template>
  <a-menu
    :default-selected-keys="['11']"
    mode="inline"
    @click="handleClick"
    :inline-collapsed="menuCollapsed"
  >
    <a-sub-menu :key="menu.path" v-for="menu in routeList">
      <span slot="title">
        <a-icon :type="menu.icon" /><span>{{ menu.name }}</span>
      </span>

      <a-menu-item :key="subMenu.path" v-for="subMenu in menu.children">
        <a-icon :type="subMenu.icon" />{{ subMenu.name }}
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
import routeList from '@/config/router-mock'
export default {
  data() {
    return {
      current: ['mail'],
      routeList,
    }
  },
  props: {
    menuCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 父节点点击事件
    handleClick(e) {
      this.$router.push({ path: e.key })
      console.log('click', e)
    },
  },
}
</script>

<style lang="less" scoped>
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border: none;
}
</style>
