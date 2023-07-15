<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";
const searchInput = ref("");
const selectedBreeds = ref([]);
const store = useStore();
const breedCategories = computed(() => {
  return store.getters.breedsList;
});
const searchBreed = computed(() => {
  return breedCategories.value.filter((breed: string) =>
    breed.toLowerCase().includes(searchInput.value.toLowerCase())
  );
});
// const applyFilter = (searchInput: string) => {
//   // const newArray = ref<Array<string>>([]);
//   newArray.value.push(searchInput);
//   store.dispatch("filterByBreeds", newArray.value);
// };
const emit = defineEmits(["update:selectedBreeds"]);
const addselect = (selectBreed: Array<string>) => {
  emit("update:selectedBreeds", selectBreed);
};
const clearSelect = () => {
  selectedBreeds.value = [];
  addselect(selectedBreeds.value);
};

watch(
  () => selectedBreeds.value,
  () => {
    store.dispatch("filterByBreeds", selectedBreeds.value);
  }
);
</script>

<template>
  <div
    class="bg-white shadow-md h-[60vh] lg:h-full border border-neutral-bg py-4 px-3"
  >
    <div class="flex justify-between border-b border-neutral items-center">
      <h3 class="text-dark font-semibold text-md py-2">Filter</h3>
      <button class="text-primary text-sm" @click="clearSelect">
        Clear All
      </button>
    </div>
    <div class="py-3">
      <h3 class="text-sm font-medium my-2 text-dark">
        Available Breeds({{ breedCategories.length }})
      </h3>
      <input
        type="search"
        placeholder="Search for breed e.g chihuahua"
        class="border border-neutral-bg mt-2 p-2 outline-none rounded-md"
        v-model="searchInput"
      />
    </div>
    <div class="flex flex-col gap-2 h-[60%] lg:h-full overflow-scroll">
      <div
        class="flex items-center justify-center my-5"
        v-if="!searchBreed.length"
      >
        <p>OPPS! There's no breed with that name</p>
      </div>
      <div v-for="breed in searchBreed" class="" :key="breed">
        <div class="flex justify-between text-md items-center my-2">
          <h6 class="text-dark capitalize">{{ breed }}</h6>
          <input
            v-model="selectedBreeds"
            type="checkbox"
            :value="breed"
            name="selectBreed"
            id="selectBreed"
            @change="addselect(selectedBreeds)"
          />
        </div>
      </div>
      <span
        class="bg-primary lg:hidden text-white flex items-center justify-center px-4 py-2 rounded-md"
        >Close filter</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
