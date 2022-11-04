import { createWebHistory, createRouter, } from "vue-router";
import Computed from "./components/computed.vue";
import Conditional from "./components/Conditional.vue"
import Count from "./components/Count.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld
  },
  {
    path: "/computed",
    component: Computed,
  },
  {
    path: "/conditional",
    component: Conditional,
  },
  {
    path: "/count",
    component: Count
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;