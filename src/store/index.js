import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {}
  },
  getters: {
    fetchedNews: (state) => state.news,
    fetchedJobs: (state) => state.jobs,
    fetchedAsk: (state) => state.ask,
    fetchedUser: (state) => state.user,
    fetchedItem: (state) => state.item
  },
  mutations,
  actions
})