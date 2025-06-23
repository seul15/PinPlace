<template>
  <div class="d-flex justify-content-center min-vh-100">
    <div class="register-wrapper">
      <!-- 상단 제목 -->
      <div class="pt-4 px-4">
        <h1 class="fw-bold text-start register-title">Register</h1>
      </div>

      <!-- 이미지 업로드 버튼 -->
      <div class="d-flex justify-content-center my-5">
        <div class="upload-circle">
          <i class="mdi mdi-camera-plus upload-icon"></i>
        </div>
      </div>

      <!-- 입력 폼 -->
      <div class="d-flex flex-column align-items-center px-4">
        <input type="email" class="form-control input-field mb-3" placeholder="이메일 입력" />
        <input type="password" class="form-control input-field mb-3" placeholder="비밀번호 입력" />
        <input type="password" class="form-control input-field mb-3" placeholder="비밀번호 확인" />
        <input type="text" class="form-control input-field mb-4" placeholder="닉네임" />

        <button class="btn register-btn">Register</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-wrapper {
  width: 390px;
  background-color: #f7f8fc;
  display: flex;
  flex-direction: column;
  transform-origin: top left;
}

@media (max-width: 390px) {
  .register-wrapper {
    transform: scale(calc(100vw / 390));
  }
}

/* 제목 */
.register-title {
  font-size: 32px;
  color: #a4a1fb;
}

/* 이미지 업로드 버튼 */
.upload-circle {
  width: calc(100% * (100 / 390));
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-icon {
  font-size: 20px;
  color: #2f2f2f;
}

/* 입력 필드 */
.input-field {
  width: 85%;
  height: 50px;
  border-radius: 999px;
  background-color: white;
  border: none;
  padding-left: 20px;
  font-size: 14px;
  color: #333;
}

.input-field::placeholder {
  color: #b0b0b0;
}

input:focus {
  outline: none;
  box-shadow: none;
}

/* 버튼 */
.register-btn {
  width: 56.4%;
  height: 40px;
  border-radius: 999px;
  background-color: #a4a1fb;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
}

.register-btn:active {
  background-color: #8d8af0; /* 더 어두운 톤 */
  color: white;
}
</style>
