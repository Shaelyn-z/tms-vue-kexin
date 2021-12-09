<template>
  <a-menu
    :default-selected-keys="[currMenu.path || '/index']"
    :default-open-keys="currMenu.pathList"
    :selectedKeys="[currMenu.path || '/index']"
    :openKeys.sync="currMenu.pathList"
    :inline-collapsed="menuCollapsed"
    @click="handleClick"
    mode="inline"
  >
    <a-menu-item :key="menu.path" v-for="menu in menuList">
      <a-icon :type="menu.icon" />
      <span>{{ menu.name }}</span>
    </a-menu-item>
    <a-sub-menu :key="menu.path" v-for="menu in subMenuList">
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
      this.addOpenMenu({ path: '/index', name: '首页', closable: false })
    }
  },
  computed: {
    ...mapState('menu', ['allMenuList', 'currMenu']),
    menuList() {
      return this.allMenuList
        .filter((item) => !item.children)
        .sort((pre, next) => {
          return pre.sort - next.sort
        })
    },
    subMenuList() {
      return this.deepSortMenu(this.allMenuList.filter((item) => item.children))
    }
  },
  methods: {
    ...mapMutations('menu', ['setCurrMenu', 'addOpenMenu']),
    /**
     * @description 菜单点击事件
     * @param {*} menu 被点击的菜单对象
     */
    handleClick({ item, key, keyPath }) {
      this.$createTab({
        path: key,
        name: item.$el.innerText,
        pathList: keyPath
      })
    },
    /**
     * @description 根据菜单的sort字段进行排序
     * @param {Array} list 菜单数组
     * @return {Array} sortList 排序后的菜单数组
     */
    deepSortMenu(list) {
      list.forEach(
        (item) =>
          item.children && (item.children = this.deepSortMenu(item.children))
      )
      return list.sort((pre, next) => {
        return pre.sort - next.sort
      })
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
