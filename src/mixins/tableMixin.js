export default {
  data() {
    return {
      pagination: {
        current: 1,
        pageSize: 15,
        pageSizeOptions: [ '15', '25', '50', '80' ],
        showTotal: (total, range) => {
          return range[0] + '-' + range[1] + ' 共' + total + '条'
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      }
    }
  },
  computed: {
    tableScroll() {
      this.$nextTick(() => {

        return {
          x: true, 
          y: document.getElementsByClassName('container')[0].clientHeight - this.$refs.tableOperator.clientHeight - this.$refs.searchForm.clientHeight - 55
        }
      })
    }
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
