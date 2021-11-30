export const constantRouterMap = [
  {
    path: '/',
    component: () => import ('@/views/Layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import ('@/views/indexPage')
      },
    ]
  }, {
    path: '/login',
    component: () => import ('@/views/login')
  }, {
    path: '/system',
    component: () => import ('@/views/Layout'),
    children: [
      {
        path: '/system/menu',
        component: () => import ('@/views/system/menu'),
      }, {
        path: '/system/role',
        component: () => import ('@/views/system/role'),
      },
    ]
  }, {
    path: '/basicInfo',
    component: () => import ('@/views/Layout'),
    children: [
      {
        path: '/basicInfo/merchantManage',
        component: () => import ('@/views/basicInfo/merchantManage')
      }, {
        path: '/basicInfo/carManage',
        component: () => import ('@/views/basicInfo/carManage')
      },
    ]
  },
]
