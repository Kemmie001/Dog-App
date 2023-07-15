<script setup lang="ts">
import BreedsFilter from "@/components/BreedsFilter.vue";
import DogImage from "@/components/DogImage.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const images = computed(() => {
  return store.state.dogs;
});
onMounted(() => {
  store.dispatch("getBreeds");
  store.dispatch("getDogImages", 120);
});
</script>

<template>
  <div class="pt-16">
    <div class="lg:flex">
      <div class="lg:w-[300px]">
        <BreedsFilter />
      </div>
      <div
        class="grid mt-5 mx-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <div class="" v-for="(img, index) in images" :key="index">
          <DogImage
            tabindex="1"
            v-if="images.length"
            :image="img"
            class="focus:outline focus:outline-gray-500 focus:outline-4"
          />
        </div>

        <!-- <Skeleton v-else v-for="ske in 50" /> -->
      </div>
    </div>
  </div>
</template>
