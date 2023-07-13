import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import user from './user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: () => import('@/views/ForgetPassword.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User.vue'),
      children: user
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/error.vue')
    }
  ]
  // linkActiveClass: 'link-active'
})

// // 导航守卫
router.beforeEach((to, from) => {
  //验证token
  const token = sessionStorage.getItem('token')
  if (!token && !['login', 'register', 'forgetpassword'].includes(to.name as string)) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})
export default router
