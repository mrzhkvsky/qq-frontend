import { RouteRecordRaw } from 'vue-router'
import authMiddleware from '@/modules/auth/middleware/auth.middleware'

const accountRoutes: RouteRecordRaw[] = [
  {
    path: '/account',
    component: () => import(/* webpackChunkName: "settings-layout" */ '@/core/layouts/default.vue'),
    meta: {
      middlewares: [authMiddleware]
    },
    children: [
      {
        path: 'settings',
        component: () => import(/* webpackChunkName: "account-settings" */ '@/modules/account/layouts/settings.vue'),
        children: [
          {
            path: '',
            redirect: { name: 'account-settings' }
          },
          {
            path: 'profile',
            name: 'account-settings-profile',
            component: () => import(/* webpackChunkName: "account-settings" */ '@/modules/account/pages/settings/profile.vue')
          },
          {
            path: 'password',
            name: 'account-settings-password',
            component: () => import(/* webpackChunkName: "account-settings-password" */ '@/modules/account/pages/settings/password.vue')
          }
        ]
      }
    ]
  }
]

export default accountRoutes
