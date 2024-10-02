import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
} from "vue-router";

import middlewareList from "@/middleware";
import { Middleware } from "@/types/middleware";

export const executeMiddleware = async (
  middleware: Array<string> | object,
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext
) => {
  // Check if middleware is an array
  if (middleware && !Array.isArray(middleware)) return next();

  // Create a recursive function to call each middleware function in order
  const callNextMiddleware = async (index: number) => {
    if (index < middleware.length) {
      const nextMiddleware: Middleware = middlewareList[middleware[index]];

      return await nextMiddleware(to, from, async (nextArg = null) => {
        if (nextArg) {
          return next(nextArg);
        } else {
          await callNextMiddleware(index + 1);
        }
      });
    } else {
      // All middleware functions have been called, continue navigation
      return next();
    }
  };

  await callNextMiddleware(0); // Start calling the first middleware;
};
