const tableColumns = [
  {
    title: '序号',
    type: 'seq',
    minWidth: 60,
  },
  {
    title: "车辆类型",
    field: "carType",
    minWidth: 150,
    cellRender: { name: 'DictCell', dictCode: 'vehicleType' }
  },
  {
    field: "plateNumber",
    title: "车牌号",
    minWidth: 140
  }, {
    field: "isGps",
    title: "跟踪定位",
    minWidth: 100,
    slots: {
      default: 'isGps'
    }
  }, {
    field: "carrierName",
    title: "隶属运营商",
    minWidth: 230
  }, {
    field: "frameNum",
    title: "车架号",
    minWidth: 180
  }, {
    field: "state",
    title: "状态",
    minWidth: 120,
    cellRender: { name: 'DictCell', dictCode: 'basicCarState' }
  }, {
    field: "auditStatus",
    title: "审核状态",
    minWidth: 120,
    cellRender: { name: 'DictCell', dictCode: 'auditStatus' }
  }, {
    title: '操作',
    minWidth: 160,
    slots: {
      default: 'operation'
    }
  }
]

export default tableColumns
