const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    fixed: 'left',
    customRender: (text, record, index) => index + 1
  },
  {
    title: '客商类型',
    dataIndex: 'custType',
    width: 100,
    fixed: 'left'
  },
  {
    title: '客商编码',
    dataIndex: 'code',
    width: 100,
    fixed: 'left'
  },
  {
    title: '客商名称',
    dataIndex: 'cname',
    width: 200
  }, {
    title: '客商简称',
    dataIndex: 'shortname',
    width: 100
  }, {
    title: '外文名称',
    dataIndex: 'custName',
    width: 100
  }, {
    title: '审核状态',
    dataIndex: 'status',
    width: 100
  }, {
    dataIndex: 'isUse',
    title: '是否冻结',
    width: 100,
    scopedSlots: {
      customRender: 'isUse'
    }
  }, {
    dataIndex: 'industryName',
    title: '所属行业',
    sorter: (a, b) => a.industryName - b.industryName,
    width: 120
  }, {
    dataIndex: 'areaName',
    title: '所属地区',
    width: 120,
    sorter: (a, b) => a.areaName - b.areaName
  }, {
    dataIndex: 'registFund',
    title: '注册资金(万元)',
    sorter: (a, b) => a.registFund - b.registFund,
    width: 140
  }, {
    dataIndex: 'salemanName',
    title: '专管业务员',
    width: 100
  }, {
    dataIndex: 'creditLine',
    title: '信用额度',
    width: 100
  }, {
    dataIndex: 'freezingDate',
    title: '冻结日期',
    width: 200
  }, {
    dataIndex: 'contactman',
    title: '联系人1',
    width: 100
  }, {
    dataIndex: 'contactman2',
    title: '联系人2',
    width: 100
  }, {
    dataIndex: 'contactPhone',
    title: '联系电话1',
    width: 100
  }, {
    dataIndex: 'contactPhone2',
    title: '联系电话2',
    width: 100
  }, {
    dataIndex: 'contactAddr',
    title: '地址1',
    width: 100
  }, {
    dataIndex: 'contactAddr2',
    title: '地址2',
    width: 100
  }, {
    title: '操作',
    scopedSlots: {
      customRender: 'operation'
    },
    width: 140,
    fixed: 'right'
  }
]

export default tableColumns
