import Home from "../views/Home.vue";
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
    component: () =>
      import(/* webpackChunkName: "records" */ "../views/records/Records.vue"),
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "records" */ "../views/records/List.vue"),
      },
      {
        path: "edit/:id",
        component: () =>
          import(/* webpackChunkName: "records" */ "../views/records/Edit.vue"),
        props: true,
      },
      {
        path: "details/:id",
        component: () =>
          import(
            /* webpackChunkName: "records" */ "../views/records/Details.vue"
          ),
        props: true,
      },
    ],
  },
];

export default routes;
