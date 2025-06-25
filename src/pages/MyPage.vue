<template>
  <div class="d-flex justify-content-center min-vh-100">
    <!-- 비율 유지 컨테이너 -->
    <div class="scaled-wrapper">
      <!-- 제목 -->
      <div class="pt-4 px-4">
        <h1 class="fw-bold text-start mypage-title">My Page</h1>
      </div>

      <!-- 프로필 이미지 -->
      <div class="d-flex justify-content-center my-5">
        <div class="profile-circle"></div>
      </div>

      <!-- 입력 필드 -->
      <div class="d-flex flex-column align-items-center px-4">
        <div class="form-control input-wrapper mb-3">아이디 정보</div>
        <div class="form-control input-wrapper mb-4">닉네임</div>
        <!-- 버튼들 -->
        <div class="d-flex justify-content-between w-100 px-5">
          <button class="btn btn-secondary-custom">Log Out</button>
          <RouterLink to="/mypage/edit" class="btn btn-primary-custom"> Edit </RouterLink>
          <!-- <button class="btn btn-primary-custom">Edit</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

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

.input-wrapper {
  width: 85%;
  height: 50px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  padding-left: 20px;
  font-size: 14px;
  color: #333;
}

/* 버튼 공통 */
.btn-primary-custom,
.btn-secondary-custom {
  width: 42%;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 999px;
}

/* 버튼 색상 */
.btn-primary-custom {
  background-color: #a4a1fb;
  color: white;
}

.btn-secondary-custom {
  background-color: #c9e8f7;
  color: white;
}

.btn-primary-custom:active {
  background-color: #8d8af0;
  color: white;
}

.btn-secondary-custom:active {
  background-color: #b0d8ea;
  color: white;
}
</style>
