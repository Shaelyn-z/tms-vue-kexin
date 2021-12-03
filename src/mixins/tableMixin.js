export default {
  data() {
    return {
      pagination: {
        current: 1,
        pageSize: 15,
        pageSizeOptions: [
          '15', '25', '50', '80'
        ],
        showTotal: (total, range) => {
          return range[0] + '-' + range[1] + ' 共' + total + '条'
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      tableScroll: {x: true, y: 500},
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      // 通过container - 顶部搜索栏高度 - 顶部按钮栏高度 -
      this.tableScroll = {
        x: true,
        y: document.getElementsByClassName('container')[0].clientHeight - this.$refs.tableOperator.clientHeight - this.$refs.searchForm.clientHeight - 30
      }
    })

  },
  methods: { 
    /**
     * @description 监听表格组件中分页组件的改变
     */
    handlePaginationChange(pagination) {
      this.pagination = pagination
    }
  }
}
