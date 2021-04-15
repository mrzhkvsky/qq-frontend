import guestMiddleware from '@/modules/auth/middleware/guest.middleware'
import { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth-layout" */ '@/modules/auth/layouts/auth.vue'),
    meta: {
      middlewares: [guestMiddleware]
    },
    children: [
      {
        path: 'login',
        name: 'auth-login',
        component: () => import(/* webpackChunkName: "auth-login" */ '@/modules/auth/pages/login.vue')
      }
    ]
  }
]

export default authRoutes
