const tableColumns = [
  {
    title: '序号',
    type: 'seq',
    minWidth: 50
  },
  {
    title: '对象类型',
    field: 'custType',
    minWidth: 100,
    cellRender: { name: 'DictCell', dictCode: 'vehicleType' }
  },
  {
    title: '证件对象',
    field: 'cname',
    minWidth: 100
  }, {
    title: '证件类型',
    field: 'type',
    minWidth: 100
  }, {
    title: '是否生效',
    field: 'isUse',
    minWidth: 100,
    slots: {
      default: 'isUse'
    }
  }, {
    title: '办证日期',
    field: 'date',
    minWidth: 100
  }, {
    title: '证件生效日期',
    field: 'edate',
    minWidth: 100
  }
]

export default tableColumns
