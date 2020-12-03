import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Unsplash from "../views/Unsplash.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Unsplash",
    component: Unsplash
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
