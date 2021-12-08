<template>
  <a
    :class="[type ? `a-link--${type}` : '', disabled && 'is-disabled']"
    :href="disabled ? null : href"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default">
      <slot></slot>
    </span>

    <template v-if="$slots.icon">
      <slot v-if="$slots.icon" name="icon"></slot>
    </template>
  </a>
</template>

<script>
export default {
  name: 'ALink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    href: String,
    icon: String
  },

  methods: {
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.a-link--danger {
  color: #ff5722;
}
</style>
