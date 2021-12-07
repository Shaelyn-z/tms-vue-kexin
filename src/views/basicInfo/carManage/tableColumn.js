import { renderCellByDict } from '@/assets/js/formatter'
const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 60,
    customRender: (text, record, index) => index + 1
  },
  {
    title: "车辆类型",
    dataIndex: "carType",
    width: 150,
    customRender: value => {
      return renderCellByDict('vehicleType', value)
    }
  },
  {
    dataIndex: "plateNumber",
    title: "车牌号",
    width: 140
  }, {
    dataIndex: "isGps",
    title: "跟踪定位",
    width: 100,
    scopedSlots: {
      customRender: 'isGps'
    }
  }, {
    dataIndex: "carrierName",
    title: "隶属运营商",
    width: 230
  }, {
    dataIndex: "frameNum",
    title: "车架号",
    width: 180
  }, {
    dataIndex: "state",
    title: "状态",
    width: 120,
    customRender: (text) => {
      return renderCellByDict('basicCarState', text)
    }
  }, {
    dataIndex: "auditStatus",
    title: "审核状态",
    width: 120,
    customRender: (text) => {
      return renderCellByDict('auditStatus', text)
    }
  }, {
    title: '操作',
    width: 160,
    scopedSlots: {
      customRender: 'operation'
    }
  }
]

export default tableColumns
