import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import NotFound from '@/pages/NotFoundPage.vue'

import { useNavStore } from '@/stores/nav'

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
      meta: { hideNav: true },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/RegisterPage.vue'),
      meta: { hideNav: true },
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
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound, meta: { hideNav: true } },
  ],
})

router.beforeEach((to, from, next) => {
  const navStore = useNavStore()
  if (!navStore.isInitialized) {
    const map = {
      home: 1,
      mypage: 4,
    }
    navStore.setNav(map[to.name] ?? 1)
    navStore.isInitialized = true
  }
  next()
})

export default router
