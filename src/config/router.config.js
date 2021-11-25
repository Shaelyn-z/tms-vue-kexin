export const constantRouterMap = [
  {
    path: '/',
    component: () => import ('@/views/Layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import ('@/views/indexPage'),
        meta: {
          title: '首页'
        }
      },
    ]
  }, {
    path: '/system',
    component: () => import ('@/views/Layout'),
    meta: {
      title: '系统管理'
    },
    children: [
      {
        path: '/system/menu',
        component: () => import ('@/views/system/menu'),
        meta: {
          title: '菜单管理'
        }
      }, {
        path: '/system/role',
        component: () => import ('@/views/system/role'),
        meta: {
          title: '角色管理'
        }
      },
    ]
  }, {
    path: '/login',
    component: () => import ('@/views/login'),
    meta: {
      title: '登录'
    }
  },
]
