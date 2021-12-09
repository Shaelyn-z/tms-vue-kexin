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
      {
        path: '/basicInfo/driverManage',
        component: () => import ('@/views/basicInfo/driverManage')
      }, {
        path: '/basicInfo/certificateManage',
        component: () => import ('@/views/basicInfo/certificateManage')
      },
      {
        path: '/basicInfo/siteManage',
        component: () => import ('@/views/basicInfo/siteManage')
      }, {
        path: '/basicInfo/lineManage',
        component: () => import ('@/views/basicInfo/lineManage')
      },
      {
        path: '/basicInfo/custLineQuotation',
        component: () => import ('@/views/basicInfo/custLineQuotation')
      }, {
        path: '/basicInfo/carrierLineQuotation',
        component: () => import ('@/views/basicInfo/carrierLineQuotation')
      }, {
        path: '/basicInfo/rireArchive',
        component: () => import ('@/views/basicInfo/rireArchive')
      },
      {
        path: '/basicInfo/carRireManage',
        component: () => import ('@/views/basicInfo/carRireManage')
      }, {
        path: '/basicInfo/fleetManage',
        component: () => import ('@/views/basicInfo/fleetManage')
      },
    ]
  },
  {
    path: '*',
    component: () => import ('@/views/error/Page404')
  }
]
