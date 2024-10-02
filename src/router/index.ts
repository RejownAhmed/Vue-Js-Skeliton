import { createRouter, createWebHistory } from "vue-router";

import routes from "@/router/routes";
import { executeMiddleware } from "@/utils/helper/middleware";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeResolve(async (to, from, next) => {
  // Execute middlewares
  if (to.meta?.middleware) {
    await executeMiddleware(to.meta.middleware, to, from, next);
  } else {
    next();
  }
});

export default router;
