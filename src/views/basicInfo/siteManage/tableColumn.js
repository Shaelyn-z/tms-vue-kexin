const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    customRender: (text, record, index) => index + 1
  },
  {
    title: '地点编码',
    dataIndex: 'code',
    width: 100
  },
  {
    title: '地点名称',
    dataIndex: 'cname',
    width: 100
  },
  {
    title: '站点等级',
    dataIndex: 'dengji',
    width: 100
  }, {
    title: '省',
    dataIndex: 'sheng',
    width: 100
  }, {
    title: '市',
    dataIndex: 'shi',
    width: 100
  }, {
    title: '详细地址',
    dataIndex: 'address',
    width: 200
  }, {
    title: '是否禁用',
    dataIndex: 'isUse',
    width: 100,
    scopedSlots: {customRender: 'isUse'}
  }, {
    title: '联系人',
    dataIndex: 'contact',
    width: 100
  }, {
    title: '联系电话',
    dataIndex: 'tel',
    width: 100
  }, {
    title: '半径（米）',
    dataIndex: 'r',
    width: 100
  }, {
    title: '关联客户',
    dataIndex: 'cus',
    width: 100
  }, {
    title: '是否创建围栏',
    dataIndex: 'isCreate',
    width: 120
  }, {
    title: '操作',
    scopedSlots: {
      customRender: 'operation'
    },
    width: 140
  }
]

export default tableColumns
