import { renderCellByDict } from '@/assets/js/formatter'
const tableColumns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 50,
    fixed: 'left',
    customRender: (text, record, index) => index + 1
  },
  {
    title: '人员类别',
    dataIndex: 'personnelType',
    width: 100,
    customRender: value => {
      return renderCellByDict('personnelType', value)
    }
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100
  },
  {
    title: '是否禁用',
    dataIndex: 'isUse',
    width: 100,
    scopedSlots: {
      customRender: 'isUse'
    }
  }, {
    title: '性别',
    dataIndex: 'shortname',
    width: 100
  }, {
    title: '隶属营运商',
    dataIndex: 'custName',
    width: 100
  }, {
    title: '手机号',
    dataIndex: 'status',
    width: 100
  }, {
    title: '身份证号',
    dataIndex: 'id',
    width: 100,
  }, {
    title: '出生日期',
    dataIndex: 'industryName',
    width: 120
  }, {
    title: '发证机关',
    dataIndex: 'areaName',
    width: 120
  }, {
    title: '身份证住址',
    dataIndex: 'registFund',
    width: 150
  }, {
    title: '身份证有效期截止日期',
    dataIndex: 'salemanName',
    width: 200
  }, {
    title: '状态',
    dataIndex: 'state',
    width: 100,
    customRender: value => {
      return renderCellByDict('basicDriverState', value)
    }
  }, {
    title: '审核状态',
    dataIndex: 'freezingDate',
    width: 100
  }, {
    title: '从业资格证件号',
    dataIndex: 'contactman',
    width: 150
  }, {
    dataIndex: 'contacttype',
    title: '从业资格类别',
    width: 150
  }, {
    title: '从业资格证发证机关',
    dataIndex: 'contactPhone',
    width: 150
  }, {
    title: '从业资格证初次发证时间',
    dataIndex: 'contactPhone2',
    width: 200
  }, {
    title: '从业资格证有效截止日期',
    dataIndex: 'contactAddr',
    width: 200
  }, {
    title: '驾驶证有效期',
    dataIndex: 'contactAddr2',
    width: 150
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
