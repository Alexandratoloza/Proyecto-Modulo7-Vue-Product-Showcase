<template>
  <BNavbar
    toggleable="lg"
    variant=""
    bg-variant="primary"
    class="px-3"
  >
    <BContainer>
      <BNavbarBrand href="#" class="fw-bold fs-4">
        🛍️ Vue Product Showcase
      </BNavbarBrand>

      <BNavbarToggle target="nav-collapse" />
    </BContainer>
  </BNavbar>
</template>
<script setup>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BContainer
} from 'bootstrap-vue-next'
</script>
