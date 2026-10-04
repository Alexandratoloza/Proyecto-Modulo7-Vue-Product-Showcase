<template>
  <div class=" container">
    <AppHeader/>
    <ProductCart
    :items="carrito"
    :total="total"
    @simular="simularCompra"/>
    <ProductList @agregar-al-carrito="agregarAlCarrito" />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ProductList from './components/ProductList.vue'
import ProductCart from './components/ProductCart.vue'
const carrito = ref([])
const total = computed(() => {
  return carrito.value.reduce((sum, p) => sum + p.price, 0)
})
function agregarAlCarrito (producto) {
  carrito.value.push(producto)
}
function simularCompra () {
  alert(
    `Compra realizada con éxito ${carrito.value.length} productos. Total: $${total.value}`
  )
}
</script>
