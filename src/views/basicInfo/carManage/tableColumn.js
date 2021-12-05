const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    fixed: 'left',
    customRender: (text, record, index) => index + 1
  },
  {
    title: "车辆类型",
    dataIndex: "carType",
    width: 90
  },
  {
    dataIndex: "plateNumber",
    title: "车牌号",
    width: 100
  },
  {
    dataIndex: "isUse",
    title: "是否禁用",
    width: 100,
    scopedSlots: {
      customRender: 'isUse'
    }
  }, {
    dataIndex: "isGps",
    title: "跟踪定位",
    width: 100,
    customRender: record => {
      return <a href="javascript:;">{record}</a>;
    }
  }, {
    dataIndex: "useNature",
    title: "使用性质",
    width: 100
  }, {
    dataIndex: "carrierName",
    title: "隶属运营商",
    width: 200
  }, {
    dataIndex: "frameNum",
    title: "车架号",
    width: 180
  }, {
    dataIndex: "engineNum",
    title: "发动机号",
    width: 100
  }, {
    dataIndex: "state",
    title: "状态",
    width: 120
  }, {
    dataIndex: "auditStatus",
    title: "审核状态",
    width: 120
  }, {
    dataIndex: "registDate",
    title: "注册日期",
    width: 100
  }, {
    dataIndex: "issueDate",
    title: "发证日期",
    width: 100
  }, {
    dataIndex: "fileNumber",
    title: "档案编号",
    width: 140
  }, {
    dataIndex: "carryNumber",
    title: "核定载人数",
    width: 100
  }, {
    dataIndex: "ownerName",
    title: "所有人",
    width: 160
  }, {
    dataIndex: "address",
    title: "住址",
    width: 200
  }, {
    dataIndex: "dimension",
    title: "外形尺寸",
    width: 140
  }, {
    dataIndex: "allQuality",
    title: "总质量",
    width: 90
  }, {
    dataIndex: "curbWeight",
    title: "整备质量",
    width: 90
  }, {
    dataIndex: "approvalQuality",
    title: "核定载质量",
    width: 100
  }, {
    dataIndex: "towQuality",
    title: "总牵引总质量",
    width: 120
  }, {
    dataIndex: "checkEnddate",
    title: "检验有效期",
    width: 100
  }, {
    dataIndex: "scrapDate",
    title: "强制报废期",
    width: 100
  }, {
    dataIndex: "mileage",
    title: "总里程",
    width: 90
  }, {
    dataIndex: "isCreate",
    title: "是否创建终端",
    width: 120
  }, {
    title: '操作',
    width: 140,
    fixed: 'right',
    scopedSlots: {
      customRender: 'operation'
    }
  }
]

export default tableColumns
