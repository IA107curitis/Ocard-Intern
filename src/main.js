import { createApp } from "vue";
import "@/assets/styles/index.css";
import "./style.css";

import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/index.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/login.vue"),
    },
    {
      path: "/signUp",
      component: () => import("@/views/signUp.vue"),
    },
    {
      path: "/forgotPassword",
      component: () => import("@/views/forgotPWD.vue"),
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
