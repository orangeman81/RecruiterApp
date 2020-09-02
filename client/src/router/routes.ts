import Home from "../views/Home.vue";
import Records from "../views/Records.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/records",
    name: "Records",
    component: () => import("../views/Records.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Create.vue"),
  },
];

export default routes;
