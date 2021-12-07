const routeList = [
  {
    path: '/index',
    icon: 'home',
    name: '首页'
  }, {
    path: '/system',
    icon: 'setting',
    name: '系统管理',
    sort: 200,
    children: [
      {
        path: '/system/menu',
        icon: 'bars',
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
    icon: 'setting',
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
      }
    ]
  }
]
export default routeList
