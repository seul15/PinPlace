<template>
  <div class="d-flex justify-content-center min-vh-100">
    <div class="scaled-wrapper">
      <SearchBar />
      <div id="map" class="map-container"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const kakaoApiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY
import SearchBar from '@/components/layout/SearchBar.vue'

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap()
  } else {
    const script = document.createElement('script')
    script.onload = () => window.kakao.maps.load(initMap)
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${kakaoApiKey}`
    document.head.appendChild(script)
  }
})

function initMap() {
  const container = document.getElementById('map')

  // 현재 위치 가져오기
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude

        const options = {
          center: new kakao.maps.LatLng(lat, lng),
          level: 3,
        }

        const map = new kakao.maps.Map(container, options)

        // 현재 위치에 마커 표시
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(lat, lng),
          map: map,
        })
      },
      (error) => {
        console.error('위치 정보 가져오기 실패:', error)
        // 위치 정보 실패 시 기본 위치(서울 시청)
        const defaultCenter = new kakao.maps.LatLng(37.5665, 126.978)
        const map = new kakao.maps.Map(container, {
          center: defaultCenter,
          level: 3,
        })
      },
    )
  } else {
    alert('이 브라우저에서는 Geolocation을 지원하지 않습니다.')
  }
}
</script>

<style scoped>
.scaled-wrapper {
  width: 390px;
  height: 100vh;
  background-color: #f7f8fc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-origin: top left;
  overflow: hidden;
}

.map-container {
  flex-grow: 1;
  width: 100%;
  height: 100%;
}

@media (max-width: 390px) {
  .scaled-wrapper {
    transform: scale(calc(100vw / 390));
  }
}
</style>
