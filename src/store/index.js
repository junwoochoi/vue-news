import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
    },
    SET_ASK(state, data) {
      state.ask = data;
    },
  },
  getters: {
    fetchedNews: (state) => state.news,
    fetchedJobs: (state) => state.jobs,
    fetchedAsk: (state) => state.ask,
  },
  actions: {
    FETCH_NEWS(context){
      fetchNewsList()
      .then(res => context.commit('SET_NEWS', res.data))
      .catch(err => console.error(err));
    },
    FETCH_JOBS(context){
      fetchJobsList()
      .then(res => context.commit('SET_JOBS', res.data))
      .catch(err => console.error(err));
    },
    FETCH_ASK(context){
      fetchAskList()
      .then(res => context.commit('SET_ASK', res.data))
      .catch(err => console.error(err));
    },
  },
})