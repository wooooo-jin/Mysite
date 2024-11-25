import { createStore } from "vuex";

export default createStore({
  state: {
    user: {}, // 사용자 정보 저장
  },
  mutations: {
    setUser(state, userInfo) {
      state.user = userInfo;
    },
    clearUser(state) {
      state.user = {};
    },
  },
  actions: {
    setUser({ commit }, userInfo) {
      commit("setUser", userInfo);
    },
    clearUser({ commit }) {
      commit("clearUser");
    },
  },
  getters: {
    user: (state) => state.user,
  },
});