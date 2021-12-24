<template>
  <div class="ant-combo-grid" @click="handlerWrapClick">
    <a-input-search
      :size="size"
      v-bind="$attrs"
      v-model="selectValue"
      @focus="focusInput"
    />
    <div
      class="ant-pick-panel"
      v-show="showTable"
      :style="{ width: tableWidth }"
    >
      <a-table
        size="small"
        bordered
        :row-key="valueField"
        :data-source="filterTableData"
        :pagination="pagination"
        :scroll="tableScroll"
        :customRow="customRow"
        @change="handleTableChange"
      >
        <a-table-column
          v-for="item in columns"
          :key="item.dataIndex"
          :title="item.title"
          :data-index="item.dataIndex"
        />
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AntComboGrid',
  data() {
    return {
      searchStr: '',
      showTable: false,
      pagination: {
        current: 1,
        pageSize: 15,
        pageSizeOptions: ['15', '25', '50', '100'],
        showTotal: (total, range) => {
          return range[0] + '-' + range[1] + ' 共' + total + '条'
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      tableScroll: {},
      filterTableData: []
    }
  },
  model: {
    props: 'value',
    event: 'update:value'
  },
  props: {
    size: {
      type: String,
      default: 'default'
    },
    value: {
      type: [String, Number]
    },
    valueField: {
      type: String,
      default: 'id'
    },
    labelField: {
      type: String,
      default: 'id'
    },
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    tableWidth: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    selectValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    }
  },
  watch: {
    showTable(val) {
      // 当展示下拉框且tableScroll没有被赋值的时候，才做初始化
      if (val && !this.tableScroll.x) {
        this.$nextTick(() => {
          this.tableScroll = {
            x: document.querySelector('.ant-combo-grid').clientWidth - 30,
            y: document.querySelector('.ant-pick-panel').clientHeight - 100
          }
        })
      }
    },
    selectValue: {
      handler(val) {
        const tableData = JSON.parse(JSON.stringify(this.tableData))
        if (val && this.showTable) {
          this.filterTableData = tableData.filter((item) => {
            return JSON.stringify(item).includes(val)
          })
        } else {
          this.filterTableData = tableData
        }
      },
      immediate: true
    }
  },
  mounted() {
    document.documentElement.addEventListener('click', () => {
      if (this.filterTableData.length === 1) {
        const data = this.filterTableData[0]
        this.selectValue = data[this.labelField]
      }
      this.showTable = false
    })
  },
  methods: {
    focusInput() {
      this.showTable = true
    },
    blurInput() {
      this.showTable = false
    },
    handleTableChange() {},
    handlerWrapClick(e) {
      e.stopPropagation()
    },
    customRow(record) {
      return {
        on: {
          dblclick: () => {
            this.showTable = false
            this.selectValue = record[this.labelField]
          }
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ant-combo-grid {
  position: relative;
}
.ant-pick-panel {
  position: absolute;
  height: 300px;
  top: 40px;
  left: 0;
  box-shadow: @box-shadow-base;
  .ant-table-wrapper {
    margin: 10px;
    /deep/ .ant-pagination {
      margin: 10px 0;
    }
    /deep/ .ant-table-thead {
      background-color: @table-bg-color;
    }
  }
}
</style>
