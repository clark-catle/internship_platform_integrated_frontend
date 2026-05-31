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
      name: 'student-dashboard',
      component: () => import('@/modules/studentPage/views/StudentDashboard.vue'),
    },
    {
      path: '/student/internship',
      name: 'student-internship',
      component: () => import('@/modules/studentPage/views/StudentInternship.vue'),
    },
    {
      path: '/student/application',
      name: 'student-application',
      component: () => import('@/modules/studentPage/views/StudentApplication.vue'),
    },
    {
      path: '/student/notification',
      name: 'student-notification',
      component: () => import('@/modules/studentPage/views/StudentNotification.vue'),
    },
    {
      path: '/student/profile',
      name: 'student-profile',
      component: () => import('@/modules/studentPage/views/StudentProfile.vue'),
    },
    {
      path: '/company',
      name: 'company-dashboard',
      component: () => import('@/modules/companyPage/views/CompanyDashboard.vue'),
    },
    {
      path: '/company/applicants',
      name: 'company-applicants',
      component: () => import('@/modules/companyPage/views/CompanyApplicant.vue'),
    },
    {
      path: '/company/internship',
      name: 'company-internship',
      component: () => import('@/modules/companyPage/views/CompanyInternship.vue'),
    },
  ],
})

export default router
