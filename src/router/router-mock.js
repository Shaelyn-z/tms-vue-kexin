const routeList = [
  {
    path: '/index',
    icon: 'home',
    name: '首页'
  }, {
    path: '/system',
    icon: 'setting',
    name: '系统管理',
    sort: 1000,
    children: [
      {
        path: '/system/menu',
        icon: 'menu',
        name: '菜单管理',
        sort: 50,
      }, {
        path: '/system/role',
        icon: 'user',
        name: '角色管理',
        sort: 100,
      }
    ]
  },
  {
    path: '/basicInfo',
    icon: 'profile',
    name: '基础资料',
    sort: 100,
    children: [
      {
        path: '/basicInfo/merchantManage',
        icon: 'contacts',
        name: '客商管理',
        sort: 50,
      }, {
        path: '/basicInfo/carManage',
        icon: 'car',
        name: '车辆管理',
        sort: 100,
      }, {
        path: '/basicInfo/driverManage',
        icon: 'solution',
        name: '驾押人员管理',
        sort: 150,
      }, {
        path: '/basicInfo/certificateManage',
        icon: 'idcard',
        name: '证件管理',
        sort: 200,
      }, {
        path: '/basicInfo/siteManage',
        icon: 'environment',
        name: '站点管理',
        sort: 250,
      }, {
        path: '/basicInfo/lineManage',
        icon: 'bars',
        name: '线路管理',
        sort: 300,
      }, {
        path: '/basicInfo/custLineQuotation',
        icon: 'transaction',
        name: '客户线路报价',
        sort: 350,
      }, {
        path: '/basicInfo/carrierLineQuotation',
        icon: 'transaction',
        name: '承运商线路报价',
        sort: 400,
      }, {
        path: '/basicInfo/rireArchive',
        icon: 'bars',
        name: '轮胎档案',
        sort: 450,
      }, {
        path: '/basicInfo/carRireManage',
        icon: 'tool',
        name: '车辆轮胎管理',
        sort: 500,
      }, {
        path: '/basicInfo/fleetManage',
        icon: 'team',
        name: '车队管理',
        sort: 550,
      }
    ]
  },
  {
    path: '/business',
    icon: 'profile',
    name: '运单管理',
    sort: 200,
    children: [
      {
        path: '/business/waybillinformation',
        icon: 'contacts',
        name: '运单信息',
        sort: 50,
      },]
  }
]
export default routeList
