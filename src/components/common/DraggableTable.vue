<template>
  <div class="draggable-table">
    <vxe-grid
      border
      stripe
      columnKey
      ref="draggableTable"
      class="draggable-table-bd"
      :max-height="maxHeight"
      :columns="columns"
      :data="tableData"
    >
      <template
        v-for="slotItem of columnsSlots"
        :slot="slotItem"
        slot-scope="{ row, $rowIndex, $columnIndex }"
      >
        <slot
          :name="slotItem"
          v-bind="{
            row,
            $rowIndex,
            $columnIndex
          }"
        ></slot>
      </template>
    </vxe-grid>
    <a-pagination
      show-size-changer
      show-quick-jumper
      class="draggable-table-pager"
      size="small"
      v-if="showPager"
      :total="tableData.length"
      @change="onChange"
    />
  </div>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  /**
   * @description 基于vxe-table+sortable组件封装
   * https://xuliangzhan_admin.gitee.io/vxe-table/#/table/other/sortableColumn
   */
  name: 'DraggableTable',
  data() {
    return {
      sortable: null,
      maxHeight: 500
    }
  },
  props: {
    showPager: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    saveColApi: {
      type: String
    }
  },
  computed: {
    columnsSlots() {
      return this.columns.map((item) => item.slots && item.slots.default)
    }
  },
  created() {
    this.columnDrop()
  },
  mounted() {
    // 设置表格最大高度为父容器高度减去表格底部分页工具高度
    this.maxHeight =
      document.querySelector('.draggable-table').clientHeight - 24.5
  },
  beforeDestroy() {
    if (this.sortable) {
      this.sortable.destroy()
    }
  },
  methods: {
    /**
     * @description 初始化表格的拖拽事件
     */
    columnDrop() {
      this.$nextTick(() => {
        const $table = this.$refs.draggableTable
        this.sortable = Sortable.create(
          $table.$el.querySelector(
            '.body--wrapper>.vxe-table--header .vxe-header--row'
          ),
          {
            handle: '.vxe-header--column:not(.col--fixed)',
            onEnd: ({ item, newIndex, oldIndex }) => {
              const { fullColumn, tableColumn } = $table.getTableColumn()
              const targetThElem = item
              const wrapperElem = targetThElem.parentNode
              const newColumn = fullColumn[newIndex]
              if (newColumn.fixed) {
                // 错误的移动
                if (newIndex > oldIndex) {
                  wrapperElem.insertBefore(
                    targetThElem,
                    wrapperElem.children[oldIndex]
                  )
                } else {
                  wrapperElem.insertBefore(
                    wrapperElem.children[oldIndex],
                    targetThElem
                  )
                }
                return this.$message.error('固定列不允许拖动！')
              }
              // 转换真实索引
              const oldColumnIndex = $table.getColumnIndex(
                tableColumn[oldIndex]
              )
              const newColumnIndex = $table.getColumnIndex(
                tableColumn[newIndex]
              )
              // 移动到目标列
              const currRow = fullColumn.splice(oldColumnIndex, 1)[0]
              fullColumn.splice(newColumnIndex, 0, currRow)
              $table.loadColumn(fullColumn)
              this.finishDrag(fullColumn)
            }
          }
        )
      })
    },
    /**
     * @description 监听表格分页事件
     * @param {*} page 当前选中页
     * @param {*} pageSize 每页条数
     */
    onChange(page, pageSize) {
      console.log('Page: ', page, pageSize)
    },
    /**
     * @description 结束拖拽之后调用的方法
     * @param {*} currColumn 拖拽之后表格列的排列数组
     */
    finishDrag(currColumn) {
      // TODO：若提供了保存列的api，则直接调用后台接口保存
      if (this.saveColApi) {
        this.$api('saveColApi')
      } else {
        // TODO：若没有提供，则回传到父组件进行特殊处理
        this.$emit('finishDrag', currColumn)
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .draggable-table-bd .vxe-header--row .vxe-header--column.sortable-ghost,
/deep/
  .draggable-table-bd
  .vxe-header--row
  .vxe-header--column.sortable-chosen {
  background-color: #dfecfb;
}
/deep/ .draggable-table-bd .vxe-header--row .vxe-header--column.col--fixed {
  cursor: no-drop;
}
.draggable-table-pager {
  margin-top: 10px;
  text-align: right;
}
</style>
