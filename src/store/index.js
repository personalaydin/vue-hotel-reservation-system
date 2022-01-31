import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: [],
  },
  getters: {
    getHotels(state) {
      return state.hotels.flatMap((x) => x.hotel_name);
    },
  },
  mutations: {
    insertHotels(state, payload) {
      state.hotels = payload;
    },
  },

  actions: {
    addHotels(context) {
      context.commit('addHotels')
    }
  },
  modules: {},
});