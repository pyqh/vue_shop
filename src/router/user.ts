export default [
  {
    path: '',
    name: 'home',
    component: () => import('@/components/home.vue')
  },
  {
    path: 'wallet',
    component: () => import('@/components/wallet.vue')
  },
  {
    path: 'goods',
    component: () => import('@/components/goods.vue')
  },
  {
    path: 'tutorial',
    component: () => import('@/components/tutorial.vue')
  },
  {
    path: 'faq',
    component: () => import('@/components/faq.vue')
  },
  {
    path: 'profile',
    component: () => import('@/components/profile.vue')
  },
  {
    path: 'order',
    component: () => import('@/components/order.vue')
  },
  {
    path: 'invite',
    component: () => import('@/components/invite.vue')
  }
]
