const tableColumns = [
  {
    title: '序号',
    type: 'seq',
    minWidth: 50,
    fixed: 'left'
  },
  {
    title: '客商类型',
    field: 'custType',
    minWidth: 100,
    fixed: 'left'
  },
  {
    title: '客商编码',
    field: 'code',
    minWidth: 100,
    fixed: 'left'
  },
  {
    title: '客商名称',
    field: 'cname',
    minWidth: 200
  }, {
    title: '客商简称',
    field: 'shortname',
    minWidth: 100
  }, {
    title: '外文名称',
    field: 'custName',
    minWidth: 100
  }, {
    title: '审核状态',
    field: 'status',
    minWidth: 100
  }, {
    field: 'isUse',
    title: '是否冻结',
    minWidth: 100,
    scopedSlots: {
      default: 'isUse'
    }
  }, {
    field: 'industryName',
    title: '所属行业',
    minWidth: 120
  }, {
    field: 'areaName',
    title: '所属地区',
    minWidth: 120
  }, {
    field: 'registFund',
    title: '注册资金(万元)',
    minWidth: 140
  }, {
    field: 'salemanName',
    title: '专管业务员',
    minWidth: 100
  }, {
    field: 'creditLine',
    title: '信用额度',
    minWidth: 100
  }, {
    field: 'freezingDate',
    title: '冻结日期',
    minWidth: 200
  }, {
    field: 'contactman',
    title: '联系人1',
    minWidth: 100
  }, {
    field: 'contactman2',
    title: '联系人2',
    minWidth: 100
  }, {
    field: 'contactPhone',
    title: '联系电话1',
    minWidth: 100
  }, {
    field: 'contactPhone2',
    title: '联系电话2',
    minWidth: 100
  }, {
    field: 'contactAddr',
    title: '地址1',
    minWidth: 100
  }, {
    field: 'contactAddr2',
    title: '地址2',
    minWidth: 100
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
