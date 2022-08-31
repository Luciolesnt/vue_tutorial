import { createStore } from "vuex";

export default createStore({
  state: {
    userName: "",
    total: 0,
  },
  getters: {
    doubleTotal(state) {
      return state.total * 2;
    },
  },
  mutations: {
    setTotal(state) {
      state.total++;
    },
  },
  actions: {},
  modules: {},
});
