<template>
  <div id="layout">
    <top-header class="header" :menuCollapsed.sync="menuCollapsed"></top-header>
    <aside :class="menuCollapsed ? 'asider-expand' : 'asider'">
      <left-menu :menuCollapsed="menuCollapsed"></left-menu>
    </aside>
    <main class="content">
      <tab-header></tab-header>
      <div class="content-body">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu'
import TopHeader from '@/components/TopHeader'
import TabHeader from '@/components/TabHeader'
import { mapMutations } from 'vuex'
export default {
  name: 'Index',
  components: {
    TopHeader,
    LeftMenu,
    TabHeader
  },
  data() {
    return {
      menuCollapsed: false
    }
  },
  watch: {
    /**
     * @description 监听路由的变更，把当前菜单存放在store中
     * @param {*} to 目的路由地址的相关字段
     */
    $route(to) {
      this.setCurrMenu({
        path: to.path,
        pathList: to.matched.map((item) => item.path)
      })
    }
  },
  methods: {
    ...mapMutations('menu', ['setCurrMenu'])
  }
}
</script>

<style lang="less" scoped>
#layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  .header {
    background-color: @primary-color;
    width: 100%;
    height: 60px;
    padding: 0;
  }
  .asider {
    width: 210px;
    height: calc(100% - 60px);
    background-color: white;
  }
  .asider-expand {
    width: 80px;
    height: calc(100% - 60px);
    background-color: white;
  }
  .content {
    width: calc(100% - 210px);
    height: calc(100% - 60px);
    background: #f0f2f5;
    .content-body {
      margin: 10px;
      height: calc(100% - 70px);
      background-color: white;
    }
  }
}
</style>
