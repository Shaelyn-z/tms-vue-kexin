const tableColumns = [
  {
    title: '序号',
    type: 'seq',
    minWidth: 50
  },
  {
    title: '轮胎编码',
    field: 'code',
    minWidth: 100
  },
  {
    title: '日期',
    field: 'date',
    minWidth: 100
  },
  {
    title: '是否生效',
    field: 'isUse',
    minWidth: 100,
    slots: {
      default: 'isUse'
    }
  }, {
    title: '是否翻新',
    field: 'isNew',
    minWidth: 100
  }, {
    title: '是否报废',
    field: 'isBaofei',
    minWidth: 100
  }, {
    title: '轮胎编号',
    field: 'rireNo',
    minWidth: 100
  }
]

export default tableColumns
