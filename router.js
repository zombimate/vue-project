import { defineAsyncComponent } from "vue";
import { createWebHistory, createRouter, } from "vue-router";

const component = {
  template: '<compponent :is="comp" />',
  Computed: {
    comp() {
      let { comp } = this.$route.params
      return defineAsyncComponent(() => )
    },
  },
},
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