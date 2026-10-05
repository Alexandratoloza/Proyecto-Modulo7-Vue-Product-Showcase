import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    loading: false,
    error: null,
    selectedCategory: ''
  },
  getters: {
    products (state) {
      return state.products
    },
    filteredProducts (state) {
      if (!state.selectedCategory) return state.products
      return state.products.filter(p => p.category === state.selectedCategory)
    },
    categories (state) {
      const unique = [...new Set(state.products.map(p => p.category))]
      return [{ value: '', text: 'Todas las categorías' }, ...unique.map(c => ({ value: c, text: c }))]
    }
  },
  mutations: {
    setProducts (state, products) {
      state.products = products
    },
    setLoading (state, value) {
      state.loading = value
    },
    setError (state, error) {
      state.error = error
    },
    setCategory (state, category) {
      state.selectedCategory = category
    }
  },
  actions: {
    async fetchProducts ({ commit }) {
      commit('setLoading', true)
      try {
        const response = await axios.get(process.env.BASE_URL + 'products.json')
        commit('setProducts', response.data)
      } catch (err) {
        commit('setError', err.message)
      } finally {
        commit('setLoading', false)
      }
    }
  }
})
