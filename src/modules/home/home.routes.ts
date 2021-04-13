import authMiddleware from '@/modules/auth/middleware/auth.middleware'
import { RouteRecordRaw } from 'vue-router'

const homeRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "default-layout" */ '@/core/layouts/default.vue'),
    meta: {
      middlewares: [authMiddleware]
    },
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import(/* webpackChunkName: "home-index" */ '@/modules/home/pages/index.vue')
      },
      {
        path: 'test',
        name: 'home-test',
        component: () => import(/* webpackChunkName: "home-test" */ '@/modules/home/pages/test.vue')
      }
    ]
  }
]

export default homeRoutes
