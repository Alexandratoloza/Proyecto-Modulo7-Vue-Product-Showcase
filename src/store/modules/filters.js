export default {
  namespaced: true,
  state: () => ({
    category: ''
  }),
  mutations: {
    setCategory (state, category) {
      state.category = category
    }
  },
  getters: {
    selectedCategory: (state) => state.category
  }
}
