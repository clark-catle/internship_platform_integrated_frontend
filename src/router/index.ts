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
      component: () => import('@/layouts/NavbarBaseLayout.vue'),
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
      component: () => import('@/layouts/NavbarBaseLayout.vue'),
      redirect: { name: 'companyDashboard' },
      children: [
        {
          path: 'dashboard',
          name: 'companyDashboard',
          component: () => import('@/modules/company/dashboard/views/CompanyDashboard.vue'),
        },
        {
          path: 'internship',
          name: 'companyInternship',
          component: () => import('@/modules/company/internship/views/CompanyInternship.vue'),
        },
        {
          path: 'application',
          name: 'companyApplication',
          component: () => import('@/modules/company/application/views/CompanyApplication.vue'),
        },
        {
          path: 'application/:id',
          name: 'companyApplicationDetail',
          props: true,
          component: () =>
            import('@/modules/company/application/views/CompanyApplicationDetail.vue'),
        },
        {
          path: 'notification',
          name: 'companyNotification',
          component: () => import('@/modules/company/notification/views/CompanyNotification.vue'),
        },
        {
          path: 'profile',
          name: 'companyProfile',
          component: () => import('@/modules/company/profile/views/CompanyProfile.vue'),
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('@/layouts/NavbarBaseLayout.vue'),
      redirect: { name: 'adminDashboard' },
      children: [
        {
          path: 'dashboard',
          name: 'adminDashboard',
          component: () => import('@/modules/admin/dashboard/views/AdminDashboard.vue'),
        },
        {
          path: 'users',
          name: 'adminManageUser',
          component: () => import('@/modules/admin/manageUser/views/ManageUser.vue'),
        },
        {
          path: 'company',
          name: 'adminManageCompany',
          component: () => import('@/modules/admin/manageCompany/views/ManageCompany.vue'),
        },
        {
          path: 'company/:id',
          name: 'adminManageCompanyDetail',
          props: true,
          component: () => import('@/modules/admin/manageCompany/views/ManageCompanyDetail.vue'),
        },
        {
          path: 'students',
          name: 'adminManageStudent',
          component: () => import('@/modules/admin/manageStudent/views/ManageStudent.vue'),
        },
        {
          path: 'internship',
          name: 'adminInternship',
          component: () => import('@/modules/admin/internship/views/AdmintInternship.vue'),
        },
        {
          path: 'internship/:id',
          name: 'adminInternshipDetail',
          props: true,
          component: () => import('@/modules/admin/internship/views/AdminInternshpDetail.vue'),
        },
        {
          path: 'application',
          name: 'adminApplication',
          component: () => import('@/modules/admin/application/views/CompanyApplication.vue'),
        },
        {
          path: 'application/:id',
          name: 'adminApplicationDetail',
          props: true,
          component: () => import('@/modules/admin/application/views/CompanyApplicationDetail.vue'),
        },
        {
          path: 'tokens',
          name: 'adminToken',
          component: () => import('@/modules/admin/manageToken/views/ManageToken.vue'),
        },
        {
          path: 'notification',
          name: 'adminNotification',
          component: () => import('@/modules/admin/notification/views/CompanyNotification.vue'),
        },
        {
          path: 'profile',
          name: 'adminProfile',
          component: () => import('@/modules/admin/profile/views/adminProfile.vue'),
        },
      ],
    },
  ],
})

export default router
