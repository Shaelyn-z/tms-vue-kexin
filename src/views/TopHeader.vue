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
    <div class="right"></div>
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
  .logo {
    width: 210px;
  }
  .logo-expand {
    width: 80px;
  }
  .center {
    color: white;
    i {
      font-size: 22px;
      margin-right: 10px;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>
