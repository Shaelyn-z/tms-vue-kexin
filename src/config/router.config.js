export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views'),
    children: [
      {
        path: '/menu',
        component: () => import('@/views/system/menu')
      }]
  },

]
