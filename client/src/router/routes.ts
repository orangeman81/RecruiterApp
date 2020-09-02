import Home from "../views/Home.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Create.vue")
  }
];

export default routes;
