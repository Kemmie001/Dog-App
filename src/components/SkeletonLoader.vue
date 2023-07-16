<script setup lang="ts"></script>

<template>
  <div class="aspect-square w-full shimmer rounded-md"></div>
</template>

<style scoped>
.shimmer {
  animation: shimmer 1.4s linear infinite alternate;
  background-image: linear-gradient(
    90deg,
    rgba(#ffffff, 0) 0%,
    rgba(#ffffff, 0.2) 20%,
    rgba(#ffffff, 0.5) 60%,
    rgba(#ffffff, 0)
  );
}

@keyframes shimmer {
  0% {
    background-color: hsl(200, 20%, 80%);
  }

  100% {
  }
}
</style>
