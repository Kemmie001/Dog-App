<script setup lang="ts">
import { onMounted, ref } from "vue";

const cards = ref([
  {
    id: 0,
    title: "Data Collection with Precision",
    body:
      "No audience is out of reach for us. We collect data from General Population, Professionals, and Hard-to-reach audiences via Surveys, Interviews, or Focus Group Discussions.",
  },
  {
    id: 1,
    image: "/power2.png",
    title: "Authentic Data",
    body:
      "We collect authentic data with high integrity and in compliance with industry standards. We know the implication of using manipulated data for decision-making and curb this using methods such as pre-screening tests.",
  },
  {
    id: 2,
    image: "/power3.svg",
    title: "Actionable Insight",
    body:
      "Get the insights you need for your next move. We cut through the noise of data collection and analytics, to deliver insights you can act on immediately.",
  },
  {
    id: 3,
    image: "/power1.png",
    title: "Holistic Analysis",
    body:
      "Objective-driven analytics to unlock insight from your data using a combination of simple and complex methodologies.",
  },
]);
const next = () => {
  if (transitioning.value) return;

  transitioning.value = true;
  moveLeft(); // ❸
  afterTransition(() => {
    // ❶
    const card: any = cards.value.shift(); // ❷
    cards.value.push(card); // ❸
    resetTranslate();
    transitioning.value = false;
  });
};
const transitioning = ref(false);
const innerStyles = ref({});
const step = ref({});
const moveLeft = () => {
  innerStyles.value = {
    transform: `translateX(${step.value}) translateX(-${step.value})`,
  };
};
onMounted(() => {
  setStep();
  resetTranslate();
});
const inner = ref<any>(null);

const setStep = () => {
  const innerWidth = inner.value.scrollWidth; // ❶
  const totalCards = cards.value.length;
  step.value = `${innerWidth / totalCards}px`; // ❷
};
const afterTransition = (callback: any) => {
  const listener = () => {
    // ❹
    callback();
    inner.value.removeEventListener("transitionend", listener);
  };
  inner.value.addEventListener("transitionend", listener); // ❺
};
const resetTranslate = () => {
  innerStyles.value = {
    transition: "none", // ❷
    transform: `translateX(0)`,
  };
};
const prev = () => {
  if (transitioning.value) return;

  transitioning.value = true;

  moveRight();

  afterTransition(() => {
    const card: any = cards.value.pop();
    cards.value.unshift(card);
    resetTranslate();
    transitioning.value = false;
  });
};
const moveRight = () => {
  innerStyles.value = {
    transform: `translateX(${step.value}) translateX(-${step.value})`,
  };
};
</script>
<template>
  <div class="carousel pt-40">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card.id">
        <div class="block">
          <div class="mx-auto">
            <img
              class="rounded-md w-[280px]"
              :src="card.image"
              :alt="card.title"
            />
          </div>
          <div>
            <div>
              <h6 class="font-semibold py-2 mt-2 text-dark">
                {{ card.title }}
              </h6>
              <span class="text-[#555555] font-light text-sm w-[200px]">
                {{ card.body }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
</template>

<style>
.carousel {
  width: 100%; /* ❶ */
  overflow: hidden; /* ❷ */
}

.inner {
  transition: transform 0.2s;
  display: flex;
  /* white-space: nowrap; ❸ */
}

.card {
  min-width: 300px;
  margin-right: 20px;
  padding: 16px;
  height: 410px;
  background-color: pink;
  display: inline-block;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
/*  min-width: 400px;
  margin-right: 10px;
  display: inline-block;

 
  height: 200px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center; */
</style>
