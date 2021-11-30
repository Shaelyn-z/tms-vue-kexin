<template>
  <a-drawer
    :title="title"
    placement="right"
    :visible="visible"
    @close="close"
    :width="width"
  >
    <slot></slot>
    <slot name="drawer-footer">
      <div class="drawer-footer">
        <a-popconfirm title="确定取消吗?" @confirm="handlerCancel">
          <a-button>取消</a-button>
        </a-popconfirm>
        <a-button type="primary" @click="handlerOk">确定</a-button>
      </div>
    </slot>
  </a-drawer>
</template>

<script>
export default {
  name: 'CommonDrawer',
  data() {
    return {
      labelCol: { span: 5 },
      wrapperCol: { span: 16 }
    }
  },
  props: {
    title: {
      type: String,
      default: 'title'
    },
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 600
    }
  },
  computed: {},
  methods: {
    handlerCancel() {
      this.$emit('handlerCancel')
      this.close()
    },
    handlerOk() {
      this.$emit('handlerOk')
      this.close()
    },
    close() {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="less" scoped>
.drawer-footer {
  display: flex;
  height: 30px;
  justify-content: flex-end;
}
</style>
