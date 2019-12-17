import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  getters: {
    fetchedNews: (state) => state.news,
    fetchedJobs: (state) => state.jobs,
    fetchedAsk: (state) => state.ask,
  },
  mutations,
  actions
})