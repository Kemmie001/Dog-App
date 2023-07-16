<script setup lang="ts">
import BreedsFilter from "@/components/BreedsFilter.vue";
import DogImage from "@/components/DogImage.vue";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const images = computed(() => {
  return store.state.filteredDogs;
});
onMounted(() => {
  store.dispatch("getBreeds");
  store.dispatch("getDogImages", 120);
});
const showMobileFilter = ref(false);
const selectedBreeds = ref<Array<string>>([]);
const getSelectedBreeds = (breed: Array<string>) => {
  selectedBreeds.value = breed;
};
</script>

<template>
  <div class="pt-16">
    <div class="lg:flex">
      <div
        class="lg:w-[300px] lg:block relative"
        :class="[showMobileFilter ? 'block ' : 'hidden']"
      >
        <BreedsFilter
          @update:selected-breeds="getSelectedBreeds"
          :class="[showMobileFilter ? 'absolute w-full z-5 -top-5' : '']"
          @close-filter="showMobileFilter = false"
        />
      </div>

      <div class="mt-5 mx-4 lg:w-full">
        <div class="flex justify-between">
          <p class="py-2 text-sm text-neutral">
            Showing
            <span class="font-medium text-dark">{{ images.length }}</span>
            images of Dogs
          </p>
          <button
            @click="showMobileFilter = true"
            class="border rounded-md py-2 px-2 border-neutral-bg text-dark text-sm"
          >
            Apply Filter
          </button>
        </div>
        <div
          v-if="selectedBreeds.length"
          class="flex flex-wrap text-dark text-sm gap-2 mt-2 items-center"
        >
          <P>Applied Filters: </P>
          <div
            v-for="(breed, index) in selectedBreeds"
            :key="index"
            class="border border-primary rounded-xl px-4 py-1"
          >
            {{ breed }}
          </div>
        </div>

        <div class="">
          <div
            v-if="images.length"
            class="grid mt-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            <DogImage
              tabindex="1"
              v-for="(img, index) in images"
              :key="index"
              :image="img"
              class="focus:outline focus:outline-primary focus:outline-4"
            />
          </div>
          <div
            v-else
            class="grid mt-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            <SkeletonLoader v-for="(skeleton, i) in 50" :key="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
