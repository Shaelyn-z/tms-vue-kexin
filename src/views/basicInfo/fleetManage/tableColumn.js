import {renderCellByDict} from '@/assets/js/formatter'
const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    fixed: 'left',
    customRender: (text, record, index) => index + 1
  }, {
    title: '人员类别',
    dataIndex: 'custType',
    width: 100,
    customRender: value => {
      return renderCellByDict('vehicleType', value)
    }
  }, {
    title: '是否禁用',
    dataIndex: 'cname',
    width: 100,
    scopedSlots: {
      customRender: 'isUse'
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
