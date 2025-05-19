import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import NotFound from '@/pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/RegisterPage.vue'),
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('@/pages/MyPage.vue'),
    },
    {
      path: '/mypage/edit',
      name: 'mypageedit',
      component: () => import('@/pages/MyPageEdit.vue'),
    },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound },
  ],
})

export default router
