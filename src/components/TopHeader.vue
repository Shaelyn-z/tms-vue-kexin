<template>
  <header class="top-header">
    <div class="logo">九丰智慧订单平台</div>
    <div class="center">
      <a-icon
        :type="menuCollapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleCollapse"
      />
      <span>欢迎！</span>
    </div>
    <div class="right">
      <div class="left-content">
        <a-icon type="search" @click="expandSearch = !expandSearch" />
        <a-select
          v-if="expandSearch"
          showSearch
          :showArrow="false"
          placeholder="搜索菜单"
        >
          <a-select-option
            v-for="item in flatAllMenuList"
            :key="item.path"
            :value="item.name"
            @click.native="handleChange(item)"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
      </div>
      <a-dropdown class="right-content">
        <a>
          <a-icon type="user" />
          <span>lala, 欢迎您~</span>
        </a>

        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;"><a-icon type="user" />个人中心</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><a-icon type="setting" />账户设置</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><a-icon type="tool" />系统设置</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><a-icon type="key" />密码修改</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>

      <div class="right-content" @click="logout">
        <a-icon type="logout" />
        <span>退出登录</span>
      </div>
    </div>
  </header>
</template>

<script>
import { clearStore } from '@/assets/js/utils'
import { mapState } from 'vuex'
export default {
  name: 'TopHeader',
  data() {
    return {
      expandSearch: false,
      menuSearchStr: null
    }
  },
  props: {
    menuCollapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('menu', ['allMenuList']),
    flatAllMenuList() {
      return this.flatDeep(this.allMenuList)
    }
  },
  methods: {
    toggleCollapse() {
      this.$emit('update:menuCollapsed', !this.menuCollapsed)
    },
    logout() {
      clearStore()
      this.$router.replace('/login')
    },
    handleChange(menu) {
      this.$createTab(menu)
    },
    flatDeep(arr, parentPath = '') {
      const flatArr = []
      arr.forEach((item) => {
        if (item.children) {
          flatArr.push(...this.flatDeep(item.children, item.path))
        } else {
          flatArr.push({
            path: item.path,
            name: item.name,
            pathList: [`${parentPath}`]
          })
        }
      })
      return flatArr
    }
  }
}
</script>

<style lang="less" scoped>
.top-header {
  width: 100%;
  display: flex;
  align-items: center;
  color: @light-text-color;
  font-size: 14px;
  .logo {
    width: 210px;
   text-align: center;
  }
  .logo-expand {
    width: 80px;
  }
  .center {
    flex: 1;
    i {
      font-size: 22px;
      margin-right: 10px;
    }
    span {
      font-size: 14px;
    }
  }
  .right {
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 30px;
    .left-content {
      width: 180px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      i {
        margin-right: 10px;
      }
      /deep/ .ant-select-selection {
        width: 150px;
        background-color: @primary-color;
        border: 0;
        border-bottom: 1px solid #fff;
        .ant-select-selection__placeholder,
        .ant-select-selection-selected-value,
        .ant-select-search__field {
          color: #fff;
        }
      }
    }
    .right-content {
      height: 40px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: @light-text-color;
      i {
        margin-right: 5px;
      }
    }
    .right-content:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
