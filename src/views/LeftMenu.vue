<template>
  <a-menu
    :default-selected-keys="[currMenu.path || '/index']"
    :default-open-keys="currMenu.pathList"
    mode="inline"
    :selectedKeys="[currMenu.path || '/index']"
    @click="handleClick"
    :inline-collapsed="menuCollapsed"
  >
    <a-menu-item key="/index">首页</a-menu-item>
    <a-sub-menu :key="menu.path" v-for="menu in allMenuList">
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
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  props: {
    menuCollapsed: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.currMenu.path) {
      this.setCurrMenu({ path: '/index' })
      this.addOpenMenu({ path: '/index', name: '首页', closeable: false })
    }
  },
  computed: {
    ...mapState('menu', ['allMenuList', 'currMenu'])
  },
  methods: {
    ...mapMutations('menu', ['setCurrMenu', 'addOpenMenu']),
    /**
     * @description 菜单点击事件
     * @param {*} menu 被点击的菜单对象
     */
    handleClick({ item, key, keyPath }) {
      this.setCurrMenu({ path: key, pathList: keyPath })
      this.addOpenMenu({
        path: key,
        name: item.$el.innerText,
        pathList: keyPath,
        closeable: true
      })
      this.$router.push({ path: key })
    }
  }
}
</script>

<style lang="less" scoped>
.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border: none;
}
</style>
