<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import DogImage from "@/components/DogImage.vue";

const store = useStore();
const dogs = computed(() => {
  return store.getters.dogsList;
});
const route = useRoute();
const router = useRouter();

const imageUrl = ref(
  `https://res.cloudinary.com/kemiassets/image/upload/remote_media/${route.params.slug}/${route.params.slug_id}.jpg`
);

// Cloundinary effects
const cartoonifyImage = async () => {
  imageUrl.value = `https://res.cloudinary.com/kemiassets/image/upload/e_cartoonify/remote_media/${route.params.slug}/${route.params.slug_id}.jpg`;
};
const applyGrayScale = () => {
  imageUrl.value = `https://res.cloudinary.com/kemiassets/image/upload/e_grayscale/remote_media/${route.params.slug}/${route.params.slug_id}.jpg`;
};
const applySepia = () => {
  imageUrl.value = `https://res.cloudinary.com/kemiassets/image/upload/e_sepia/remote_media/${route.params.slug}/${route.params.slug_id}.jpg`;
};
const applyNoEffect = () => {
  imageUrl.value = `https://res.cloudinary.com/kemiassets/image/upload/remote_media/${route.params.slug}/${route.params.slug_id}.jpg`;
};
</script>

<template>
  <div class="pt-20 px-8">
    <div
      @click.prevent="router.go(-1)"
      class="my-5 cursor-pointer flex gap-2 items-center"
    >
      <span
        class="w-10 h-10 rounded-full flex justify-center items-center bg-neutral-bg"
      >
        &LeftArrow;
      </span>
      Back
    </div>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="mt-5 md:w-5/12">
        <DogImage
          :image="imageUrl"
          class="focus:outline focus:outline-primary focus:outline-4 md:w-[350px]"
        />
        <p class="text-md font-medium mt-5">
          Apply Image Effect:
        </p>
        <div class="pt-4 flex flex-wrap gap-3 items-center">
          <button
            @click="cartoonifyImage"
            class="border border-primary rounded-xl px-4 py-1"
          >
            Cartoonify
          </button>
          <button
            @click="applyGrayScale"
            class="border border-primary rounded-xl px-4 py-1"
          >
            Grayscale
          </button>
          <button
            @click="applySepia"
            class="border border-primary rounded-xl px-4 py-1"
          >
            Sepia
          </button>
          <button
            @click="applyNoEffect"
            class="border border-primary rounded-xl px-4 py-1"
          >
            Normal
          </button>
        </div>
      </div>
      <div class="md:w-5/12 md:mt-10">
        <h3 class="text-lg font-semibold capitalize mb-4">
          Dog breed: {{ route.params.slug }}
        </h3>
        <div class="bg-white shadow-lg px-3 rounded-md py-4">
          <h3 class="text-lg font-medium py-3">
            About {{ route.params.slug }}
          </h3>
          <p class="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            omnis quam quae laudantium laboriosam nobis nemo repellat rerum
            corrupti velit vitae minus eligendi voluptas rem necessitatibus
            dolorem expedita, ab soluta? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsam omnis quam quae laudantium laboriosam nobis
            nemo repellat rerum corrupti velit vitae minus eligendi voluptas rem
            necessitatibus dolorem expedita, ab soluta
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
