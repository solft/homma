
import * as api from '../api'

export default {
  // data 가져오기
  async fetchData({ commit }, payload) {
    const response = await api.getPosts(payload)
    commit('setPosts', response.data)
  },

  async fetchDataSize({ commit }, payload) {
    const response = await api.fetchDataSize(payload.name)
    commit('setPageSize', response.data)
  },
}