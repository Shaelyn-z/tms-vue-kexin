const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    customRender: (text, record, index) => index + 1
  },
  {
    title: '轮胎编码',
    dataIndex: 'code',
    width: 100
  },
  {
    title: '日期',
    dataIndex: 'date',
    width: 100
  },
  {
    title: '是否生效',
    dataIndex: 'isUse',
    width: 100
  }, {
    title: '是否翻新',
    dataIndex: 'isNew',
    width: 100
  }, {
    title: '是否报废',
    dataIndex: 'isBaofei',
    width: 100
  }, {
    title: '轮胎编号',
    dataIndex: 'rireNo',
    width: 100
  }
]

export default tableColumns
