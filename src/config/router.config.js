export const constantRouterMap = [
  {
    path: '/system',
    component: () => import('@/views/system'),
    children: [
      {
        path: '/system/menu',
        component: () => import('@/views/system/menu/index.vue'),
      },
      {
        path: '/system/role',
        component: () => import('@/views/system/role/index.vue'),
      },
    ],
  },
  
]
