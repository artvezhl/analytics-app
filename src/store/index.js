import Vue from 'vue';
import Vuex from 'vuex';
import { API_KEY, API_URL } from '@/constants';
import axios from 'axios';
// import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isDialogOpen: false,
    errorMessage: '',
    analytics: [],
  },
  getters: {
    getUserStatus(state) {
      return state.isLoggedIn;
    },
    getAnalytics(state) {
      return state.analytics;
    },
  },
  mutations: {
    setUserStatus(state, payload) {
      state.isLoggedIn = payload;
    },
    setAnalytics(state, payload) {
      state.analytics = payload;
    },
    showDialog(state) {
      state.isDialogOpen = true;
    },
    hideDialog(state) {
      state.isDialogOpen = false;
      state.errorMessage = '';
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
  },
  actions: {
    fetchAuth({ commit, state }, id = state.id) {
      axios.get(API_URL, {
        method: 'GET',
        headers: {
          'Api-Key': API_KEY,
          'Leadhit-Site-Id': id,
        },
      }).then((res) => {
        if (res.status === 200 && res.data.message === 'ok') {
          commit('setUserStatus', true);
          localStorage.setItem('leadhit-site-id', id);
        } else {
          console.log('false');
        }
      }).catch((error) => {
        commit('showDialog');
        commit('setErrorMessage', error.message);
      });
    },
  },
});
