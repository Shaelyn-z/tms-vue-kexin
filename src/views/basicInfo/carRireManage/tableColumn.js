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
    fixed: 'left',
    editOption: {
      required: true,
      type: 'select',
      dict: 'custType'
    }
  },
  {
    title: '客商编码',
    dataIndex: 'code',
    width: 100,
    fixed: 'left',
    editOption: {
      required: true,
      type: 'input'
    }
  },
  {
    title: '客商名称',
    dataIndex: 'cname',
    width: 200,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    title: '客商简称',
    dataIndex: 'shortname',
    width: 100,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    title: '外文名称',
    dataIndex: 'custName',
    width: 100,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    title: '审核状态',
    dataIndex: 'status',
    width: 100,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    dataIndex: 'isUse',
    title: '是否冻结',
    width: 100,
    scopedSlots: {
      customRender: 'isUse'
    },
    editOption: {
      required: true,
      type: 'select',
      dict: 'yesOrNo'
    }
  }, {
    dataIndex: 'industryName',
    title: '所属行业',
    sorter: (a, b) => a.industryName - b.industryName,
    width: 120,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    dataIndex: 'areaName',
    title: '所属地区',
    width: 120,
    sorter: (a, b) => a.areaName - b.areaName,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    dataIndex: 'registFund',
    title: '注册资金(万元)',
    sorter: (a, b) => a.registFund - b.registFund,
    width: 140,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    dataIndex: 'salemanName',
    title: '专管业务员',
    width: 100,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    dataIndex: 'creditLine',
    title: '信用额度',
    width: 100,
    editOption: {
      required: true,
      type: 'input'
    }
  }, {
    dataIndex: 'freezingDate',
    title: '冻结日期',
    width: 200,
    editOption: {
      required: true,
      type: 'dateRange',
      defaultValue: []
    }
  }, {
    dataIndex: 'contactman',
    title: '联系人1',
    width: 100,
    editOption: {
      type: 'input'
    }
  }, {
    dataIndex: 'contactman2',
    title: '联系人2',
    width: 100,
    editOption: {
      type: 'input'
    }
  }, {
    dataIndex: 'contactPhone',
    title: '联系电话1',
    width: 100,
    editOption: {
      type: 'input'
    }
  }, {
    dataIndex: 'contactPhone2',
    title: '联系电话2',
    width: 100,
    editOption: {
      type: 'input'
    }
  }, {
    dataIndex: 'contactAddr',
    title: '地址1',
    width: 100,
    editOption: {
      type: 'input'
    }
  }, {
    dataIndex: 'contactAddr2',
    title: '地址2',
    width: 100,
    editOption: {
      type: 'input'
    }
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
