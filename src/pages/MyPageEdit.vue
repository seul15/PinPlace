<template>
  <div class="d-flex justify-content-center min-vh-100">
    <div class="scaled-wrapper">
      <!-- 제목 -->
      <div class="pt-4 px-4">
        <h1 class="fw-bold text-start mypage-title">Edit Profile</h1>
      </div>

      <!-- 프로필 이미지 -->
      <div class="d-flex justify-content-center my-5">
        <div class="profile-circle">
          <i class="mdi mdi-camera-plus camera-icon"></i>
        </div>
      </div>

      <!-- 입력 필드 -->
      <div class="d-flex flex-column align-items-center px-4">
        <!-- 현재 비밀번호 -->
        <div class="w-100 mb-3">
          <label class="form-label mb-3">현재 비밀번호</label>
          <div class="d-flex align-items-center password-row">
            <input
              type="password"
              v-model="currentPassword"
              placeholder="현재 비밀번호 입력"
              class="form-control input-fixed"
            />
            <button class="btn btn-check-fixed" @click="handlePasswordCheck">Check</button>
          </div>
        </div>

        <!-- 새 비밀번호 -->
        <div class="w-100 mb-3">
          <label class="form-label mb-3">새 비밀번호</label>
          <input
            type="password"
            v-model="newPassword"
            placeholder="새 비밀번호 입력"
            class="form-control input-wrapper"
            :disabled="!isPasswordVerified"
            :class="{ 'bg-disabled': !isPasswordVerified }"
          />
        </div>

        <!-- 새 비밀번호 확인 -->
        <div class="w-100 mb-3">
          <label class="form-label mb-3">새 비밀번호 확인</label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="새 비밀번호 확인"
            class="form-control input-wrapper"
            :disabled="!isPasswordVerified"
            :class="{ 'bg-disabled': !isPasswordVerified }"
          />
        </div>

        <!-- 닉네임 -->
        <div class="w-100 mb-5">
          <label class="form-label mb-3">닉네임</label>
          <input
            type="text"
            v-model="nickname"
            placeholder="닉네임"
            class="form-control input-wrapper"
          />
        </div>

        <!-- Edit 버튼 -->
        <button class="btn btn-primary-custom" @click="handleEdit">Edit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const nickname = ref('')
const isPasswordVerified = ref(false)

const handlePasswordCheck = () => {
  const mockCorrectPassword = '1234' // 임시 확인용
  if (currentPassword.value === mockCorrectPassword) {
    isPasswordVerified.value = true
    alert('비밀번호가 확인되었습니다!')
  } else {
    alert('비밀번호가 일치하지 않습니다.')
  }
}

const handleEdit = () => {
  router.push('/mypage')
}
</script>

<style scoped>
.scaled-wrapper {
  width: 390px;
  background-color: #f7f8fc;
  display: flex;
  flex-direction: column;
  transform-origin: top left;
}

@media (max-width: 390px) {
  .scaled-wrapper {
    transform: scale(calc(100vw / 390));
  }
}

/* 제목 스타일 */
.mypage-title {
  font-size: 32px;
  color: #a4a1fb;
}

/* 프로필 원형 */
.profile-circle {
  width: calc(100% * (100 / 390));
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.camera-icon {
  font-size: 20px;
  color: #2f2f2f;
}
.input-wrapper {
  height: 50px;
  border-radius: 999px;
  background-color: white;
  border: none;
  padding-left: 20px;
  font-size: 14px;
  color: #333;
}

.password-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.input-fixed {
  height: 50px;
  border-radius: 999px;
  background-color: white;
  border: none;
  padding-left: 20px;
  font-size: 14px;
  color: #333;
}

.bg-disabled {
  background-color: #d9d9d9 !important;
}

input:focus {
  outline: none;
  box-shadow: none;
}

.btn-check-fixed {
  background-color: #c9e8f7;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 999px;
  padding: 0 16px;
  height: 30px;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-check-fixed:active {
  background-color: #b0d8ea;
  color: white;
}

/* 수정 버튼 */
.btn-primary-custom {
  background-color: #a4a1fb;
  color: white;
  font-weight: bold;
  width: 56.4%;
  height: 40px;
  border-radius: 999px;
  font-size: 16px;
}

.btn-primary-custom:active {
  background-color: #8d8af0;
}
</style>
