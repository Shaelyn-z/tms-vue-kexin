import {renderCellByDict} from '@/assets/js/formatter'
const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    fixed: 'left',
    customRender: (text, record, index) => index + 1
  },
  {
    title: '线路名称',
    dataIndex: 'lineName',
    width: 150
  },
  {
    title: '出发地',
    dataIndex: 'cname',
    width: 100
  },
  {
    title: '目的地',
    dataIndex: 'dengji',
    width: 100
  }, {
    title: '是否禁用',
    dataIndex: 'sheng',
    width: 100,
    scopedSlots: {
      customRender: 'isUse'
    }
  }, {
    title: '线路里程(KM)',
    dataIndex: 'km',
    width: 120
  }, {
    title: '运费',
    dataIndex: 'address',
    width: 200
  }, {
    title: '运费单位',
    dataIndex: 'freightUnit',
    width: 100,
    customRender: value => {
      return renderCellByDict('freightUnit', value)
    }
  }, {
    title: '通行路桥费',
    dataIndex: 'contact',
    width: 100
  }, {
    title: '油耗费用',
    dataIndex: 'tel',
    width: 100
  }, {
    title: '其他费用',
    dataIndex: 'r',
    width: 100
  }, {
    title: '预计耗时',
    dataIndex: 'cus',
    width: 100
  }, {
    title: '司机提成',
    dataIndex: 'isCreate',
    width: 120
  }, {
    title: '备注',
    dataIndex: 'remark',
    width: 140,
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
