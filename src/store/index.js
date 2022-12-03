import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    titlePage: "QUẢN LÝ VÀ VẬN HÀNH KHO",
    user: {},
  },
  getters: {
    getTitlePage(state) {
      return state.titlePage;
    },
  },
  mutations: {
    setTitle(state, payLoad) {
      state.titlePage = payLoad;
    },
  },
  actions: {
    setTitlePage({ commit }, payLoad) {
      commit("setTitle", payLoad);
    },
  },
  modules: {},
});
