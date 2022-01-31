import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Second from "../views/Second.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/second",
    name: "Second",
    component: Second,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
