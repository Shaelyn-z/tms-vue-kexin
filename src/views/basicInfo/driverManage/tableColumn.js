const tableColumns = [
  {
    title: '序号',
    minWidth: 50,
    fixed: 'left',
    type: 'seq',
  },
  {
    title: '人员类别',
    field: 'personnelType',
    minWidth: 100,
    cellRender: { name: 'DictCell', dictCode: 'personnelType' }
  },
  {
    title: '姓名',
    field: 'name',
    minWidth: 100
  },
  {
    title: '是否禁用',
    field: 'isUse',
    minWidth: 100,
    slots: {
      default: 'isUse'
    }
  }, {
    title: '性别',
    field: 'shortname',
    minWidth: 100
  }, {
    title: '隶属营运商',
    field: 'custName',
    minWidth: 100
  }, {
    title: '手机号',
    field: 'status',
    minWidth: 100
  }, {
    title: '身份证号',
    field: 'id',
    minWidth: 100,
  }, {
    title: '出生日期',
    field: 'industryName',
    minWidth: 120
  }, {
    title: '发证机关',
    field: 'areaName',
    minWidth: 120
  }, {
    title: '身份证住址',
    field: 'registFund',
    minWidth: 150
  }, {
    title: '身份证有效期截止日期',
    field: 'salemanName',
    minWidth: 200
  }, {
    title: '状态',
    field: 'state',
    minWidth: 100,
    cellRender: { name: 'DictCell', dictCode: 'basicDriverState' }
  }, {
    title: '审核状态',
    field: 'freezingDate',
    minWidth: 100
  }, {
    title: '从业资格证件号',
    field: 'contactman',
    minWidth: 150
  }, {
    field: 'contacttype',
    title: '从业资格类别',
    minWidth: 150
  }, {
    title: '从业资格证发证机关',
    field: 'contactPhone',
    minWidth: 150
  }, {
    title: '从业资格证初次发证时间',
    field: 'contactPhone2',
    minWidth: 200
  }, {
    title: '从业资格证有效截止日期',
    field: 'contactAddr',
    minWidth: 200
  }, {
    title: '驾驶证有效期',
    field: 'contactAddr2',
    minWidth: 150
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
