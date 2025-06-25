<template>
  <nav
    class="d-flex justify-content-around align-items-center border-top bg-white position-fixed bottom-0 start-50 translate-middle-x w-100 py-2 px-1 shadow-sm"
    style="max-width: 480px; height: 60px; z-index: 1000"
  >
    <button
      v-for="nav in navs"
      :key="nav.id"
      class="flex-fill text-center bg-transparent border-0 nav-btn"
      @click="goToTab(nav.id, nav.route)"
    >
      <i
        :class="[
          'd-block mx-auto mdi',
          currentNav === nav.id ? nav.icon : nav.icon + '-outline',
          currentNav === nav.id ? 'active-icon' : 'inactive-icon',
        ]"
        style="font-size: 20px"
      ></i>
    </button>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useNavStore } from '@/stores/nav'

const route = useRoute()
const router = useRouter()
const navStore = useNavStore()
const { currentNav } = storeToRefs(navStore)

const navs = [
  { id: 1, icon: 'mdi mdi-star', route: 'home' },
  { id: 2, icon: 'mdi mdi-bookmark-multiple', route: 'home' },
  { id: 3, icon: 'mdi mdi-heart', route: 'home' },
  { id: 4, icon: 'mdi mdi-account-circle', route: 'mypage' },
]

function goToTab(navId, targetRoute) {
  navStore.setNav(navId)
  setTimeout(() => {
    router.push({ name: targetRoute })
  }, 100)
}
</script>

<style scoped>
.active-icon {
  color: #a5a6f6;
}
.inactive-icon {
  color: #2f2f2f;
}
i.mdi {
  font-size: 20px;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
}

.nav-btn {
  transition:
    background-color 0.25s ease,
    transform 0.2s ease;
}
.nav-btn:hover {
  background-color: #f8f9fa;
}
.nav-btn:active {
  transform: scale(0.93);
}

@media (min-width: 576px) {
  nav {
    height: 64px !important;
  }
  i.mdi {
    font-size: 24px !important;
  }
}
</style>
