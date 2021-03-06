import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PuzzleView from "@/views/PuzzleView.vue";
import AboutView from "@/views/AboutView.vue";
import ErrorView from "@/views/ErrorView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Puzzle",
    component: PuzzleView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/error",
    name: "error",
    component: ErrorView
  }
];

const router = new VueRouter({
  routes
});

export default router;
