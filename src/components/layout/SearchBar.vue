<template>
  <div class="search-bar-wrapper">
    <div class="search-bar d-flex align-items-center">
      <i class="mdi mdi-magnify search-icon"></i>
      <input
        v-model="searchQuery"
        type="text"
        class="form-control border-0 shadow-none search-input"
        placeholder="장소를 검색해보세요"
      />
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="btn btn-clear p-0 ms-2"
        aria-label="입력 초기화"
      >
        <i class="mdi mdi-close close-icon"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

function clearSearch() {
  searchQuery.value = ''
}
</script>

<style scoped>
.search-bar-wrapper {
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 0 16px;
}

.search-bar {
  width: 100%;
  max-width: 336px;
  height: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  padding: 0 12px;
}

.search-icon {
  font-size: 16px;
  color: #2f2f2f;
}

.search-input {
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
}

.close-icon {
  font-size: 14px;
  color: #2f2f2f;
}

.btn-clear {
  background: none;
  border: none;
}
</style>
