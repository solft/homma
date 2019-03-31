export default {
  setPosts(state, posts) {
    state.posts = [...posts]
  },

  setPageSize(state, pageSize) {
    state.pageSize = Math.floor(pageSize / 36) + 1
  }
}