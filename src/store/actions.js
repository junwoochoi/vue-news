import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api';

export default {
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
  FETCH_USER(context, id){
    fetchUserInfo(id)
    .then(res => context.commit('SET_USER', res.data))
    .catch(err => console.error(err));
  },
  FETCH_ITEM(context, id){
    fetchItemInfo(id)
    .then(res => context.commit('SET_ITEM', res.data))
    .catch(err => console.error(err));
  },
}