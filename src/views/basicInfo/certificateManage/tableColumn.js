import {renderCellByDict} from '@/assets/js/formatter'
const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    customRender: (text, record, index) => index + 1
  },
  {
    title: '对象类型',
    dataIndex: 'custType',
    width: 100,
    customRender: value => {
      return renderCellByDict('vehicleType', value)
    }
  },
  {
    title: '证件对象',
    dataIndex: 'cname',
    width: 100
  }, {
    title: '证件类型',
    dataIndex: 'type',
    width: 100
  }, {
    title: '是否生效',
    dataIndex: 'isUse',
    width: 100,
    scopedSlots: {
      customRender: 'isUse'
    }
  }, {
    title: '办证日期',
    dataIndex: 'date',
    width: 100
  }, {
    title: '证件生效日期',
    dataIndex: 'edate',
    width: 100
  }
]

export default tableColumns
