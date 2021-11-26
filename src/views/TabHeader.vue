<template>
  <div class="tab-header">
    <div
      :class="[{ 'is-active': $route.path === item.path }, 'tabs-tag']"
      @contextmenu.prevent="openContextMenu($event, item)"
      v-for="(item, index) in openMenuList"
      :key="item.id"
      @click="openThisMenu(item)"
    >
      <span>{{ item.name }}</span>
      <a-icon
        v-if="item.closeable"
        type="close"
        @click.stop="closeThisMenu(item, index)"
      ></a-icon>
    </div>

    <ul
      v-show="visible"
      :style="{ left: `${left}px`, top: `${top}px` }"
      class="context-menu"
    >
      <li @click="doRefresh"><a-icon type="reload" />刷新</li>
      <li @click="closeMenu('left')"><a-icon type="arrow-left" />关闭左侧</li>
      <li @click="closeMenu('right')"><a-icon type="arrow-right" />关闭右侧</li>
      <li @click="closeMenu('others')"><a-icon type="close" />关闭其他</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'TabHeader',
  data() {
    return {
      visible: false,
      left: 0,
      top: 0,
      clickContextTab: {}
    }
  },
  computed: {
    ...mapState('menu', ['openMenuList'])
  },
  mounted() {
    document.documentElement.onclick = () => (this.visible = false)
  },
  methods: {
    ...mapMutations('menu', ['deleteOpenMenu', 'setCurrMenu']),
    /**
     * @description 打开右键菜单
     * @param {*} e 右键元素
     * @param {*} tab 当前右键的菜单项
     */
    openContextMenu(e, tab) {
      this.left = e.clientX
      this.top = e.clientY
      this.visible = true
      this.clickContextTab = tab
    },
    /**
     * @description 点击打开某个菜单
     * @param {*} menu 菜单项
     */
    openThisMenu(menu) {
      this.setCurrMenu(menu)
      this.$router.push({ path: menu.path })
    },
    /**
     * @description 刷新当前页
     */
    doRefresh() {
      this.$router.go(0)
    },
    /**
     * @description 关闭当前菜单页
     * @param {*} item 当前菜单项
     * @param {*} index 当前菜单页索引
     */
    closeThisMenu(item, index) {
      this.deleteOpenMenu(Object.assign({ type: 'this' }, item))
      this.$router.push({ path: this.openMenuList[index - 1].path })
    },
    /**
     * @description 关闭某部分打开的菜单
     * @param {*} type 类型，left-关闭左侧；right-关闭右侧；others-关闭其他
     */
    closeMenu(type) {
      this.deleteOpenMenu(Object.assign({ type }, this.clickContextTab))
      this.$router.push({ path: this.clickContextTab.path })
    }
  }
}
</script>

<style lang="less" scoped>
.tab-header {
  height: 50px;
  display: flex;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background: white;
  align-items: center;
  padding: 2px 10px 4px 10px;
  .tabs-tag {
    height: 42px;
    line-height: 42px;
    padding: 0px 24px;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    i {
      display: none;
    }
  }
  .tabs-tag:hover {
    span {
      color: @primary-color;
    }
    i {
      display: block;
      position: absolute;
      top: 14px;
      right: 2px;
    }
  }
  .tabs-tag.is-active {
    span {
      color: @primary-color;
    }
    border-bottom: 1px solid @primary-color;
  }

  .context-menu {
    width: 120px;
    height: 180px;
    z-index: 3000;
    font-size: 14px;
    position: absolute;
    list-style-type: none;
    background: white;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    padding: 5px;
    li {
      padding: 10px 10px;
      i {
        margin-right: 10px;
      }
    }
    li:hover {
      cursor: pointer;
      background: #eee;
    }
  }
}
</style>
