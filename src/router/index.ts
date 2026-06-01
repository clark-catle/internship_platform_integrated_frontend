import LandingPage from '@/modules/landingPage/views/LandingPage.vue'
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
    {
      path: '/student',
      name: 'studentDashboard',
      component: () => import('@/modules/studentPage/views/StudentDashboard.vue'),
    },
    {
      path: '/student/internship',
      name: 'studentInternship',
      component: () => import('@/modules/studentPage/views/StudentInternship.vue'),
    },
    {
      path: '/student/application',
      name: 'studentApplication',
      component: () => import('@/modules/studentPage/views/StudentApplication.vue'),
    },
    {
      path: '/student/notification',
      name: 'studentNotification',
      component: () => import('@/modules/studentPage/views/StudentNotification.vue'),
    },
    {
      path: '/student/profile',
      name: 'studentProfile',
      component: () => import('@/modules/studentPage/views/StudentProfile.vue'),
    },
    {
      path: '/company',
      name: 'companyDashboard',
      component: () => import('@/modules/companyPage/views/CompanyDashboard.vue'),
    },
    {
      path: '/company/applicants',
      name: 'companyApplicants',
      component: () => import('@/modules/companyPage/views/CompanyApplicant.vue'),
    },
    {
      path: '/company/internship',
      name: 'companyInternship',
      component: () => import('@/modules/companyPage/views/CompanyInternship.vue'),
    },
  ],
})

export default router
