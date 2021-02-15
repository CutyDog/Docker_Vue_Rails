import Vue from "vue";
import VueRouter from "vue-router";

import Top from "./components/Top.vue";
import Sample from "./pages/Sample.vue";
import Test from "./pages/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Top,
  },
  {
    path: "/Sample",
    component: Sample,
  },
  {
    path: "/Test",
    component: Test,
  },  
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;