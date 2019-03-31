
export const selectPostById = (state) => (id) => {
  return state.posts.find(post => post._id === id)
}