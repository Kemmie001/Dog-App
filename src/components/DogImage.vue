<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["image"]);
</script>

<template>
  <div class="aspect-square">
    <img
      v-lazy="props.image"
      loading="lazy"
      lazy="loaded"
      alt="Dog"
      class="w-full h-full object-cover rounded-md"
    />
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
  background-color: #f2f2f2;
}
img[lazy="loaded"] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 1s ease-in-out;
}
img[lazy="loading"] {
  animation: skeleton-loading 1.3s linear infinite alternate;
}
img[lazy="loaded"]:hover {
  transform: scale(0.95);
  filter: grayscale(80%);
}
</style>
