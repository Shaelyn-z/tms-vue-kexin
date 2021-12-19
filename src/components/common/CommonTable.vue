<template>
  <a-table
    bordered
    stripe
    v-bind="$attrs"
    :size="size"
    :row-key="rowKey"
    :columns="columns"
    :loading="loading"
    :data-source="dataSource"
    :customRow="customRow"
    :pagination="pagination"
    :rowSelection="rowSelection"
    @change="handlePaginationChange"
  >
    <template
      v-for="slotItem of columnsSlots"
      :slot="slotItem"
      slot-scope="text, record, index"
    >
      <slot :name="slotItem" v-bind="{ text, record, index }"></slot>
    </template>
    <template slot="operation" slot-scope="text, record, index">
      <slot name="operation" v-bind="{ text, record, index }">
        <a-button @click="handlerEdit(record)" size="small">编辑</a-button>
        <a-popconfirm title="确定删除吗？" @confirm="handlerDelete(record)">
          <a-button type="danger" size="small">删除</a-button>
        </a-popconfirm>
      </slot>
    </template>
  </a-table>
</template>

<script>
import tableMixin from '@/mixins/tableMixin'
export default {
  name: 'CommonTable',
  data() {
    return {}
  },
  props: {
    size: {
      type: String,
      default: 'middle'
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  mixins: [tableMixin],
  computed: {
    columnsSlots() {
      return this.columns.map(
        (item) => item.scopedSlots && item.scopedSlots.customRender
      )
    }
  },
  methods: {
    handlerEdit(record) {
      this.$emit('handlerEdit', record)
    },
    handlerDelete(record) {
      this.$emit('handlerDelete', record)
    }
  }
}
</script>

<style></style>
