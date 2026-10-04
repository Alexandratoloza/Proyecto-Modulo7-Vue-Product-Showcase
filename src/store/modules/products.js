import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    items: [],
    loading: false,
    error: false
  }),
  mutations: {
    setProducts (state, products) {
      state.items = products
    },
    setLoading (state, value) {
      state.loading = value
    },
    setError (state, value) {
      state.error = value
    }
  },
  actions: {
    async fetchProducts ({ commit }) {
      commit('setLoading', true)
      try {
        // ✅ Axios lee el archivo local
        const res = await axios.get('/data/products.json')
        commit('setProducts', res.data)
      } catch (err) {
        commit('setError', true)
      } finally {
        commit('setLoading', false)
      }
    }
  },
  getters: {
    allProducts: (state) => state.items
  }
}
