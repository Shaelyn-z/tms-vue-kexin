<template>
  <header class="top-header">
    <div class="logo"></div>
    <div class="center">
      <a-icon
        :type="menuCollapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleCollapse"
      />
      <span>欢迎！</span>
    </div>
    <div class="right">
      <a-icon type="search" />
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

      <div class="right-content">
        <a-icon type="logout" />
        <span>退出登录</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    menuCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleCollapse() {
      this.$emit('update:menuCollapsed', !this.menuCollapsed)
    },
  },
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
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0px 30px;
    .right-content {
      height: 40px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      color: @light-text-color;
      i {
        margin-right: 5px;
      }
    }
    .right-content:hover {
      background: rgba(255, 255, 255, 0.1);
    }
    i {
      margin: 0px 5px;
    }
  }
}
</style>
