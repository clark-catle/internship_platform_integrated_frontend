import LandingPage from '@/modules/landing/views/LandingPage.vue'
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
      name: 'loginPage',
      component: () => import('@/modules/auth/views/LoginPage.vue'),
    },
    {
      path: '/register',
      name: 'registerPage',
      component: () => import('@/modules/auth/views/RegistrationPage.vue'),
    },
    {
      path: '/student',
      component: () => import('@/layouts/StudentLayout.vue'),
      redirect: { name: 'studentInternship' },
      children: [
        {
          path: 'internship',
          name: 'studentInternship',
          component: () => import('@/modules/student/internship/views/StudentInternship.vue'),
        },
        {
          path: 'internship/:id',
          name: 'studentInternshipDetail',
          props: true,
          component: () => import('@/modules/student/internship/views/StudentInternshipDetail.vue'),
        },
        {
          path: 'company',
          name: 'studentCompany',
          component: () => import('@/modules/student/company/view/StudentCompany.vue'),
        },
        {
          path: 'application',
          name: 'studentApplication',
          component: () => import('@/modules/student/application/views/StudentApplications.vue'),
        },
        {
          path: 'application/:id',
          name: 'studentApplicationDetail',
          props: true,
          component: () =>
            import('@/modules/student/application/views/StudentApplicationDetail.vue'),
        },
        {
          path: 'notification',
          name: 'studentNotification',
          component: () => import('@/modules/student/notification/views/StudentNotification.vue'),
        },
        {
          path: 'profile',
          name: 'studentProfile',
          component: () => import('@/modules/student/profile/views/StudentProfile.vue'),
        },
      ],
    },
  ],
})

export default router
