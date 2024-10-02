import type { RouteRecordRaw } from "vue-router";

import MainLayout from "@/layout/main";
import AuthLayout from "@/layout/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: MainLayout,
    meta: {
      middleware: ["authenticate", "auth"],
    },
    children: [
      {
        path: "",
        name: "dashboard.index",
        component: () => import("@/views/dashboard/index.vue"),
      },
      {
        path: "settings",
        name: "dashboard.settings",
        component: () => import("@/views/dashboard/settings/index.vue"),
      }
    ],
  },
  // Auth paths
  {
    path: "/login",
    redirect: "/auth/login",
  },
  {
    path: "/reset",
    redirect: "/auth/reset",
  },
  {
    path: "/auth",
    component: AuthLayout,
    meta: {
      middleware: ["guest"],
    },
    children: [
      {
        path: "login",
        name: "auth.login",
        component: ()=> import("@/views/auth/login.vue"),
      }
    ],
  },
];

export default routes;
