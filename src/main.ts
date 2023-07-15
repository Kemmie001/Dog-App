import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App).use(store);
app.use(router).use(VueLazyLoad, {});

app.mount("#app");
