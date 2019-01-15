import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  setPosts({ commit }, payload) {
    axios.get(`http://localhost:4000/api/posts/read/${payload.name}`)
      .then(response => response.data)
      .then(posts => {
        commit('setPosts', posts)
      })
  }
}