const tableColumns = [
  {
    title: '序号',
    type: 'seq',
    minWidth: 50,
    fixed: 'left',
  },
  {
    title: '线路名称',
    field: 'lineName',
    minWidth: 150
  },
  {
    title: '出发地',
    field: 'cname',
    minWidth: 100
  },
  {
    title: '目的地',
    field: 'dengji',
    minWidth: 100
  }, {
    title: '是否禁用',
    field: 'sheng',
    minWidth: 100,
    slots: {
      default: 'isUse'
    }
  }, {
    title: '线路里程(KM)',
    field: 'km',
    minWidth: 120
  }, {
    title: '运费',
    field: 'address',
    minWidth: 200
  }, {
    title: '运费单位',
    field: 'freightUnit',
    minWidth: 100,
    cellRender: { name: 'DictCell', dictCode: 'freightUnit' }
  }, {
    title: '通行路桥费',
    field: 'contact',
    minWidth: 100
  }, {
    title: '油耗费用',
    field: 'tel',
    minWidth: 100
  }, {
    title: '其他费用',
    field: 'r',
    minWidth: 100
  }, {
    title: '预计耗时',
    field: 'cus',
    minWidth: 100
  }, {
    title: '司机提成',
    field: 'isCreate',
    minWidth: 120
  }, {
    title: '备注',
    field: 'remark',
    minWidth: 140,
  }, {
    title: '操作',
    slots: {
      default: 'operation'
    },
    minWidth: 140,
    fixed: 'right'
  }
]

export default tableColumns
