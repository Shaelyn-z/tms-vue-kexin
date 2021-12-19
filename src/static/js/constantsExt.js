/*
 * @Author: wyz
 * @Date: 2021-12-01 21:17:03
 * @LastEditors: wyz
 * @Description: 页面通用常量定义
*/
const constantsExt = {
  // 系统参数管理
  // 是否分配装货地；
  // （考虑到物流公司可以兼顾贸易业务，可自主安排装货地）
  // 2）是否允许外部承运；
  // 3）装卸车数据延后录入；（默认为否）；2021-03-28添加
  // 4）磅单是否必须上传；（默认为是）；2021-03-28添加
  // 5）是否必须录入装货信息；（默认为是）2021-04-08添加
  // 6）任务是否通知驾押人员；（默认为是）
  sysParamName: {
    ISDISTRIBUTE: {
      value: 'ISDISTRIBUTE',
      text: '是否分配装货地'
    },
    ISOUTCARRIER: {
      value: 'ISOUTCARRIER',
      text: '是否允许外部承运'
    },
    ISDELAYDATA: {
      value: 'ISDELAYDATA',
      text: '装卸车数据延后录入'
    },
    ISREQUPLOADPIC: {
      value: 'ISREQUPLOADPIC',
      text: '磅单是否必须上传'
    },
    ISREQLOADDATA: {
      value: 'ISREQLOADDATA',
      text: '是否必须录入装货信息'
    },
    ISNOTICEDRIVER: {
      value: 'ISNOTICEDRIVER',
      text: '任务是否通知驾押人员'
    },
    AMAPKEY: {
      value: 'AMAPKEY',
      text: '高德地图对接所需要用到的标识'
    },
    ISOPENGPS: {
      value: 'ISOPENGPS',
      text: '是否启动GPS跟踪模块'
    },
    DISPATCHERLINK: {
      value: "DISPATCHERLINK",
      text: "调度员联系方式"
    }
  },
  // 用户管理 人员类型
  userType: {
    employee: {
      value: 1,
      text: "内部员工",
      color: '#011f80'
    },
    customer: {
      value: 2,
      text: "客商",
      color: '#011f80'
    },
    driver: {
      value: 3,
      text: "司机押运",
      color: '#011f80'
    }
  },
  // 线路分析生成线路情况
  lineCreateState: {
    notGen: {
      value: 0,
      text: "未生成",
      color: '#011f80'
    },
    hasGen: {
      value: 1,
      text: "已生成",
      color: '#011f80'
    },
    awaitGen: {
      value: 3,
      text: "待生成",
      color: '#011f80'
    }
  },
  // 运单计划子表状态
  planDetailStatus: {
    // 初始、运单确认、司机确认、已装货、已卸货、装卸货确认、已结算
    newadd: {
      value: -1,
      text: '新增',
      color: '#023880'
    },
    create: {
      value: 0,
      text: '待调度',
      color: '#011f80'
    },
    planconfirm: {
      value: 5,
      text: '已调度',
      color: '#6d8013'
    },
    driverConfirm: {
      value: 10,
      text: '司机确认',
      color: '#800d1e'
    },
    loadGoods: {
      value: 15,
      text: '已装货',
      color: '#800d1e'
    },
    arrive: {
      value: 18,
      text: '已到达',
      color: '#008c7f'
    },
    releaseGood: {
      value: 20,
      text: '已卸货',
      color: '#800d1e'
    },
    goodsComplete: {
      value: 23,
      text: '已完成待审核',
      color: '#800d1e'
    },
    confirm: {
      value: 25,
      text: '装卸货确认',
      color: '#008000'
    },
    settle: {
      value: 30,
      text: '已结算',
      color: '#008000'
    },
    pause: {
      value: 35,
      text: '终止',
      color: '#008000'
    }
  },
  gpsStatus: {
    // gps状态 0 装货中、5运输中、10卸货中、15卸货完成
    initStatus: {
      value: -1,
      text: '待裝货',
      color: '#011f80'
    },
    loading: {
      value: 0,
      text: '装货中',
      color: '#011f80'
    },
    transport: {
      value: 5,
      text: '运输中',
      color: '#6d8013'
    },
    unloading: {
      value: 10,
      text: '卸货中',
      color: '#800d1e'
    },
    finish: {
      value: 15,
      text: '卸货完成',
      color: '#008000'
    }
  },
  planState: { // 新增、已确认、终止、已完成；
    create: {
      value: 0,
      text: '新增',
      color: '#011f80'
    },
    confirm: {
      value: 5,
      text: '已确认',
      color: '#6d8013'
    },
    pause: {
      value: 10,
      text: '终止',
      color: '#800d1e'
    },
    finish: {
      value: 15,
      text: '已完成',
      color: '#008000'
    }
  },

  // 装卸货信息-类型
  waybillLoadType: {
    load: {
      value: 1,
      text: '装货',
      color: '#011f80'
    },
    unload: {
      value: 2,
      text: '卸货',
      color: '#011f80'
    },
    unkown: {
      value: 3,
      text: '无',
      color: '#6d8013'
    }
  },
  // 客商类型
  custType: [
    {
      value: 1,
      text: "客户",
      prefix: 'KH',
      color: '#061376'
    }, {
      value: 2,
      text: "供应商",
      prefix: 'GY',
      color: '#76052d'
    }, {
      value: 3,
      text: "承运商",
      prefix: 'CY',
      color: '#09762d'
    }, {
      value: 4,
      text: "客商",
      prefix: 'KS',
      color: '#590776'
    },
  ],
  // 运费单位
  freightUnit: {
    ton: {
      value: 1,
      text: "吨",
      color: '#061376'
    },
    trip: {
      value: 2,
      text: "趟",
      color: '#76052d'
    }
  },
  // 人员类别
  personnelType: {
    driver: {
      value: 1,
      text: "司机",
      color: '#061376'
    },
    escort: {
      value: 2,
      text: "押运",
      color: '#76052d'
    }
  },
  // 驾押人员状态 0空闲、5待命、10出车、15检修、20停用
  basicDriverState: {
    freedom: {
      value: 0,
      text: "空闲",
      color: '#077621'
    },
    oncall: {
      value: 5,
      text: "待命",
      color: '#760d27'
    },
    outCarry: {
      value: 10,
      text: "出车",
      color: '#650676'
    },
    repair: {
      value: 15,
      text: "休息",
      color: '#041776'
    },
    pause: {
      value: 20,
      text: "停用",
      color: '#760817'
    }
  },
  // 车辆类型
  vehicleType: {
    car: {
      value: 1,
      text: "车头",
      color: '#077621'
    },
    trailer: {
      value: 2,
      text: "车挂",
      color: '#760d27'
    }
  },
  // 车辆基础状态
  basicCarState: {
    freedom: {
      value: 0,
      text: "空闲",
      color: '#077621'
    },
    oncall: {
      value: 5,
      text: "待命",
      color: '#760d27'
    },
    outCarry: {
      value: 10,
      text: "出车",
      color: '#650676'
    },
    repair: {
      value: 15,
      text: "检修",
      color: '#041776'
    },
    pause: {
      value: 20,
      text: "停用",
      color: '#760817'
    }
  },
  // 表单审批状态 单据状态
  auditStatus: {
    newCreate: {
      value: 0,
      text: "新增",
      color: '#041776'
    },
    audit: {
      value: 5,
      text: "审核",
      color: '#077637'
    },
    /*abandon : {value : 10 , text: "弃审", color : '#760b27'},*/
  },
  restFormStatus: {
    newCreate: {
      value: 0,
      text: "新增",
      color: '#041776'
    },
    audit: {
      value: 5,
      text: "审核",
      color: '#764a02'
    },
    pause: {
      value: 10,
      text: "终止",
      color: '#760b27'
    }
  },
  // 休息状态
  restStatus: {
    on: {
      value: 1,
      text: '生效',
      color: '#008000'
    },
    close: {
      value: 2,
      text: '失效',
      color: '#1c0680'
    }
  },
  // 休息类型
  restType: {
    leave: {
      value: 1,
      text: '休假',
      color: '#008000'
    },
    tired: {
      value: 5,
      text: '疲倦',
      color: '#80041b'
    },
    other: {
      value: 10,
      text: '其他',
      color: '#1c0680'
    }
  },
  // 出车单 组合状态
  vehicleState: {
    single: {
      value: 0,
      text: '单人',
      color: '#806e5b'
    },
    twin: {
      value: 5,
      text: '双人',
      color: '#806706'
    },
    matchPlan: {
      value: 10,
      text: '已匹配计划',
      color: '#80021b'
    },
    drawOut: {
      value: 15,
      text: '已出车',
      color: '#3b0680'
    },
    finish: {
      value: 20,
      text: '完成',
      color: '#228018'
    }
  },
  // 人车状态变更类型
  dataChangeType: {
    person: {
      value: 1,
      text: '人员',
      color: '#3b0680'
    },
    car: {
      value: 2,
      text: '车辆',
      color: '#228018'
    }
  },
  // 人车状态变更新状态
  userCarNewState: {
    freedom: {
      value: 0,
      text: "空闲",
      color: '#077621'
    },
    oncall: {
      value: 5,
      text: "待命",
      color: '#760d27'
    },
    outCarry: {
      value: 10,
      text: "出车",
      color: '#650676'
    },
    repair: {
      value: 15,
      text: "休息",
      color: '#041776'
    }
  },
  // 检修类型 检查、维修、保养、其他
  checkType: {
    check: {
      value: 1,
      text: "检查",
      color: '#077621'
    },
    repair: {
      value: 2,
      text: "维修",
      color: '#760d27'
    },
    maintennance: {
      value: 3,
      text: "保养",
      color: '#650676'
    },
    other: {
      value: 4,
      text: "其他",
      color: '#041776'
    }
  },
  // 检修状态
  carRepairStatus: {
    repairting: {
      value: 1,
      text: "进行中",
      color: '#76051a'
    },
    finish: {
      value: 2,
      text: "完成",
      color: '#077621'
    }
  },
  // 数据字典取参常量
  sysDict: {
    wayPlanUnit: {
      value: "YDJHDW",
      text: "运单计划单位"
    },
    businessType: {
      value: "YWLX",
      text: "业务类型"
    },
    accessoryName: {
      value: "PJMC",
      text: "配件名称"
    },
    areaType: {
      value: "DDLX",
      text: "地点类型"
    },
    taskType: {
      value: "RWLX",
      text: "任务类型"
    },
    industry: {
      value: "SSHY",
      text: "所属行业"
    },
    region: {
      value: "SSDQ",
      text: "所属地区"
    },
    fareType: {
      value: "FYLX",
      text: "费用类型"
    },
    fareItem: {
      value: "FYXM",
      text: "费用项目"
    },
    repairItem: {
      value: "JXXM",
      text: "检修项目"
    },
    repairType: {
      value: "JXLX",
      text: "检修类型"
    },
    workType: {
      value: "CARGZ",
      text: "检修类型"
    },
    goodName: {
      value: "HWMC",
      text: "货物名称"
    },
    areaTypeMt: {
      value: "DDLX_MT",
      text: "码头"
    },
    saleCompany: {
      value: "XSGS",
      text: "销售公司"
    }
  },
  // 短信模板通知类型, 运单计划运输、司机未按时接收任务、司机未按时上传装卸货数据
  smsNoticeType: {
    waybillPlan: {
      value: 1,
      text: "运单计划运输",
      color: "#041776"
    },
    receiveTask: {
      value: 2,
      text: "司机未按时接收任务",
      color: "#760725"
    },
    uploadData: {
      value: 3,
      text: "司机未按时上传装卸货数据",
      color: "#760725"
    }
  },
  // 副驾角色
  ecortRole: {
    driver: {
      value: 1,
      text: '司机',
      color: "#157613"
    },
    escortor: {
      value: 2,
      text: '押运',
      color: "#0a5776"
    }
  },
  gpsType: {
    normal: {
      value: 1,
      text: "通用型",
      color: "red"
    },
    special: {
      value: 2,
      text: "指定路线型",
      color: "#157613"
    }
  },
  posids: {
    dispatch: {
      value: '402880e87946e0e2017946e3b71d0001',
      text: "调度员职位"
    }
  },

  // 余额控制
  balanceCtrl: {
    transAccount: {
      value: '1',
      color: '#061376',
      text: "转账"
    },
    debtOrder: {
      value: '2',
      color: '#76052d',
      text: "欠款出库"
    },
    debtOutWarehouse: {
      value: '3',
      color: '#09762d',
      text: "欠款下单"
    }
  },
  // 证件类型
  certificateType: {},
  //
  supplier: {
    customer: {
      value: 1,
      text: "客户1",
      prefix: 'KH',
      color: '#061376'
    },
    supplier: {
      value: 2,
      text: "客户2",
      prefix: 'GY',
      color: '#76052d'
    },
    carrier: {
      value: 3,
      text: "客户3",
      prefix: 'CY',
      color: '#09762d'
    },
    merchants: {
      value: 4,
      text: "客户4",
      prefix: 'KS',
      color: '#590776'
    }
  },
  // 销售采购订单类型
  purchaseType: {
    sale: {
      value: 1,
      text: '销售'
    },
    purchase: {
      value: 2,
      text: '采购'
    }
  },
  // 销售方式
  takeGoodType: {
    selfmen: {
      value: 1,
      text: "自提",
      color: '#061376'
    },
    distribution: {
      value: 2,
      text: "配送",
      color: '#061376'
    }
  },
  // 采购销售订单页面跳转类型
  orderPageType: {
    sale: {
      value: 1,
      text: '销售'
    },
    purchase: {
      value: 2,
      text: '采购'
    }
  },
  // 配送
  orderAuditState: {
    newCreate: {
      value: 0,
      text: "新增",
      color: '#041776'
    },
    subAudit: {
      value: 5,
      text: "送审",
      color: '#2c6676'
    },
    audit: {
      value: 10,
      text: "审核",
      color: '#077637'
    }
  },

  // 车头轮胎位置 ; num 序号
  carFrontTireArea: {
    firstLeft: {
      value: 'first_left',
      text: '第一轴左',
      num: 1
    },
    firstRight: {
      value: 'first_right',
      text: '第一轴右',
      num: 2
    },
    secondLeftInside: {
      value: 'second_left_inside',
      text: '第二轴左内',
      num: 3
    },
    secondLeftOutside: {
      value: 'second_left_outside',
      text: '第二轴左外',
      num: 4
    },
    secondRightInside: {
      value: 'second_right_inside',
      text: '第二轴右内',
      num: 5
    },
    secondRightOutside: {
      value: 'second_right_outside',
      text: '第二轴右外',
      num: 6
    },
    thirdLeftInside: {
      value: 'third_left_inside',
      text: '第三轴左内',
      num: 7
    },
    thirdLeftOutside: {
      value: 'third_left_outside',
      text: '第三轴左外',
      num: 8
    },
    thirdRightInside: {
      value: 'third_right_inside',
      text: '第三轴右内',
      num: 9
    },
    thirdRightOutside: {
      value: 'third_right_outside',
      text: '第三轴右外',
      num: 10
    }
  },

  // 车挂轮胎位置; num 序号
  carTrailerTireArea: {
    fourthLeftInside: {
      value: 'fourth_left_inside',
      text: '第四轴左内',
      num: 1
    },
    fourthLeftOutside: {
      value: 'fourth_left_outside',
      text: '第四轴左外',
      num: 2
    },
    fourthRightInside: {
      value: 'fourth_right_inside',
      text: '第四轴右内',
      num: 3
    },
    fourthRightOutside: {
      value: 'fourth_right_outside',
      text: '第四轴右外',
      num: 4
    },
    fifthLeftInside: {
      value: 'fifth_left_inside',
      text: '第五轴左内',
      num: 5
    },
    fifthLeftOutside: {
      value: 'fifth_left_outside',
      text: '第五轴左外',
      num: 6
    },
    fifthRightInside: {
      value: 'fifth_right_inside',
      text: '第五轴右内',
      num: 7
    },
    fifthRightOutside: {
      value: 'fifth_right_outside',
      text: '第五轴右外',
      num: 8
    },
    sixthLeftInside: {
      value: 'sixth_left_inside',
      text: '第六轴左内',
      num: 9
    },
    sixthLeftOutside: {
      value: 'sixth_left_outside',
      text: '第六轴左外',
      num: 10
    },
    sixthRightInside: {
      value: 'sixth_right_inside',
      text: '第六轴右内',
      num: 11
    },
    sixthRightOutside: {
      value: 'sixth_right_outside',
      text: '第六轴右外',
      num: 12
    }
  },
  // 配送中心计划下单类型
  planOrderType: {
    pickupType: {
      value: 1,
      text: '货单',
      color: '#011f80'
    },
    transType: {
      value: 2,
      text: '运单',
      color: '#178039'
    },
    /*wayPlanType: {value: 3, text: '运单计划'}*/
  },

  // 提货、运输计划状态: 新增、待审批、已审批、待审批(变更)、已审批(变更)、已取消
  planAuditStatus: {
    newCreate: {
      value: 0,
      text: '新增',
      color: '#011f80'
    },
    waitAudit: {
      value: 5,
      text: '待审批',
      color: '#804c6c'
    },
    audited: {
      value: 10,
      text: '已审批',
      color: '#178039'
    },
    changeToAudit: {
      value: 15,
      text: '待审批(变更)',
      color: '#803f0a'
    },
    changeAudited: {
      value: 20,
      text: '已审批(变更)',
      color: '#228044'
    },
    cancel: {
      value: 25,
      text: '已取消',
      color: '#807780'
    },
    invalid: {
      value: 30,
      text: '失效',
      color: '#807780'
    }
  },
  // 提货、运输计划跳转类型
  planPageType: {
    pickupType: {
      value: 1,
      text: '提货计划下单'
    },
    transType: {
      value: 2,
      text: '客户运输计划下单'
    }
  },
  // 提货下单跟合同价格订单类型
  consProdDataType: {
    delivery: {
      value: 1,
      text: '提货下单',
      color: '#9c8c34'
    },
    contract: {
      value: 2,
      text: '合同下单',
      color: '#4a5bfd'
    }
  },
  // 提货下单跟合同价格订单类型
  consDetailType: {
    carlist: {
      value: 1,
      text: '车辆',
      color: '#9c8c34'
    },
    driverlist: {
      value: 2,
      text: '司机',
      color: '#4a5bfd'
    }
  },
  // 证件数据类型
  certType: {
    car: {
      value: 1,
      text: "车辆",
      color: '#077621'
    },
    trailer: {
      value: 2,
      text: "车挂",
      color: '#9c8c34'
    },
    employee: {
      value: 3,
      text: "人员",
      color: '#4a5bfd'
    }
  },
  // 证件类型
  cardType: {
    xsz: {
      text: "行驶证",
      value: 1
    },
    dlysz: {
      text: "道路运输证",
      value: 2
    },
    yyz: {
      text: "营运证",
      value: 3
    },
    yyzz: {
      text: "营业执照",
      value: 4
    },
    txz: {
      text: "通行证",
      value: 5
    },
    djpd: {
      text: "等级评定",
      value: 6
    },
    bd: {
      text: "保单",
      value: 8
    },
    djz: {
      text: "登记证",
      value: 9
    },
    clqt: {
      text: "车辆其他",
      value: 10
    },
    jsz: {
      text: "驾驶证",
      value: 11
    },
    jyyz: {
      text: "押运员证",
      value: 12
    },
    cyzgz: {
      text: "从业资格证",
      value: 13
    },
    sfz: {
      text: "身份证",
      value: 14
    },
    ryqt: {
      text: "人员其他",
      value: 15
    }
  },
  // 单据审核状态
  orderState: {
    auditCreate: {
      text: '新增',
      value: 0,
      color: '#011f80'
    },
    waitAudit: {
      text: '待审核',
      value: 5,
      color: '#fd8a17'
    },
    waitFinance: {
      text: '待审核',
      value: 10,
      color: '#5c56ff'
    },
    auditApproved: {
      text: '审核通过',
      value: 15,
      color: '#008679'
    },
    auditNotApproved: {
      text: '审核不通过',
      value: 20,
      color: '#837f7f'
    }
  },
  // 出库类别
  outWhType: {
    tankTruckSales: {
      text: "槽车销售",
      value: 1
    },
    wareHousing: {
      text: "仓储",
      value: 2
    },
    cdck: {
      text: "仓单出库",
      value: 3
    }
  },
  // 币种
  mnyType: {
    CNY: {
      text: '人民币',
      value: 1
    },
    AUD: {
      text: '澳元',
      value: 2
    },
    EUR: {
      text: '欧元',
      value: 3
    },
    GBP: {
      text: '英镑',
      value: 4
    },
    HKD: {
      text: '港元',
      value: 5
    },
    JPY: {
      text: '日元',
      value: 6
    },
    SGD: {
      text: '新加坡元',
      value: 7
    },
    USD: {
      text: '美元',
      value: 8
    }
  },
  // 到款方式
  paycondition: {
    transfer: {
      text: '转账',
      value: 1
    },
    swipe: {
      text: '刷卡',
      value: 2
    },
    cash: {
      text: '现金',
      value: 3
    },
    others: {
      text: '其他',
      value: 4
    }
  },
  // 瓶子规格
  bottleStandard: {
    xSmall: {
      text: '5.0',
      value: 1
    },
    small: {
      text: '15.0',
      value: 2
    },
    middle: {
      text: '50.0',
      value: 3
    },
    large: {
      text: '68.0',
      value: 4
    },
    xLarge: {
      text: '460.0',
      value: 5
    }
  },
  // 发货仓库
  sendWarehouse: {
    one: {
      text: '九丰精甲醚',
      value: 1
    },
    two: {
      text: '九丰甲醇',
      value: 2
    },
    three: {
      text: '九丰纯DME',
      value: 3
    }
  },
  // 商品
  goods: {
    one: {
      text: '精甲醚',
      value: 1
    },
    two: {
      text: '甲醇',
      value: 2
    }
  },
  // 配送表计划装货地【九丰码头】，需要设置默认气质【高热值】
  initDefaultValue: {
    jiufengmatou: {
      value: "九丰码头"
    },
    gaorezhi: {
      value: "高热值"
    },
    jiufengCarrierLid: {
      value: "08a8941f-1699-11ec-aa66-00163e08112d"
    }
  },
  gasQuality: {
    gaorezhi: {
      value: "高热值",
      text: "高热值"
    },
    gaoqihualv: {
      value: "高气化率",
      text: "高气化率"
    }
  },
  // 终端的客户可以固定过滤编码为102开头的
  terminalCode: {
    code102: {
      value: ""
    }
  },
  carManageDataType: {
    car: {
      value: 1,
      text: "车辆"
    },
    person: {
      value: 2,
      text: "司押"
    }
  },
  // 运费计算单位 九丰物流，九丰储运
  settleUnit: {
    jiufengwuliu: {
      value: "九丰物流",
      text: "九丰物流"
    },
    jiufengchuyun: {
      value: "九丰储运",
      text: "九丰储运"
    }
  },
  // 线路分析生成线路情况
  purchaseTargetState: {
    xj: {
      value: 0,
      text: "新建",
      color: '#011f80'
    },
    sh: {
      value: 1,
      text: "已审核",
      color: '#008679'
    },
    qs: {
      value: 3,
      text: "弃审",
      color: '#837f7f'
    }
  }
}

export default constantsExt
