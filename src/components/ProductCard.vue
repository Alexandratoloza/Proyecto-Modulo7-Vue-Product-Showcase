<template>
  <BCard
    :img-src="producto.image"
    :img-alt="producto.name"
    img-top
    class="h-100 product-card"
  >
  <div class="product-content">
    <BCardTitle class="fw-bold">
      {{ producto.name }}
    </BCardTitle>
    <BCardText class="text-muted">
      {{ producto.description }}
    </BCardText>
    <h5 class="fw-bold text-primary mb-3">
      ${{ producto.price }}
    </h5>
    <BButton
      variant="success"
      class="w-100"
      @click="$emit('agregar', producto)"
    >
      🛒 Añadir al carrito
    </BButton>
  </div>
  </BCard>
</template>
<script setup>
import {
  BCard,
  BCardTitle,
  BCardText,
  BButton
} from 'bootstrap-vue-next'
defineProps({
  producto: {
    type: Object,
    required: true
  }
})
defineEmits(['agregar'])
</script>
<style scoped>
.product-card {

  height: 100%;
}

.product-card :deep(.card-img-top) {

  height: 200px;
  object-fit: contain;
  padding: 10px;

}

.product-content {

  display: flex;

  flex-direction: column;

  height: 100%;

}

.product-description {

  min-height: 48px;

}

.product-content h5 {

  margin-top: auto;

}
</style>
