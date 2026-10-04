<template>
  <BAlert
    v-if="items.length"
    variant="info"
    show
    class="mt-4"
  >
    <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
      <div>
        <h5 class="mb-1">
          🛒 Carrito de compras
        </h5>
        <small>
          {{ items.length }} producto(s) agregado(s)
        </small>
      </div>
      <div class="d-flex align-items-center gap-4">
        <strong class="fs-5">
          Total: ${{ total }}
        </strong>
        <BButton
          variant="primary"
          @click="$emit('simular')"
        >
          🛍️ Comprar
        </BButton>
      </div>
    </div>
  </BAlert>
  <BAlert
    v-else
    variant="secondary"
    show
    class="mt-4 text-center"
  >
    🛒 Tu carrito está vacío.
  </BAlert>
</template>
<script setup>
import {
  BAlert,
  BButton
} from 'bootstrap-vue-next'
defineProps({
  items: {
    type: Array,
    default: () => []
  },
  total: {
    type: Number,
    default: 0
  }
})
defineEmits(['simular'])
</script>
