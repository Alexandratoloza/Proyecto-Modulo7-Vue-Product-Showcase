export default {
  namespaced: true,
  state: () => ({
    items: []
  }),
  mutations: {
    // Agregar producto al carrito
    addItem (state, product) {
      state.items.push(product)
    },
    // Eliminar producto por id
    removeItem (state, id) {
      state.items = state.items.filter(item => item.id !== id)
    },
    // Vaciar carrito
    clearCart (state) {
      state.items = []
    }
  },
  getters: {
    // Todos los productos en el carrito
    cartItems: (state) => state.items,
    // Total sumado
    cartTotal: (state) =>
      state.items.reduce((sum, item) => sum + item.price, 0)
  }
}
