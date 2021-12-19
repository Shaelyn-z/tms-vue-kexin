const tableColumns =
  [
    {
      dataIndex: "numbers",
      title: "序号",
      width: 60,
      sorter: (a, b) => a.numbers.length - b.numbers.length,
    }, {
      dataIndex: "billCode",
      title: "运单单号",
      width: 160,
    }, {
      dataIndex: "billDate",
      title: "单据日期",

      width: 100,
    },
    {
      dataIndex: "appPlancode",
      title: "计划单号",

      width: 160,
    },
    {
      dataIndex: "carrierName",
      title: "承运商",

      width: 180,
    },
    {
      dataIndex: "plateNumber",
      title: "车牌号",

      width: 100,
    }, {
      dataIndex: "holdName",
      title: "车挂号",
      width: 100,
    }, {
      dataIndex: "driverName",
      title: "司机",

      width: 100,
    }, {
      dataIndex: "escortName",
      title: "押运",

      width: 100,
    }, {
      dataIndex: "custName",
      title: "客户",

      width: 140,
    }, {
      dataIndex: "loadImgs",
      // title: "<div title='点击图片可预览' class='title-tip-box'>装卸货图片</div>",
      title: "装卸货图片",
      width: 200,
    }, {
      dataIndex: "takeType",
      title: "销售方式",
      sort: true,

      width: 100,
    }, {
      dataIndex: "purchaseType",
      title: "采购方式",

      width: 140,
      sort: true,
    }, {
      dataIndex: "supplier",
      title: "外采供应商",
      sort: true,
      width: 140,
    }, {
      dataIndex: "totalFreight",
      title: "装货总量",
      width: 100,
      align: "center"
    },
    {
      dataIndex: "totalDischarge",
      title: "卸货总量",
      width: 100,
      align: "center"
    }, {
      dataIndex: "circuit",
      title: "线路",
      width: 200,
      align: "center"
    },
    {
      dataIndex: "departure",
      title: "出发地",
      width: 200,
      align: "center"
    },
    {
      dataIndex: "destination",
      title: "返回地",
      width: 200,
      align: "center"
    },
    {
      dataIndex: "settleUnit",
      title: "运费结算单位",

      sort: true,
      width: 140,
    },
    {
      dataIndex: "planState",
      title: "单据状态",

      width: 100,
    },
    {
      dataIndex: "state",
      title: "计划状态",

      width: 100,
    },
    {
      dataIndex: "gpsStatus",
      title: "gps状态",

      width: 100,
    },
    {
      dataIndex: "isFee",
      title: "是否确定",

      width: 90,
    },
    {
      dataIndex: "businessName",
      title: "业务类型",

      width: 100,
    },
    {
      title: '操作',
      templet: '#tableBar',
      fixed: "right",
      width: 330,
      align: "center"
    }
  ]

export default tableColumns
