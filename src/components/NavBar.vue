<script setup lang="ts"></script>
<template>
  <div
    class="bg-white fixed z-10 w-full shadow-sm py-4 px-4 md:px-10 flex justify-between items-center"
  >
    <router-link to="/" class="flex gap-5 items-center">
      <div class="">
        <img class="w-8 h-8" src="../assets/logo.svg" alt="" />
      </div>
      <h6 class="font-bold text-dark text-lg">DOGGIES</h6>
    </router-link>
    <div class="flex gap-4 items-center">
      <a
        href="https://github.com/Kemmie001/Dog-App"
        target=""
        class="px-4 py-2 text-white bg-primary rounded-md"
        >Github</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
