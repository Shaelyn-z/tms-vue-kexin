const tableColumns = [
  {
    title: '序号',
    type: 'seq',
    minWidth: 50
  },
  {
    title: '地点编码',
    field: 'code',
    minWidth: 100
  },
  {
    title: '地点名称',
    field: 'cname',
    minWidth: 100
  },
  {
    title: '站点等级',
    field: 'dengji',
    minWidth: 100
  }, {
    title: '省',
    field: 'sheng',
    minWidth: 100
  }, {
    title: '市',
    field: 'shi',
    minWidth: 100
  }, {
    title: '详细地址',
    field: 'address',
    minWidth: 200
  }, {
    title: '是否禁用',
    field: 'isUse',
    minWidth: 100,
    slots: {default: 'isUse'}
  }, {
    title: '联系人',
    field: 'contact',
    minWidth: 100
  }, {
    title: '联系电话',
    field: 'tel',
    minWidth: 100
  }, {
    title: '半径（米）',
    field: 'r',
    minWidth: 100
  }, {
    title: '关联客户',
    field: 'cus',
    minWidth: 100
  }, {
    title: '是否创建围栏',
    field: 'isCreate',
    minWidth: 120
  }, {
    title: '操作',
    slots: {
      default: 'operation'
    },
    minWidth: 140
  }
]

export default tableColumns
