<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavigationBar from './components/layout/NavigationBar.vue'
import { computed } from 'vue'

const route = useRoute()
const showNavigationBar = computed(() => !route.meta.hideNav)
</script>

<template>
  <RouterView />
  <NavigationBar v-if="showNavigationBar" />
</template>
