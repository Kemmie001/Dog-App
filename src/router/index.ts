import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/error",
      name: "error",
      component: () => import("../views/ErrorView.vue"),
    },
    {
      path: "/dog/:slug/:slug_id",
      name: "dog",
      // route level code-splitting
      // this generates a separate chunk (Info.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DogInfo/_breed/_InfoView.vue"),
    },
  ],
});

export default router;
