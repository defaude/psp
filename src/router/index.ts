import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PuzzleView from "@/views/PuzzleView.vue";
import ErrorView from "@/views/ErrorView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", name: "puzzle", component: PuzzleView },
  { path: "/error", name: "error", component: ErrorView },
  { path: "*", redirect: { name: "puzzle" } }
];

const router = new VueRouter({
  routes
});

export default router;
