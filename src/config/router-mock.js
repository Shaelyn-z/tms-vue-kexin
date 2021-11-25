const routeList = [{
    id: 1,
    path: '/system',
    icon: 'setting',
    name: '系统管理',
    children: [
      {
        id: 11,
        path: '/system/menu',
        icon: 'bars',
        name: '菜单管理'
      }, {
        id: 12,
        path: '/system/role',
        icon: 'user',
        name: '角色管理'
      }
    ]
  },]
export default routeList
