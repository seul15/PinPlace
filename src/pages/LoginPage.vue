<template>
  <div class="d-flex justify-content-center min-vh-100">
    <!-- 비율 유지 컨테이너 -->
    <div class="scaled-wrapper">
      <!-- 제목 -->
      <div class="pt-4 px-4">
        <h1 class="fw-bold text-start login-title">LOGIN</h1>
      </div>

      <!-- 입력 폼 -->
      <div class="flex-grow-1 d-flex align-items-end justify-content-center px-4 pb-4">
        <div class="w-100 d-flex flex-column align-items-center">
          <div class="input-group input-wrapper mb-3">
            <span class="input-group-text icon-wrapper">
              <i class="mdi mdi-account icon-style"></i>
            </span>
            <input type="text" class="form-control border-0" placeholder="username" />
          </div>
          <div class="input-group input-wrapper mb-4">
            <span class="input-group-text icon-wrapper">
              <i class="mdi mdi-lock icon-style"></i>
            </span>
            <input type="password" class="form-control border-0" placeholder="password" />
          </div>

          <button class="btn btn-primary-custom mb-3">Sign In</button>

          <!-- Register 버튼 (RouterLink를 버튼처럼 처리) -->
          <RouterLink
            to="/register"
            class="btn btn-secondary-custom mb-4 text-decoration-none text-center"
          >
            Register
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 반응형 비율 기반 스케일링 */
.scaled-wrapper {
  width: 390px;
  background-color: #f7f8fc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-origin: top left;
}

@media (max-width: 390px) {
  .scaled-wrapper {
    transform: scale(calc(100vw / 390));
  }
}

/* 제목 스타일 */
.login-title {
  font-size: 32px;
  color: #a4a1fb;
}

/* 입력 필드 */
.input-wrapper {
  height: 50px;
  border-radius: 999px;
  overflow: hidden;
}

.icon-wrapper {
  background-color: white;
  border: none;
  padding-left: 1rem;
}

.icon-style {
  color: #b0b0b0;
}

/* 버튼 공통 */
.btn-primary-custom,
.btn-secondary-custom {
  width: 56.4%;
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

/* placeholder */
input::placeholder {
  color: #b0b0b0;
  opacity: 1;
}

input:focus {
  outline: none;
  box-shadow: none;
}
</style>
