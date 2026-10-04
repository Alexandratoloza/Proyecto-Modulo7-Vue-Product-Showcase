<template>
  <BContainer fluid class="py-4">
    <!-- Título -->
    <div class="text-center mb-4">
      <h2 class="fw-bold">Nuestros productos</h2>
      <p class="text-muted">
        Encuentra lo que necesitas y agrégalo a tu carrito
      </p>
    </div>
    <!-- Buscador -->
    <BRow class="justify-content-center mb-5">
      <BCol cols="12" md="8" lg="6">
        <div class="d-flex gap-2">
          <BFormInput
            v-model="searchTerm"
            placeholder="🔍 Buscar productos..."
            size="lg"
          />
          <BButton
            variant="primary"
            size="lg"
            @click="filtrar"
          >
            Filtrar
          </BButton>
        </div>
      </BCol>
    </BRow>
    <!-- Productos -->
    <BRow>
  <BCol
    v-for="p in productosFiltrados"
    :key="p.id"
    cols="12"
    sm="6"
    lg="4"
    xl="3"
    class="mb-4"
  >
    <ProductCard
      :producto="p"
      @agregar="agregarAlCarrito"
    />
  </BCol>
</BRow>
  </BContainer>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  BContainer,
  BRow,
  BCol,
  BFormInput,
  BButton
} from 'bootstrap-vue-next'
import ProductCard from './ProductCard.vue'
const searchTerm = ref('')
const productos = ref([])
onMounted(async () => {
  const res = await fetch('/products.json')
  productos.value = await res.json()
})
const productosFiltrados = computed(() =>
  productos.value.filter(p =>
    p.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
function filtrar () {
  // El filtrado se realiza automáticamente mediante computed
}
const emit = defineEmits(['agregar-al-carrito'])
function agregarAlCarrito (producto) {
  emit('agregar-al-carrito', producto)
}
/* const total = computed(() =>
  carrito.value.reduce((sum, p) => sum + p.price, 0)
) */
/* function simularCompra () {
  alert(
    `Compra realizada con éxito ${carrito.value.length} productos. Total: $${total.value}`
  )
} */
</script>
