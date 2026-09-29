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
      component: () => import('@/layouts/StudentNavLayout.vue'),
      redirect: { name: 'studentDashboard' },
      children: [
        {
          path: 'dashboard',
          name: 'studentDashboard',
          component: () => import('@/modules/student/dashboard/view/StudentDashboard.vue'),
        },
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
          path: 'company/:id',
          name: 'studentCompanyDetail',
          props: true,
          component: () => import('@/modules/student/company/view/StudentCompanyDetail.vue'),
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
    {
      path: '/company',
      component: () => import('@/layouts/ComapnyNavLayout.vue'),
      redirect: { name: 'companyDashboard' },
      children: [
        {
          path: 'dashboard',
          name: 'companyDashboard',
          component: () => import('@/modules/company/dashboard/view/CompanyDashboard.vue'),
        },
        {
          path: 'internship',
          name: 'companyInternship',
          component: () => import('@/modules/company/internship/view/CompanyInternship.vue'),
        },
        // {
        //   path: 'internship/:id',
        //   name: 'companyinternshipDetail',
        //   props: true,
        //   component: () => import('@/modules/student/internship/views/StudentInternshipDetail.vue'),
        // },
        {
          path: 'application',
          name: 'companyApplication',
          component: () => import('@/modules/company/application/view/CompanyApplication.vue'),
        },
        {
          path: 'application/:id',
          name: 'companyApplicationDetail',
          props: true,
          component: () =>
            import('@/modules/company/application/view/CompanyApplicationDetail.vue'),
        },
        {
          path: 'notification',
          name: 'companyNotification',
          component: () => import('@/modules/company/notification/view/CompanyNotification.vue'),
        },
        {
          path: 'profile',
          name: 'companyProfile',
          component: () => import('@/modules/company/profile/view/CompanyProfile.vue'),
        },
      ],
    },
  ],
})

export default router
