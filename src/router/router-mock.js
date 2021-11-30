const routeList = [
  {
    path: '/index',
    icon: 'home',
    name: '首页'
  }, {
    path: '/system',
    icon: 'setting',
    name: '系统管理',
    children: [
      {
        path: '/system/menu',
        icon: 'bars',
        name: '菜单管理'
      }, {
        path: '/system/role',
        icon: 'user',
        name: '角色管理'
      }
    ]
  },
  {
    path: '/basicInfo',
    icon: 'setting',
    name: '基础资料',
    children: [
      {
        path: '/basicInfo/merchantManage',
        icon: 'bars',
        name: '客商管理'
      }, {
        path: '/basicInfo/carManage',
        icon: 'user',
        name: '车辆管理'
      }
    ]
  }
]
export default routeList
