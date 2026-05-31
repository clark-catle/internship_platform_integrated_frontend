import LandingPage from '@/modules/landngPage/view/LandingPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/modules/authPage/views/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/modules/authPage/views/RegistrationPage.vue'),
    },
  ],
})

export default router
