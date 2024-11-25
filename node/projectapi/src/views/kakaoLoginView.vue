<template>
  <div class="text-center">
    <button
      v-if="!user.email"
      @click="kakaoLogin"
      class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
    >
      카카오 로그인
    </button>
    <div v-else>
      <p>닉네임: {{ user.name }}</p>
      <p>이메일: {{ user.email }}</p>
      <button
        @click="kakaoLogout"
        class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
      >
        로그아웃
      </button>
    </div>
  </div>
</template>

  <script>
  import { getKakaoToken, getKakaoUserInfo } from  "../api/kakao"
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    computed: {
      ...mapGetters(["user"]), // Vuex 사용자 상태 가져오기
    },
    created() {
      // 카카오 SDK 초기화
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("d31d5a0dc21a3a1cea465737b7e9a175"); // 카카오 JavaScript 키
      }
  
      // URL에서 인가 코드 추출
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("code")) {
        const code = urlParams.get("code");
        this.setKakaoToken(code);
      }
    },
    methods: {
      ...mapActions(["setUser", "clearUser"]), // Vuex 액션 매핑
  
      kakaoLogin() {
        window.Kakao.Auth.authorize({
          redirectUri: "http://localhost:8080/login", // Redirect URI
        });
      },
      async setKakaoToken(code) {
        try {
          const { data } = await getKakaoToken(code);
          window.Kakao.Auth.setAccessToken(data.access_token);
  
          const userInfo = await this.setUserInfo();
          console.log("로그인 성공:", userInfo);
          this.$router.push("/login"); // Redirect 경로
        } catch (error) {
          console.error("토큰 발급 실패:", error);
        }
      },
      async setUserInfo() {
        try {
          const res = await getKakaoUserInfo();
          const userInfo = {
            name: res.kakao_account.profile.nickname,
            email: res.kakao_account.email,
          };
  
          this.setUser(userInfo); // Vuex 상태 업데이트
          return userInfo;
        } catch (error) {
          console.error("사용자 정보 조회 실패:", error);
        }
      },
      kakaoLogout() {
            window.Kakao.Auth.logout(() => {
                console.log("로그아웃 성공");
                this.clearUser(); // Vuex 상태 초기화
            });
        },
    },
  };
  </script>
  
  
  <style>
  .text-center {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  